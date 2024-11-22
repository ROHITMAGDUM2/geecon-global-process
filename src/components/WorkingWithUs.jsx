import React from "react";

const WorkingWithUs = () => {
  return (
    <div className="w-full">
      <div className="jumbotron text-center py-6">
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
            <div className="page-information space-y-6 text-justify mt-10 mb-10 pb-4">
              <p className="hidden">
                Working with us, Working with us in Basingstoke, Working with us
                in London, Working with us in Near Me, Working with us in UK
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Whether you’re large or small, blue-chip or not-for-profit;
                we’ll provide you with the same friendly, can-do, responsive,
                and professional service.
              </h3>

              <p className="text-gray-600 text-[15px] pb-4 mb-10">
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
      {/* HEading With arrow */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            Keeping things simple
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* imagegride */}
      <div className="container mx-auto px-4 py-8">
        <div className="row-options">
          <div className="row flex justify-center ">
            <div className="small-12 md:w-10/12 text-justify pb-16">
              {/* Image */}
              <p className="text-center">
                <img
                  className="align-none w-full"
                  src="https://geecongobal1.mydevsystems.co.uk/wp-content/uploads/2019/05/link-work-with-us-651x372.jpg"
                  alt="Working with us"
                  width="1515"
                  height="467"
                  loading="lazy"
                />
              </p>

              {/* Paragraph */}
              <p className="mt-6 text-gray-700 text-[15px]">
                Embarking on a project and realizing halfway through that it
                doesn't align with your initial expectations can be
                disheartening. That's why, with Geecon, you can have confidence
                in the fact that what you anticipate is precisely what you'll
                receive.
              </p>

              {/* Unordered List */}
              <ul className="mt-4 space-y-4 text-gray-700 text-[15px]">
                <li>
                  <strong>
                    All Intellectual Property (IP) rights are yours.
                  </strong>
                  &nbsp;There are no license fees to pay, and no obligatory
                  ongoing charges will be incurred.
                </li>
                <li>
                  <strong>We do not outsource any development work</strong>
                  &nbsp;– Our in-house team of experts handles all the work,
                  ensuring complete control over communication, development
                  techniques, and quality assurance.
                </li>
                <li>
                  <strong>We won’t make you reliant on us</strong>&nbsp;– The
                  code we develop for you is created without the reliance on
                  proprietary plug-ins. This ensures that any professional
                  Microsoft developer can readily pick up and work with the
                  code.
                </li>
                <li>
                  <strong>We won’t steamroller you with jargon</strong>. Whether
                  you're eager to delve into technical details with us or prefer
                  a more straightforward approach, we are flexible. If you're
                  not inclined to geek out, we'll take the time to provide
                  comprehensive explanations in plain English. It's crucial that
                  you have a clear understanding of the available options and
                  their implications for your business, both in the present and
                  the future.
                </li>
                <li>
                  <strong>You’ll have a single point of contact</strong>&nbsp;to
                  avoid frustration – Avoiding potential harm to the project
                  involves minimizing repetitive conversations caused by
                  interacting with various individuals consistently.
                </li>
                <li>
                  <strong>We’ll keep you informed</strong>&nbsp;– If we observe
                  anything deviating from the established parameters, whether
                  it's due to changing requirements or shifting timelines, we
                  will promptly inform you. This ensures an open discussion on
                  how to proceed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Heading With Arrow  */}
      <div className="bg-heading-with-arrow text-center py-6 pb-8 max-sm:py-6 md:pt-10 md:pb-16 relative mb-[100px]">
        <div className="flex items-center justify-center">
          <h3 className="text-white text-2xl font-semibold">
            How will my project work?
          </h3>
        </div>
        <div className="down-arrow"></div>
      </div>
      {/* ------------- */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 px-4">
            <p className="text-gray-700 text-[15px] text-justify">
              Customers frequently inquire about the functioning of their
              project. Although there's no universal solution since everyone's
              needs vary, we generally guide our customers through the following
              steps:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingWithUs;
