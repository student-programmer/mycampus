'use client';

import { useState, useEffect, createRef } from 'react';
import { Avatar } from 'antd';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { mockChats } from '../../entities/chats';
import style from './ui/chatDetail.module.scss';
import { Message } from "@/fsd/entities/chats/model/chats";
import { useChatsStore } from "@/fsd/app/stores/chats/store";
import { LeftPageIcon, SendIcon } from './ui';


const ChatDetail = () => {
    const {id} = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const chatName = searchParams.get('chatName');

    const messageList = useChatsStore(store => store.messageList);
    const addMessage = useChatsStore(store => store.addMessage)

    const messagesEndRef = createRef<HTMLDivElement>();

    useEffect(() => {
        messagesEndRef.current?.lastElementChild?.scrollIntoView()
    }, [messageList]);

    const currentChat = mockChats.find(chat => chat.id === id);


    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: messageList.length + 1,
            sender: 'You',
            content: inputValue,
        };

        addMessage(newMessage); // Ошибки больше нет
        setInputValue('');
    };

    if (!currentChat) {
        return <div>Chat not found</div>;
    }

    return (
        <div className={ style.wrapperDetail }>
            <div className={ style.goBackContainer }>
                <button className={ style.iconGoBack } onClick={ () => router.back() }>
                    <LeftPageIcon/>
                </button>
                <span className={ style.head_text }>
					<h2 className='h2'>{ currentChat.title }</h2>
                    { currentChat.isActive && <p className={ style.onlineText }>Online</p> }
                    { currentChat.lastSeen && !currentChat.isActive &&
                        <p className={ style.lastSeenText }>{ currentChat.lastSeen }</p> }
				</span>
                <Avatar style={ {border: '1px solid #FFFFFF29'} } size={ 48 } src={ currentChat.avatar }/>
            </div>
            <div className={ style.listContainer }>
                <div
                    className={ style.messages }
                    ref={ messagesEndRef }>
                    { messageList.map(item => (
                            <div
                                key={ item.id }
                                className={ `${ style.messageContainer } ${
                                    item.sender === 'You' ? style.myMessage : style.otherMessage
                                }` }
                            >
                                <div className={ style.messageContent }>{ item.content }</div>
                            </div>
                        )
                    ) }
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
                <button className={ style.sendBtn } data-active={ !!inputValue } onClick={ handleSendMessage }>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
};

export default ChatDetail;
