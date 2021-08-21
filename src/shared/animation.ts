// base animation objects
export const springType = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

// Initial fullpage animation
export const fullpageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.17,
      delayChildren: 0.06,
    },
  },
};

// Initial Page Animations
export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Component Animations
export const titleAnim = {
  hidden: {
    x: -300,
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 40,
      mass: 1,
      damping: 10,
    },
  },
};

export const subAnim = {
  hidden: { scale: 0, top: -70 },
  show: {
    scale: 1,
    top: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export const scrollFade = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duiration: 1,
    },
  },
};

export const contentAnim = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: 50,
    y: 100,
    // perspective: "1000px",
    // rotateY: "360deg",
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    // perspective: "2000px",
    // rotateY: "341deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const cardAnim = {
  hidden: {
    // scale: 1,
    boxShadow: "none",
    transition: {
      // ease: "easeOut",
    },
  },
  show: {
    // scale: 1.01,
    boxShadow: "hsl(280deg 100% 22% / 55%) 5px 3px 0px",
    transition: {
      // ease: "easeOut",
      // delay: 0.15,
      // duration: 0.5,
      duration: 3,
    },
  },
};
