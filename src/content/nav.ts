export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "What We Teach", href: "/services" },
  { label: "Results", href: "/testimonials" },
  { label: "Exam Notes", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const topBarLinks: NavItem[] = [
  { label: "Book Free Demo", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];
