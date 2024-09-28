export interface User {
	id: string;
	name: string;
	email: string;
	age: number;
	gender: 'male' | 'female';
	isLoading: boolean;
	profile: Profile;
}

interface Profile {
	education: Education;
	country: Country;
	languagesSpoken: string[];
	about: string;
	interests: string[];
}

interface Education {
	fieldOfStudy: string;
	university: string;
}

interface Country {
	name: string;
}
