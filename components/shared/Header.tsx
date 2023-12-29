import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavItems from '@/components/shared/NavItems';
import MobileNav from '@/components/shared/MobileNav';

import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex items-center justify-between">
        <Link className="flex justify-center items-center gap-2" href="/">
          <Image
            src="/assets/logo.png"
            alt="Projects Matery Logo"
            width={105}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className=" flex items-center gap-4">
          <SignedIn>
            <div className="btn-color px-5 py-5 rounded-full">
              <UserButton afterSignOutUrl="/" />
            </div>
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button className="btn-color rounded-full shadow-2xl text-lg font-medium  text-white">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedOut>
            <Button className="btn-color rounded-full shadow-2xl text-lg font-medium  text-white">
              <Link href="/sign-up">Signup</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;