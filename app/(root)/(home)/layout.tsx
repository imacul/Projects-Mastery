
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />  
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div>{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default HomeLayout;
