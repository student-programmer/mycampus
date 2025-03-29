'use client';

import { List, Avatar, Typography } from 'antd';
import Link from 'next/link';
import style from './ui/Chat.module.scss';
import React from "react";
import { Chat } from "@/fsd/entities/chats";

const {Text} = Typography;

interface ChatListProps {
    chats: Chat[];  // Chat должен быть типом, который ты используешь для элементов чатов
}


const ChatList = ({chats}: ChatListProps) => {
    return (
        <List
            itemLayout='horizontal'
            dataSource={ chats }
            renderItem={ chat => (
                <Link href={ `chat/${ chat.title }/${ chat.id }` }>
                    <List.Item className={ style.listItem }>
                        <List.Item.Meta
                            avatar={
                                <div className={ style.avatarWrapper }>
                                    <Avatar style={ {border: '1px solid #FFFFFF29'} } src={ chat.avatar }/>
                                    <span
                                        className={ `${ style.statusIndicator } ${
                                            chat.isActive ? style.online : style.offline
                                        }` }
                                    />
                                </div>
                            }
                            title={
                                <div className={ style.title_block }>
                                    <Text className={ style.title }>{ chat.title }</Text>
                                    <Text
                                        type='secondary'
                                        color='#C5C8C6'
                                        className={ style.lastSeenText }
                                    >
                                        { chat.isActive ? 'Online' : `${ chat.lastSeen }` }
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
                                        { chat.lastMessage }
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
