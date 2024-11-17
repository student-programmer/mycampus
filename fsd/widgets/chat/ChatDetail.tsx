'use client';

import React, { useState } from 'react';
import { List, Avatar, Input, Button } from 'antd';
import { LeftOutlined, SendOutlined } from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';
import { enCodeUrl } from '@/fsd/shared/UrlHelpers/UrlHepler';
import style from './ui/ChatDetail.module.scss';

const ChatDetail = () => {
	const { id, chatName } = useParams();
	const router = useRouter();
	const chatNameDecode = enCodeUrl(chatName);

	const [messages, setMessages] = useState([
		{
			id: 1,
			sender: chatNameDecode,
			content: 'Hi! How are you?',
		},
	]);

	const [inputValue, setInputValue] = useState('');

	const handleSendMessage = () => {
		if (!inputValue.trim()) return;

		const newMessage = {
			id: messages.length + 1,
			sender: 'You',
			content: inputValue,
		};

		setMessages([...messages, newMessage]);
		setInputValue('');
	};

	return (
		<div className={style.wrapperDetail}>
			<div className={style.goBackContainer}>
				<button className={style.iconGoBack} onClick={() => router.back()}>
					<LeftOutlined onClick={() => router.back()} />
				</button>

				<h2 className='h2'>{chatNameDecode}</h2>
				<Avatar src='https://i.pravatar.cc/300?img=1' />
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
