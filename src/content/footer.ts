export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Our Story",
    links: [
      { label: "About B.K. Sharma Sir", href: "/about" },
      { label: "Teaching Since 1986", href: "/about" },
      { label: "Results", href: "/testimonials" },
    ],
  },
  {
    heading: "What We Teach",
    links: [
      { label: "School & Board (XI–XII)", href: "/services/school-board" },
      { label: "Degree Level", href: "/services/degree-level" },
      { label: "CA · CS · CMA", href: "/services/professional" },
      { label: "Tax & GST Practice", href: "/services/tax-gst" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { label: "Exam Notes", href: "/resources" },
      { label: "Tutor's Section", href: "/tutors" },
      { label: "Book a Free Demo", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Call +91 98110 34270", href: "tel:+919811034270" },
      { label: "WhatsApp", href: "https://wa.me/919811034270" },
      { label: "Rohini, Sector 38, New Delhi", href: "/contact" },
    ],
  },
];

export const newsletter = {
  heading: "Get exam-week tips and GST/Tax law updates from B.K. Sharma Sir.",
  ctaLabel: "Sign Up",
};
