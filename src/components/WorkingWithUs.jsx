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
      {/* sercice Section */}

      <div className="container mx-auto mt-12 px-4 mb-[30px] p-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px] pb-7">
          <div className="bg-white transition-all duration-300 ease-in-out p-4 text-gray-800 text-center h-full border border-gray-200 rounded-lg hover:shadow-xl">
            <a href="" className="block text-center">
              <img
                className="single-service__icon block w-[13.33333rem] h-[13.33333rem] mx-auto"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/discussing-your-bespoke-software-development-needs-3.png"
                alt="cozy bay furniture ebay"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 pb-3">
                Discussing your needs
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                We’ll start by gaining a{" "}
                <strong>
                  Comprehensive comprehension of your enterprise is sought.
                </strong>
                , Current procedures, obstacles, aspirations, and your
                conceptualization of the optimal resolution are of interest.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                We will attentively listen, inquire, offer insights, and engage
                in constructive discussions with you prior to formulating a
                comprehensive strategy and defining the set of features for the
                solution that aligns most effectively with your requirements.
              </p>
            </a>
          </div>
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl">
            <a href="" className="block text-center">
              <img
                className="single-service__icon block w-[13.33333rem] h-[13.33333rem] mx-auto"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-database-development-project-proposal-2.png"
                alt="deluxe holiday homes poole"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 pb-3">
                Project Proposal
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Utilizing the insights gained through our conversations, we
                proceed to craft and present a formal proposal document. This
                document outlines our approach to collaboration, details the
                planned system's feature set, and includes additional pertinent
                information.&nbsp;
                <strong>Projected costs and timelines will be provided.</strong>
                &nbsp;Consistent with the terms of our mutually agreed-upon
                engagement.
              </p>
            </a>
          </div>
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl">
            <a href="" className="block text-center">
              <img
                className="single-service__icon block w-[13.33333rem] h-[13.33333rem] mx-auto"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-software-development-planning-2.png"
                alt="ts heating services"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 pb-3">
                Planning
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Upon receiving the green light from you, we initiate the
                planning stage. This phase is highly collaborative, involving
                onsite meetings at either your location or Geecon HQ with your
                project stakeholders and our design team.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* details */}
      <div className="container mx-auto mt-8 pb-[60px]">
        <div className="flex flex-wrap -mx-4">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12 text-[15px] text-justify text-gray-700">
              <p className="mb-4">
                Upon receiving your approval to proceed, we initiate the
                planning stage, which represents the most collaborative phase of
                the project. This involves conducting meetings with your project
                stakeholders and our design team, either onsite or at the Geecon
                headquarters.
              </p>
              <p className="mb-4">
                Because effective communication is a major challenge in software
                development, at this initial stage of the project, we will also:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  To address the significant communication challenges in
                  software development, we will also appoint a single point of
                  contact within Geecon at this early stage of the project.
                </li>
                <li>
                  We will provide you with access to a secure project extranet,
                  ensuring that everyone participating in the project has
                  up-to-date documentation and can access the prototype.
                </li>
                <li>
                  We will commence tracking our progress daily via the project
                  extranet and conduct weekly status meetings. This ensures that
                  both you and our team at Geecon are well-informed and aligned
                  with the project schedule.
                </li>
              </ul>
              <p className="mb-4">
                We understand that for most individuals, visualizing how
                something will function before the final software is delivered
                can be nearly impossible. Therefore, at this stage, we employ
                cutting-edge visual tools to create a <strong>prototype</strong>{" "}
                of your new system, allowing you to witness its development and
                take shape.
              </p>
              <p className="mb-4">
                We will also optionally generate a comprehensive functional
                specification. We will also provide an optional document that
                outlines every aspect of the software. In fixed-price projects,
                it is crucial that you comprehend and agree with this
                specification, as it serves as the foundation for building the
                software. To ensure clarity, we write it in plain English and
                avoid the use of technical jargon.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Service Card view */}
      <div className="container mx-auto mt-12 px-4 mb-[30px] p-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px] pb-7">
          {/*card 01 */}
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl text-[15px]">
            <a href="">
              <img
                className="block w-[13.33333rem] h-[13.33333rem] mx-auto my-[1.06667rem]"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-software-development-1.png"
                alt="customer portal functionality"
              />
              <h3>Development</h3>
            </a>
            <p>
              <a href="">
                Upon approval of the design stage, there are two available
                commercial models for our engagement. The first option is&nbsp;
              </a>
              <a href="">Agile (Scrum)</a>, This involves employing efficient
              2-week sprints for the iterative development of software. It's
              particularly advantageous if you aim for a swift software
              completion, are willing to pay based on a discounted time
              structure, and/or if the project scope is challenging to entirely
              define upfront. Agile is generally more suitable for projects
              exceeding a total cost of £50K.&nbsp; The alternative commercial
              model is the Fixed Price approach. This model is fitting for
              projects in which we can comprehensively grasp and reach an
              agreement on the precise functional and technical requirements
              before initiating any coding. It is well-suited for smaller
              projects (with a total cost of less than £50K) and scenarios where
              a detailed specification can be finalized before the commencement
              of any development work.
            </p>
          </div>
          {/* card 02 */}
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl text-[15px]">
            <a href="">
              <img
                className="block w-[13.33333rem] h-[13.33333rem] mx-auto my-[1.06667rem]"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/quality-assurance-testing-throughout-bespoke-software-development-1.png"
                alt="customer portal functionality"
              />
              <h3 className="text-lg font-semibold mt-4">
                Quality Assurance Testing
              </h3>
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Employing rigorous testing and quality assurance procedures, we
              thoroughly assess all aspects of code and design throughout the
              development process. Upon the completion of the application, a
              final round of testing will commence, involving evaluations by
              both Geecon Software and your end-users.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This{" "}
              <strong className="font-semibold">
                user acceptance testing (UAT)
              </strong>{" "}
              is conducted on a system distinct from the live system, allowing
              the evaluation of features and the provision of feedback on bugs
              or issues within a pseudo-live environment. User Acceptance
              Testing (UAT) is crucial to guarantee the system's robustness in
              the hands of those who will be using it on a daily basis.
            </p>
          </div>
          {/* card 03 */}
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl text-[15px]">
            <a href="">
              <img
                className="block w-[13.33333rem] h-[13.33333rem] mx-auto my-[1.06667rem]"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-software-development-training-1.png"
                alt="customer portal functionality"
              />
              <h3 className="text-lg font-semibold mt-4">Training</h3>
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Our systems are designed to be user-friendly, minimizing the
              necessity for formal training. Nevertheless, if requested, we are
              willing to provide comprehensive training options either onsite or
              at our development centers in Farnborough, Hampshire, and
              Blackfriars (Central London).
            </p>
          </div>
          {/* card 04 */}
          <div className="single-service">
            <a href="https://geeconglobal.com/hosting-3/" className="block">
              <img
                className="block w-[13.33333rem] h-[13.33333rem] mx-auto my-[1.06667rem]"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-software-development-hosting-3.png"
                alt="customer portal functionality"
              />
              <h3 className="text-lg font-semibold mt-4">Hosting</h3>
            </a>
            <p className="text-sm text-gray-600 mt-2">
              We provide an optional hosting service in collaboration with
              Rackspace, recognized as an industry leader in hosting. This
              option is available for those who prefer not to engage in the
              management of specialized server hardware.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Upon launch, your software application or website will be deployed
              onto our systems, leveraging the capabilities of multiple
              front-end and back-end servers, firewalls, storage, and load
              balancing for optimal performance.
            </p>
          </div>
          {/* card 05 */}
          <div className="bg-white transition-all duration-300 ease-in-out text-gray-800 text-center h-full border border-gray-200 rounded-lg p-4 hover:shadow-xl text-[15px]">
            <a href="">
              <img
                className="block w-[13.33333rem] h-[13.33333rem] mx-auto my-[1.06667rem]"
                src="https://geeconglobal.com/wp-content/uploads/2019/05/bespoke-software-development-support-5.png"
                alt="customer portal functionality"
              />
              <h3 className="text-xl font-semibold">Support</h3>
            </a>
            <p className="mt-2 text-gray-600">
              We will furnish thorough support for your new software through the
              activation of a Service Level Agreement (SLA) upon the system's
              launch. This includes:
            </p>
            <ul className="list-disc mt-4 mb-4 ml-10 mr-0 pl-10 text-gray-600">
              <li>Priority bug fixing</li>
              <li>
                Help with any functionalities that may be unfamiliar to you
              </li>
              <li>
                Access to our online Helpdesk system, along with telephone and
                email support
              </li>
            </ul>
            <p className="mt-2 text-gray-600">
              Even if continuous support is not desired, we are pleased to offer
              a one-year break-fix warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingWithUs;
