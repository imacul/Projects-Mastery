import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

interface HomeCardProps {
  className: string
  img: string;
  title: string;
  description: string;
}

const HomeCard = ({ img, title, description, className, }: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-sky-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
    >
      <div className="flex-center w-14 h-14 glassmorphism rounded-[10px]">
        <Image src={img} alt="courses" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-white text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;