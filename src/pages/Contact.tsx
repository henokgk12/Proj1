import ContactForm from '../pages/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutralLight px-8 py-20">
      <h1 className="text-4xl font-heading font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
        Have questions or a project idea? Drop us a message and we’ll get back to you!
      </p>
      <ContactForm />
    </div>
    
  );
  
};

export default Contact;
