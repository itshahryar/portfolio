import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../style";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shahryar",
          from_email: form.email,
          to_email: "your-email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-primary">
      {/* Header Section - Matching the provided section header style */}
      <div className="pt-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-secondary uppercase text-sm tracking-wider mb-2">
            Get in touch
          </p>
          <h2 className="text-white text-3xl font-bold">Contact Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
      </div>

      {/* Main Content - Contact Form Only */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-black-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-purple-500/20 shadow-xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 sm:mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-purple-500/20 focus:border-purple-500 font-medium text-sm sm:text-base w-full transition-all duration-300"
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 sm:mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-purple-500/20 focus:border-purple-500 font-medium text-sm sm:text-base w-full transition-all duration-300"
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 sm:mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-purple-500/20 focus:border-purple-500 font-medium text-sm sm:text-base w-full transition-all duration-300 resize-none"
              />
            </label>

            <motion.button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/30 text-sm sm:text-base transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

