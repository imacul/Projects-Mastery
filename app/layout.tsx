import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Projects Mastery",
  description: "Projects Mastery: Elevating Web Development Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="Ulogdvfcdsxs_refvgtvfcgcvvcfdfcxdos"
        />
      </Head>
      <div className="bg-gradient">
        <body className={poppins.className}>{children}</body>
      </div>
    </html>
  );
}
