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
        <link
          rel="preconnect"
          href="https://ka-f.fontawesome.com"
          crossOrigin="anonymous"
        ></link>
        <script
          async
          defer
          src="https://kit.fontawesome.com/7b916875b1.js"
          crossOrigin="anonymous"
          rel="preload"
        ></script>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com/"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
