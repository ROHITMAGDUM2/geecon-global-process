import React from "react";

const WorkingWithUs = () => {
  return (
    <div className="w-full">
      <div className="jumbotron text-center">
        <h1 className="text-4xl font-bold">Working With Us</h1>
      </div>
      <div className="flex flex-col items-center">
        {/* Breadcrumb Section */}
        <div className="w-full md:w-10/12">
          <div className="flex justify-center">
            <div className="w-full mb-5">
              <div className="bread-crumb text-sm text-gray-800 px-[15px] py-2">
                <a href="" className="text-blue-500">
                  Home
                </a>
                &nbsp;&nbsp;»&nbsp;&nbsp;Working With Us
              </div>
            </div>
          </div>
          <div class="container mx-auto px-4">
            {/* Page content */}
            <div className="page-information space-y-6 text-justify mt-10 mb-6">
              <p className="hidden">
                Working with us, Working with us in Basingstoke, Working with us
                in London, Working with us in Near Me, Working with us in UK
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Whether you’re large or small, blue-chip or not-for-profit;
                we’ll provide you with the same friendly, can-do, responsive,
                and professional service.
              </h3>

              <p className="text-gray-600 text-[15px]">
                When engaging with a company, it's crucial to have clear
                expectations upfront. Questions about whether they align with
                your company's needs, deliver on requirements at a reasonable
                cost and within deadlines, and provide a positive overall
                experience are paramount. At Geecon, we dedicate ourselves to
                ensuring that our collaboration is not only the right fit but
                also a positive and satisfying experience, making it one you'd
                choose to replicate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingWithUs;
