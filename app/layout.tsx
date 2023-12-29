import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "Projects Mastery",
  description: "Projects Mastery: Elevating Web Development Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <div className="bg-gradient">
          <body className={poppins.className}>{children}</body>
        </div>
      </html>
    </ClerkProvider>
  );
}
