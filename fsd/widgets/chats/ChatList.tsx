'use client'

import { List, Avatar, Badge, Typography } from 'antd';
import { Chat } from '../../entities/chats/index';

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
				<List.Item>
					<List.Item.Meta
						avatar={
							<Badge count={chat.unreadCount}>
								<Avatar src={chat.avatar} />
							</Badge>
						}
						title={chat.title}
						description={
							<>
								<Text type='secondary'>{chat.lastMessage}</Text>
								<br />
								<Text type='secondary' style={{ fontSize: '12px' }}>
									{chat.timestamp}
								</Text>
							</>
						}
					/>
				</List.Item>
			)}
		/>
	);
};

export default ChatList;
