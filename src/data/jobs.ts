export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    referenceCode: string;
    countryFlag: string;
}

export const jobs: Job[] = [
    {
        id: "1",
        title: "Senior Civil Engineer",
        company: "Dubai Construction Group",
        location: "Dubai, UAE",
        salary: "$4,500/mo",
        type: "Full Time",
        postedDate: "2024-03-15",
        referenceCode: "UAE-CE-2024",
        countryFlag: "🇦🇪",
        description: "We are seeking an experienced Senior Civil Engineer to lead major infrastructure projects in Dubai. The ideal candidate will have a strong background in structural engineering and project management.",
        requirements: [
            "Bachelor's degree in Civil Engineering",
            "Minimum 7 years of experience in construction",
            "Proficiency in AutoCAD and Civil 3D",
            "Excellent leadership and communication skills",
            "UAE driving license is a plus"
        ],
        benefits: [
            "Tax-free salary",
            "Accommodation provided",
            "Yearly flight tickets",
            "Health insurance",
            "30 days annual leave"
        ]
    },
    {
        id: "2",
        title: "Hospitality Manager",
        company: "Royal Palaces Hotel",
        location: "Riyadh, Saudi Arabia",
        salary: "$3,800/mo",
        type: "Contract",
        postedDate: "2024-03-18",
        referenceCode: "KSA-HM-2024",
        countryFlag: "🇸🇦",
        description: "Join one of Saudi Arabia's most prestigious luxury hotels. We are looking for a Hospitality Manager to oversee daily operations and ensure guest satisfaction.",
        requirements: [
            "Degree in Hospitality Management",
            "5+ years experience in 5-star hotels",
            "Fluent in English (Arabic is a plus)",
            "Strong team management skills",
            "Customer-first attitude"
        ],
        benefits: [
            "Free accommodation and meals",
            "Transportation allowance",
            "Medical insurance",
            "End of service bonus"
        ]
    },
    {
        id: "3",
        title: "Registered Nurse",
        company: "City General Hospital",
        location: "London, UK",
        salary: "£3,200/mo",
        type: "Full Time",
        postedDate: "2024-03-20",
        referenceCode: "UK-RN-2024",
        countryFlag: "🇬🇧",
        description: "Exciting opportunity for Registered Nurses to work in NHS hospitals across London. We provide full visa sponsorship and relocation support.",
        requirements: [
            "Degree in Nursing",
            "Valid nursing license in home country",
            "IELTS/OET passed",
            "Minimum 2 years clinical experience",
            "Compassionate and dedicated"
        ],
        benefits: [
            "Visa sponsorship",
            "Relocation package",
            "NHS pension scheme",
            "Training and development",
            "Overtime opportunities"
        ]
    }
];
