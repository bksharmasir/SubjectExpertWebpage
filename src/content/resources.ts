export type Article = {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  image: { src: string; alt: string };
};

export const articles: Article[] = [
  {
    slug: "gst-concepts-bcom-finals",
    category: "TAX & GST",
    readTime: "6 MIN",
    date: "JUNE 2, 2026",
    title: "5 GST Concepts Every B.Com Student Must Master Before Finals",
    excerpt:
      "Input tax credit and reverse charge trip up more students than any other GST topic. Here's how to actually hold onto them past the exam.",
    image: {
      src: "https://placehold.co/1200x800/0b2a3a/f0f8ff.png?text=Article+Photo",
      alt: "Placeholder article photo",
    },
    body: [
      "Every year, the same handful of GST topics separate students who scrape through from students who genuinely understand the paper. Input Tax Credit, reverse charge, and place-of-supply rules top that list.",
      "The fix isn't more notes — it's working through five or six real invoices by hand until the mechanics stop feeling abstract. Once you've traced how tax actually flows through a transaction, the exam questions stop being tricky and start being obvious.",
      "Set aside one evening this week, pick a past-year numerical, and work it end to end without looking at the solution first. That single habit does more than another round of highlighting the textbook.",
    ],
  },
  {
    slug: "board-exam-accounts-presentation",
    category: "SCHOOL & BOARD",
    readTime: "5 MIN",
    date: "MAY 14, 2026",
    title: "Why Your Class XII Accounts Answer Loses Marks Even When It's Correct",
    excerpt:
      "Board examiners award marks for the working, not just the final figure. Here's the presentation format that protects every mark you've earned.",
    image: {
      src: "https://placehold.co/1200x800/0b2a3a/f0f8ff.png?text=Article+Photo",
      alt: "Placeholder article photo",
    },
    body: [
      "A correct final answer with missing working can still lose two-thirds of the marks on a CBSE Accountancy paper. Examiners are marking against a step-by-step scheme, not just checking your total.",
      "That means the ledger format, narration, and subtotals matter as much as arithmetic accuracy. Students who drill presentation alongside concepts consistently outscore students who only focus on getting the right number.",
    ],
  },
  {
    slug: "ca-foundation-first-attempt",
    category: "CA / CS / CMA",
    readTime: "7 MIN",
    date: "APRIL 21, 2026",
    title: "Clearing CA Foundation in One Attempt: What Actually Matters",
    excerpt:
      "Most first-attempt failures aren't about difficulty — they're about time allocation across four papers. Here's how to fix that early.",
    image: {
      src: "https://placehold.co/1200x800/0b2a3a/f0f8ff.png?text=Article+Photo",
      alt: "Placeholder article photo",
    },
    body: [
      "CA Foundation isn't hard because the content is advanced — it's hard because four papers compete for the same revision hours, and most students split time evenly instead of by weak area.",
      "Track a single mock test's paper-wise score before you plan your next month. Whichever paper is furthest from your target gets the next two weeks of focused attention, not an equal share.",
    ],
  },
];
