"use client"

import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { offers } from '@/constants';

import Image from 'next/image';
import Link from 'next/link';
import Categories from "@/components/Categories";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const page = () => {

  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit/debit cards and PayPal for payments.",
      isOpen: false,
    },
    {
      question: "What type of web templates are available on Projects Mastery?",
      answer:
        "Projects Mastery offers a diverse range of templates including business, portfolio, e-commerce, and more, catering to various website needs.",
      isOpen: false,
    },
    {
      question: "Are the courses beginner-friendly or for advanced users?",
      answer:
        "Our courses cater to all skill levels, offering a range from beginner basics to advanced techniques, ensuring accessibility for learners at any stage.",
      isOpen: false,
    },
    {
      question:
        "How often are new templates or courses added to Projects Mastery?",
      answer:
        "We regularly update our offerings, introducing fresh templates and courses to keep up with the latest trends and advancements in web development.",
      isOpen: false,
    },
    {
      question: "Do full-stack solutions come with additional support?",
      answer:
        "Yes, full-stack solutions on Projects Mastery include support services to assist users in deploying and customizing their websites or applications.",
      isOpen: false,
    },
    {
      question: "Can I customize the templates available on Projects Mastery?",
      answer:
        "Absolutely! Our templates are designed for easy customization, allowing users to tailor designs to match their brand or specific requirements.",
      isOpen: false,
    },
    {
      question: "Are there any prerequisites for enrolling in the courses?",
      answer:
        "Most of our courses have no prerequisites and are structured to accommodate learners with varying levels of experience in web development.",
      isOpen: false,
    },
    // Add more FAQ objects as needed
  ]);
  
  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      );
      return updatedFaqs;
      
    });
  };
  
  return (
    <>
      <section className="bg-contain py-10 md:py-10 mt-[8rem]">
        <div className="wrapper grid grid-cols gap-3 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="h1-bold text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-red-500">
              Master Your Web Projects with Ease.
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-white">
              Explore Ready-Made Templates & Expert Courses.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
         <div className="mt-8 mx-10">
        <video autoPlay loop muted className="w-full rounded-md">
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>

        </div>
      </section>
      {/* <section><BackgroundGradientAnimation /></section> */}
      <section className="sky_bg my-8 flex flex-col gap-8 md:gap-12">
        <div className="wrapper">
          <h2 className="h2-bold text-blue-500 my-5">What do we offer?</h2>
          <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-1 2xl:gap-0">
            {offers.map((offer) => (
              <div className="box_bg flex  flex-col md:flex-row py-2 rounded-md my-5 shadow-2xl">
                <div className="flex-1 md:w-[50%] mb-3 px-8">
                  <div className="flex h3-medium text-blue-500 my-3">
                    {offer.head}
                  </div>
                  <p className="text-sm md:text-lg text-white">{offer.title}</p>
                  <Button
                    size="lg"
                    asChild
                    className="button w-full my-5 sm:w-fit"
                  >
                    <Link href={offer.route}>{offer.button}</Link>
                  </Button>
                </div>
                <div className="mt-8 md:mt-0 md:w-[50%]">
                  <Image
                    src={offer.image}
                    alt="Hero Image"
                    width={450}
                    height={100}
                    className="max-h-[70vh] md:max-h-full object-contain rounded-md mt-10 object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Unlock Your Digital Potential with Our Web Templates and Courses.
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Start crafting your online presence and honing your skills with our
            curated collections.
          </p>
          <Button size="lg" asChild className="button w-full my-4 sm:w-fit">
            <Link href="/web_templates">Get Started</Link>
          </Button>
        </div>
        <Categories />
      </section>
      <section className=" sky_bg my-8 flex justify-center gap-8 md:gap-12">
        <div className="box_bg px-10 flex flex-col justify-center py-10 my-6 rounded-md shadow-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-500 my-5 font-bold">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {faq.question}
                  </h2>
                  <button
                    className="text-blue-500 mx-8 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.isOpen ? "Close" : "Open"}
                  </button>
                </div>
                {faq.isOpen && (
                  <p className="mt-2 text-base md:text-lg lg:text-xl text-white">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;