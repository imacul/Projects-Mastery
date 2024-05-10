"use client";

import { formUrlQuery } from '@/sanity/utils';
import { Button } from './ui/button';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const links = [
  "All",
  "HTML/CSS Templates",
  "React Templates",
  "Angular Templates",
  "Vue Templates",
  "WordPress Themes",
  "Landing Pages",
  "E-commerce Templates",
  "Other",
];

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
  console.log("Filter link clicked:", link);
  console.log("Current searchParams:", searchParams);

  let newUrl = "";

  if (active === link) {
    setActive("");

    if (searchParams.toString() === "") {
      const params = new URLSearchParams();
      params.set("category", "");
      newUrl = formUrlQuery({
        params: params.toString(),
      });
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("category");
      newUrl = formUrlQuery({
        params: params.toString(),
      });
    }
  } else {
    setActive(link);

    if (searchParams.toString() === "") {
      const params = new URLSearchParams();
      params.set("category", link.toLowerCase());
      newUrl = formUrlQuery({
        params: params.toString(),
      });
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", link.toLowerCase());
      newUrl = formUrlQuery({
        params: params.toString(),
      });
    }
  }

  router.push(newUrl, { scroll: false });
};

  
  return (
    <ul className="text-white body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <Button
          variant="ghost"
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? 'btn-gradient' : '' 
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </Button>
      ))}
    </ul>
  );
}

export default Filters;