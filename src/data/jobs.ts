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

export interface Country {
    id: string;
    name: string;
    flag: string;
    image: string;
    vacancyCount: number;
}

export const countries: Country[] = [
    { id: "dubai", name: "Dubai", flag: "🇦🇪", image: "/countries/dubai.jpg", vacancyCount: 1 },
    { id: "saudi", name: "Saudi Arabia", flag: "🇸🇦", image: "/countries/saudi.jpg", vacancyCount: 15 },
    { id: "qatar", name: "Qatar", flag: "🇶🇦", image: "/countries/qatar.jpg", vacancyCount: 1 },
    { id: "latvia", name: "Latvia", flag: "🇱🇻", image: "/countries/latvia.jpg", vacancyCount: 5 },
    { id: "italy", name: "Italy", flag: "🇮🇹", image: "/countries/italy.jpg", vacancyCount: 1 },
    { id: "slovakia", name: "Slovakia", flag: "🇸🇰", image: "/countries/slovakia.jpg", vacancyCount: 4 },
    { id: "belarus", name: "Belarus", flag: "🇧🇾", image: "/countries/belarus.jpg", vacancyCount: 7 },
    { id: "bulgaria", name: "Bulgaria", flag: "🇧🇬", image: "/countries/bulgaria.jpg", vacancyCount: 9 },
    { id: "germany", name: "Germany", flag: "🇩🇪", image: "/countries/germany.jpg", vacancyCount: 14 },
    { id: "greece", name: "Greece", flag: "🇬🇷", image: "/countries/greece.jpg", vacancyCount: 3 },
    { id: "albania", name: "Albania", flag: "🇦🇱", image: "/countries/albania.jpg", vacancyCount: 5 },
    { id: "russia", name: "Russia", flag: "🇷🇺", image: "/countries/russia.jpg", vacancyCount: 1 },
];

