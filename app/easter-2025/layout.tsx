import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import GoogleAnalytics from "../googleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easter 2025",
  description: "Event Navigation Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      
      <GoogleAnalytics trackingId="UA-154157307-1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased absolute md:static`}
      >
        {children}
      </body>
    </html>
  );
}
