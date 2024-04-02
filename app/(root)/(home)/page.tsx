import OfferTypeList from "@/components/OfferTypeList";

const Home = () => {
  return (
    <section className="flex flex-col gap-10 text-white">
      <div className="flex-center flex-col">
        <div className="bg-hero-with-opacity h-[300px] w-full rounded-[20px]" />
        <h1 className="text-2xl font-bold drop-shadow-xl my-5 antialiased sm:text-5xl">
          Master Your Web Projects with Ease.
        </h1>
        <p className="font-semibold antialiased md:subpixel-antialiased text-lg sm:text-xl">
          Explore Ready-Made Templates & Expert Courses.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className=" text-2xl">What do we offer?</h3>
        <OfferTypeList />
      </div>
    </section>
  );
};

export default Home;