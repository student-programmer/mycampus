'use client'
import { mockChats } from '../../entities/chats/index';
import ChatList from './ChatList';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;

const Chat = () => {
	return (
		<Layout style={{ height: '100vh' }}>
			<Header style={{ backgroundColor: '#1890ff', padding: '0 20px' }}>
				<Typography.Title style={{ color: '#fff', margin: 0 }} level={3}>
					Chats
				</Typography.Title>
			</Header>
			<Content style={{ padding: '20px', backgroundColor: '#fff' }}>
				<ChatList chats={mockChats} />
			</Content>
		</Layout>
	);
};

export default Chat;
