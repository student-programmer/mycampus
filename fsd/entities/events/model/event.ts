export interface Event {
  id: string;
  name: string;
  description: string;
  price: string;
  date: string;
  location: string;
  distance: number;
  image: string;
  category: string;
  photos: string[];
  contacts: {
    inst: string;
    web: string;
    phone: string;
    maps: string;
  };
}
