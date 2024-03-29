"use client"

import React from 'react';
import { FaBars } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import NavItems from './NavItems';
// import Auth from './auth';


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <FaBars className="w-8 h-8 text-purple-500 " />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-gradient md:hidden">
          <Image
            src="/assets/logo.png"
            alt="Projects Mastery"
            width={64}
            height={64}
          />
          <Separator />
          <NavItems />
          {/* <Auth /> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;