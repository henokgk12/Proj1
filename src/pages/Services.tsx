function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {["CAD Design", "Prototyping", "Simulation"].map((service, i) => (
          <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition text-center">
            <div className="h-24 bg-gray-200 mb-4 flex items-center justify-center">Icon</div>
            <h3 className="font-semibold mb-2">{service}</h3>
            <p className="text-gray-600 text-sm">Brief description of the service offered.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
