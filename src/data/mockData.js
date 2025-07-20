export const featuredDestinations = [
  {
    id: 1,
    name: "Barcelona Tour",
    rating: 3.5,
    activities: 196,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=300&fit=crop"
    ],
    location: "Barcelona, Spain",
    description: "Experience the vibrant culture and stunning architecture of Barcelona",
    price: 850,
    duration: "7 days",
    category: "City",
    subtitle: "Art, Culture, and Mediterranean Charm",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Barcelona & Gothic Quarter",
        activities: [
          "Arrive at Barcelona Airport & check-in at hotel",
          "Walking tour of Gothic Quarter",
          "Visit Barcelona Cathedral",
          "Dinner at traditional Catalan restaurant"
        ]
      },
      {
        day: 2,
        title: "Gaudí Architecture & Park Güell",
        activities: [
          "Morning visit to Sagrada Familia",
          "Explore Park Güell",
          "Casa Batlló and Casa Milà tour",
          "Evening tapas crawl in Gràcia"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "Spring (March-May)",
        description: "Perfect weather, fewer crowds, blooming flowers"
      },
      {
        season: "Fall (September-November)",
        description: "Warm temperatures, ideal for walking tours"
      }
    ],
    weatherInfo: [
      { season: "Spring", temp: "15°C - 22°C (59°F - 72°F)" },
      { season: "Summer", temp: "22°C - 28°C (72°F - 82°F)" },
      { season: "Autumn", temp: "16°C - 23°C (61°F - 73°F)" },
      { season: "Winter", temp: "8°C - 16°C (46°F - 61°F)" }
    ]
  },
  {
    id: 2,
    name: "London, United State",
    rating: 3.5,
    activities: 196,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=300&fit=crop"
    ],
    location: "London, UK",
    description: "Discover the rich history and modern attractions of London",
    price: 920,
    duration: "6 days",
    category: "City",
    subtitle: "Royal Heritage and Modern Marvels",
    itinerary: [
      {
        day: 1,
        title: "Royal London Experience",
        activities: [
          "Buckingham Palace and Changing of the Guard",
          "Westminster Abbey tour",
          "Big Ben and Houses of Parliament",
          "Thames River cruise"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "Spring (March-May)",
        description: "Mild weather, beautiful parks in bloom"
      }
    ],
    weatherInfo: [
      { season: "Spring", temp: "7°C - 15°C (45°F - 59°F)" },
      { season: "Summer", temp: "14°C - 22°C (57°F - 72°F)" }
    ]
  },
  {
    id: 3,
    name: "Australia Tour",
    rating: 3.5,
    activities: 196,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=400&h=300&fit=crop"
    ],
    location: "Sydney, Australia",
    description: "Explore the natural wonders and vibrant cities of Australia",
    price: 1200,
    duration: "10 days",
    category: "Adventure",
    subtitle: "Outback Adventures and Coastal Beauty",
    itinerary: [
      {
        day: 1,
        title: "Sydney Arrival & Harbor Discovery",
        activities: [
          "Arrive at Sydney Airport",
          "Sydney Opera House tour",
          "Harbour Bridge climb",
          "Circular Quay evening walk"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "Spring (September-November)",
        description: "Perfect weather, wildflower blooms"
      }
    ],
    weatherInfo: [
      { season: "Spring", temp: "15°C - 25°C (59°F - 77°F)" },
      { season: "Summer", temp: "20°C - 30°C (68°F - 86°F)" }
    ]
  },
  {
    id: 4,
    name: "5-Day Japan Highlights: Culture, Food and Adventure",
    rating: 4.9,
    activities: 196,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&h=300&fit=crop"
    ],
    location: "Tokyo, Kyoto, Osaka",
    description: "Experience the best of Japan in 5 unforgettable days, traveling through Tokyo, Kyoto, and Osaka. From the bustling streets of Shibuya to the historic temples of Kyoto and the vibrant food scene in Osaka, this itinerary blends culture, sightseeing, and local flavors.",
    fullDescription: "Relax in a Hakone onsen, explore ancient shrines, and indulge in authentic Japanese cuisine—all while enjoying seamless travel on the Shinkansen.",
    price: 604,
    duration: "5 day plan",
    category: "Cultural",
    subtitle: "Luxury, Diversity, and Harmony",
    categories: ["Luxury", "Beach", "Mountains", "Budget"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo & Shibuya Exploration",
        activities: [
          "Arrive at Narita/Haneda Airport & check-in at hotel",
          "Visit Shibuya Crossing & Hachiko Statue",
          "Explore Shinjuku for city views at Tokyo Metropolitan Govt. Building",
          "Dinner at an Izakaya in Golden Gai"
        ]
      },
      {
        day: 2,
        title: "Tokyo Sightseeing & Culture",
        activities: [
          "Morning: Senso-ji Temple in Asakusa",
          "Afternoon: Akihabara (tech & anime district)",
          "Evening: Walk around Tokyo Tower & Roppongi"
        ]
      },
      {
        day: 3,
        title: "Day Trip to Hakone (Mt. Fuji Views)",
        activities: [
          "Take the Hakone Ropeway for a scenic view",
          "Relax in an onsen (hot spring)",
          "Visit Lake Ashi & see Fuji in the distance"
        ]
      },
      {
        day: 4,
        title: "Kyoto – Temples & History",
        activities: [
          "Travel to Kyoto via Shinkansen (bullet train)",
          "Visit Fushimi Inari Shrine (red torii gates)",
          "Explore Gion (Geisha district) in the evening"
        ]
      },
      {
        day: 5,
        title: "Shopping & Departure",
        activities: [
          "Last-minute shopping in Shinosabashi",
          "Head to Kansai/Narita Airport for departure"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "🌸 Spring (March-May)",
        description: "Cherry blossoms in full bloom, mild temperatures.",
        icon: "🌸"
      },
      {
        season: "🍂 Autumn (September-November)",
        description: "Beautiful fall foliage, comfortable weather.",
        icon: "🍂"
      },
      {
        season: "❄️ Winter (December-February)",
        description: "Quieter with snow-covered temples creating a magical scene.",
        icon: "❄️"
      },
      {
        season: "☀️ Summer (June-August)",
        description: "Hot & humid but lively with festivals like Gion Matsuri.",
        icon: "☀️"
      }
    ],
    weatherInfo: [
      { season: "Spring", temp: "10°C - 20°C (50°F - 68°F)" },
      { season: "Summer", temp: "22°C - 33°C (72°F - 91°F)" },
      { season: "Autumn", temp: "12°C - 25°C (54°F - 77°F)" },
      { season: "Winter", temp: "0°C - 10°C (32°F - 50°F)" }
    ],
    mapCoordinates: {
      lat: 35.6762,
      lng: 139.6503,
      locations: [
        { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
        { name: "Kyoto", lat: 35.0116, lng: 135.7681 },
        { name: "Hakone", lat: 35.2323, lng: 139.1073 }
      ]
    }
  },
  {
    id: 5,
    name: "Japan Tour",
    rating: 3.5,
    activities: 196,
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=300&fit=crop"
    ],
    location: "Kyoto, Japan",
    description: "Experience traditional Japan in the ancient capital",
    price: 980,
    duration: "6 days",
    category: "Cultural",
    subtitle: "Traditional Heritage and Zen Gardens",
    itinerary: [
      {
        day: 1,
        title: "Kyoto Temples & Gardens",
        activities: [
          "Kinkaku-ji (Golden Pavilion) visit",
          "Ryoan-ji Zen garden meditation",
          "Bamboo Grove walk in Arashiyama",
          "Traditional kaiseki dinner"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "Spring (March-May)",
        description: "Cherry blossom season, perfect weather"
      }
    ],
    weatherInfo: [
      { season: "Spring", temp: "8°C - 18°C (46°F - 64°F)" },
      { season: "Summer", temp: "20°C - 30°C (68°F - 86°F)" }
    ]
  }
];

