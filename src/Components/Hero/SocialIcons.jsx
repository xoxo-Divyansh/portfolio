import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

 const socials  = [
  {
    id: "github",
    icon: FaGithub,
    href: "https://github.com/xoxo-Divyansh",
    glow: "shadow-purple-500/50",
    color: "from-purple-400 to-indigo-500",
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/divyansh-raj-tripathi",
    glow: "shadow-blue-500/50",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    href: "https://twitter.com/",
    glow: "shadow-sky-500/50",
    color: "from-cyan-400 to-sky-500",
  },
  {
    id: "email",
    icon: MdEmail,
    href: "mailto:drt.vip777@gmail.com",
    glow: "shadow-pink-500/50",
    color: "from-pink-400 to-purple-500",
  },
];


const sparkleAnim = {
  initial: { opacity: 0, scale: 0.2 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0.5, 1, 0.5],
    y: [2, -10],
  },
};

const SocialIcons = () => {
  return (
    <div className="flex gap-6 mb-8">
      {socials.map(({ id, icon: Icon, href, color }) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12 }}
          className="relative group"
        >
          {/* ✨ SPARKLES (ABOVE GLOW) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {[
              { top: "10%", left: "20%", delay: 0 },
              { top: "30%", right: "15%", delay: 0.6 },
              { bottom: "20%", left: "25%", delay: 1.2 },
              { bottom: "10%", right: "30%", delay: 1.8 },
            ].map((pos, i) => (
              <motion.span
                key={i}
                variants={sparkleAnim}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: pos.delay,
                  ease: "easeInOut",
                }}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={pos}
              />
            ))}
          </div>

          {/* 🌈 OUTER GLOW */}
          <span
            className={`
              absolute inset-0 rounded-full
              bg-gradient-to-r ${color}
              blur-[6px]
              opacity-70
              group-hover:opacity-100
              transition
            `}
          />

          {/* ⚡ SHARP ENERGY RING */}
          <span
            className={`
              absolute inset-[2px] rounded-full
              bg-gradient-to-r ${color}
              ring-1 ring-white/30
            `}
          />

          {/* 🔘 ICON CORE */}
          <span className="relative z-10 w-12 h-12 rounded-full bg-[#0b0b0b] flex items-center justify-center text-white">
            <Icon className="text-lg" />
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
