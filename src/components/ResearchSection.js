export default function ResearchSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="research">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          Research Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Teaching Assistant */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500 opacity-20 z-0"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Teaching Assistant
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                August 2024 - Present | School of Computing and Augmented
                Intelligence, Tempe
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Managed and graded assignments for CSE 355: Theory of
                  Computation, providing detailed feedback to 140 students.
                </li>
                <li>
                  Led office hours and assisted in teaching by preparing
                  assignment and exam materials, effectively addressing student
                  questions and clarifying course concepts.
                </li>
              </ul>
            </div>
          </div>

          {/* Research Assistant */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500 opacity-20 z-0"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Research Assistant
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                March 2024 - August 2024 | School of Electrical, Computer, and
                Energy Engineering, Tempe
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Enhancing next-generation healthcare virtual assistants by
                  integrating symbolic reasoning and multimodal data.
                </li>
                <li>
                  Directed an innovative research initiative that merged Large
                  Language Models with Knowledge Graphs using advanced
                  techniques in a Neo4j framework.
                </li>
                <li>
                  Developed a machine learning pipeline to predict stress levels
                  using the WESAD dataset.
                </li>
                <li>
                  Worked on enhancing ECG signal analysis for arrhythmia
                  detection using advanced machine learning techniques.
                </li>
              </ul>
            </div>
          </div>

          {/* Research Volunteer */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500 opacity-20 z-0"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Volunteer Research Assistant
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                January 2024 - Present | Bio-Design Institute, Tempe
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Developing CancerSim, a 3D agent-based model (C++), to
                  optimize adaptive cancer therapy.
                </li>
                <li>
                  Using CancerSim to explore effective adaptive therapy regimens
                  for reduced toxicity and prolonged disease progression.
                </li>
              </ul>
            </div>
          </div>

          {/* Research Assistant */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden">
            <div class="absolute inset-0 bg-yellow-500 opacity-20 z-0"></div>
            <div class="relative z-10">
              <h4 class="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Research Assistant
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                August 2019 - November 2019 | Central Electronics Engineering
                Research Institute, Pilani
              </p>
              <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Contributed to a project titled 'Group Activity Recognition'
                  leveraging computer vision and deep learning techniques under
                  Dr. Ing. J. L. Raheja.
                </li>
                <li>
                  Acquired hands-on experience in computer vision and deep
                  learning methodologies.
                </li>
                <li>
                  Gained hands-on experience in optimizing Convolutional Neural
                  Network (CNN) models for hardware deployment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}