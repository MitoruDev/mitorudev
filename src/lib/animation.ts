export const heroSlideInitial = { y: 20, opacity: 0 } as const;
export const heroSlideAnimate = { y: 0, opacity: 1 } as const;

export const heroSpring = (delay = 0) => ({
  type: "spring" as const,
  stiffness: 170,
  damping: 22,
  delay,
});

export const heroEaseOut = (duration = 0.3, delay = 0) => ({
  duration,
  delay,
  ease: "easeOut" as const,
});


