import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an email service)
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className=" flex flex-col items-center justify-center bg-gradient-to-r  text-white py-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-8 text-lg text-center max-w-lg">
        Feel free to reach out via email or follow me on social media!
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full   p-1 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-md text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-2 py-2 mt-1 bg-gray-700 rounded-md text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-md text-white h-32"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="mt-10 flex space-x-6 text-xl">
        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-blue-500"
        >
          <FaFacebookF />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-gray-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="hover:text-blue-400"
        >
          <FaLinkedinIn />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Contact;
