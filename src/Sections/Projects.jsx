import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../Components/Rebuild/ProjectCard";
import { usePortfolio } from "../Context/PortfolioProvider";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  const { projects = [] } = usePortfolio();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      data-section="projects"
      className="showcase-projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="rebuild-container">
        <motion.div className="showcase-projects__intro" variants={itemVariants}>
          <p className="showcase-projects__eyebrow">Selected work / visual proof</p>
          <div className="showcase-projects__header">
            <div className="showcase-projects__heading">
              <h2 className="showcase-projects__title">
                Product work framed with real interface proof.
              </h2>
            </div>

            <div className="showcase-projects__lead">
              <p>
                This section now uses actual project screens instead of abstract
                placeholders, so the work reads with more confidence and less
                explanation.
              </p>
              <p>
                Each build is presented like a product case, with a clearer
                narrative, essential features, and a compact visual sequence you
                can move through inside the framed surface.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="showcase-projects__list" variants={itemVariants}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reverse={index % 2 === 1}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
