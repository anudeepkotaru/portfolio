import code from "../images/code.png";
import dataMLIcon from "../images/dataML.png";
import datainfraIcon from "../images/dataInfra.png";
import fullStackIcon from "../images/fullstack.png";
import dataVizIcon from "../images/dataVizIcon.png";
import researchIcon from "../images/researchIcon.png";
import dataEngIcon from "../images/dataEng.png";
import algoIcon from "../images/algoIcon.png";
import bioinformaticsIcon from "../images/bioinformaticsIcon.png";

export default function SkillsSection() {
  return (
    <section>
      <div className="overflow-x-scroll flex space-x-6 py-10 px-10 dark:bg-gray-900">
        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={code}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Programming Languages
          </h3>
          <p className="py-2 dark:text-gray-300">
            Proficient in various programming languages for diverse application
            development.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">Python</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Java</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">C++</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">JavaScript</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">TypeScript</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">R</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">SQL</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">HTML/CSS</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={dataMLIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Data Science & ML
          </h3>
          <p className="py-2 dark:text-gray-300">
            Expertise in building and deploying data science and machine
            learning models.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">Scikit-learn</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">TensorFlow</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">PyTorch</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">XGBoost</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">NLP</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Statistical Modeling
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Deep Learning</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={dataEngIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Data Engineering
          </h3>
          <p className="py-2 dark:text-gray-300">
            Skilled in building robust data pipelines and managing data
            infrastructure.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">Hadoop</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Spark</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">MongoDB</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">MySQL</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">PostgreSQL</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={fullStackIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Software Development
          </h3>
          <p className="py-2 dark:text-gray-300">
            Comprehensive experience in full-stack development, from frontend to
            backend.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">React</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Angular.js</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Spring Boot</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">REST APIs</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Next.js</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Node.js</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Tailwind CSS</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={datainfraIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Infrastructure & Cloud
          </h3>
          <p className="py-2 dark:text-gray-300">
            Proficient in cloud platforms and infrastructure management.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">Docker</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Cassandra</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Azure</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Neo4j</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">AWS</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Git</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Unix/Linux</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={bioinformaticsIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Computational Biology
          </h3>
          <p className="py-2 dark:text-gray-300">
            Experienced in analyzing biological data and implementing
            computational models for research.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">BLAST</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Bioconductor</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Scikit-Bio</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Phylogenetics</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Gene Expression Analysis
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Molecular Modeling
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Python for Bioinformatics
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Matplotlib for Biological Data
          </p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={dataVizIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Data Visualization
          </h3>
          <p className="py-2 dark:text-gray-300">
            Expert in creating insightful visual representations of complex
            data.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">Tableau</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">PowerBI</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Matplotlib</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Chart.js</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">D3.js</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img src={algoIcon} width={100} height={100} className="mx-auto dark:filter dark:brightness-75 dark:contrast-125" />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Algorithms & Optimization
          </h3>
          <p className="py-2 dark:text-gray-300">
            Solid foundation in algorithms and optimization techniques.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Dynamic Programming
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Graph Algorithms
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Sorting & Searching
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Heuristic Optimization
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Greedy Algorithms
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Genetic Algorithms
          </p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl min-w-[300px] bg-white dark:bg-gray-800">
          <img
            src={researchIcon}
            width={100}
            height={100}
            className="mx-auto dark:filter dark:brightness-75 dark:contrast-125"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            Research & Communication
          </h3>
          <p className="py-2 dark:text-gray-300">
            Strong background in research, technical writing, and communication.
          </p>
          <h4 className="py-4 text-yellow-600 dark:text-yellow-400">Skills</h4>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Technical Writing
          </p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Collaboration</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Documentation</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">Mentorship</p>
          <p className="text-gray-800 dark:text-gray-300 py-1">
            Stakeholder Communication
          </p>
        </div>
      </div>
    </section>
  );
}
