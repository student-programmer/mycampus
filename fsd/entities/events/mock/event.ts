import { Event } from '../model/event';

export const mockEvents: Event[] = [
  {
    id: "1",
    name: "City Music Festival",
    price: "350 – 995",
    description:
      "Don’t miss the chance to see global pop sensation Pedro Gonzales at Dubai Arena on March 15, 2024! Expect an electrifying night filled with his biggest hits and special guest performances. Grab your tickets now for an unforgettable experience! 🎶✨",
    date: "2024-10-01",
    location: "City Square, Central City",
    distance: 1.2,
    image: "/images/music-festival.jpg",
    category: "Festival",
    contacts: {
      inst: "@citymusicfest",
      web: "https://citymusicfest.com",
      phone: "+123456789",
      maps: "Open in app",
    },
  },
  {
    id: "2",
    name: "Local Farmer’s Market",
    description: "Don’t miss the chance to see global pop sensation Pedro Gonzales at Dubai Arena on March 15, 2024! Expect an electrifying night filled with his biggest hits and special guest performances. Grab your tickets now for an unforgettable experience! 🎶✨",
    price: "350 – 995",
    date: "2024-09-28",
    location: "Green Park, Central City",
    distance: 0.5,
    image: "/images/farmers-market.jpg",
    category: "Market",
    contacts: {
      inst: "@localfarmersmarket",
      web: "https://localfarmersmarket.com",
      phone: "+987654321",
      maps: "Open in app",
    },
  },
  {
    id: "3",
    name: "Outdoor Movie Night",
    price: "350 – 995",
    description:
      "Don’t miss the chance to see global pop sensation Pedro Gonzales at Dubai Arena on March 15, 2024! Expect an electrifying night filled with his biggest hits and special guest performances. Grab your tickets now for an unforgettable experience! 🎶✨",
    date: "2024-09-30",
    location: "Riverbank, Central City",
    distance: 3.4,
    image: "/images/outdoor-movie.jpg",
    category: "Movie",
    contacts: {
      inst: "@outdoormovienight",
      web: "https://outdoormovienight.com",
      phone: "+112233445",
      maps: "Open in app",
    },
  },
  {
    id: "4",
    name: "Art Exhibition: Modern Masters",
    description: "Don’t miss the chance to see global pop sensation Pedro Gonzales at Dubai Arena on March 15, 2024! Expect an electrifying night filled with his biggest hits and special guest performances. Grab your tickets now for an unforgettable experience! 🎶✨",
    price: "350 – 995",
    date: "2024-10-05",
    location: "City Art Gallery, Central City",
    distance: 2.7,
    image: "/images/art-exhibition.jpg",
    category: "Exhibition",
    contacts: {
      inst: "@modernmastersart",
      web: "https://modernmastersart.com",
      phone: "+998877665",
      maps: "Open in app",
    },
  },
];
