import profilePic from "../images/dev-siv-wave.png"; // Replace with your actual image path
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";


export default function HeroSection() {
  return (
    <section className="relative h-screen flex" id="hero">
      {/* Left Section: 60% White with Translucent Yellow Rings */}
      <div className="w-[70%] bg-white dark:bg-gray-900 relative flex items-center justify-center px-6">
        {/* Background Rings */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute w-48 h-48 bg-yellow-500 dark:bg-yellow-600 opacity-20 rounded-full top-1/4 left-1/4 transform translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute w-72 h-72 bg-yellow-500 dark:bg-yellow-600 opacity-20 rounded-full top-2/3 left-1/2 transform translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-2xl font-bold font-burtons text-gray-700 dark:text-gray-300">
            Hello, I'm Satya Anudeep
          </h2>
          <h1 className="text-4xl text-gray-900 dark:text-gray-100 mt-4 drop-shadow-lg">
            Full Stack Developer
          </h1>
          <h1 className="text-4xl text-yellow-600 dark:text-yellow-400 drop-shadow-lg">
            & Machine Learning Engineer
          </h1>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="inline-block bg-yellow-500 dark:bg-yellow-600 text-white py-2 px-6 rounded-full"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start space-x-8">
            <a
              href="https://www.linkedin.com/in/satya-kotaru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-gray-900 dark:text-gray-300 text-4xl hover:text-yellow-500 dark:hover:text-yellow-400" />
            </a>
            {/* <a
              href="https://www.instagram.com/siv._rk___/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-gray-900 dark:text-gray-300 text-4xl hover:text-yellow-500 dark:hover:text-yellow-400" />
            </a> */}
            <a
              // href="https://www.reddit.com/u/you_cant_see_me1010/s/qTpHAEjXsm"
              href="https://github.com/anudeepkotaru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-gray-900 dark:text-gray-300 text-4xl hover:text-yellow-500 dark:hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
      {/* Right Section: 40% Yellow */}
      <div className="w-[40%] bg-yellow-500 dark:bg-yellow-600 relative flex items-center justify-center">
        <div className="relative w-[5000px] h-[83%] mt-[54%]">
          <img
            src={profilePic}
            alt="Profile Picture"
            objectFit="cover"
            className="transform translate-x-[-50%] dark:filter dark:brightness-75 dark:contrast-125" // This adjustment ensures the image straddles both backgrounds
          />
        </div>
      </div>
    </section>
  );
}
