import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'thother.io | The Future of Connection',
  description: 'AI-Powered Digital Transformation and Identity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body>{children}</body>
    </html>
  )
}
