'use client';

import { List, Avatar, Typography } from 'antd';
import Link from 'next/link';
import style from './ui/Chat.module.scss';
import { Chat } from "@/fsd/entities/chats";
import { generateAvatar } from "@/utils/utils";

const { Text } = Typography;

interface ChatListProps {
  chats: Chat[];
}


const ChatList = ({ chats }: ChatListProps) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={ chats }
      renderItem={ (chat: Chat) => (
        <Link href={ `chat/${ chat.firstName } ${ chat.lastName }/${ chat.id }` }>
          <List.Item className={ style.listItem }>
            <List.Item.Meta
              avatar={
                <div className={ style.avatarWrapper }>
                  <Avatar src={ generateAvatar(chat.firstName, chat.lastName) }
                          style={ { border: '1px solid #FFFFFF29' } }/>
                  <span
                    className={ `${ style.statusIndicator } ${
                      chat.isOnline ? style.online : style.offline
                    }` }
                  />
                </div>
              }
              title={
                <div className={ style.title_block }>
                  <Text className={ style.title }>{ chat.firstName } { chat.lastName }</Text>
                  <Text
                    type='secondary'
                    color='#C5C8C6'
                    className={ style.lastSeenText }
                  >
                    { chat.isOnline ? 'Online' : `Offline` }
                  </Text>
                </div>
              }
              description={
                <>
                  <Text
                    type='secondary'
                    color='#C5C8C6'
                    className={ style.secondText }
                  >
                    { chat?.lastMessage }
                  </Text>
                  <br/>
                </>
              }
            />
          </List.Item>
        </Link>
      ) }
    />
  );
};

export default ChatList;
