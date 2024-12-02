import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZKrypt - AI Layer on Bitcoin',
  description: 'Powered by FHE and Native ZK Proofs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap" rel="stylesheet" />
      </head>
      <body className="jaro-font" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

