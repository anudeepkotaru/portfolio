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
                  2023 - 2025
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Master of Science in Data Science
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  University at Buffalo - SUNY, NY, USA (GPA - 3.93/4.0)
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-bold"> Coursework: </span>{" "}
                    Porbability, Computational Mathematics, Machine Learning,
                    Data Intensive Computing, Statistical Learning and Data Mining,
                    Database Management Systems
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
                  SASTRA University, TN, India (GPA - 8.1/10.0)
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    <span className="font-bold"> Coursework: </span>
                    Data Structures and Algorithms, Discrete Structures in
                    Mathematics and Computer Science, Object-Oriented
                    Programming, Machine Learning, Operating Systems, Database
                    Systems, Natural Language processing, Web Development
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
                    Feb 2025 - Present
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Software Engineer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  Vedainfo inc
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                    <li>Implemented a full stack web app with Node.js, React and PostgreSQL to streamline form workflows, digital signatures, notifications and storage, enhancing operational efficiency by 30% and end-to-end testing using Cypress and Selenium.</li>
                    <li>Optimized 10+ RESTful and GraphQL APIs for python backend, integrating AWS S3 and RDS for secure data storage and incorporated OAuth2 and JWT authentication for API security along with unit tests using pytest.</li>
                    <li>Orchestrated MLOps pipelines in linux servers, leveraging Jenkins, Docker, AWS SageMaker and EKS to enable large-scale data processing and efficient distributed training for ML models, improving deployment time by 50%.</li>
                    <li>Automated AWS infrastructure using Terraform (IaC) and developed Python Boto3 scripts for custom deployment workflows.</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                    Feb 2021 - July 2023
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Software Engineer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  COMCAST
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                    <li>Implemented responsive web apps using MERN stack with OAuth role based authentication.</li>
                    <li>Architected a scalable ETL pipeline utilizing Databricks, PySpark to analyze over 100M instances.</li>
                    <li>Designed NearNet processing and validation scripts utilized in FCC BDC submissions.</li>
                    <li>Constructed Proximity application operating with Python and ArcGIS map services to identify the plant network with a specified location.</li>
                    <li>Facilitated the profitable migration of applications from VMware’s Steel Cloud to the Comcast Cloud Platform.</li>
                    <li>Implemented ELK dashboards for visualization, alerting, monitoring, Logstash, and Filebeat services for data analytics.</li>
                    <li>Established automation tasks using batch and shell scripts and Python web frameworks.</li>
                    <li>Designed end-to-end Dockerization for better application performance, ease of usage, and fast deployments and migration.</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-500 font-semibold">
                    May 2020 - Jan 2021
                  </span>
                  <div className="border-l-2 border-yellow-500 h-full"></div>
                </div>
                <div className="ml-8 max-w-2xl">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Software Development Engineer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                  Momentum Business Solutions Pvt Ltd
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                    <li>Engineered robust Object Detection models utilizing advanced Deep Learning techniques and YOLO to accurately categorize network devices.</li>
                    <li>Built machine learning models with Scikit-learn to predict customer churn, achieving 85% accuracy in internship project.</li>
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
