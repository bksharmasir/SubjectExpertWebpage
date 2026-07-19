export const contactContent = {
  eyebrow: "Contact",
  headline: "Book a Demo Class.",
  intro:
    "Choose Online Tuition for a free first class, or Home Tuition — demo sessions there are billed at half Sir's regular hourly rate. B.K. Sharma Sir replies to every enquiry directly.",
  courseOptions: [
    "Class XI–XII",
    "B.Com / BBA / M.Com / MBA",
    "CA / CS / CMA",
    "Tax & GST Practice",
  ],
};

export const subjectsByCourse: Record<string, string[]> = {
  "Class XI–XII": ["Accounts", "Statistics"],
  "B.Com / BBA / M.Com / MBA": [
    "Accounts",
    "Costing",
    "Taxation",
    "Management Accounting",
  ],
  "CA / CS / CMA": ["Accounts", "Costing", "Taxation", "Management Accounting"],
  "Tax & GST Practice": [
    "Practical Accounting & Full Knowledge of Income Tax & GST",
  ],
};

// Delhi localities Sir covers for home tuition, A–Z.
export const delhiPlaces: string[] = [
  "Adarsh Nagar",
  "Ashok Vihar",
  "Bhera Enclave",
  "Civil Lines",
  "Connaught Place",
  "Delhi Cantonment Area",
  "Derawal Nagar",
  "Dhaula Kuan",
  "Dwarka (All Sectors)",
  "Greater Kailash 1 & 2",
  "Gujranwala Town",
  "Guru Harkishan Nagar",
  "Hari Nagar",
  "Hauz Khas",
  "Janakpuri",
  "Kamla Nagar",
  "Kanjhawla",
  "Karala",
  "Karol Bagh",
  "Khel Gaon",
  "Kirti Nagar",
  "Model Town",
  "Mohammadpur Majri (Karala)",
  "Moti Nagar",
  "Munirka",
  "Paschim Vihar",
  "Patel Nagar (North, South, East and West)",
  "Pitampura (All Blocks)",
  "Pralad Pur",
  "Prashant Vihar",
  "Punjabi Bagh",
  "Raja Garden",
  "Rajinder Nagar (Old & New)",
  "Rajouri Garden",
  "Rani Bagh",
  "RK Puram",
  "Rohini (All Sectors)",
  "Safdarjung Enclave",
  "Saraswati Vihar",
  "Sarojini Nagar",
  "Satyaniketan",
  "Shakti Nagar",
  "Shalimar Bagh (All Blocks)",
  "Shivaji Park",
  "South Ex 1 & 2",
  "Subhash Nagar",
  "Tagore Garden",
  "Tagore Park",
  "Vasant Vihar",
  "Vikas Puri",
  "Vishal Enclave",
  "West Enclave Pitampura",
];

export type DemoTrack = {
  mode: "Online Tuition" | "Home Tuition";
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export const demoTracks: DemoTrack[] = [
  {
    mode: "Online Tuition",
    badge: "Free Demo",
    title: "Online Tuition",
    description:
      "The first class over Zoom or Google Meet is completely free — see how Sir teaches before you commit to a course.",
    ctaLabel: "Book Free Online Demo",
  },
  {
    mode: "Home Tuition",
    badge: "50% Chargeable",
    title: "Home Tuition",
    description:
      "Home visits are billed from the first class, at half Sir's regular hourly rate — charged per hour, not for the whole course. Exact rates are confirmed directly with Sir before booking.",
    ctaLabel: "Book Home Tuition Demo",
  },
];
