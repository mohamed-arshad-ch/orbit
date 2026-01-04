import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbit Consultancy | Abroad Jobs & Tour Packages",
  description: "Premier consultancy for abroad job vacancies and exclusive tour packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
