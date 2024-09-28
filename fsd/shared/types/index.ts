interface Education {
  fieldOfStudy: string;
  university: string;
}

interface Country {
  name: string;
}

interface Profile {
  education: Education;
  country: Country;
  languagesSpoken: string[];
  about: string;
  interests: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  isLoading: boolean;
  profile: Profile;
}