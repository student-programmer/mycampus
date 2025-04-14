'use client';

import { useState, useEffect, createRef, useMemo } from 'react';
import { Avatar } from 'antd';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import style from './ui/chatDetail.module.scss';
import { Message } from "@/fsd/entities/chats/model/chats";
import { useChatsStore } from "@/fsd/app/stores/chats/store";
import { LeftPageIcon, SendIcon } from './ui';
import { User } from "@/fsd/entities/profile";
import { useSocket } from "@/contexts/SocketContext";
import { generateAvatar } from "@/utils/utils";
import { ChatLoader } from "@/fsd/widgets/chat/ui/ChatLoader";


interface ChatDetailProps {
    user?: User;
}


const ChatDetail = ({user}: ChatDetailProps) => {
    const {id, chatName} = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();
    let receiverName = '';
    let receiverLastName = '';

    if (typeof chatName === 'string') {
        let receiver = decodeURI(chatName)?.split(' ');
        if (receiver) {
            receiverName = receiver[0];
            receiverLastName = receiver[1];
        }
    }

    const {socket} = useSocket(); // Получаем сокет из контекста
    const {messageList, fetchMessageList, addMessage, receiverPhoto} = useChatsStore();


    const messagesEndRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (socket) {
            const handleMessage = (newMessage: Message) => {
                if (newMessage.senderId === Number(id) || newMessage.senderId === Number(user?.id)) {
                    addMessage(newMessage);
                }
            };
            socket.on('userStatus', ({userId, isOnline}) => {
            });
            socket.on('message', handleMessage);
            return () => {
                socket.off('message', handleMessage);
            };
        }
    }, [socket, id, user?.id, addMessage]);

    useEffect(() => {
        if (id && user?.id)
            fetchMessageList(Number(id), Number(user?.id), setIsLoading);
    }, [id, user?.id]);

    useEffect(() => {
        messagesEndRef.current?.lastElementChild?.scrollIntoView();
    }, [messageList]);

    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (!inputValue.trim()) return;
        if (socket) {
            socket.emit('sendMessage', {
                senderId: user?.id,
                content: inputValue,
                receiverId: id,
            });
        }
        setInputValue('');
    };

    const getAvatarUrl = () => {
        if (!receiverPhoto)
            return generateAvatar(receiverName, receiverLastName);
        else return receiverPhoto
    }


    if (isLoading) {
        return < ChatLoader/>
    }

    return (
        <div className={ style.wrapperDetail }>
            <div className={ style.goBackContainer }>
                <button className={ style.iconGoBack } onClick={ () => router.back() }>
                    <LeftPageIcon/>
                </button>
                <span className={ style.head_text }>
					<h2 className='h2'>
						{ receiverName } { receiverLastName }
					</h2>
                    {/*{ currentChat.isOnline && <p className={ style.onlineText }>Online</p> }*/ }
                    {/*{ !currentChat.isOnline &&*/ }
                    {/*  <p className={ style.lastSeenText }>Offline</p> }*/ }
				</span>
                <Avatar
                    style={ {border: '1px solid #FFFFFF29'} }
                    src={ getAvatarUrl() }
                    size={ 48 }
                />
            </div>
            <div className={ style.listContainer }>
                <div className={ style.messages } ref={ messagesEndRef }>
                    { messageList.map(item => (
                        <div
                            key={ item.id }
                            className={ `${ style.messageContainer } ${
                                item.senderId === user?.id
                                    ? style.myMessage
                                    : style.otherMessage
                            }` }
                        >
                            <div className={ style.messageContent }>{ item.content }</div>
                        </div>
                    )) }
                </div>
            </div>
            <div className={ style.inputContainer }>
                <input
                    type='text'
                    className={ style.inputs }
                    placeholder='Type to start chatting...'
                    value={ inputValue }
                    onChange={ e => setInputValue(e.target.value) }
                />
                <button
                    className={ style.sendBtn }
                    data-active={ !!inputValue }
                    onClick={ sendMessage }
                >
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
};

export default ChatDetail;
