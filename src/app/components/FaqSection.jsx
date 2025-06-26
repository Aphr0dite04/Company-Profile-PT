import React from "react";

const FaqSection = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                What can I expect during a maintenance consultation?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                During your first consultation, our team will assess your facility's maintenance needs, discuss safety protocols, and propose a tailored plan for oil and gas equipment upkeep. Expect a detailed walkthrough and a preliminary report.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                What are your operating hours?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                We operate Monday to Friday from 8:00 AM to 5:00 PM WIB, with 24/7 emergency support for critical maintenance needs in the oil and gas sector. Contact us for after-hours arrangements.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Do I need a contract to use your services?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                No contract is required for one-time services, but we recommend a maintenance contract for ongoing support to ensure compliance with oil and gas industry standards and optimal equipment performance.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Are your services covered by insurance?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Yes, our services are backed by comprehensive insurance coverage, including liability and equipment damage, to protect your operations in the oil and gas industry. Contact us for policy details.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                What is your cancellation policy?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Cancellations must be made 48 hours in advance to avoid charges. For emergency services, please notify us as soon as possible to reschedule without penalty, ensuring minimal disruption to your operations.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg" aria-label="Question icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                What are the access options for our site?
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                We provide on-site access via coordinated schedules with your team, ensuring compliance with safety regulations. Public transport and parking options are available near our Jl. Daun Karya Raya office for client visits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;