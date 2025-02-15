import avatar from "../images/download.png";
import codeBook from "../images/code-book.png";

export default function FreelanceBanner() {
  return (
    <section
      className="relative bg-yellow-500 dark:bg-yellow-600 py-10"
      id="freelance"
    >
      <img
        src={codeBook}
        alt="Code Book Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-yellow-500 dark:bg-yellow-600 opacity-75 z-10"></div>
      <div className="relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-12">
          <div className="text-white dark:text-gray-900 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2">
              I AM AVAILABLE FOR INTERNSHIPS AND FREELANCE PROJECTS!
            </h2>
            <p className="text-lg mb-4">
              You Have Any Opportunity In Mind? Please Hire Me
            </p>
            <a
              href="#contact"
              className="inline-block bg-white dark:bg-gray-800 text-yellow-500 py-2 px-6 rounded-full font-semibold shadow-lg"
            >
              HIRE ME
            </a>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <div className="w-56 h-56 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt="Rounded Profile"
                layout="responsive"
                width={224}
                height={224}
                className="object-cover object-center dark:filter dark:brightness-75 dark:contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
