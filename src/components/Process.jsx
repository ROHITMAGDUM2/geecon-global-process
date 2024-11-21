import React from "react";

const Process = () => {
  const processData = [
    {
      title: "Working With Us",
      description:
        "When you work with a company, you want to know what to expect up-front. Are they the right fit for your company, can they deliver what you need at the right price and on-time?",
      image:
        "https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/link-work-with-us-651x372.jpg",
      link: "#",
    },
    {
      title: "Prototyping & Specification Writing",
      description:
        "When we build software, we leave nothing to chance. We don’t assume; we ask, understand and articulate into an exact plan. The tangibility of this plan is the prototype.",
      image:
        "https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/contact-bg-700x156.png",
      link: "#",
    },
    {
      title: "Rapid Application Development",
      description:
        "The term Rapid Application Development (RAD) has become more generic since its earliest use in 1991, where the use of an iterative development style and the construction.",
      image:
        "https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/link-rapid-application-development-1-651x372.jpg",
      link: "#",
    },
    {
      title: "Agile Software Development Methodology",
      description:
        "By using agile software development, we can ensure that you get a flexible approach to planning, improvement via a continuously evolving product.",
      image:
        "https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/link-agile-651x372.jpg",
      link: "#",
    },
    {
      title: "Technology Stack",
      description:
        "Geecon Software creates robust applications using the Microsoft Stack, various front end web technologies and mobile apps using Xamarin.",
      image:
        "https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/technology-stack-2-copy-700x216.jpg",
      link: "#",
    },
  ];

  return (
    <div className="w-full">
      <div className="jumbotron text-center">
        <h1 className="text-4xl font-bold">Process</h1>
      </div>
      <div className="flex flex-wrap justify-center ml-4 mr-4">
        <div className="w-full sm:w-full md:w-10/12 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="p-3 mb-4 bg-gray-200 rounded list-none flex flex-wrap text-[15px] font-sans">
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mb-8 text-justify">
              <h2 className="text-2xl mb-4 font-bold font-sans text-gray-900">
                We’ll deliver your software project quickly, efficiently and
                on-budget using our field-proven, agile processes.
              </h2>
              <p className="text-gray-700 text-[15px]">
                Our accreditations are recognised standards that require a
                business to implement and maintain a Quality Management System
                as well as a Security Protocol designed to meet its business
                goals and objectives.
              </p>
              <p className="text-gray-700 text-[15px]">
                We have developed a streamlined software delivery process,
                encompassing project planning, agile methodologies, thorough
                technical design, rapid coding and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-heading-with-arrow text-center pt-10 pb-10 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl">Process</h3>
        </div>
        <div className="down-arrow"></div>
      </div>

      <div className="container">
        <div className="bg-white">
          <div className="flex flex-wrap -mr-4 -ml-4">
            {/* <!-- Post 1 --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-mds overflow-hidden"
                >
                  <div
                    className="h-64 w-full object-contain bg-cover bg-center mb-5"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="p-6">
                    <h2 className="text-3xl text-gray-800 font-semibold mb-10 text-start">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 text-justify mb-[30px] text-[15px]">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="text-blue-500 text-[15px] hover:underline flex items-center justify-end text-end p-4"
                    >
                      Read More <i className="ml-1 fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
