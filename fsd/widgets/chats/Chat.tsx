"use client";
import { Layout } from "antd";
import ChatList from "./ChatList";
import style from './ui/Chat.module.scss'
import { useChatsStore } from "@/fsd/app/stores/chats/store";
import { useEffect } from "react";

const { Content } = Layout;

const Chat = ({ user }) => {
  const { chatList, fetchChatList } = useChatsStore()

  useEffect(() => {
    if (user?.id) {
      fetchChatList(user.id)
    }
  }, [user]);

  return (
    <Layout className={ style.layoutStylesChat }>
      <Content className={ style.ContentWrapper }>
        <ChatList chats={ chatList }/>
      </Content>
    </Layout>
  );
};

export default Chat;
