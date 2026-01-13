import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Siddidharmika Software Solutions | Digital Transformation & Cloud Consulting",
  description: "Leading digital transformation, cloud, database, and AI consulting company based in Hyderabad delivering enterprise-grade solutions globally.",
  metadataBase: new URL('https://siddidharmika.com'), // Placeholder URL, best practice for SEO
  openGraph: {
    title: "Siddidharmika Software Solutions",
    description: "Leading digital transformation, cloud, database, and AI consulting company.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.variable, "antialiased flex flex-col min-h-screen")}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
