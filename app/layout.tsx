import { Kanit } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const Fonts = Kanit({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Projects Mastery",
  description: "Projects Mastery: Elevating Web Development Excellence",
  other: {
    "twitter:image": "/images/pm_thumbnail.png",
    "twitter:card": "summary_large_image",
    "og:url": "projects-mastery.vercel.app",
    "og:image": "/images/pm_thumbnail.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Fonts.className} bg-gradient`}>{children}</body>
    </html>
  );
}
