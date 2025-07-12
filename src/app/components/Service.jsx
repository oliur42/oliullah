import React from "react";

function Service() {
  return (
    <div className="bg-gray-500 py-10 px-4 sm:px-6 md:px-10">
      <div className="flex justify-center items-center py-6">
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold border-b-2 border-white">
          My Service
        </h1>
      </div>
      <div className="max-w-md mx-auto grid grid-cols-1 gap-6 sm:max-w-lg sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            eCommerce Site Development
          </h1>
          <p className="text-white">
            I specialize in building fully functional and responsive eCommerce
            websites tailored to your business needs, using the latest
            technologies.
          </p>
        </div>
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            Business Planning
          </h1>
          <p className="text-white">
            Offering comprehensive business planning services to ensure your
            eCommerce venture has a clear and effective strategy for success.
          </p>
        </div>
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            Business Statistics
          </h1>
          <p className="text-white">
            Analyze and interpret data to optimize business processes, improve
            sales, and increase profitability through accurate statistics.
          </p>
        </div>
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            Education Website
          </h1>
          <p className="text-white">
            Design and develop modern education platforms that support
            e-learning, virtual classrooms, and student management systems.
          </p>
        </div>
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            Restaurant Website
          </h1>
          <p className="text-white">
            Build visually appealing and user-friendly restaurant websites,
            including menu displays, online reservations, and ordering systems.
          </p>
        </div>
        <div className="bg-gray-900 px-4 py-6 rounded-[15px] hover:bg-gray-800/65">
          <h1 className="text-white text-xl font-bold mb-2">
            Consultant Website
          </h1>
          <p className="text-white">
            Create professional consultant websites tailored to your services,
            featuring appointment booking and client portfolio management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
