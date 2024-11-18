import { Event } from '../model/event';

export const mockEvents: Event[] = [
  {
    id: "1",
    name: "City Music Festival",
    description:
      "An open-air music festival with the best artists from around the world.",
    date: "2024-10-01",
    location: "City Square, Central City",
    distance: 1.2,
    image: "/images/music-festival.jpg",
    category: "Festival",
    contacts: {
      inst: "@citymusicfest",
      web: "https://citymusicfest.com",
      phone: "+123456789",
      maps: "https://maps.app/city-music-festival",
    },
  },
  {
    id: "2",
    name: "Local Farmer’s Market",
    description: "Come and taste fresh local produce and artisanal goods.",
    date: "2024-09-28",
    location: "Green Park, Central City",
    distance: 0.5,
    image: "/images/farmers-market.jpg",
    category: "Market",
    contacts: {
      inst: "@localfarmersmarket",
      web: "https://localfarmersmarket.com",
      phone: "+987654321",
      maps: "https://maps.app/farmers-market",
    },
  },
  {
    id: "3",
    name: "Outdoor Movie Night",
    description:
      "Enjoy a classic movie under the stars with family and friends.",
    date: "2024-09-30",
    location: "Riverbank, Central City",
    distance: 3.4,
    image: "/images/outdoor-movie.jpg",
    category: "Movie",
    contacts: {
      inst: "@outdoormovienight",
      web: "https://outdoormovienight.com",
      phone: "+112233445",
      maps: "https://maps.app/outdoor-movie-night",
    },
  },
  {
    id: "4",
    name: "Art Exhibition: Modern Masters",
    description: "An exhibition showcasing modern art from local artists.",
    date: "2024-10-05",
    location: "City Art Gallery, Central City",
    distance: 2.7,
    image: "/images/art-exhibition.jpg",
    category: "Exhibition",
    contacts: {
      inst: "@modernmastersart",
      web: "https://modernmastersart.com",
      phone: "+998877665",
      maps: "https://maps.app/art-exhibition",
    },
  },
];
