import React from 'react';
import { User } from '@/fsd/entities/profile';
import { ChatDemo } from "@/fsd/widgets/chats/ChatDemo";

interface ChatPageProps {
    user?: User;
}

export const ChatDemoPage = () => {
    return <ChatDemo/>;
};


