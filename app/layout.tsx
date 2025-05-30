import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./googleAnalytics";

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
        className={`antialiased absolute md:static`}
      >
        {children}
      </body>
    </html>
  );
}
