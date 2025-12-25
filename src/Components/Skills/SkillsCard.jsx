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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ type: "spring", stiffness: 900 }}
      className="bg-[#151515] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition"
    >
      <h3 className="text-xl font-semibold mb-5 text-purple-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm rounded-full bg-[#1f1f1f] text-gray-300 border border-white/5 hover:border-purple-500/40 transition flex items-center gap-2"
          >
            <span className="text-base">
              {getSkillIcon(skill)}
            </span>
            {skill}
          </span>
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
