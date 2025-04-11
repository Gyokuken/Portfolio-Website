import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amyzz_zz | Amitanshu",
  description: "Full-stack developer and AI enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  )
}


import './globals.css'