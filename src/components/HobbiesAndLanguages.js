import React from "react";

const HobbiesAndLanguages = () => {
  return (
    <div>
      <section id="hobbies" className="py-12 bg-gray-100 dark:bg-gray-900">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8 relative">
          Hobbies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              📚
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Reading Books
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Immersing in diverse genres and gaining new insights.
            </p>
          </div>
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              💃
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Dancing
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Expressing rhythm and emotion through various dance forms.
            </p>
          </div>
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              🎤
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Karaoke
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Singing along to favorite tunes with passion and enthusiasm.
            </p>
          </div>
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              🎨
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Painting
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Bringing creativity to life with brushstrokes and colors.
            </p>
          </div>
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              🥾
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Trekking
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Exploring nature’s beauty and challenging terrains.
            </p>
          </div>
          <div className="hobby-item">
            <div className="icon text-teal-600 dark:text-teal-400 text-5xl mb-4">
              🧗
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Adventure Sports
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Seeking thrills and pushing boundaries through adventurous
              activities.
            </p>
          </div>
        </div>
      </section>

      <section id="languages" className="py-12 bg-gray-100 dark:bg-gray-900">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8 relative">
          Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg text-center">
            English - Fluent
          </span>
          <span className="bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg text-center">
            Hindi - Professional
          </span>
          <span className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg text-center">
            Telugu - Native
          </span>
          <span className="bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg text-center">
            Tamil - Beginner
          </span>
        </div>
      </section>
    </div>
  );
};

export default HobbiesAndLanguages;
