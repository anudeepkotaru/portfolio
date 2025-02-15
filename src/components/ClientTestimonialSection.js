import avatar from "../images/manager.png";
import background from "../images/people-image.png";

export default function ClientTestimonialSection() {
  return (
    <section
      className="relative bg-yellow-500 dark:bg-yellow-700 py-20"
      id="testimonials"
    >
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/people-image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div> */}
      <img
        src={background}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Yellow Overlay with Semi/Quarter Rings */}
      <div className="absolute inset-0 bg-yellow-500 dark:bg-yellow-700 opacity-75 z-10"></div>

      {/* Large Rings Spanning the Height */}
      <div className="absolute inset-0 flex justify-between z-10">
        {/* Left Vertical Ring */}
        <div className="w-1/2 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full border-l-8 border-t-8 border-yellow-300 dark:border-yellow-400 opacity-30 rounded-full"></div>
        </div>

        {/* Right Vertical Ring */}
        <div className="w-1/2 relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full border-r-8 border-b-8 border-yellow-300 dark:border-yellow-400 opacity-30 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white dark:text-gray-900">
          WHAT MY MANAGER SAYS?
        </h2>
        <p className="text-lg text-white mt-4 dark:text-gray-900">
          Siva has consistently demonstrated exceptional skill and dedication in
          his role at Fiserv.
        </p>

        <div className="relative mt-10">
          <div className="relative z-10">
            <div className="bg-white dark:bg-gray-800 bg-opacity-75 p-1 rounded-full mx-auto inline-block">
              <img
                src={avatar}
                alt="Client Image"
                className="w-40 h-40 rounded-full mx-auto border-white dark:border-gray-800 dark:filter dark:brightness-75 dark:contrast-125"
              />
            </div>
            <p className="text-white mt-4 max-w-2xl mx-auto dark:text-gray-900">
              "Siva's expertise in Java, microservices, and React UI design has
              been pivotal to our team's success. His ability to handle multiple
              tasks under pressure, coupled with his innovative problem-solving,
              makes him a standout performer. His active involvement in
              organizational activities and commitment to continuous learning
              set him apart as a well-rounded professional."
            </p>
            <p className="text-white mt-2 font-semibold dark:text-gray-900">
              Mr. Selva Kumar Periyasamy
            </p>
            <p className="text-white text-sm dark:text-gray-900">
              Manager II, Software Development Engineering, Fiserv
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
