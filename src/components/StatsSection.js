import backYellow from "../images/back-yellow.jpg";

export default function StatsSection() {
  return (
    <section className="relative py-20">
      <img
        src={backYellow}
        alt="Background Yellow Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Translucent Yellow Overlay */}
      <div className="absolute inset-0 z-10 bg-yellow-500 dark:bg-yellow-700 opacity-75"></div>

      {/* Content */}
      <div className="relative container mx-auto flex z-20 flex-wrap justify-around text-center text-white dark:text-gray-900">
        <div className="w-1/4 p-6">
          <h3 className="text-4xl font-bold">+253k</h3>
          <p className="mt-2">Lines of Code</p>
        </div>
        <div className="w-1/4 p-6">
          <h3 className="text-4xl font-bold">+30k</h3>
          <p className="mt-2 ">Unit Tests</p>
        </div>
        <div className="w-1/4 p-6">
          <h3 className="text-4xl font-bold">+1k</h3>
          <p className="mt-2">Followers</p>
        </div>
        <div className="w-1/4 p-6">
          <h3 className="text-4xl font-bold">+20</h3>
          <p className="mt-2">Projects Completed</p>
        </div>
      </div>
    </section>
  );
}
