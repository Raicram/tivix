import './globals.scss'
import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'

const inter = Gabarito({
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Tivix',
  description: 'Grab a free minifig',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
