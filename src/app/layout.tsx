import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "David Phan | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          async
          defer
          src="https://kit.fontawesome.com/7b916875b1.js"
          crossOrigin="anonymous"
          rel="preload"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
