import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-4 py-8 md:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-[40px] md:rounded-[40px] overflow-hidden min-h-[500px] flex items-center shadow-xl">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/images/cta.png")' }}
        />

        {/* Gradient Overlays */}
        {/* Left dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-[80%]" />
        {/* Overall subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Mascot Line Art (Right side) - Approximation using SVG */}
        <div className="absolute right-[-5%] bottom-[-5%] w-[400px] h-[400px] opacity-40 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M100 20 C60 20 20 60 20 110 C20 160 60 190 100 190 C140 190 180 160 180 110 C180 60 140 20 100 20 Z" />
            <path d="M100 20 Q100 0 120 0" />
            {/* Simple face outline */}
            <circle cx="70" cy="90" r="5" fill="white" />
            <circle cx="130" cy="90" r="5" fill="white" />
            <path d="M85 120 Q100 135 115 120" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight"
          >
            Keep your family<br />safe with Olive
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 mb-10"
          >
            {[
              "Effortless food scanning",
              "Peace of mind for parents",
              "Healthy product recommendations"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-black">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-white text-[18px] md:text-[20px] font-medium tracking-wide">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white text-[#2E4A35] px-8 py-4 rounded-full font-bold text-[16px] inline-flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md hover:scale-[1.02]"
          >
            <span className="text-[20px]">🫒</span>
            Download for iOS
          </motion.button>
        </div>

      </div>
    </section>
  );
}
