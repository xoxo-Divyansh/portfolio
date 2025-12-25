// src/Animations/heroVisual.js




export const heroIdle = {
  animate: {
    y: [0, -18, 0],
    rotateZ: [0, 360],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotateZ: {
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

export const heroReset = {
  rotateZ: 0,
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};


export const heroFloat = {
  float: {
    y: [0, -16, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


export const floating = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const returnToIdle = {
  animate: {
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(168,85,247,0.2)",
      "0 0 40px rgba(168,85,247,0.5)",
      "0 0 20px rgba(168,85,247,0.2)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
