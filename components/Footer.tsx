import { contactLinks, footerLinks, socialMedia } from "../constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-1 px-6 py-4 lg:px-10 mt-20 text-white">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={82}
              height={62}
              className="m-0"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              Projects Mastery
            </p>
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Elevate your digital presence with Projects Mastery. Explore
            templates, courses, and services to fuel your online success.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 btn-gradient rounded-full"
                key={icon.alt}
              >
                <Link
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-16 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 hover:text-gray-400  font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {contactLinks.map((link) => (
            <div key={link.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((link) => (
                  <li
                    className="mt-3 hover:text-gray-400  font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <Image
            src="/icons/copyright-sign.svg"
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <Link href="/terms">
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;