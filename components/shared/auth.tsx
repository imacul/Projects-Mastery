"use client";

import { authLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Auth = () => {
  const pathName = usePathname();

  return (
    <ul className="md:flex-between text-blue-500 font-bold text-5xl flex flex-col  w-full gap-5 md:flex-row">
      {authLinks.map((Links) => {
        const isActive = pathName === Links.route;
        return (
          <li
            key={Links.route}
            className={`${
              isActive && "text-white"
            } flex-center p-medium-16 md:hidden block whitespace-nowrap`}
          >
            <Link href={Links.route}>{Links.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Auth;
