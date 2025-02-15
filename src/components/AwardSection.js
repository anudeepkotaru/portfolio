export default function AwardSection() {
  return (
    <section id="awards" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8 relative">
        Awards and Honours
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <div className="badge bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          IELTS Score: 8.0
          <span className="block text-xs mt-1">(Jun 2023)</span>
        </div>
        <div className="badge bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-600 dark:to-yellow-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          GRE Score: 327
          <span className="block text-xs mt-1">(May 2023)</span>
        </div>
        <div className="badge bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          Winner in two monthly coding sprints - Fiserv
          <span className="block text-xs mt-1">(Mar 2022, Jul 2022)</span>
        </div>
        <div className="badge bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-600 dark:to-yellow-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          JEE Advanced AIR: 2414
          <span className="block text-xs mt-1">(May 2017)</span>
        </div>
        <div className="badge bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          BITSAT Score: 402/450
          <span className="block text-xs mt-1">(May 2017)</span>
        </div>
        <div className="badge bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          AP-EAMCET Rank: 191st
          <span className="block text-xs mt-1">(Apr 2017)</span>
        </div>
        <div className="badge bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          JEE Mains AIR: 2717
          <span className="block text-xs mt-1">(Apr 2017)</span>
        </div>
        <div className="badge bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-600 dark:to-yellow-800 text-white px-6 py-4 rounded-full shadow-lg text-center hover:scale-105 transform transition-all duration-300">
          SIPHO AIR: 105
          <span className="block text-xs mt-1">(Mar 2013)</span>
        </div>
      </div>
    </section>
  );
}
