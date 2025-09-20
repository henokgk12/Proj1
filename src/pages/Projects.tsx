function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
              Project {i} Image
            </div>
            <h3 className="font-semibold mb-2">Project Title {i}</h3>
            <p className="text-gray-600 text-sm">Short project description or technology used.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
