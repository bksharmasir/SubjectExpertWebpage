export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  topics: string[];
};

export const servicesIntro = {
  eyebrow: "What We Teach",
  headline: "One Tutor. Every Commerce Milestone You'll Hit.",
  body: "From your first balance sheet in Class XI to your CA Final paper, the same person who's been doing this since 1986 walks you through it — no rotating batch of junior faculty, no generic slide decks.",
};

export const services: Service[] = [
  {
    slug: "school-board",
    title: "School & Board Exams (XI–XII)",
    summary:
      "Accountancy, Business Studies and Economics, built for CBSE, ISC, NIOS, and SOL board marks — not just rote answers.",
    detail:
      "Board exams reward students who can show working, not just final answers. Every topic is taught with the exact presentation examiners look for, alongside enough real understanding that the concepts still make sense a year later in college.",
    topics: ["Accountancy", "Business Studies", "Economics", "CBSE Board Pattern"],
  },
  {
    slug: "degree-level",
    title: "Degree Level — B.Com, BBA, M.Com, MBA",
    summary:
      "Financial, Corporate, Cost & Management Accounting, explained the way employers expect you to already know it.",
    detail:
      "University syllabi move fast and assume you'll fill the gaps yourself. These sessions close those gaps directly — working through real problem sets in Financial, Corporate, Cost and Management Accounting until they're second nature, not just exam-week cramming.",
    topics: ["Financial Accounting", "Corporate Accounting", "Cost Accounting", "Management Accounting"],
  },
  {
    slug: "professional",
    title: "Professional — CA, CS, CMA (ICWA)",
    summary:
      "CPT to Final. Foundation to Intermediate. One tutor who's walked hundreds of students through it since 1986.",
    detail:
      "Professional-level accounting demands both depth and speed under exam conditions. Sessions are structured around past papers and common failure points at each stage — CPT, IPCC, Final for CA; Foundation through Final for CS and CMA/ICWA.",
    topics: ["CA — CPT / IPCC / Final", "CS — All Levels", "CMA (ICWA) — All Levels"],
  },
  {
    slug: "tax-gst",
    title: "Tax & GST Practice",
    summary:
      "Income Tax, GST, Direct & Indirect Tax law, and real business tax planning — not just textbook theory.",
    detail:
      "Tax law changes every year, and most syllabi lag behind the actual rules. These sessions cover current Income Tax and GST provisions alongside the textbook syllabus, plus practical business and income tax planning that carries over into real work after graduation.",
    topics: ["Income Tax", "GST", "Direct & Indirect Tax Law", "Business Tax Planning"],
  },
];
