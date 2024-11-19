'use client';

import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { LeftOutlined, SendOutlined } from '@ant-design/icons';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { mockChats } from '../../entities/chats';
import style from './ui/chatDetail.module.scss';

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

	const [messages, setMessages] = useState<Message[]>([]);

	const currentChat = mockChats.find(chat => chat.id === id);

	useEffect(() => {
		if (currentChat) {
			setMessages([
				{
					id: 1,
					sender: chatName || currentChat.title,
					content: currentChat.lastMessage,
				},
			]);
		}
	}, [currentChat, chatName]);

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

	if (!currentChat) {
		return <div>Chat not found</div>;
	}

	return (
		<div className={style.wrapperDetail}>
			<div className={style.goBackContainer}>
				<button className={style.iconGoBack} onClick={() => router.back()}>
					<LeftOutlined />
				</button>
				<h2 className='h2'>{currentChat.title}</h2>
				<Avatar src={currentChat.avatar} />
			</div>
			<div className={style.listContainer}>
				<List
					className={style.messages}
					dataSource={messages}
					renderItem={item => (
						<div
							className={`${style.messageContainer} ${
								item.sender === 'You' ? style.myMessage : style.otherMessage
							}`}
						>
							<div className={style.messageContent}>{item.content}</div>
						</div>
					)}
				/>
			</div>
			<div className={style.inputContainer}>
				<input
					type='text'
					className={style.inputs}
					placeholder='    Input message...'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className={style.sendBtn} onClick={handleSendMessage}>
					<SendOutlined />
				</button>
			</div>
		</div>
	);
};

export default ChatDetail;
