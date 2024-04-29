"use client";

import { Button } from './ui/button';
import { useState } from 'react';

const links = ['All', 'eCommerce', 'Bloging', 'Business'];

const Filters = () => {
  const [active, setActive] = useState('');

  const handleFilter = (link: string) => { 
    setActive(link);
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