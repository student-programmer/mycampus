'use client';

import { List, Avatar, Badge, Typography } from 'antd';
import { Chat } from '../../entities/chats/index';
import Link from 'next/link';
import style from './ui/Chat.module.scss';

const { Text } = Typography;

interface ChatListProps {
	chats: Chat[];
}

const ChatList: React.FC<ChatListProps> = ({ chats }) => {
	return (
		<List
			itemLayout='horizontal'
			dataSource={chats}
			renderItem={chat => (
				<Link href={`chat/${chat.title}/${chat.id}`}>
					<List.Item className={style.listItem}>
						<List.Item.Meta
							avatar={<Avatar src={chat.avatar} />}
							title={chat.title}
							description={
								<>
									<Text
										type='secondary'
										color='#C5C8C6'
										className={style.secondText}
									>
										{chat.lastMessage}
									</Text>
									<br />
								</>
							}
						/>
					</List.Item>
				</Link>
			)}
		/>
	);
};

export default ChatList;
