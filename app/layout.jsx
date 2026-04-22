import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingBackground from '@/components/FloatingBackground';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),

  title: {
    default: "SysAnnex | Digital Solutions for Growing Businesses",
    template: "%s | SysAnnex",
  },

  description:
    "SysAnnex delivers custom software, modern websites, mobile applications, e-commerce solutions and digital marketing services to help businesses grow faster and smarter.",

  keywords: [
    "SysAnnex",
    "Software Company Nashik",
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "Digital Marketing",
    "React Development",
    "Next.js Development",
    "Ecommerce Development",
    "WhatsApp Automation",
    "Bulk SMS Services"
  ],

  authors: [{ name: "SysAnnex" }],

  creator: "SysAnnex",

  publisher: "SysAnnex",

  openGraph: {
    title: "SysAnnex - Digital Solutions for Growing Businesses",
    description:
      "We design and develop custom software, build modern websites, create mobile applications and deliver data-driven digital marketing solutions.",
    url: "/",
    siteName: "SysAnnex",
    images: [
      {
        url: "/brand-share.jpg",
        width: 1200,
        height: 630,
        alt: "SysAnnex Digital Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SysAnnex Digital Solutions",
    description:
      "Custom Software, Website, Mobile App & Digital Marketing Company",
    images: ["/brand-share.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
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

  category: "technology",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ScrollProgress />
        <FloatingBackground />
        <Navbar />
        {children}
        <Footer/>

         <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

























