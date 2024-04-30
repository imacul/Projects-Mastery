import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
import Header from "@/components/Header";


import { Button } from "@/components/ui/button";
import { getResources, getResourcesPlaylist } from '@/sanity/actions';
import { Pacifico } from "next/font/google";


export const revalidate = 900;

const Fonts = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

interface props{
  searchParams: {[key: string]: string | undefined}
}

const Home = async ({searchParams}: props) => {
  console.log(searchParams);
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  const resourcesPlaylist = await getResourcesPlaylist();

  console.log(resourcesPlaylist);


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
        <Filters />
      </section>

      {(searchParams?.query ||
        searchParams?.category ||
        !searchParams?.query ||
        !searchParams?.category) && (
        <section
          className="flex-center mt-6 w-full flex-col sm:mt-20"
          id="explore"
        >
          <Header
            query={searchParams?.quary || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className="font-bold text-xl text-white">No resources found</p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section
          key={item._id}
          className="flex-center mt-6 w-full flex-col sm:mt-20"
        >
          <h1 className="heading3 self-start text-white">{item.title}</h1>
          <div className="mt-12 flex flex-wrap w-full justify-center gap-16 sm:justify-start">
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;