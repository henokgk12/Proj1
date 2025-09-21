import { NavLink } from "react-router-dom";

export default function HomeExtras() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center">
            <span className="text-gray-600 dark:text-gray-300 font-semibold">About Image</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I’m a Mechanical Engineer passionate about designing efficient and innovative machines. I specialize in turning ideas into tangible products, focusing on both aesthetics and performance.
          </p>
          <NavLink
            to="/about"
            className="inline-block px-6 py-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Learn More
          </NavLink>
        </div>
      </div>
      <div className="bg-white/90 text-gray-900 rounded-2xl shadow-lg p-6 mb-8">
  <h3 className="text-lg font-semibold">Irrigation Systems</h3>
  <p>
    Precision-engineered irrigation solutions designed for efficiency
    and sustainability.
  </p>
</div>


      {/* Services Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            { title: "3D Modeling", desc: "Precision CAD models for any project." },
            { title: "Prototyping", desc: "Turn your ideas into functional prototypes." },
            { title: "Mechanical Analysis", desc: "Stress, motion, and performance simulations." },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-neutralDark rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
