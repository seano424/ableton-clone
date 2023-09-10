import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ableton Site Clone',
  description: 'Frontend Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          inter.className,
          'bg-white xl:bg-stone-100'
        )}
      >
        {children}
      </body>
    </html>
  )
}
