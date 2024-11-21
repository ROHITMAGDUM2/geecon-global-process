import React from "react";

const WorkingWithUs = () => {
  return (
    <div>
      <div className="container">
        <div className="bg-white">
          <div className="flex flex-wrap -mr-4 -ml-4">
            {/* <!-- Post 1 --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-mds overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Working With Us</h2>
                  <p className="text-gray-700 text-[15px]">
                    When you work with a company, you want to know what to
                    expect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingWithUs;
