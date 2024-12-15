import { User } from '../model/users';

export const users: User[] = [
	{
		id: '12345',
		name: 'Mei Ying',
		email: 'meiying@example.com',
		age: 19,
		gender: 'female',
		isLoading: false,
		profile: {
			education: {
				fieldOfStudy: 'Interior Design',
				university: 'Canadian University Dubai',
			},
			photo: '/Mei.png',
			country: {
				name: 'China',
				icon: '/chinaIcon.svg',
			},
			languagesSpoken: ['English', 'Chinese'],
			about:
				'Studying interior design and always in search of fresh ideas. I draw inspiration from contemporary art and natural forms. Outside of studies, I enjoy yoga, cooking new dishes, and exploring cultural events in Dubai. I also value time spent reading books and walking outdoors.',
			interests: [
				'Interior Design',
				'Yoga',
				'Cooking',
				'Books',
				'Cultural Events',
			],
		},
	},
	{
		id: '12346',
		name: 'Musa Dlamini',
		email: 'musadlamini@example.com',
		age: 22,
		gender: 'male',
		isLoading: false,
		profile: {
			education: {
				fieldOfStudy: 'Business Administration',
				university: 'University of Wollongong',
			},
			photo: '/Musa.png',
			country: {
				name: 'South Africa',
				icon: '',
			},
			languagesSpoken: ['English', 'Afrikaans'],
			about:
				'I have a strong interest in innovation and leadership. Soccer keeps me active, and I enjoy the camaraderie it fosters. Jazz music is my go-to for relaxation and inspiration. I’m passionate about traveling, discovering new cultures, and advocating for environmental sustainability through volunteer work.',
			interests: [
				'Business Innovation',
				'Soccer',
				'Jazz',
				'Travel',
				'Environmental Advocacy',
			],
		},
	},
	{
		id: '12347',
		name: 'Rohan Verma',
		email: 'rohanverma@example.com',
		age: 20,
		gender: 'male',
		isLoading: false,
		profile: {
			education: {
				fieldOfStudy: 'International Relations',
				university: 'Zayed University',
			},
			photo: '/Rohan.png',
			country: {
				name: 'India',
				icon: '/indiaIcon.svg',
			},
			languagesSpoken: ['English', 'Hindi'],
			about:
				'Passionate about global affairs, I thrive on discussions around international diplomacy and cultural exchanges. I love exploring ancient civilizations and experimenting with Indian cuisine. Photography is my way of capturing cultural experiences during my travels, and I enjoy diving into classic literature that challenges societal norms.',
			interests: [
				'International Diplomacy',
				'History',
				'Cooking',
				'Travel',
				'Photography',
			],
		},
	},
	{
		id: '12348',
		name: 'Chloe Matthews',
		email: 'chloematthews@example.com',
		age: 21,
		gender: 'female',
		isLoading: false,
		profile: {
			education: {
				fieldOfStudy: 'Law',
				university: 'Paris-Sorbonne University Abu Dhabi',
			},
			photo: '/Chloe.png',
			country: {
				name: 'England',
				icon: '',
			},
			languagesSpoken: ['English', 'French'],
			about:
				'My passion for social justice drives me to engage in various volunteer initiatives, particularly those that support underprivileged communities. In my free time, I enjoy hiking and exploring nature, finding peace in the outdoors. I also love to express myself through writing, particularly poetry and short stories, which allow me to reflect on my experiences. A huge fan of international cinema, I enjoy watching films that tell diverse stories and broaden my understanding of different cultures.',
			interests: [
				'Social Justice',
				'Volunteer Work',
				'Hiking',
				'Creative Writing',
				'International Cinema',
			],
		},
	},
	{
		id: '12349',
		name: 'Rami Al-Fahim',
		email: 'ramialfahim@example.com',
		age: 24,
		gender: 'male',
		isLoading: false,
		profile: {
			education: {
				fieldOfStudy: 'Biomedical Sciences',
				university: 'University of Sharjah',
			},
			photo: '/Rami.png',
			country: {
				name: 'UAE',
				icon: '',
			},
			languagesSpoken: ['English', 'Arabic'],
			about:
				'My interest in science fuels my love for experimenting in the kitchen; I enjoy trying out new recipes and cooking healthy meals. I’m also an avid reader, particularly of science fiction and medical literature, which inspires my academic journey. Additionally, I love traveling and experiencing new cultures, which broadens my perspective on global health issues.',
			interests: ['Cooking', 'Reading', 'Traveling', 'Science', 'Culture'],
		},
	},
];
