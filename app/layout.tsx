import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://prabhavtiwari11.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Prabhav Tiwari | Software Development Engineer",
    template: "%s | Prabhav Tiwari",
  },

  description:
    "Portfolio of Prabhav Tiwari — Software Development Engineer focused on Java, Spring Boot, REST APIs, SQL, microservices and test automation.",

  keywords: [
    "Prabhav Tiwari",
    "Software Development Engineer",
    "Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "REST API",
    "Microservices",
    "SQL",
    "Playwright",
    "Test Automation",
    "SDET",
    "Developer Portfolio",
  ],

  authors: [
    {
      name: "Prabhav Tiwari",
      url: "https://github.com/PrabhavTiwari11",
    },
  ],

  creator: "Prabhav Tiwari",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Prabhav Tiwari | Software Development Engineer",
    description:
      "Software Development Engineer focused on Java, Spring Boot, REST APIs, SQL, microservices and test automation.",
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Prabhav Tiwari Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prabhav Tiwari | Software Development Engineer",
    description:
      "Software Development Engineer focused on Java, Spring Boot, REST APIs, SQL, microservices and test automation.",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}