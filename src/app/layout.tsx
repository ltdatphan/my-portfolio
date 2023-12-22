import './globals.css'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts/Providers'
import Head from 'next/head'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
    title: 'David Phan | Portfolio',
    description: "David Phan's Personal Portfolio",
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    alternates: {
        canonical: 'https://www.davidphan.dev/',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'David Phan | Portfolio',
        description:
            'David Phan is a recent Computer Science graduate who is interested in Software Development.',
        url: 'https://davidphan.dev',
        type: 'website',
        images: [
            {
                url: 'https://davidphan.dev/preview.webp',
                width: 1200,
                height: 600,
            },
        ],
    },
    twitter: {
        title: 'David Phan | Portfolio',
        description: "David Phan's Personal Portfolio",
        images: [
            {
                url: 'https://davidphan.dev/preview.webp',
                width: 1200,
                height: 600,
            },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
