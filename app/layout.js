import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clemens | Incontinence products and solutions",
  description: "Trust Clemens to live every moment with confidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
          <Header />
          <MobileNav />
          {children}
          <Footer />
      </body>
    </html>
  );
}
