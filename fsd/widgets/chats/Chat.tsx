"use client";
import { Layout } from "antd";
import style from './ui/Chat.module.scss'
import { useChatsStore } from "@/fsd/app/stores/chats/store";
import { useEffect, useState } from "react";
import { User } from '@/fsd/entities/profile';
import { ChatList } from "@/fsd/widgets/chats/ChatList";

const {Content} = Layout;

interface ChatProps {
    user?: User;
}


const Chat = ({user}: ChatProps) => {
    const {chatList, fetchChatList} = useChatsStore();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (user?.id) {
            fetchChatList(user.id, setIsLoading).then();
        }
    }, [user]);

    return (
        <Layout className={ style.layoutStylesChat }>
            <Content className={ style.ContentWrapper }>
                <ChatList chats={ chatList } isLoading={ isLoading }/>
            </Content>
        </Layout>
    );
};

export default Chat;
