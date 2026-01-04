import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TypingText from "../Animations/TypingText";
import { usePortfolio } from "../../Context/PortfolioProvider";

const highlightVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const { personal, about } = usePortfolio();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-purple-400"
          >
            {about.heading}
          </motion.h2>

          <div className="space-y-6 min-h-[300px]">
            {personal.bio.map((paragraph, index) => (
              <TypingText
                key={`bio-${index}`}
                text={paragraph}
                speed={14}
                start={isInView && index === activeIndex}
                onComplete={() => setActiveIndex((prev) => prev + 1)}
                className="text-gray-400 leading-loose"
              />
            ))}
          </div>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {about.highlights.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              variants={highlightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -4 }}
              className="
                border border-purple-500/30
                rounded-xl px-5 py-4
                text-gray-300
                bg-transparent
                transition-all duration-300
                hover:border-purple-500/60
                hover:bg-purple-500/10
              "
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
