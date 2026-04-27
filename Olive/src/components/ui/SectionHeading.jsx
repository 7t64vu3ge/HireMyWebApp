import { motion } from "framer-motion";

/**
 * Animated section heading with consistent scroll-reveal behavior.
 * Accepts children for full flexibility (e.g., multi-line headings with <br/>).
 */
export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
