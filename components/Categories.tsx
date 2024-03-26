import React from 'react'

const Categories = () => {
  return (
    <main className="my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            E-commerce Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Beautiful e-commerce website templates
          </p>
        </div>
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Portfolio Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Showcase your work with stunning portfolio templates
          </p>
        </div>
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Blog Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Start your own blog with our versatile blog templates
          </p>
        </div>
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Business Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Professional templates for your business needs
          </p>
        </div>
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Education Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Engaging templates for educational purposes
          </p>
        </div>
        <div className="box_bg px-10 flex flex-col justify-center py-10 mt-6 rounded-md shadow-2xl">
          <h1 className="md:h2-medium font-bold text-xl my-4 text-black">
            Personal Website Templates
          </h1>
          <p className="text-base font-normal my-4 md:text-xl text-white">
            Create a unique online presence with personal website templates
          </p>
        </div>
      </div>
    </main>
  );
}

export default Categories;