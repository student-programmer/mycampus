import React from 'react';
import Chat from '../widgets/chats/Chat';
import { User } from '@/fsd/entities/profile';
interface ChatPageProps{
  user?: User;
}

const ChatPage = ({ user }: ChatPageProps) => {
	return <Chat user={user} />;
};

export default ChatPage;
