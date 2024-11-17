import { Place } from "../model/place";

export const mockPlaces: Place[] = [
  {
    id: "1",
    name: "The Grill House",
    description:
      "The best steakhouse in the city, offering a wide selection of premium cuts and an extensive wine list. Perfect for family dinners and special occasions.",
    address: "12 Lenin Street",
    distance: 1.2,
    image: "/images/cinema-city.png",
    category: "Restaurant",
    rate: 4.5,
    key: ["steakhouse", "family", "wine", "premium", "restaurant"],
    contacts: {
      inst: "@grillhouse",
      web: "https://grillhouse.com",
      phone: "+123456789",
      maps: "link in app",
    },
    reviews: [
      {
        name: "John Doe",
        date: "2024-11-10",
        text: "Excellent food and ambiance. Highly recommended!",
      },
      {
        name: "Jane Smith",
        date: "2024-11-12",
        text: "Steaks were perfectly cooked. A bit pricey but worth it.",
      },
    ],
  },
  {
    id: "2",
    name: "Aqua Park",
    description:
      "A fun-filled aqua park for the whole family, featuring thrilling water slides, wave pools, and a lazy river. A perfect spot for summer enjoyment!",
    address: "45 Victory Avenue",
    distance: 0.5,
    image: "/images/aqua-park.jpg",
    category: "Water Park",
    rate: 4.7,
    key: ["water slides", "family", "fun", "summer", "aqua park"],
    contacts: {
      inst: "@aquapark",
      web: "https://aquapark.com",
      phone: "+987654321",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Alice Johnson",
        date: "2024-11-08",
        text: "Kids loved it! Great slides and friendly staff.",
      },
      {
        name: "Bob Brown",
        date: "2024-11-09",
        text: "Too crowded on weekends, but fun nonetheless.",
      },
    ],
  },
  {
    id: "3",
    name: "Cinema City",
    description:
      "A modern cinema complex showcasing the latest blockbusters and independent films. Enjoy comfortable seating and a wide variety of snacks and drinks.",
    address: "10 October Street",
    distance: 3.4,
    image: "/fsd/public/images/cinema-city.jpg",
    category: "Cinema",
    rate: 4.2,
    key: ["cinema", "movies", "blockbusters", "independent films", "snacks"],
    contacts: {
      inst: "@cinemacity",
      web: "https://cinemacity.com",
      phone: "+1122334455",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Emily Davis",
        date: "2024-11-07",
        text: "Comfortable seats and good sound quality.",
      },
      {
        name: "Frank Wilson",
        date: "2024-11-10",
        text: "Snacks are overpriced, but the experience is great.",
      },
    ],
  },
  {
    id: "4",
    name: "Night Club XS",
    description:
      "The ultimate destination for nightlife lovers, featuring live DJ performances, a vibrant dance floor, and a range of signature cocktails. Perfect for a night out with friends.",
    address: "18 Youth Street",
    distance: 2.7,
    image: "/images/night-club-xs.jpg",
    category: "Night Club",
    rate: 4.8,
    key: ["nightlife", "DJ", "dance", "cocktails", "friends"],
    contacts: {
      inst: "@nightclubxs",
      web: "https://nightclubxs.com",
      phone: "+9988776655",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Chris Green",
        date: "2024-11-11",
        text: "Amazing DJ lineup! Had the best time here.",
      },
      {
        name: "Dana White",
        date: "2024-11-13",
        text: "Drinks were good, but the dance floor was too crowded.",
      },
    ],
  },
  {
    id: "5",
    name: "Art Gallery Modern",
    description:
      "An innovative gallery showcasing contemporary art from local and international artists. Attend exhibitions, workshops, and art events throughout the year.",
    address: "25 Culture Avenue",
    distance: 1.8,
    image: "/images/art-gallery-modern.jpg",
    category: "Art Gallery",
    rate: 4.0,
    key: ["art", "gallery", "exhibitions", "workshops", "modern art"],
    contacts: {
      inst: "@artgallerymodern",
      web: "https://artgallerymodern.com",
      phone: "+4433221100",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Samantha Brown",
        date: "2024-11-12",
        text: "Wonderful collection of contemporary art. Loved it!",
      },
      {
        name: "Michael Gray",
        date: "2024-11-14",
        text: "A great place to learn about modern art.",
      },
    ],
  },
  {
    id: "6",
    name: "Botanical Garden",
    description:
      "A serene oasis in the heart of the city, featuring a wide variety of plant species and beautifully landscaped gardens. Perfect for a leisurely stroll or a picnic.",
    address: "7 Green Lane",
    distance: 4.1,
    image: "/images/botanical-garden.jpg",
    category: "Park",
    rate: 4.6,
    key: ["nature", "plants", "garden", "serene", "picnic"],
    contacts: {
      inst: "@botanicalgarden",
      web: "https://botanicalgarden.com",
      phone: "+6677889900",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Olivia Brown",
        date: "2024-11-15",
        text: "Peaceful and beautiful. A must-visit for nature lovers.",
      },
      {
        name: "Liam Taylor",
        date: "2024-11-16",
        text: "Perfect spot for a family picnic.",
      },
    ],
  },
  {
    id: "7",
    name: "Sky Lounge",
    description:
      "A rooftop bar offering stunning views of the city skyline. Enjoy crafted cocktails and a relaxed atmosphere, ideal for unwinding after a long day.",
    address: "50 Skyline Road",
    distance: 2.3,
    image: "/images/sky-lounge.jpg",
    category: "Bar",
    rate: 4.3,
    key: ["rooftop", "cocktails", "skyline", "relaxation", "bar"],
    contacts: {
      inst: "@skylounge",
      web: "https://skylounge.com",
      phone: "+5544332211",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Noah Walker",
        date: "2024-11-13",
        text: "Stunning views and great cocktails!",
      },
      {
        name: "Sophia Martin",
        date: "2024-11-14",
        text: "The ambiance was fantastic. Highly recommend.",
      },
    ],
  },
  {
    id: "8",
    name: "Historical Museum",
    description:
      "Explore the rich history of our city through engaging exhibits and artifacts. A great destination for history buffs and families alike.",
    address: "5 History Square",
    distance: 3.0,
    image: "/images/historical-museum.jpg",
    category: "Museum",
    rate: 3.9,
    key: ["history", "museum", "exhibits", "artifacts", "education"],
    contacts: {
      inst: "@historicalmuseum",
      web: "https://historicalmuseum.com",
      phone: "+9988112233",
      maps: "link in app",
    },
    reviews: [
      {
        name: "Charlotte Evans",
        date: "2024-11-11",
        text: "Loved the historical artifacts. Informative and well-organized.",
      },
      {
        name: "Henry Harris",
        date: "2024-11-12",
        text: "A bit outdated, but still worth a visit.",
      },
    ],
  },
];
