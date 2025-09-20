export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mechena</h1>
      <p className="mb-8">
        Showcasing the projects, skills, and achievements of professional mechanical engineers.
      </p>

      {/* 👇 Just for testing Tailwind */}
      <div className="bg-red-500 text-white p-10">Test Tailwind</div>
    
  
      {/* Featured Projects Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition">
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
                Project {i} Image
              </div>
              <h3 className="font-semibold mb-2">Project Title {i}</h3>
              <p className="text-gray-600 text-sm">Brief description of the project.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}