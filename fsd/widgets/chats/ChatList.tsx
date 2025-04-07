'use client';

import { List, Avatar, Typography } from 'antd';
import Link from 'next/link';
import style from './ui/Chat.module.scss';
import { Chat } from "@/fsd/entities/chats";
import { generateAvatar } from "@/utils/utils";
import { ChatPlug } from "@/fsd/widgets/chats/ChatPlug";
import { ChatLoader } from "@/fsd/widgets/chats/ChatLoader";

const {Text} = Typography;

interface ChatListProps {
    chats: Chat[];
    isLoading: boolean;
}

const ChatList = ({chats, isLoading}: ChatListProps) => {

    if (isLoading) {
        return <ChatLoader/>
    }

    return (
        <>{
            !chats.length ?
                < ChatPlug/>
                :
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
                                                    style={ {border: '1px solid #FFFFFF29'} }/>
                                            <span
                                                className={ `${ style.statusIndicator } ${
                                                    chat.isOnline ? style.online : style.offline
                                                }` }
                                            />
                                        </div>
                                    }
                                    title={
                                        <div className={ style.title_block }>
                                            <Text
                                                className={ style.title }>{ chat.firstName } { chat.lastName }</Text>
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
        }
        </>
    );
};

export default ChatList;
