import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/MainLayout'
import MainContextProvider from '@/context/MenuContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

     <MainContextProvider>
        <MainLayout>{children}</MainLayout>
        </MainContextProvider>
      </body>
    </html>
  )
}
