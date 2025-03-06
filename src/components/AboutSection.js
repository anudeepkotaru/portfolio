import profilePic from "../images/my-picture.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="about">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="relative mx-auto rounded-lg overflow-hidden">
              <img
                src={profilePic}
                alt="Profile Picture"
                layout="responsive"
                width={600}
                height={600}
                className="rounded-lg dark:filter dark:brightness-75 dark:contrast-125"
              />
            </div>
            <div className="flex justify-center mt-4">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/satya-kotaru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-gray-900 dark:text-gray-300 text-5xl hover:text-yellow-700" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anudeepkotaru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-gray-900 dark:text-gray-300 text-5xl hover:text-yellow-700" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Text, Stats, and Skill Bars */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div>
            <h3 className="text-3xl font-semibold py-1 custom-underline text-gray-900 dark:text-gray-100">
              About Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I am a versatile professional with a strong background in
              <span className="text-yellow-600 dark:text-yellow-400">
                {" "}
                full-stack development, machine learning,
              </span>{" "}
              and
              <span className="text-yellow-600 dark:text-yellow-400">
                {" "}
                data engineering.
              </span>{" "}
              I have consistently delivered high-impact solutions by
              <span className="text-yellow-600 dark:text-yellow-400">
                {" "}
                building scalable applications
              </span>{" "}
              that integrate seamlessly with both frontend and backend systems.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              My work includes developing advanced predictive models, enhancing
              real-time data processing pipelines, and creating intuitive
              <span className="text-yellow-600 dark:text-yellow-400">
                {" "}
                user interfaces{" "}
              </span>
              that drive efficiency and usability. Additionally, my experience
              extends to designing and optimizing REST APIs, deploying robust
              microservices, and integrating cloud technologies to support
              complex data-driven environments.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="mt-8">
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Programming Languages & Scripting
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Machine Learning & Data Science
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Data Engineering
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "74%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Software Development
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Infrastructure & Cloud
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Data Analysis & Visualization
              </h5>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 dark:bg-yellow-400 h-4 rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
