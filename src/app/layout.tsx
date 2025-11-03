import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Neuwinger',
  description: 'Personal website of Max Neuwinger',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Header />
        {children}
      </body>
    </html>
  )
}