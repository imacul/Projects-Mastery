import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { getResources } from '@/sanity/actions';



const Fonts = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

const Home = async () => {
  const resources = await getResources({
    query: '',
    category: '',
    page: '1',
  });


  return (
    <main>
      <section className="flex flex-col mt-14 sm:mt-36 h-full justify-center items-center">
        <div className="space-y-6 text-center text-white">
          {
            "Currently using a temporary link. Stay tuned for our upcoming branded domain!"
          }
          <h1
            className={`${Fonts.className} text-4xl my-5 antialiased sm:text-6xl`}
          >
            Master Your Web Projects with Ease.
          </h1>
          <p className="font-semibold antialiased md:subpixel-antialiased text-lg sm:text-xl">
            Explore Ready-Made Templates & Expert Courses.
          </p>

          <Link href="#explore">
            <Button variant="custom" size="lg" className="my-4">
              Explore Now!
            </Button>
          </Link>
        </div>
        <SearchForm />
      </section>
      <section
        className="flex-center mt-6 w-full flex-col sm:mt-20"
        id="explore"
      >
        <Filters />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
           {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}               
              />
            ))
          ): (
           <p className="font-bold text-xl text-white">
                No resources found
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;