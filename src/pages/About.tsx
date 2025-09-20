function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">About Our Engineers</h1>
        <p className="text-gray-700 text-lg">
          Meet our team of highly skilled mechanical engineers with real-world experience and professional achievements.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">Engineer {i} Photo</div>
            <h3 className="font-semibold mb-2">Engineer Name {i}</h3>
            <p className="text-gray-600 text-sm">
              Short bio, achievements, internships, or notable projects.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;
