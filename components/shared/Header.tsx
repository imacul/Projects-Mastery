import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavItems from '@/components/shared/NavItems';
import MobileNav from '@/components/shared/MobileNav';

import { Button } from '@/components/ui/button';


const Header = () => {
  return (
    <header className="w-full bg-purple-950 fixed px-2">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex gap-2 items-center justify-center">
          <Image
            src="/assets/logo.png"
            alt="Projects Matery Logo"
            width={70}
            height={38}
            className="mt-6 md:w-[6rem]"
          />
          <p className="h5-bold hidden md:block text-white">Projects Mastery</p>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className=" flex items-center gap-4">
          {/* <div className="btn-color px-2 py-2 md:px-5 md:py-5 rounded-full">
              <UserButton afterSignOutUrl="/" />
            </div> */}
          <MobileNav />

          {/* <Button className="btn-color hidden md:block rounded-full shadow-md text-white h5-medium">
            <Link href="/sign-in">Login</Link>
          </Button>

          <Button className="btn-color hidden md:block rounded-full shadow-md text-white h5-medium">
            <Link href="/sign-up">Signup</Link>
          </Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;