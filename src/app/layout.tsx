import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-ibm-plex-serif",
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
    <html lang="en">
      <head>
        {/* <link
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
        ></script> */}
      </head>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
