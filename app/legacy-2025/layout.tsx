import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Legacy of Faith",
  description: "Father's Day 2025 Bible Study",
  icons: {
    icon: "./legacy/favicon.ico", 
    apple: "./legacy/apple-touch-icon.png",
    shortcut: "./legacy/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const bodyClass = `
    antialiased 
    absolute 
    md:static
    bg-(image: url('/legacy/background.jpg') no-repeat center center fixed)
    bg-cover
    `;

  return (
    
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>

      <body
        className={bodyClass}
      >
        {children}
      </body>
    </html>
  );
}
