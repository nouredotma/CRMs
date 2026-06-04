import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { PersistentLayout } from "@/components/layouts/persistent-layout"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nextera",
    template: "%s | Nextera",
  },
  description: "Nextera CRM — clients, leads, projects, invoices, and more",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <PersistentLayout>{children}</PersistentLayout>
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
