import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Oswald } from "next/font/google";

// Standard font for reading stats and paragraphs
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Heavy, athletic font for titles and numbers
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans bg-[#FAF8F5] text-tufts-brown antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
