import { useRef } from "react";
import { usePortfolio } from "../Context/PortfolioProvider";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  fadeUpSoft,
  sectionStagger,
  slideLeft,
  slideRight,
} from "../Animations/Variants";

const Contact = () => {
  const { contact } = usePortfolio();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCESS:", result.text);
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="w-full bg-[#0f0f0f] text-white py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Content */}
        <motion.div variants={slideLeft} className="space-y-6">
          {/* Left Content */}
          <motion.div variants={slideLeft} className="space-y-8">
            {/* Heading */}
            <motion.div variants={fadeUpSoft}>
              <h2 className="text-3xl md:text-4xl font-bold">Let’s talk 👋</h2>
              <p className="text-gray-400 mt-2 max-w-md">
                Have an idea, a project, or just want to say hi? I’m always open
                to meaningful conversations.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              variants={fadeUpSoft}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-purple-400 break-all">{contact.email}</p>
              </div>

              <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-purple-400">{contact.phone}</p>
              </div>

              <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4 sm:col-span-2">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-purple-400">{contact.location}</p>
              </div>
            </motion.div>

            {/* Resume CTA */}
            <motion.div variants={fadeUpSoft}>
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
              >
                View Resume →
              </a>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeUpSoft} className="text-gray-400">
            Let’s connect! I’m open for projects, collaborations, or just a
            friendly hello.
          </motion.p>

          <motion.div variants={fadeUpSoft} className="space-y-4">
            <p>
              Email: <span className="text-purple-400">{contact.email}</span>
            </p>
            <p>
              Phone: <span className="text-purple-400">{contact.phone}</span>
            </p>
            <p>
              Location:{" "}
              <span className="text-purple-400">{contact.location}</span>
            </p>

            <div>
              <p>Want to know more?</p>
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content – Contact Form */}
        <motion.div
          variants={slideRight}
          className="bg-[#1c1c1c] p-6 rounded-xl shadow-xl"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:border-purple-400 outline-none"
            />

            {/* Subject */}
            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:border-purple-400 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:border-purple-400 outline-none"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:border-purple-400 outline-none"
            ></textarea>

            {/* Hidden Time Field */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-6 py-3 bg-purple-500 text-black font-medium rounded-xl hover:bg-purple-400 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
