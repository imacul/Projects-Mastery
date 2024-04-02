import Image from 'next/image';
import React from 'react';
import HomeCard from "@/components/HomeCard";
import Link from 'next/link';

const OfferTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 text-white">
      <Link href="/courses">
        <HomeCard
          img="/icons/courses-1.svg"
          title="Software courses"
          description="Unlock your potential with our curated courses"
          className="bg-sky-1"
        />
      </Link>
      <Link href="/templates">
        <HomeCard
          img="/icons/templates-1.svg"
          title="Website templates"
          description="Explore our cool & beautiful templates"
          className="bg-orange-1"
        />
      </Link>
      <Link href="/mentainance">
        <HomeCard
          img="/icons/mentainance-1.svg"
          title="Mentainance services"
          description="Let us handle the technicallities for you"
          className="bg-blue-1"
        />
      </Link>
      <Link href="/website">
        <HomeCard
          img="/icons/websites-1.svg"
          title="Ready-Made websites"
          description="Lunch your busness in minutes today!"
          className="bg-yellow-1"
        />
      </Link>
    </section>
  );
}

export default OfferTypeList;