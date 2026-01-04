import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  const getSkillIcon = (skill) => {
    const iconMap = {
      HTML5: "🟧",
      CSS3: "🟦",
      "Tailwind CSS": "🎨",
      JavaScript: "🟨",
      "React.js": "⚛️",
      "Node.js": "🟢",
      "Express.js": "🚀",
      MongoDB: "🍃",
      GSAP: "🎭",
      Git: "📚",
      GitHub: "🐙",
      "REST APIs": "🔗",
    };
    return iconMap[skill] || "💻";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="
        relative bg-[#151515]
        border border-white/10
        rounded-2xl p-6
        transition-all duration-300
        hover:border-purple-500/50
        hover:shadow-[0_0_30px_-14px_rgba(168,85,247,0.4)]
      "
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold mb-5 text-purple-400 tracking-wide">
        {title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.25,
              delay: index * 0.03,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 14px rgba(168,85,247,0.35)",
            }}
            className="
              px-4 py-2 text-sm
              rounded-full
              bg-[#1f1f1f]
              text-gray-300
              border border-white/5
              flex items-center gap-2
              cursor-default
              transition-colors
              hover:text-white
              hover:border-purple-500/50
            "
          >
            <span className="text-base text-purple-400">
              {getSkillIcon(skill)}
            </span>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
