import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ФЕНИКС - Торговая площадка",
  description: "Ваша надежная торговая площадка с тысячами товаров по выгодным ценам",
  icons: {
    icon: [
      { url: '/feniks192.png', sizes: '192x192' }
    ]
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}