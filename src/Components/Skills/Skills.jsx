import { usePortfolio } from "../../Context/PortfolioProvider";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f] text-white scroll-mt-24">
      <div
        
        className="max-w-7xl mx-auto px-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Skills & Tech Stack
        </h2>

     <motion.div className="grid md:grid-cols-3 gap-8">
  {skills.map((group) => (
    <SkillsCard
      key={group.category}
      title={group.category}
      skills={group.skills}
    />
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default Skills;
