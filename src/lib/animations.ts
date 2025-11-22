// Cinematic animation variants for Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const cinematicReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } },
};

export const letterboxReveal = {
  hidden: { scaleY: 1 },
  visible: { scaleY: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export const goldGlow = {
  rest: { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
  hover: { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)", transition: { duration: 0.3 } },
};
