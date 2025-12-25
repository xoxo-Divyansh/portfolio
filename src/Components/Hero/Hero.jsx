import { usePortfolio } from "../../Context/PortfolioProvider";
import { motion } from "framer-motion";
import AnimatedText from "../Animations/AnimatedText";
import { fadeUp, fadeIn } from "../../Animations/Variants";
import { glowPulse } from "../../Animations/HeroVisual";
import heroRobot from "../../assets/hero/Astra.png";
import HeroAvatar from "./HeroAvatar";

const Hero = () => {
  const { personal, contact } = usePortfolio();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-[#0f0f0f] text-white flex items-center pt-20 md:pt-0 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="">
          {/* HERO HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <AnimatedText text="Hello, " />

            <span className="inline-flex gap-3">
              <span className="text-green-400 leading-none">I&#39;m</span>

              <span className="text-purple-400 leading-none">
                <AnimatedText text={personal.name} />
              </span>
            </span>
          </motion.h1>

          {/* TITLE */}
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-300 my-4"
          >
            {personal.title}
          </motion.h3>

          {/* SUBTITLE */}
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide hover:text-[#1C1C1C]">
            {personal.subtitle}
          </h4>

          {/* BIO */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl leading-relaxed"
          >
            {personal.bio[0]}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="px-6 py-3 bg-purple-500 text-black rounded-xl font-medium hover:bg-purple-400 transition"
            >
              View Projects
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 border border-purple-500 rounded-xl hover:bg-purple-500 hover:text-black transition"
            >
              Contact Me
            </button>

            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-purple-400 underline underline-offset-4 hover:text-green-500 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center md:justify-end overflow-visible">

          {/* Glow background */}
          <motion.div
            variants={glowPulse}
            animate="animate"
            className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          />

          {/* Floating character */}
          <HeroAvatar src={heroRobot} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
