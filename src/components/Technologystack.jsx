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
          {/* Pagecontent */}
          <div className="container mx-auto px-4">
            <div className="page-information space-y-6 text-justify mt-10 mb-10 pb-4">
              <h3 className="mt-12 mb-4 text-2xl md:text-3xl font-semibold text-gray-800">
                Geecon Software creates robust applications using the Microsoft
                Stack, various front end web technologies and mobile apps using
                Xamarin.
              </h3>
            </div>
          </div>
        </div>
        {/* DevelopmentFrameworks */}
        <div className="container mx-auto px-4 pb-4">
          <h3 className="text-gray-700 text-2xl text-center lg:text-left mb-0 mt-[40px] font-light">
            Development Frameworks
          </h3>
          <hr className="border-gray-300 mt-2 mb-10" />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 text-center lg:text-left">
            {[
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_dot_net_framework.svg",
                alt: "a1 sporting speakers",
                title: "ASP.NET CORE",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_asp_dot_net_core.svg",
                alt: "silverback studios",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_asp_dot_net_webforms.png",
                alt: "white label software developer",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_asp_dot_net_webforms-1.png",
                alt: "oseasons",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_asp_dot_net_winforms.png",
                alt: "secure client portal software",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_asp_dot_net_presentation_windows_foundation.png",
                alt: "a1 sporting",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_xamarin.svg",
                alt: "rahul international",
              },
            ].map((item, index) => (
              <a key={index} href="#" className="block">
                <div className="box-tech" data-title={item.title || undefined}>
                  <img
                    className="w-full rounded border border-gray-300 shadow-sm"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Languages */}
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-gray-700 text-2xl text-center lg:text-left mb- font-light">
            Languages
          </h3>
          <hr className="border-gray-300 mt-2 mb-10" />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 text-center lg:text-left">
            {[
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_c_sharp.svg",
                alt: "hmrc gift aid portal",
                title: "ASP.NET CORE",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_javascript.svg",
                alt: "web services label software",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_typescript.svg",
                alt: "chatham chambers",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_vb_dot_net.svg",
                alt: "geecon",
              },
            ].map((item, index) => (
              <a key={index} href="#" className="block">
                <div className="box-tech" data-title={item.title || undefined}>
                  <img
                    className="w-full rounded border border-gray-300 shadow-sm"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Web technologies*/}
        <div className="container mx-auto px-4 py-5">
          <h3 className="text-gray-700 text-2xl text-center lg:text-left mb- font-light">
            Web Technologies/Libraries
          </h3>
          <hr className="border-gray-300 mt-2 mb-10" />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 text-center lg:text-left">
            {[
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_html5.svg",
                alt: "bespoke business applications",
                title: "HTML5",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_css3.svg",
                alt: "bespoke business apps",
                title: "CSS3",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_bootsrap.svg",
                alt: "data 360 solutions",
                title: "Bootstrap",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_knockout.svg",
                alt: "open source client portal software",
                title: "Knockout.js",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_angular.svg",
                alt: "software development for startups",
                title: "Angular",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_react.svg",
                alt: "white label software development",
                title: "React",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_jquery.svg",
                alt: "customer portal software",
                title: "jQuery",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_sass.svg",
                alt: "operational systems",
                title: "Sass",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_kendo.png",
                alt: "sporting speakers",
                title: "Kendo",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/03/logo_vue.svg",
                alt: "chatham chambers solicitors",
                title: "Vue.js",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_signal.png",
                alt: "bespoke databases",
                title: "SignalR",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_highcharts.svg",
                alt: "data 360",
                title: "Highcharts",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_nodejs.png",
                alt: "bespoke crm systems",
                title: "Node.js",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_electron.svg",
                alt: "rightnow crm",
                title: "Electron",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_googlemaps.png",
                alt: "trattoria ibleo restaurant",
                title: "Google Maps",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_leaflet.svg",
                alt: "compassion app",
                title: "Leaflet",
              },
              {
                src: "https://www.one-beyond.com/app/uploads/2018/01/logo_canvas.svg",
                alt: "secure portal software",
                title: "Canvas",
              },
            ].map((tech, index) => (
              <a key={index} href="#" className="block" title={tech.title}>
                <img
                  className="w-full rounded border border-gray-300 shadow-sm"
                  src={tech.src}
                  alt={tech.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologystack;
