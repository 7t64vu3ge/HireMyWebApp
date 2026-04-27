import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * A motion.div card wrapper with standardized scroll-reveal animation.
 * Replaces the repeated cardVariants + whileInView pattern used across
 * HowItWorks, HealthBenefits, and Pricing components.
 */
export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  margin = "-50px",
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
