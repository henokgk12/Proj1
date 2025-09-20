function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <p><strong>Email:</strong> info@mechena.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Engineering Blvd, Tech City</p>
        </div>

        {/* Contact Form Placeholder */}
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
          <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
          <textarea placeholder="Your Message" className="border p-2 rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
