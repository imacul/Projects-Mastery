"use client";

import { formUrlQuery } from "@/sanity/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

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
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    router.push(newUrl, { scroll: false });
  }


  return (
    <ul className="text-white body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <Button
          variant="ghost"
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "btn-gradient" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </Button>
      ))}
    </ul>
  );
};

export default Filters;
