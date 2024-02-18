import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Projects Matery Logo"
            width={70}
            height={38}
            className="md:w-[6rem]"
          />
        </Link>

        <p className="text-white">© 2024 Projects Mastery. All Rights reserved!</p>
      </div>
    </footer>
  );
}

export default Footer;