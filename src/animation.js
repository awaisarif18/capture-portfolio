export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 200,
  },

  show: {
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
    delay: 1,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
    delay: 1,
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },

  show: {
    duration: 2,
    ease: "easeOut",
    opacity: 1,
    scale: 1,
    delay: 1.8,
  },
};

export const lineAnim = {
  hidden: {
    width: "0%",
  },

  show: {
    width: "100%",
    transition: { duration: 1, ease: "easeOut" },
    delay: 1,
  },
};

// export const slider = {
//   hidden: {
//     x: "130%",
//     skew: "45deg",
//   },

//   show: {
//     x: "100%",
//     delay: 2,
//     skew: "0deg",
//     transition: { duration: 3, ease: "easeOut" },
//   },
// };

// export const sliderContainer = {
//   hidden: {
//     opacity: 1,
//   },

//   show: {
//     opacity: 1,
//     transition: { ease: "easeOut" },
//   },
// };
