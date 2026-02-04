export interface StudyCountry {
    id: string;
    name: string;
    flag: string;
    image: string;
    title: string;
    highlights: string[];
    programs?: string[];
    features?: string[];
    additionalInfo?: string[];
    description?: string;
    eligibility?: string[];
    fees?: string[];
}

export const studyCountries: StudyCountry[] = [
    {
        id: "singapore",
        name: "Singapore",
        flag: "🇸🇬",
        image: "/countries/singapore.jpg",
        title: "Study in Singapore",
        highlights: [
            "Fee payment after visa approval 💸",
            "Stipend Up to ₹120,000 💰",
            "30 - Working Day Processing⏰",
            "10th Pass, age <35 👨‍🎓",
            "Airport Pickup",
            "Part-time Job Assistance 😊",
            "Free Flight Ticket ✈️"
        ],
        programs: [
            "Diploma in Logistics",
            "Diploma in Hospitality",
            "Diploma in Business Management"
        ]
    },
    {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        image: "/countries/uk.jpg",
        title: "STUDY IN UK",
        highlights: [
            "Mid & September Intakes Now Open",
            "100% Visa Assistance",
            "Offer Letter Within 48 Hours",
            "No Interview Required",
            "No IELTS",
            "MOI Accepted",
            "Scholarships Available",
            "Low Tuition Fees",
            "Low Initial Deposit (Remaining fees payable in easy instalments)",
            "Total Expenses Within ₹8 Lakhs",
            "Year Gap Accepted",
            "18 Months Stay Back"
        ]
    },
    {
        id: "malta",
        name: "Malta",
        flag: "🇲🇹",
        image: "/countries/malta.jpg",
        title: "Study in Malta",
        highlights: [
            "Tuition Fee Payment After Visa Approval",
            "No IELTS required 🎉",
            "Year Gap Accepted 👍"
        ],
        programs: [
            "Diploma Programs (Duration: 1 year)",
            "Eligibility: 12th marks 55%",
            "DIPLOMA IN HEALTH AND SOCIAL CARE MANAGEMENT"
        ]
    },
    {
        id: "slovakia",
        name: "Slovakia",
        flag: "🇸🇰",
        image: "/countries/slovakia.jpg",
        title: "Study in Slovakia",
        description: "Slovakia’s leading public universities, offering foundation (preparatory) programs designed to prepare international students for Bachelor’s degree studies in Slovakia.",
        highlights: [
            "No IELTS required",
            "Offer letter issued within 3–4 working days"
        ],
        programs: [
            "Business",
            "Information Technology (IT)",
            "Finance",
            "Economics",
            "Social Management",
            "Social Sciences",
            "Science",
            "Mathematics"
        ],
        eligibility: [
            "+2 ( 50% Mandatory )",
            "Age Limit - Upto 25",
            "Minimum 50% marks required"
        ],
        fees: [
            "Application Fee: €200",
            "Tuition Fee: €6,500"
        ],
        additionalInfo: [
            "*Contact Only for Study Visa"
        ]
    }
];
