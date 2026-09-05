import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccessibilityWidget from "../components/AccessibilityWidget";
import ChatbotWidget from "../components/ChatbotWidget";

import Preloader from "../components/Preloader";
import Script from "next/script";
export const metadata = {
  metadataBase: new URL("https://merlinflow.in"),
  title: "MerlinFlow Technologies | Premium SaaS Solutions",
  description: "Next-generation ERP solutions for Education, Health, and Hospitality. Empowering businesses with innovative technology.",
  keywords: ["ERP", "SaaS", "Education ERP", "Health ERP", "Hospitality ERP", "MerlinFlow", "MerlinFlow Technologies", "Software", "Business Solutions", "Cloud ERP"],
  authors: [{ name: "MerlinFlow Technologies" }],
  creator: "MerlinFlow Technologies",
  publisher: "MerlinFlow Technologies",
  openGraph: {
    title: "MerlinFlow Technologies | Premium SaaS Solutions",
    description: "Next-generation ERP solutions for Education, Health, and Hospitality.",
    url: "https://merlinflow.in",
    siteName: "MerlinFlow Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MerlinFlow Technologies | Premium SaaS Solutions",
    description: "Next-generation ERP solutions for Education, Health, and Hospitality.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4GNDXYJLZ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4GNDXYJLZ0');
          `}
        </Script>
        <Preloader />
        <div id="main-content">
          <Navbar />
          {children}
          <Footer />
        </div>
        
        {/* Global Floating Widgets */}
        <AccessibilityWidget />
        <ChatbotWidget />

      </body>
    </html>
  );
}
