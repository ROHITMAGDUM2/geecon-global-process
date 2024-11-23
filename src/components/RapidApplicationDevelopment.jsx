import React from "react";

const RapidApplicationDevelopment = () => {
  return (
    <div className="w-full">
      <div className="jumbotron text-center py-6">
        <h1 className="text-4xl font-bold">Rapid Application Development</h1>
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
                &nbsp;&nbsp;»&nbsp;&nbsp;Rapid Application Development
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            {/* Page content */}
            <div className="page-information space-y-6 text-justify mt-10 mb-10 pb-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Quicker development times, lower costs and bug elimination are
                just some of the ways that Rapid Application Development
                benefits our customers.
              </h3>

              <p className="text-gray-600 text-[15px] pb-4 mb-10">
                The term Rapid Application Development (RAD) has become more
                generic since its earliest use in 2009, where the use of an
                iterative development style and the construction of prototypes
                was first considered. These days, it is widely used to describe
                the use of various techniques to speed up application
                development.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 py-2 pb-2 max-sm:py-4 md:pt-6 md:pb-10 relative mb-[50px]">
            <div className="flex justify-center items-center w-full ms:w-1/2 p-4 pb-0">
              <div className="w-full ms:w-10/12">
                <p>
                  <img
                    className="w-full h-auto"
                    src="https://geeconglobal.com/wp-content/uploads/2019/05/legacy-software-modernisation-1440x444-1.jpg"
                    alt="customer portal functionality"
                    width="1515"
                    height="467"
                    sizes="(max-width: 1515px) 100vw, 1515px"
                    data-first-enter-image="true"
                  />
                </p>
                <div className="page-information space-y-6 text-justify mt-10 ">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Why we use Rapid Application Development
                  </h3>
                  <p className="text-gray-600 text-[15px]">
                    Since our founding in 1994, we have continually explored and
                    adopted a variety of methods, tools, and techniques to
                    enhance the quality of services we provide. We are dedicated
                    to ongoing improvement and never settle for complacency.
                  </p>
                  <p className="mt-6 text-gray-700 text-[15px]">
                    By integrating the latest RAD tools, we can effectively meet
                    the growing market demands for quicker software design and
                    deployment.
                  </p>
                  <p className="mt-6 text-gray-700 text-[15px]">
                    With our comprehensive scaffolding technology toolkit,
                    shared Wiki, developer standards, regular meetings, and
                    invaluable reusable code repositories, we are able to build
                    applications significantly faster than traditional
                    development methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HEading With arrow devlopment benifits */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            Rapid Application Development Benefits
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* prptotyping devlopment benifits */}
      <div className="flex justify-center pb-8 max-sm:py-4 md:pt-6 md:pb-6 relative mb-[30px]">
        <div className="w-full md:w-10/12 px-4 text-dark-gray text-[15px] text-justify">
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            We believe that no other company embraces our unique approach of
            combining traditional and new development methods. By selecting
            Geecon for your software solutions, you will not only receive
            top-notch software but also benefit from our RAD approach, ensuring:
          </p>
          <ul className="mt-4 ml-6 space-y-4 text-dark-gray text-[15px]">
            <li>
              <strong>Quicker development times</strong> – We automate the
              coding of standard application functions such as adding and
              viewing records, displaying lists of records, searching,
              filtering, and all general database interactions. &nbsp;This
              significantly cuts down on the time required to construct the
              application, leading to earlier delivery.
            </li>
            <li>
              <strong>Lower costs</strong> – By eliminating the necessity to
              write fundamental code, you pay for less development time,
              consequently substantially decreasing the overall cost of the
              project.
            </li>
            <li>
              <strong>Uncompromised planning</strong> – Even though we're
              working at a rapid pace, we don't compromise on quality. We are
              diligent in maintaining our personal touch and meticulous planning
              approach. Our method involves merging prototyping with rapid
              application development tools, ensuring the delivery of a
              thoughtfully crafted, comprehensive blueprint for your new system
              or application.
            </li>
            <li>
              <strong>
                Utilizing standardized coding that eradicates bugs.
              </strong>{" "}
              – Our automation tools follow a standardized process to generate
              foundational code.&nbsp;This uniformity eradicates bugs and
              facilitates long-term support for the code.
            </li>
          </ul>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            If you’d like to find out more about how our use of rapid
            application development could speed up your software development,
            give our team a call on 080 0987 5449.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RapidApplicationDevelopment;
