import type { Metadata } from "next";
import { DynaPuff } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const dynaPuff = DynaPuff({
  variable: "--font-dyna-puff",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Fu",
  description: "Hmm, what's this?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dynaPuff.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
