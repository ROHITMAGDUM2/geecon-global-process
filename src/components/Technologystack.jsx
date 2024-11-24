import React from "react";

const Technologystack = () => {
  return (
    <div className="w-full bg-bodyColor">
      <div className="jumbotron text-center py-6">
        <h1 className="text-4xl font-bold">Technology stack</h1>
      </div>
      <div className="flex flex-col items-center">
        {/* Breadcrumb Section */}
        <div className="w-full md:w-10/12 ">
          <div className="flex justify-center">
            <div className="w-full mb-2 bg-customGray ">
              <div className="bread-crumb text-sm text-gray-800 px-[15px] py-2">
                <a href="" className="text-blue-500">
                  Home
                </a>
                &nbsp;&nbsp;»&nbsp;&nbsp;Technology stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologystack;
