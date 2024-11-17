interface Reviews {
  name: string;
  date: string;
  text: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  distance: number;
  image: string;
  category: string;
  rate: number;
  key: string[];
  contacts: {
    inst: string;
    web: string;
    phone: string;
    maps: string;
  };
  reviews:Reviews
}

