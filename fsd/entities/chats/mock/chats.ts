import { Chat } from '../model/chats';

export const mockChats: Chat[] = [
	{
		id: '1',
		title: 'Rohan Verma',
		lastMessage: 'Hey, are you coming to the meeting?',
		timestamp: '09:30 AM',
		unreadCount: 2,
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: '2',
		title: 'Kate Killer',
		lastMessage: 'Got it, thanks!',
		timestamp: 'Yesterday',
		unreadCount: 0,
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: '3',
		title: 'Shane Martinez',
		lastMessage: "Let's merge the PR today.",
		timestamp: 'Monday',
		unreadCount: 5,
		avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
	},
	{
		id: '4',
		title: 'Melvin Pratt',
		lastMessage: 'The new campaign is ready to go.',
		timestamp: 'Sunday',
		unreadCount: 1,
		avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
	},
];
