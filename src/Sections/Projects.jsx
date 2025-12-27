// src/Sections/Projects.jsx
import { usePortfolio } from "../Context/PortfolioProvider";
import { motion } from "framer-motion";

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const { projects = [] } = usePortfolio();

  return (
    <section
      id="projects"
      className="w-full bg-[#0f0f0f] text-white py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // triggers whenever visible
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-[#151515] border border-white/10 rounded-2xl p-6
                hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/30
                transform hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-[#1f1f1f] text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="text-purple-400 hover:text-purple-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-purple-400 hover:text-purple-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
