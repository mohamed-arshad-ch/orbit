export interface Tour {
    id: string;
    title: string;
    location: string;
    duration: string;
    price: string;
    description: string;
    highlights: string[];
    inclusions: string[];
    itinerary: { day: number; title: string; desc: string }[];
    imageGradient: string; // Using gradients as placeholders for now
    image: string;
}

export const tours: Tour[] = [
    {
        id: "1",
        title: "Bali Escape",
        location: "Bali, Indonesia",
        duration: "7 Days",
        price: "$1,299",
        imageGradient: "from-teal-500 to-emerald-700",
        image: "/tour_bali_1767532773911.png",
        description: "Immerse yourself in the tropical paradise of Bali. From ancient temples to pristine beaches and lush rice terraces, this 7-day escape offers the perfect blend of culture, relaxation, and adventure.",
        highlights: [
            "Visit the sacred Monkey Forest in Ubud",
            "Sunset dinner at Jimbaran Bay",
            "Snorkeling in crystal clear waters",
            "Traditional Balinese massage"
        ],
        inclusions: [
            "Round-trip flights",
            "5-Star Hotel Accommodation",
            "Daily Breakfast & Dinner",
            "Airport Transfers",
            "English-speaking Guide"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Bali", desc: "Airport pickup and transfer to your luxury resort in Ubud." },
            { day: 2, title: "Ubud Cultural Tour", desc: "Visit art markets, old temples, and the famous Monkey Forest." },
            { day: 3, title: "Rice Terraces & Swing", desc: "Experience the Tegalalang Rice Terrace and famous Bali swing." },
            { day: 4, title: "Transfer to Seminyak", desc: "Move to the coast for beach vibes and nightlife." },
            { day: 5, title: "Island Hopping", desc: "Day trip to Nusa Penida for breathtaking views and snorkeling." },
            { day: 6, title: "Free Day & Sunset", desc: "Relax at the beach followed by a seafood sunset dinner." },
            { day: 7, title: "Departure", desc: "Transfer to airport for your flight home." }
        ]
    },
    {
        id: "2",
        title: "Swiss Alpine Dream",
        location: "Interlaken, Switzerland",
        duration: "6 Days",
        price: "$2,499",
        imageGradient: "from-blue-600 to-indigo-900",
        image: "/tour_swiss_1767532800456.png",
        description: "Experience the majestic Swiss Alps. Ride the scenic trains, explore charming villages, and witness the snow-capped peaks of Jungfrau. A premium tour for nature lovers.",
        highlights: [
            "Jungfraujoch - Top of Europe tour",
            "Scenic GoldenPass Express train ride",
            "Boat cruise on Lake Brienz",
            "Swiss chocolate tasting"
        ],
        inclusions: [
            "Swiss Travel Pass",
            "4-Star Hotel Accommodation",
            "Daily Breakfast",
            "Mountain Excursions",
            "Visa Assistance"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Zurich", desc: "Train transfer to Interlaken via scenic route." },
            { day: 2, title: "Jungfraujoch", desc: "Full day excursion to the highest railway station in Europe." },
            { day: 3, title: "Lake Brienz", desc: "Relaxing boat cruise with turquoise water views." },
            { day: 4, title: "Grindelwald First", desc: "Adventure activities and cliff walk in Grindelwald." },
            { day: 5, title: "Lucerne Day Trip", desc: "Visit the Chapel Bridge and Lion Monument." },
            { day: 6, title: "Departure", desc: "Train to Zurich Airport." }
        ]
    },
    {
        id: "3",
        title: "Majestic Dubai",
        location: "Dubai, UAE",
        duration: "5 Days",
        price: "$999",
        imageGradient: "from-amber-500 to-orange-700",
        image: "/tour_dubai_1767532865250.png",
        description: "Discover the city of gold. From the tallest building in the world to thrilling desert safaris, experience the luxury and excitement of Dubai in this action-packed tour.",
        highlights: [
            "Burj Khalifa At the Top",
            "Premium Desert Safari with BBQ",
            "Marina Dhow Cruise",
            "Dubai Mall Aquarium"
        ],
        inclusions: [
            "Tourist Visa",
            "4-Star Hotel",
            "Daily Breakfast",
            "All Transfers",
            "Desert Safari Dinner"
        ],
        itinerary: [
            { day: 1, title: "Welcome to Dubai", desc: "Arrival and transfer to hotel. Evening Marina Cruise." },
            { day: 2, title: "City Tour & Burj Khalifa", desc: "Half-day city tour and evening visit to Burj Khalifa 124th floor." },
            { day: 3, title: "Desert Safari", desc: "Afternoon dune bashing, camel ride, and BBQ dinner camp." },
            { day: 4, title: "Shopping & Leisure", desc: "Free time for shopping at Dubai Mall or Souks." },
            { day: 5, title: "Departure", desc: "Check-out and airport drop-off." }
        ]
    }
];
