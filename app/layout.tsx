import type { Metadata } from 'next'
import './custom.css'

export const metadata: Metadata = {
  title: 'Nexgrow Digital',
  description: 'Modern web experiences and growth-focused marketing systems built to help your business scale faster.',
  icons: {
    icon: '/facon-32x32.ico',
    shortcut: '/facon-32x32.ico',
    apple: '/facon-32x32.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
