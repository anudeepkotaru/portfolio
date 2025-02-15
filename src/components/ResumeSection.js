import { useState } from "react";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="resume">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
          My Resume
        </h3>
        <p className="mt-4 text-lg leading-8 text-center text-gray-700 dark:text-gray-300">
          Below is a summary of my educational background and professional
          experience.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mt-10 space-x-8">
          <button
            className={`text-xl font-semibold ${
              activeTab === "education"
                ? "text-yellow-500"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`text-xl font-semibold ${
              activeTab === "experience"
                ? "text-yellow-500"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === "education" && (
            <div>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                  2023 - 2024
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Master of Science in Data Science
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  University at Buffalo - SUNY, NY, USA
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-bold"> Coursework: </span>{" "}
                    Bio-Computing, Data Mining, Data Processing Systems,
                    Algorithms in Computational Biology, Statistical Learning
                    Theory
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                  2017 - 2021
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  SASTRA University, TN, India
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-bold"> Coursework: </span>
                    Data Structures and Algorithms, Discrete Structures in
                    Mathematics and Computer Science, Object-Oriented
                    Programming, Machine Learning, Operating Systems, Database
                    Systems, Information Retrieval, Bio-Chemistry, Cell Biology
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                  2021 - 2023
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Development Engineer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  COMCAST, Chennai, India
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                    <li>Implemented end-to-end custom widgets leveraging ReactJS and ArcGIS JS 4.x.</li>
                    <li>Designed NearNet processing and validation scripts utilized in FCC BDC submissions.</li>
                    <li>Constructed Proximity application operating with Python and ArcGIS map services to identify the plant network with a specified location.</li>
                    <li>Facilitated the profitable migration of applications from VMware’s Steel Cloud to the Comcast Cloud Platform.</li>
                    <li>Implemented ELK dashboards for visualization, alerting, monitoring, Logstash, and Filebeat services for data analytics.</li>
                    <li>Established automation tasks utilizing batch scripts and Python web frameworks.</li>
                    <li>Designed end-to-end Dockerization for better application performance, ease of usage, and fast deployments and migration.</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                  2021 - 2021
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Software Development Engineer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  COMCAST, Chennai, India
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                    <li>Engineered robust Object Detection models utilizing advanced Deep Learning techniques, specifically YOLO (You Only Look Once), to accurately categorize network devices.</li>
                    <li>Created CRUD operations on MongoDB leveraging Flask and deployed on IIS.</li>
                    <li>Incorporated word suggester and auto-correct features leveraging Solr and exposed as REST APIs.</li>
                  </ul>
                </div>
              </div>
              {/* <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                    2020 - 2021
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Project Trainee
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bosch India, Bengaluru, India
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Advanced the self-driving capabilities of vehicles to
                    achieve Level 2 autonomy using TensorFlow's U-net and
                    OpenCV's SORT for object tracking, significantly reducing
                    identity switches by 45%.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                    2019 - 2020
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Data Research Analyst
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Helpage India, Hyderabad, India
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Analyzed health and demographic data using R and Excel,
                    predicting a 40% increase in welfare uptake, leading to the
                    development of new policies for improving elderly care.
                  </p>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
