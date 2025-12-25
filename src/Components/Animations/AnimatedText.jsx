import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
