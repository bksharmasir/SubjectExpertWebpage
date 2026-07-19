export const siteConfig = {
  siteUrl: "https://subject-expert-webpage-z3ca.vercel.app",
  businessName: "Subject Expert Commerce Academy",
  shortName: "Subject Expert",
  nameSuffix: "Commerce Academy",
  logo: {
    src: "https://placehold.co/160x160/0b2a3a/a3d1e0.png?text=SE",
    alt: "Subject Expert Commerce Academy logo — placeholder, replace with real logo",
  },
  tutorName: "B.K. Sharma",
  tutorFullName: "Brij Kishore Sharma",
  credentials: "M.Com, Agra University",
  establishedYear: 1986,
  locality: "Rohini, Sector 38, New Delhi",
  map: {
    // Exact pin resolved from the business's Google Maps listing
    // (https://maps.app.goo.gl/JfLNe8W6Jvuv3orQ9), not a text search —
    // keeps the embed to a single marker instead of nearby competitors.
    lat: 28.7337333,
    lng: 77.0577698,
  },
  phoneDisplay: "+91 98110 34270",
  telLink: "tel:+919811034270",
  whatsappLink: "https://wa.me/919811034270?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20classes",
  modes: ["Online Tuition", "Home Tuition"],
  motto: {
    devanagari: "विद्या ददाति विनयम्",
    transliteration: "Vidyā Dadāti Vinayam",
    translation: "Knowledge gives humility",
  },
} as const;

export const trustBadges = [
  "Teaching Since 1986",
  "4.6★ on JustDial · 36 Reviews",
  "UrbanPro Verified Tutor",
  "M.Com — Agra University",
] as const;
