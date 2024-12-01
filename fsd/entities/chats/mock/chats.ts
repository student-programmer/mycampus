import { Chat } from '../model/chats';

export const mockChats: Chat[] = [
	{
		id: '1',
		title: 'Mei Ying',
		lastMessage: 'Hey, are you coming to the meeting?',
		timestamp: '09:30 AM',
		unreadCount: 2,
		avatar: '/Mei.png',
		isActive: false, // Индикатор активности (онлайн)
		lastSeen: '10 min ago',
	},
	{
		id: '2',
		title: 'Musa Dlamini',
		lastMessage: 'Got it, thanks!',
		timestamp: 'Yesterday',
		unreadCount: 0,
		avatar: '/Musa.png',
		isActive: true, // Индикатор активности (онлайн)
		lastSeen: '10 min ago',
	},
	{
		id: '3',
		title: 'Rohan Verma',
		lastMessage: "Let's merge the PR today.",
		timestamp: 'Monday',
		unreadCount: 5,
		avatar: '/Rohan.png',
		isActive: false, // Индикатор активности (онлайн)
		lastSeen: '10 min ago',
	},
	{
		id: '4',
		title: 'Chloe Matthews',
		lastMessage: 'The new campaign is ready to go.',
		timestamp: 'Sunday',
		unreadCount: 1,
		avatar: '/Chloe.png',
		isActive: true, // Индикатор активности (онлайн)
		lastSeen: '10 min ago',
	},
	{
		id: '5',
		title: 'Rami Al-Fahim',
		lastMessage: 'Can we discuss the new project?',
		timestamp: 'Last week',
		unreadCount: 3,
		avatar: '/Rami.png',
		isActive: false, // Индикатор активности (онлайн)
		lastSeen: '10 min ago',
	},
];

// {
// 		id: '1',
// 		title: 'Rohan Verma',
// 		lastMessage: 'Hey, are you coming to the meeting?',
// 		timestamp: '09:30 AM',
// 		unreadCount: 2,
// 		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
// 	},
