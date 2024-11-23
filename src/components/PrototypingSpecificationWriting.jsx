import React from "react";

const PrototypingSpecificationWriting = () => {
  return (
    <div className="w-full">
      <div className="jumbotron text-center py-6">
        <h1 className="text-4xl font-bold">
          Prototyping & Specification Writing
        </h1>
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
                &nbsp;&nbsp;»&nbsp;&nbsp;Prototyping & Specification Writing
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            {/* Page content */}
            <div className="page-information space-y-6 text-justify mt-10 mb-10 pb-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Worried that your finished product won’t accurately reflect your
                requirements? Our visual prototype and written functional spec
                will ensure that it does.
              </h3>

              <p className="text-gray-600 text-[15px] pb-4 mb-10">
                When we build software, we leave nothing to chance. We don’t
                assume; we ask, understand and articulate into an exact plan.
                The tangibility of this plan is the prototype (the visualisation
                of the plan) and the functional spec (the written blueprint).
                Both ensure that you’re getting exactly what you expected and
                agreed to.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 py-2 pb-2 max-sm:py-4 md:pt-6 md:pb-10 relative mb-[100px]">
            <div className="flex justify-center items-center w-full ms:w-1/2 p-4 pb-0">
              <div className="w-full ms:w-10/12">
                <p>
                  <img
                    className="w-full h-auto"
                    src="https://geeconglobal.com/wp-content/uploads/2019/05/software-development-for-startups-1-1440x444.jpg"
                    alt="white label server hardware"
                    width="1515"
                    height="467"
                    sizes="(max-width: 1515px) 100vw, 1515px"
                    data-first-enter-image="true"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HEading With arrow planning */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            The importance of planning
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* planting section */}
      <div className="py-10 px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 text-justify">
            <p className="text-dark-gray text-[15px] pb-2 mb-6">
              Many software development projects fail because of inadequate
              planning. Without proper planning, there is a risk of encountering
              delays, errors, and increased costs.
            </p>
            <p className="text-dark-gray text-[15px] pb-2 mb-6">
              Developers often find excitement in diving into code and
              witnessing a project come to life. Consequently, meticulous
              planning is occasionally neglected, with developers taking
              shortcuts and making assumptions.
            </p>
            <p className="text-dark-gray text-[15px] pb-2 mb-6">
              Understandably, customers prioritize having their software
              operational as quickly as possible, often emphasizing core
              functions over rare scenarios. It's only when the software is in
              use that these scenarios become apparent, revealing gaps.
              Retroactively addressing these gaps can incur significant costs in
              terms of system stability, expenses, and time.
            </p>
          </div>
        </div>
      </div>
      {/* DevelopmentProcess */}
      <div className="flex justify-center pb-8 max-sm:py-4 md:pt-6 md:pb-6 relative mb-[100px]">
        <div className="w-full md:w-10/12 px-4 text-dark-gray text-[15px] text-justify">
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            To address these issues and prevent functionality gaps, added costs,
            and disappointment, we implement the following for each development
            project we undertake:
          </p>
          <ul className="mt-4 ml-6 space-y-4 text-dark-gray text-[15px]">
            <li className=" ">
              A Functioning <strong>prototype</strong>
              &nbsp; model When envisioning a new application, even the most
              creative individuals may find it challenging to visualize its
              appearance and functionality from a piece of paper. The prototype
              eliminates this struggle, providing a comprehensive representation
              that leaves nothing to assumption, ensuring every aspect is
              covered.
            </li>
            <li className=" ">
              Optionally, and contingent upon whether we engage under the Agile
              or Fixed Price model, a clear and concise{" "}
              <strong>functional specification</strong>. This serves as a
              blueprint for your application, documenting precisely what you
              will receive upon the completion of the development process.
            </li>
          </ul>
        </div>
      </div>
      {/* HEading With arrow Prototype */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            The importance of planning
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* prptotyping process */}
      <div className="flex justify-center pb-8 max-sm:py-4 md:pt-6 md:pb-6 relative mb-[30px]">
        <div className="w-full md:w-10/12 px-4 text-dark-gray text-[15px] text-justify">
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            The initial step involves prototyping your new software, commencing
            with a visit from our Technical Architects to meticulously delve
            into the requirements. Throughout this process, we make it our
            responsibility to:
          </p>
          <ul className="mt-4 ml-6 space-y-4 text-dark-gray text-[15px]">
            <li className="">
              gather all the essential information required from you to prevent
              any gaps in functionality.
            </li>
            <li className="">
              provide our own insights and concepts based on experience to
              optimize your return on investment.
            </li>
          </ul>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            Subsequently, employing cutting-edge visual tools, we will develop a
            functional model (prototype) of your new system for you to witness
            in action. This encompasses workflow diagrams that precisely outline
            the user journey, background processes, and interactive user
            interfaces that showcase the appearance and functionality of each
            screen.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            Due to its visual nature, the prototype aids in avoiding assumptions
            and ensures consensus among all parties regarding the development
            specifics.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            After finishing this phase, we can optionally create your functional
            specification. This document can serve as the foundation for a user
            guide, complementing the understanding of stakeholders involved in
            the project. For Fixed Price commercial engagements, this step is
            essential, while under the Agile model, it is optional.
          </p>
        </div>
      </div>
      {/* HEading With arrow Prototype */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            The importance of planning
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* prptotyping process */}
      <div className="flex justify-center pb-8 max-sm:py-4 md:pt-6 md:pb-6 relative mb-[30px]">
        <div className="w-full md:w-10/12 px-4 text-dark-gray text-[15px] text-justify">
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            Just as you wouldn't anticipate the construction of a building
            without precise plans outlining every material, measurement, and
            position, the same principle applies to the software we develop.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            The functional specification serves as the blueprint for your
            application, delineating each area and detailing what it will
            encompass and how each aspect will operate. It incorporates diagrams
            to provide clearer explanations of functions, processes, and
            workflows, along with graphical designs illustrating the user
            interface.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            We understand that our customers may not always be technically
            inclined, so we draft our specifications using plain language
            instead of technical jargon. This ensures that our customers can
            easily relate to and understand our plans.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            After being written, it is crucial that you comprehend the
            functional specification. Your agreement with the plan is essential,
            as the construction of your software is founded on it.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            The prototype and functional specification document collaborate to
            provide a detailed description of the end product. This detailed
            information enhances our Quality Assurance process, allowing us to
            utilize it to ensure that every aspect functions as intended.
          </p>
          <p className="text-dark-gray text-[15px] pb-2 mb-6 text-justify">
            Refer to our "Working With Us" page for a more detailed overview of
            how your project will progress from initiation to completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrototypingSpecificationWriting;
