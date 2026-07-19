import type { Metadata } from "next";
import { Fraunces, Caveat, Work_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site-config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${siteConfig.businessName} | ${siteConfig.tutorFullName} (${siteConfig.tutorName}) — Commerce Tuition Since ${siteConfig.establishedYear}`;
const description =
  "Subject Expert Commerce Academy, run by Brij Kishore Sharma (B.K. Sharma Sir), offers home and online Commerce tuition in Rohini, Delhi for Class XI–XII, B.Com, BBA, MBA, CA, CS and CMA since 1986. Call +91 98110 34270.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.businessName}`,
  },
  description,
  keywords: [
    "Subject Expert Commerce Academy",
    "Brij Kishore Sharma",
    "B.K. Sharma",
    "B.K. Sharma Sir",
    "9811034270",
    "Subject Expert Commerce Academy Rohini",
    "Commerce tuition Rohini Sector 38",
    "B.K. Sharma Commerce tutor Delhi",
    "Home tuition Commerce Delhi",
    "Online Commerce tuition Class 11 12",
    "CA CS CMA coaching Rohini",
    "Accounts tutor Rohini",
    "Tax GST tuition Delhi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.businessName,
  alternateName: ["Subject Expert", "B.K. Sharma Commerce Academy"],
  url: siteConfig.siteUrl,
  telephone: siteConfig.telLink.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.locality,
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.map.lat,
    longitude: siteConfig.map.lng,
  },
  founder: {
    "@type": "Person",
    name: siteConfig.tutorFullName,
    alternateName: ["B.K. Sharma", "B.K. Sharma Sir"],
  },
  foundingDate: String(siteConfig.establishedYear),
  description:
    "Commerce tuition institute in Rohini, Delhi run by Brij Kishore Sharma (B.K. Sharma Sir), teaching Class XI–XII, B.Com, BBA, MBA, CA, CS, CMA and Tax/GST since 1986.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${caveat.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
