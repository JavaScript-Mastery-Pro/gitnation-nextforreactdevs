import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "JS Mastery",
  description: "Gain Real-world Experience And Land That Dev Job You've Always Imagined",
  openGraph: {
    title: 'JS Mastery',
    description: "Gain Real-world Experience And Land That Dev Job You've Always Imagined",
    url: 'https://www.jsmastery.pro/',
    siteName: 'JS Mastery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
        alt: 'Gain Real-world Experience And Land That Dev Job You\'ve Always Imagined',
      },
    ],
  },
  keywords: [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Tailwind CSS',
    'Docker',
  ],
  twitter: {
    card: 'summary_large_image',
    creator: 'JavaScript Mastery',
    images: [
      {
        url: 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
        alt: 'Gain Real-world Experience And Land That Dev Job You\'ve Always Imagined',
      },
    ],
  },
  robots: {
    follow: true,
    index: true,
  },
  other: {
    "facebook-domain-verification": "7o06evkaj1i5iky2fmionp1u89g423",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
