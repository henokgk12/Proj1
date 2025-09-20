export default function ContactSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Get in Touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Whether you have a project idea or want to collaborate, feel free to reach out!
      </p>

      <form className="bg-white dark:bg-neutralDark shadow-lg rounded-lg p-8 space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-16 bg-gray-100 dark:bg-neutralDark border-t py-6 text-center text-gray-700 dark:text-gray-300 shadow-inner">
        © {new Date().getFullYear()} Mechena. All rights reserved.
      </footer>
    </section>
  );
}
