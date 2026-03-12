import type { Metadata } from "next";
import { Fira_Sans, Outfit, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtuebytech.com"),
  title: {
    default: "IT Consulting & Software Development Services | VirtuByte",
    template: "%s | VirtuByte",
  },
  description:
    "We combine innovation with expertise to deliver seamless, secure, and scalable solutions. Specializing in Salesforce, AI/ML, Cloud Services, and Data Science.",
  keywords: [
    "Salesforce Implementation",
    "AI ML Consulting",
    "Cloud Services",
    "Data Science",
    "DevOps",
    "Offshore Development",
    "VirtueByte",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtuebytech.com",
    siteName: "VirtueByte",
    title: "VirtueByte - Salesforce Solutions Powered by AI and Innovation",
    description:
      "We combine innovation with expertise to deliver seamless, secure, and scalable solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtueByte - Salesforce Solutions Powered by AI and Innovation",
    description:
      "We combine innovation with expertise to deliver seamless, secure, and scalable solutions.",
  },
  icons: {
    icon: "/images/favicons/favicon-32x32.png",
    apple: "/images/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${outfit.variable} ${lato.variable} antialiased`}
      >
        <Header />
        <main className="pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
