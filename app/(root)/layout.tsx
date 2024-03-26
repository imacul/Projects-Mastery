import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Head from "next/head";

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
          content="YlUoElmPLKFdX3ncwEE_ct6UXctyiaWdN6IdpsMsNos"
        />
      </Head>
      <div className="flex h-screen w-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </html>
  );
}
