// export interface User {
// 	id: string;
// 	name: string;
// 	email: string;
// 	age: number;
// 	gender: 'male' | 'female';
// 	isLoading: boolean;
// 	profile: Profile;
// }


export interface User {
	id: number;
	authUserId: number;
	firstName: string;
	lastName: string;
	birthDate: string;
	description: string;
}

interface Profile {
	education: Education;
	country: Country;
	languagesSpoken: string[];
	about: string;
	interests: string[];
	photo: string;
}

interface Education {
	fieldOfStudy: string;
	university: string;
}

interface Country {
	name: string;
	icon:string
}
