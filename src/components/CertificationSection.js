import react from '../images/react.png';
import businessIcon from '../images/business-icon.png';
import cppIcon from '../images/cppIcon.png';

export default function CertificationSection() {
  return (
    <section id="certifications" className="p-12 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8 relative">
        Certifications
      </h3>
      <ul className="list-none space-y-6">
        <li className="flex items-center space-x-4">
          <img
            src={react}
            alt="React Icon"
            className="w-6 h-6"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">React – The Complete Guide</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Udemy · August 2022</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img
            src={businessIcon}
            alt="Business Icon"
            className="w-6 h-6"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Business Continuity and Management Training
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Xchange, Chennai · June 2023
            </p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img
            src={cppIcon}
            alt="C++ Icon"
            className="w-6 h-6"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Programming in C and C++</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Aptech · June 2019</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
