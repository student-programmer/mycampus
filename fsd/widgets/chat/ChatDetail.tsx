'use client';

import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { LeftOutlined, SendOutlined } from '@ant-design/icons';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { mockChats } from '../../entities/chats';
import style from './ui/chatDetail.module.scss';
import LeftPageIcon from './ui/LeftPageIcon';
import SendIcon from './ui/SendIcon';

interface Message {
	id: number;
	sender: string;
	content: string;
}

const ChatDetail = () => {
	const { id } = useParams();
	const searchParams = useSearchParams();
	const router = useRouter();
	const chatName = searchParams.get('chatName');
	const messagesEndRef = React.createRef();

	const [messages, setMessages] = useState<Message[]>([]); // Указали тип Message[]

	useEffect(() => {
		messagesEndRef.current?.lastElementChild?.scrollIntoView()
	}, [messages]);

	const currentChat = mockChats.find(chat => chat.id === id);

	useEffect(() => {
		if (currentChat) {
			const initialMessages = [
				{
					id: 1,
					sender: currentChat.title,
					content: 'Hello! How are you?',
				},
				{
					id: 2,
					sender: 'You',
					content: "I'm doing great, thanks! How about you?",
				},
				{
					id: 3,
					sender: currentChat.title,
					content: 'I’m good too! Any updates on the project?',
				},
				{
					id: 4,
					sender: 'You',
					content: 'Yes, I’ll send you the details soon.',
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

		setMessages(prevMessages => [...prevMessages, newMessage]); // Ошибки больше нет
		setInputValue('');
	};

	if (!currentChat) {
		return <div>Chat not found</div>;
	}

	return (
		<div className={style.wrapperDetail}>
			<div className={style.goBackContainer}>
				<button className={style.iconGoBack} onClick={() => router.back()}>
					<LeftPageIcon />
				</button>
				<span className={style.head_text}>
					<h2 className='h2'>{currentChat.title}</h2>
					{currentChat.isActive && <p className={style.onlineText}>Online</p>}
					{currentChat.lastSeen && !currentChat.isActive  && <p className={style.lastSeenText}>{ currentChat.lastSeen }</p>}
				</span>
				<Avatar style={{border: '1px solid #FFFFFF29'}} size={48} src={currentChat.avatar} />
			</div>
			<div className={style.listContainer}>
				<div
					className={style.messages}
					ref={messagesEndRef}>
          { messages.map(item => (
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
			<div className={style.inputContainer}>
				<input
					type='text'
					className={style.inputs}
					placeholder='Type to start chatting...'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className={style.sendBtn} data-active={!!inputValue} onClick={handleSendMessage}>
					<SendIcon/>
				</button>
			</div>
		</div>
	);
};

export default ChatDetail;
