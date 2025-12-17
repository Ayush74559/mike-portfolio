import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  blur?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  className,
  blur = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getVariants = (): Variants => {
    const distance = 40;
    const hiddenState: any = { opacity: 0 };
    if (blur) hiddenState.filter = 'blur(10px)';

    switch(direction) {
      case 'up': 
        return { hidden: { ...hiddenState, y: distance }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };
      case 'down': 
        return { hidden: { ...hiddenState, y: -distance }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };
      case 'left': 
        return { hidden: { ...hiddenState, x: distance }, visible: { opacity: 1, x: 0, filter: 'blur(0px)' } };
      case 'right': 
        return { hidden: { ...hiddenState, x: -distance }, visible: { opacity: 1, x: 0, filter: 'blur(0px)' } };
      case 'none': 
        return { hidden: { ...hiddenState }, visible: { opacity: 1, filter: 'blur(0px)' } };
      default: 
        return { hidden: { ...hiddenState, y: distance }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // Apple-style 'spring' feel
      >
        {children}
      </motion.div>
    </div>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerAmount?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className, delay = 0, staggerAmount = 0.05, as: Component = 'span' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const words = text.split(" ");

  return (
    <Component ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          // Use em-based margin so spacing scales with font size (crucial for large headings)
          className={cn("inline-block whitespace-nowrap", i !== words.length - 1 ? "mr-[0.35em]" : "")}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.8,
            delay: delay + (i * staggerAmount),
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export const BlurText: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      initial={{ filter: 'blur(20px)', opacity: 0, scale: 0.95 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};