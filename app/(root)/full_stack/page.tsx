import { courses } from "@/constants";
import Image from "next/image";

const CoursesPage = () => {
  return (
    <main className="h-full my-5 wrapper flex items-center justify-center flex-col">
      <section className="bg-contain py-10 md:py-10 mt-[8rem]">
        <div className="grid grid-cols gap-3 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="h1-bold text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-blue-500">
              Full-Stack Websites <br />
              <span className="text-sm font-bold md:text-lg">-{">"} Coming Soon!</span>
            </h1>
            <p className="p-regular-20 md:p-regular-24 text-white">
              Get ready to launch with our ready-made full-stack websites. Stay
              tuned for updates!
            </p>
          </div>
          <Image
            src="/assets/stack.jpg"
            alt="Laptop Image"
            width={500}
            height={220}
            className="max-h-[80vh] rounded-md object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
