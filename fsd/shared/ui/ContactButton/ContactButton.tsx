'use client';

import { useState } from 'react';
import { Modal, Button, Input } from 'antd'; // Ant Design components

interface ContactButtonProps {
	userName: string; // Имя пользователя, к которому обращаемся
}

const ContactButton = ({ userName }: ContactButtonProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модалки
	const [welcomeMessage, setWelcomeMessage] = useState(''); // Для приветственного сообщения

	// Открытие модалки
	const showModal = () => {
		setIsModalOpen(true);
	};

	// Закрытие модалки
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	// Обработка отправки сообщения
	const handleSend = () => {
		console.log('Message sent:', welcomeMessage); // Здесь можно отправить сообщение на сервер
		setIsModalOpen(false); // Закрываем модалку
	};

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Contact
			</Button>

			{/* Модальное окно */}
			<Modal
				title={`Contact ${userName}`}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={[
					<Button key='cancel' onClick={handleCancel}>
						Cancel
					</Button>,
					<Button key='send' type='primary' onClick={handleSend}>
						Send
					</Button>,
				]}
			>
				<p>Send a welcome message to {userName}:</p>
				<Input.TextArea
					rows={4}
					value={welcomeMessage}
					onChange={e => setWelcomeMessage(e.target.value)}
					placeholder='Enter your message'
				/>
			</Modal>
		</>
	);
};

export default ContactButton;
