import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TypingText from "../Animations/TypingText";
import { usePortfolio } from "../../Context/PortfolioProvider";
import { staggerContainer, fadeUp } from "../../Animations/Variants";

const About = () => {
  const { personal, highlights } = usePortfolio();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  
  // ✅ activeIndex MUST be defined here
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-[#0f0f0f] text-white py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
            About Me
          </h2>
          {personal.bio.map((paragraph, index) => (
            <TypingText
              key={index}
              text={paragraph}
              speed={15}
              start={isInView && index === activeIndex}
              onComplete={() => setActiveIndex((prev) => prev + 1)}
              className="text-gray-400 leading-relaxed"
            />
          ))}
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="border border-purple-500/30 rounded-xl px-5 py-4 text-gray-300 hover:bg-purple-500/10 transition"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
//
export default About;
