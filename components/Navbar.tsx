"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex-between fixed z-10 w-full bg-dark-1 px-6 py-4 lg:px-10">
        <Link href="/" className="flex flex-center gap-1">
          <Image
            src="/images/logo.png"
            width={62}
            height={62}
            alt="projects mastery logo"
            className="max-sm:text-xl"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            PM
          </p>
        </Link>

        <div className="mx-36 flex-1 items-center hidden md:flex gap-6">
          {sidebarLinks.map((link) => {
            const isActive =
              pathName === link.route || pathName.startsWith(`${link.route}/`);

            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  "flex items-center text-gray-400 gap-4 p-4 rounded-lg justify-start",
                  { "text-white": isActive }
                )}
              >
                <Image
                  src={link.imageUrl}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="test-lg font-semibold max-lg:hidden">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div>
          <MobileNav />
        </div>
    </nav>
  );
};

export default Navbar;
