import React from "react";

const Technologystack = () => {
  return (
    <div className="w-full">
      <div className="jumbotron text-center py-6">
        <h1 className="text-4xl font-bold">Technology stack</h1>
      </div>
      <div className="flex flex-col items-center">
        {/* Breadcrumb Section */}
        <div className="w-full md:w-10/12">
          <div className="flex justify-center">
            <div className="w-full mb-2">
              <div className="bread-crumb text-sm text-gray-800 px-[15px] py-2">
                <a href="" className="text-blue-500">
                  Home
                </a>
                &nbsp;&nbsp;»&nbsp;&nbsp;Technology stack
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            {/* Pagecontent */}
            <div className="page-information space-y-6 text-justify mt-10 mb-10 pb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologystack;
