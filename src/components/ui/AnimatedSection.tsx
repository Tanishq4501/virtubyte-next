"use client";

import { motion, type Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type AnimationType = "fadeInUp" | "fadeIn" | "fadeInLeft" | "fadeInRight" | "scaleIn";

const variants: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
