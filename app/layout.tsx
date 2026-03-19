import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THOTHER.IO | Design-led 3D Printing Collective',
  description: 'A design-led 3D printing fashion brand exploring the boundary between digital and physical.',
  icons: {
    icon: 'https://claw.starryambition.com/8711438752/202603/thother-logo-final-v6.png',
  },
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