export const handpickedTrips = [
  {
    id: 6,
    name: "Anse Source d'Argent",
    price: 870,
    location: "La Digue, Seychelles",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571501679722-de4c4455e9a6?w=400&h=300&fit=crop"
    ],
    categories: ["Beach", "Luxury"],
    description: "Pristine white sand beaches with unique granite formations",
    duration: "5 days",
    rating: 4.8,
    activities: 28,
    subtitle: "Paradise Found",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Relaxation",
        activities: [
          "Airport transfer to resort",
          "Beach orientation and welcome lunch",
          "Sunset cocktails on the beach"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "April-May & October-November",
        description: "Perfect weather, calm seas"
      }
    ],
    weatherInfo: [
      { season: "Year-round", temp: "24°C - 30°C (75°F - 86°F)" }
    ]
  },
  {
    id: 7,
    name: "Aysén Region",
    price: 604,
    location: "Patagonia, Chile",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
    ],
    categories: ["Sports", "Adventurous"],
    description: "Wild Patagonian landscapes and glacier adventures",
    duration: "9 days",
    rating: 4.6,
    activities: 52,
    subtitle: "Untamed Wilderness",
    itinerary: [
      {
        day: 1,
        title: "Glacier Exploration",
        activities: [
          "Ice trekking adventure",
          "Glacier viewing from boat",
          "Wildlife spotting"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "December-March",
        description: "Summer season, accessible trails"
      }
    ],
    weatherInfo: [
      { season: "Summer", temp: "10°C - 20°C (50°F - 68°F)" }
    ]
  },
  {
    id: 8,
    name: "Taman Negara",
    price: 300,
    location: "Peninsular Malaysia",
    image: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
    ],
    categories: ["Mountains", "Budget"],
    description: "One of the world's oldest tropical rainforests",
    duration: "4 days",
    rating: 4.1,
    activities: 35,
    subtitle: "Ancient Rainforest",
    itinerary: [
      {
        day: 1,
        title: "Jungle Canopy Walk",
        activities: [
          "Canopy walkway experience",
          "Wildlife observation",
          "Night jungle sounds tour"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "March-September",
        description: "Dry season, best for trekking"
      }
    ],
    weatherInfo: [
      { season: "Year-round", temp: "22°C - 32°C (72°F - 90°F)" }
    ]
  },
  {
    id: 9,
    name: "Zhangye Landform",
    price: 790,
    location: "Gansu, China",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1548919973-5cef591cdacf?w=400&h=300&fit=crop"
    ],
    categories: ["Solo travel", "City"],
    description: "Marvel at the rainbow mountains and unique geological formations",
    duration: "5 days",
    rating: 4.4,
    activities: 29,
    subtitle: "Rainbow Mountains",
    itinerary: [
      {
        day: 1,
        title: "Rainbow Mountain Exploration",
        activities: [
          "Sunrise at Danxia viewpoint",
          "Geological formation tour",
          "Photography workshop"
        ]
      }
    ],
    bestTimeToVisit: [
      {
        season: "June-September",
        description: "Clear weather, best visibility"
      }
    ],
    weatherInfo: [
      { season: "Summer", temp: "15°C - 28°C (59°F - 82°F)" }
    ]
  }
];

// Category definitions for styling and filtering
export const categories = {
  Mountains: { color: "bg-green-100 text-green-800" },
  City: { color: "bg-purple-100 text-purple-800" },
  "Solo travel": { color: "bg-blue-100 text-blue-800" },
  Budget: { color: "bg-yellow-100 text-yellow-800" },
  Luxury: { color: "bg-pink-100 text-pink-800" },
  Beach: { color: "bg-cyan-100 text-cyan-800" },
  Sports: { color: "bg-orange-100 text-orange-800" },
  Adventurous: { color: "bg-red-100 text-red-800" },
  Cultural: { color: "bg-indigo-100 text-indigo-800" },
  Adventure: { color: "bg-emerald-100 text-emerald-800" }
};