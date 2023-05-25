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
  description: "David Phan's Personal Portfolio",
  url: "https://davidphan.dev",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  icons: {
    favicon: "/favicon.ico",
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  images: [
    {
      url: "https://davidphan.dev/preview.webp",
      width: 1200,
      height: 600,
    },
  ],
  openGraph: {
    title: "David Phan | Portfolio",
    description: "David Phan's Personal Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