export const jobs: Job[] = [

    {
        id: "2",
        title: "Hospitality Manager",
        company: "Royal Palaces Hotel",
        location: "Riyadh, Saudi Arabia",
        salary: "$3,800",
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
        title: "Software Developer",
        company: "Tech Berlin",
        location: "Berlin, Germany",
        salary: "€4,200",
        type: "Full Time",
        postedDate: "2024-03-20",
        referenceCode: "GER-SD-2024",
        countryFlag: "🇩🇪",
        description: "Exciting opportunity for Software Developers to work in Germany's booming tech scene. We provide full visa sponsorship and relocation support.",
        requirements: [
            "Degree in Computer Science or related field",
            "3+ years experience in React and Node.js",
            "Fluent in English",
            "Problem-solving skills",
            "Team player"
        ],
        benefits: [
            "Visa sponsorship",
            "Relocation package",
            "Health insurance",
            "Paid time off"
        ]
    },
    {
        id: "4",
        title: "Warehouse Worker",
        company: "Logistics Latvia",
        location: "Riga, Latvia",
        salary: "€1,800",
        type: "Full Time",
        postedDate: "2024-03-22",
        referenceCode: "LAT-WW-2024",
        countryFlag: "🇱🇻",
        description: "General warehouse duties including loading, unloading, and inventory management in Riga.",
        requirements: [
            "Physical fitness",
            "Basic English",
            "Reliability"
        ],
        benefits: [
            "Accommodation support",
            "Social security",
            "Paid overtime"
        ]
    },


    {
        id: "7",
        title: "Auto Mechanic",
        company: "Bratislava Motors",
        location: "Bratislava, Slovakia",
        salary: "€2,200",
        type: "Full Time",
        postedDate: "2024-03-27",
        referenceCode: "SVK-AM-2024",
        countryFlag: "🇸🇰",
        description: "Repair and maintain various vehicle models in a modern workshop.",
        requirements: ["Technical degree", "2+ years experience"],
        benefits: ["Tool allowance", "Health insurance"]
    },
    {
        id: "8",
        title: "Security Guard",
        company: "Minsk SafeHouse",
        location: "Minsk, Belarus",
        salary: "$1,500",
        type: "Contract",
        postedDate: "2024-03-28",
        referenceCode: "BLR-SG-2024",
        countryFlag: "🇧🇾",
        description: "Professional security services for commercial buildings.",
        requirements: ["Clean background check", "Physical fitness"],
        benefits: ["Uniform provided", "Training"]
    },
    {
        id: "9",
        title: "Factory Worker",
        company: "Sofia Textiles",
        location: "Sofia, Bulgaria",
        salary: "€1,600",
        type: "Full Time",
        postedDate: "2024-03-29",
        referenceCode: "BUL-FW-2024",
        countryFlag: "🇧🇬",
        description: "Operate textile machinery and ensure quality control.",
        requirements: ["Attendance record", "Quick learner"],
        benefits: ["Transportation", "Performance bonus"]
    },
    {
        id: "10",
        title: "Tour Guide",
        company: "Athens Adventures",
        location: "Athens, Greece",
        salary: "€2,000",
        type: "Seasonal",
        postedDate: "2024-03-30",
        referenceCode: "GRE-TG-2024",
        countryFlag: "🇬🇷",
        description: "Lead groups through historic sites in Athens. Excellent communication skills required.",
        requirements: ["Fluent English", "Historic knowledge"],
        benefits: ["Commissions", "Travel discounts"]
    },
    {
        id: "11",
        title: "Electrician",
        company: "Tirana Electric",
        location: "Tirana, Albania",
        salary: "€1,400",
        type: "Full Time",
        postedDate: "2024-03-31",
        referenceCode: "ALB-EL-2024",
        countryFlag: "🇦🇱",
        description: "Installation and maintenance of electrical systems in new builds.",
        requirements: ["Certified electrician", "Safety conscious"],
        benefits: ["Tools provided", "Overtime"]
    },
    {
        id: "12",
        title: "Floor Tile Worker",
        company: "UAE Construction Partners",
        location: "Sharjah, UAE (Dubai)",
        salary: "2000 Dirham",
        type: "Full Time",
        postedDate: "2024-04-01",
        referenceCode: "UAE-FTW-2024",
        countryFlag: "🇦🇪",
        description: "Urgent requirement for Floor Tile Workers in Sharjah. The role involves laying and finishing tiles to a high standard. Immediate joining available.",
        requirements: [
            "Proven experience in floor tile work",
            "Hardworking and highly responsible",
            "Good physical fitness",
            "Ability to work 8 hours per day"
        ],
        benefits: [
            "Monthly salary of 2000 Dirham",
            "8 Hours Duty Time / Day",
            "Accommodation provided",
            "Visa provided",
            "Immediate Joining"
        ]
    },
    {
        id: "13",
        title: "Staff Nurse - Qatar Government Project",
        company: "Home Care Services (Cochin Interview)",
        location: "Doha, Qatar",
        salary: "4500 - 5500 QRS",
        type: "Full Time",
        postedDate: "2026-01-11",
        referenceCode: "QAT-NUR-2026",
        countryFlag: "🇶🇦",
        description: "Direct Interview at Cochin on 27, 28, 29 January 2026. Vacancy for Staff Nurses for a prestigious Qatar Government Home Care Project. English communication skills are mandatory. Contract is 2 years renewable.",
        requirements: [
            "Bsc Nursing or GNM candidates",
            "Minimum 2 Years of experience in clinical/Hospital setting",
            "Age: up to 40 years",
            "Gender: Male/Female",
            "No recent gap of more than 10 months",
            "Must be willing to complete Dataflow & Prometric within 45 days of offer"
        ],
        benefits: [
            "Competitive Salary: 4500 - 5500 QRS",
            "Free Accommodation & Transportation provided",
            "12 Hour duty, Weekly 6 days with 1 day off",
            "Offer letter + Job description shared post-selection",
            "Supportive Government Project environment"
        ]
    },
    {
        id: "14",
        title: "Job Opportunity in ITALY via Schengen Visit Visa",
        company: "Orbit Consultancy Partners",
        location: "Italy (Various Sectors)",
        salary: "€900 – €1200",
        type: "Full Time",
        postedDate: "2026-01-11",
        referenceCode: "ITA-SVV-2026",
        countryFlag: "🇮🇹",
        description: "Golden Opportunity for Job Seekers in ITALY via Schengen Visit Visa. After arriving in Italy, within one month a job will be arranged in sectors such as Home Nurse or Restaurant.",
        requirements: [
            "Document: Scanned Passport",
            "Document: Scanned Aadhar Card",
            "Document: Scanned PAN Card",
            "Document: Scanned Bank Passbook Copy",
            "Document: Passport Size Photo",
            "Age: Above 25 Years"
        ],
        benefits: [
            "Minimum salary of €900 – €1200",
            "Sectors: Home Nurse or Restaurant",
            "Processing Time: 30 Days",
            "Job assistance within one month of arrival",
            "Premium opportunity in Europe"
        ]
    },


    {
        id: "15",
        title: "Restaurant Service Person",
        company: "Hotel / Restaurant Germany",
        location: "Germany",
        salary: "€1,200 Net",
        type: "Full Time",
        postedDate: "2026-02-06",
        referenceCode: "GER-RSP-2026",
        countryFlag: "🇩🇪",
        description: "Leading vacancies in Germany for Restaurant Service Persons. We are looking for experienced candidates with a Hotel Management Degree. Initial payment required for VFS Slot Booking and Travel Insurance, with balance payable after visa.",
        requirements: [
            "Qualification: Hotel Management Degree holders only",
            "Age Limit: Up to 40 years",
            "Experience: Restaurant service experience required"
        ],
        benefits: [
            "Salary: €1,200 Net",
            "Accommodation & Food provided",
            "Service Cost: ₹13 Lakhs (Without Ticket and Embassy Fee)",
            "Processing Time: Approximately 4 months",
            "Vacancies: 5"
        ]
    },
    {
        id: "16",
        title: "Forklift Operator",
        company: "Car Manufacturing Unit / Warehouse",
        location: "Slovakia",
        salary: "€800 – €1,000",
        type: "Full Time",
        postedDate: "2026-02-06",
        referenceCode: "SVK-FLO-2026",
        countryFlag: "🇸🇰",
        description: "Job opportunity for Forklift Operators in a Car Manufacturing Unit / Warehouse in Slovakia. 4 Wheel Driving License is mandatory. Candidates must have no previous international travel history.",
        requirements: [
            "4 Wheel Driving License Mandatory",
            "Europass CV with at least 2 years of forklift experience",
            "Basic English communication skills",
            "Minimum height: 165 cm",
            "Willingness to learn and attend forklift training",
            "Passport valid for a minimum of 2 years",
            "Important: Must Not Have Any Previous International Travel History"
        ],
        benefits: [
            "Monthly Salary: €800 – €1,000",
            "Processing Time: 5 – 7 Months",
            "Service Cost applies (Without Ticket)",
            "Step-by-step payment terms"
        ]
    },
    {
        id: "17",
        title: "Warehouse Helper",
        company: "Logistics Partner Russia",
        location: "Russia",
        salary: "₹60,000 – ₹70,000",
        type: "Full Time",
        postedDate: "2026-02-06",
        referenceCode: "RUS-WH-2026",
        countryFlag: "🇷🇺",
        description: "Urgent opening for Warehouse Helpers in Russia with Employment Visa. Payment after visa! We are looking for male candidates with good physical fitness for warehouse operations.",
        requirements: [
            "Gender: Male Candidates Only",
            "Age Limit: Up to 45 Years",
            "Good Physical Fitness Required",
            "Duty Hours: 10–11 Hours per Day",
            "Working Days: 6 Days per Week",
            "Overtime Available"
        ],
        benefits: [
            "Payment After Visa ✅",
            "Salary: ₹60,000 – ₹70,000 per Month",
            "Accommodation Provided",
            "Duty Meals Provided",
            "Processing Time: 45–60 Working Days",
            "Service Cost: ₹4.5 Lakhs (Including Air Ticket ✈️)",
            "Note: Insurance & Medical Expenses to be borne by the Candidate"
        ]
    },
    {
        id: "18",
        title: "Construction & Technical Trades",
        company: "Various Industries Albania",
        location: "Albania",
        salary: "€400 - €900",
        type: "Full Time",
        postedDate: "2026-02-06",
        referenceCode: "ALB-MULTI-2026",
        countryFlag: "🇦🇱",
        description: "Massive recruitment drive for skilled workers in Albania. Multiple positions available across construction, automotive, and industrial sectors.",
        requirements: [
            "Experience in relevant field is mandatory",
            "Technical certification preferred",
            "Good physical condition",
            "Willingness to relocate"
        ],
        benefits: [
            "Dishwasher (M): €450-500",
            "Plasting Specialist: €400-550",
            "Turner (auto gearbox): €500-600",
            "Assembler (metal): €650",
            "Hydraulic Tech / Welder / Mechanic / Electrician: €500-600",
            "Oil/Gas Technologist: €600-850",
            "Metal Fitter / Welder: €600-700",
            "Refrigeration Tech: €600-700",
            "Cold Storage Tech: €800-900",
            "Vehicle Electrician / Painter / Mechanic: €500-700",
            "Aluminum Fabricator / Welder: €500",
            "Overtime Available"
        ]
    }
];


