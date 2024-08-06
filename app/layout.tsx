import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Q06-Book Store API",
 description: "งานหลังเรียนสัปดาห์ที่ 6",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en">
     <body className={inter.className}>{children}</body>
   </html>
 );
}