"use client";
/* 'это писал gpt */
import { Layout } from "antd";
import ChatList from "./ChatList";
import style from './ui/Chat.module.scss'
import { useChatsStore } from "@/fsd/app/stores/chats/store";

const { Content } = Layout;

const Chat = () => {

    const chatList = useChatsStore(state => state.chatList)

    return (
        <Layout className={style.layoutStylesChat}>
            <Content className={style.ContentWrapper}>
                <ChatList chats={chatList}/>
            </Content>
        </Layout>
    );
};

export default Chat;
