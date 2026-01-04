import { motion, useMotionValue, animate, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { heroFloat } from "../../Animations/HeroVisual";

const HeroAvatar = ({ src }) => {
  /* ROTATION */
  const rotate = useMotionValue(0);
  const spinRef = useRef(null);

  /* FLOATING */
  const floatControls = useAnimation();

  const startSpin = () => {
    const current = rotate.get();
    spinRef.current = animate(rotate, current + 360, {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    });
  };

  const startFloat = () => {
    floatControls.start("float");
  };

  useEffect(() => {
    startSpin();
    startFloat();

    return () => spinRef.current?.stop();
  }, []);

  return (
    <motion.img
      src={src}
      alt="Developer Avatar"
      draggable={false}
      className="relative w-64 md:w-80 drop-shadow-2xl select-none
                 cursor-grab active:cursor-grabbing "
      style={{ rotate }}
      variants={heroFloat}
      animate={floatControls}
      drag="x"
      dragConstraints={{ left: 50, right: 0 }}
      dragElastic={0.5}
      onDragStart={() => {
        spinRef.current?.stop();
        floatControls.stop(); // stop floating instantly
      }}
      onDrag={(e, info) => {
        rotate.set(info.offset.x * 0.35);
      }}
      onDragEnd={() => {
        startSpin(); // resume rotation
        startFloat(); // resume floating (THIS was missing)
      }}
    />
  );
};

export default HeroAvatar;
