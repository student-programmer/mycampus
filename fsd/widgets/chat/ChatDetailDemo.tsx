'use client';

import { useState, useEffect, createRef, useMemo } from 'react';
import { Avatar } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import style from './ui/chatDetail.module.scss';
import { Chat } from "@/fsd/entities/chats/model/chats";
import { LeftPageIcon, SendIcon } from './ui';
import { generateAvatar } from "@/utils/utils";
import { ChatLoader } from "@/fsd/widgets/chat/ui/ChatLoader";


interface Message {
    id: number,
    content: string,
    sender: string,
}

const chatList: Chat[] = [
    {
        id: 1,
        authUserId: 101,
        firstName: 'Mei',
        lastName: 'Ying',
        birthDate: '1990-01-15',
        description: 'Colleague from Marketing',
        isOnline: false,
        lastMessage: 'Hey, are you coming to the meeting?'
    },
    {
        id: 2,
        authUserId: 102,
        firstName: 'Musa',
        lastName: 'Dlamini',
        birthDate: '1988-03-22',
        description: 'Project Manager',
        isOnline: true,
        lastMessage: 'Got it, thanks!'
    },
    {
        id: 3,
        authUserId: 103,
        firstName: 'Rohan',
        lastName: 'Verma',
        birthDate: '1992-11-05',
        description: 'Lead Developer',
        isOnline: false,
        lastMessage: "Let's merge the PR today."
    },
    {
        id: 4,
        authUserId: 104,
        firstName: 'Chloe',
        lastName: 'Matthews',
        birthDate: '1991-07-18',
        description: 'Design Team Lead',
        isOnline: true,
        lastMessage: 'The new campaign is ready to go.'
    },
    {
        id: 5,
        authUserId: 105,
        firstName: 'Rami',
        lastName: 'Al-Fahim',
        birthDate: '1985-09-30',
        description: 'CTO',
        isOnline: false,
        lastMessage: 'Can we discuss the new project?'
    }
];


export const ChatDetailDemo = () => {

    const {id, chatName} = useParams();
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

    const messagesEndRef = createRef<HTMLDivElement>();

    const [messages, setMessages] = useState<Message[]>([]); // Указали тип Message[]

    useEffect(() => {
        messagesEndRef.current?.lastElementChild?.scrollIntoView()
    }, [messages]);

    const currentChat = chatList.find(chat => chat.firstName === receiverName);

    useEffect(() => {
        if (currentChat) {
            const initialMessages: Message[] = [
                {
                    id: 1,
                    sender: `${ currentChat.firstName } ${ currentChat.lastName }`,
                    content: currentChat.lastMessage,
                },
            ];

            setMessages(initialMessages);
        }
    }, [currentChat]);

    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            sender: 'You',
            content: inputValue,
        };

        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInputValue('');
    };
    const avatarUrl = useMemo(() => {
        return generateAvatar(receiverName, receiverLastName);
    }, []);

    if (!messages.length) {
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
                    { currentChat?.isOnline && <p className={ style.onlineText }>Online</p> }
                    { !currentChat?.isOnline &&
                        <p className={ style.lastSeenText }>Offline</p> }
				</span>
                <Avatar
                    style={ {border: '1px solid #FFFFFF29'} }
                    src={ avatarUrl }
                    size={ 48 }
                />
            </div>
            <div className={ style.listContainer }>
                <div className={ style.messages } ref={ messagesEndRef }>
                    { messages.map(item => (
                        <div
                            key={ item.id }
                            className={ `${ style.messageContainer } ${
                                item.sender === 'You' ? style.myMessage : style.otherMessage
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
                    onClick={ handleSendMessage }
                >
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
};

