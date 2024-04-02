import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";

const TemplatesPage = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center bg-blue-1 relative min-h-[274px] flex-col rounded-xl background text-center">
          <h1 className="heading2 sm:heading1 mb-6 text-center text-white">
            Projects Mastery Templates
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters />
      <p>Coming soon!</p>
    </main>
  );
};

export default TemplatesPage;
