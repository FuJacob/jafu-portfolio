import type { Metadata } from "next";
import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const displayFont = Shantell_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jacob Fu - Developer & Builder",
  description:
    "cs & finance student at uwaterloo. interested in infrastructure, distributed systems, and building products that ship fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
