export default function ExtraCurricularSection() {
  const activities = [
    {
      title: "ISSC Volunteer",
      location: "Arizona State University, Tempe",
      duration: "January 2024 – Present",
      description: [
        "Achieved a 20% increase in student engagement and conducted 250+ check-ins with precision.",
        "Expertly oversaw booth set-up, excelling in both team collaboration and independent work.",
      ],
      icon: "🎓",
    },
    {
      title: "Co-Lead",
      location: "Young Professionals Council, Fiserv, Chennai",
      duration: "September 2021 - June 2023",
      description: [
        "Organized talent shows, chess & badminton tournaments for the entire organization.",
        "Created and hosted a monthly employee news program highlighting organizational updates, movie picks, and book recommendations.",
      ],
      icon: "🎤",
    },
    {
      title: "Online Tutor",
      location: "Chegg, Bengaluru",
      duration: "September 2018 - January 2019",
      description: [
        "Assisted students with academic inquiries, providing personalized support and ensuring clarity in explanations.",
        "Delivered tailored online tutoring, achieving a 15% improvement in students' understanding and academic performance.",
      ],
      icon: "💻",
    },
    {
      title: "Joint Secretary & Treasurer",
      location: "Department of Audiforce, Pilani",
      duration: "May 2018 - May 2020",
      description: [
        "Supervised recruitment and on-campus festival coordination with a team of 40 individuals.",
        "Managed departmental finances with a Rs. 50,000 budget, reducing costs by 15% through collaboration with the student union.",
      ],
      icon: "💰",
    },
    {
      title: "Core Member",
      location: "Students Union, Pilani",
      duration: "August 2017 - May 2018",
      description: [
        "Served the election committee, ensuring smooth and fair polling with a 20% voter turnout increase.",
        "Handled merchandise distribution during student elections at SR Bhawan, housing over 200 members.",
      ],
      icon: "🏛️",
    },
    {
      title: "Front Desk Aide",
      location: "BITS Library, Pilani",
      duration: "August 2017 - May 2018",
      description: [
        "Provided courteous assistance to patrons, managed circulation tasks, and ensured a conducive study environment.",
        "Supported library operations through administrative tasks, enhancing service delivery.",
      ],
      icon: "📚",
    },
  ];

  return (
    <section
      className="py-20 bg-gray-100 dark:bg-gray-900"
      id="extra-curricular"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-3xl text-center font-semibold text-gray-900 dark:text-white">
          Extra-Curricular Experiences
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex"
            >
              <div className="text-3xl mr-4 text-gray-900 dark:text-gray-300">
                {activity.icon}
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-300">
                  {activity.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.duration}
                </p>
                <ul className="mt-4 text-gray-700 dark:text-gray-300">
                  {activity.description.map((desc, index) => (
                    <li key={index} className="mb-2">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
