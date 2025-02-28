import type { Metadata } from 'next'
import './globals.css'
import { inter } from './settings'
import Link from 'next/link'

export const metadata: Metadata = { title: 'MyIMDB', description: 'Movies app' }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <nav className="flex items-center gap-3 bg-zinc-300 p-2 font-mono font-extrabold dark:bg-zinc-800">
          <Link href="/">Link to homepage</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
