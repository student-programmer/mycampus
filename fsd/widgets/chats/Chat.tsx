"use client";
/* 'это писал gpt */
import { Layout, Typography } from "antd";
import { mockChats } from "../../entities/chats/index";
import ChatList from "./ChatList";
import style from './ui/Chat.module.scss'

const { Header, Content } = Layout;

const Chat = () => {
  return (
    <Layout className={style.layoutStylesChat}>
      <Header className={style.HeaderChatClient}>
        <Typography.Title className={style.typoGraphy} level={3}>
          Chats
        </Typography.Title>
      </Header>
      <Content className={style.ContentWrapper}>
        <ChatList chats={mockChats} />
      </Content>
    </Layout>
  );
};

export default Chat;
