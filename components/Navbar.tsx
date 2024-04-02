
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
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
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">Projects Mastery</p>
      </Link>

      <div className="flex-between gap-5">
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar;