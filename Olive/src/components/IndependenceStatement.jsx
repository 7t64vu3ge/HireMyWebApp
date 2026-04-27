import { motion } from "framer-motion";

export default function IndependenceStatement() {
  return (
    <section className="bg-white py-24 md:py-32 px-4 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Side: Huge Pink Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-3/5"
        >
          <h2 className="text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] font-bold text-[#FFA8BA] tracking-tight">
            100% Independent.<br />
            Always.
          </h2>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-2/5"
        >
          <p className="text-[20px] md:text-[24px] lg:text-[26px] leading-[1.4] text-[#2E4A35] font-bold tracking-tight">
            We <span className="text-[#A3B83F]">never monetize</span> through brand deals, affiliate links, or ads — so <span className="text-[#A3B83F]">you can trust our recommendations</span> are always aligned with our users.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
