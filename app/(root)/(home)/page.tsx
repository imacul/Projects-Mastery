import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const Fonts = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});


const Home = () => {
  return (
    <main>
    <section className="flex flex-col mt-14 sm:mt-36 h-full justify-center items-center">
      <div className="space-y-6 text-center text-white">
        <h1
          className={`${Fonts.className} text-4xl my-5 antialiased sm:text-6xl`}
        >
          Master Your Web Projects with Ease.
        </h1>
        <p className="font-semibold antialiased md:subpixel-antialiased text-lg sm:text-xl">
          Explore Ready-Made Templates & Expert Courses.
        </p>
      
        <Button variant="custom" size="lg">Explore Now!</Button>
      </div>
      </section>
      <section>
        <SearchForm />
      </section>
    </main>
  );
};

export default Home;