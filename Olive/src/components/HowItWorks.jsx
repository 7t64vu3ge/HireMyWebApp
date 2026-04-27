import { motion } from "framer-motion";
import AnimatedCard from "./ui/AnimatedCard";
import SectionHeading from "./ui/SectionHeading";
import { steps, insightItems } from "../data/howItWorks";

export default function HowItWorks() {
  return (
    <section className="py-4 md:py-16 flex flex-col max-w-6xl mx-auto items-center">
      {/* Title Section */}
      <SectionHeading
        className="text-[#253612] max-w-xl font-medium text-2xl md:text-[3.2rem] text-center leading-tight"
      >
        How the Olive Food Scanner App Works
      </SectionHeading>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-24 gap-6 w-full px-4 md:px-0">
        
        {/* Step 1: Scan & Detect */}
        <AnimatedCard delay={0.1} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200 group">
          <ScanDetectIllustration />
          <h3 className="text-base font-semibold text-[#273522] mb-2">
            {steps[0].title}
          </h3>
          <p className="text-sm text-[#707070] font-medium leading-5">
            {steps[0].description}
          </p>
        </AnimatedCard>

        {/* Step 2: Data Analysis & Validation */}
        <AnimatedCard delay={0.2} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200">
          <DataAnalysisIllustration />
          <h3 className="text-base font-semibold text-[#273522] mb-2">
            {steps[1].title}
          </h3>
          <p className="text-sm text-[#707070] font-medium leading-5">
            {steps[1].description}
          </p>
        </AnimatedCard>

        {/* Step 3: Actionable Insights */}
        <AnimatedCard delay={0.3} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200">
          <InsightsIllustration items={insightItems} />
          <h3 className="text-base font-semibold text-[#273522] mb-2">
            {steps[2].title}
          </h3>
          <p className="text-sm text-[#707070] font-medium leading-5">
            {steps[2].description}
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}

/* ── Illustration Sub-Components ── */

function ScanDetectIllustration() {
  return (
    <div className="h-[200px] rounded-2xl relative overflow-hidden bg-white/60 mb-6 flex items-center justify-center border border-white/40">
      {/* Viewfinder Corners */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gray-300 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gray-300 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gray-300 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gray-300 rounded-br-lg" />
      
      {/* Central Barcode/Avocado Graphic */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full flex justify-between">
            <div className="w-1 bg-black h-full"></div>
            <div className="w-2 bg-black h-full"></div>
            <div className="w-1 bg-black h-full"></div>
            <div className="w-3 bg-black h-full"></div>
            <div className="w-1.5 bg-black h-full"></div>
            <div className="w-2 bg-black h-full"></div>
            <div className="w-1 bg-black h-full"></div>
          </div>
        </div>
        <span className="text-5xl relative z-10 filter drop-shadow-md">🥑</span>
        
        {/* Scan Line Animation */}
        <motion.div 
          animate={{ y: [-40, 40, -40] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute left-[-20px] right-[-20px] h-[2px] bg-[#22C55E] shadow-[0_0_12px_3px_rgba(34,197,94,0.5)] z-20"
        />
      </div>
      
      {/* Sparkles */}
      <span className="absolute top-10 right-14 text-lg animate-pulse text-yellow-400">✨</span>
      <span className="absolute bottom-12 left-12 text-sm animate-pulse delay-75 text-yellow-400">✨</span>
    </div>
  );
}

function DataAnalysisIllustration() {
  return (
    <div className="h-[200px] rounded-2xl relative overflow-hidden bg-white/60 mb-6 flex items-center justify-center border border-white/40">
      {/* Background Carousel */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="flex gap-4 animate-scroll w-[200%]">
          {['/assets/ice-cream.png', '/assets/sea-salt.png', '/assets/spaghetti-squash.png', '/assets/ice-cream.png', '/assets/sea-salt.png', '/assets/spaghetti-squash.png'].map((src, i) => (
            <img key={i} src={src} alt="Product preview" className="w-20 h-20 bg-gray-100 object-cover rounded-xl flex-shrink-0 border border-gray-200 shadow-sm" />
          ))}
        </div>
      </div>
      {/* Edge blur gradients */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Pill Foreground */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-20 bg-white/95 backdrop-blur shadow-lg px-5 py-2.5 rounded-full flex items-center gap-2 border border-gray-100"
      >
        <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span className="text-sm font-bold text-[#273522]">Safe to consume</span>
      </motion.div>
    </div>
  );
}

function InsightsIllustration({ items }) {
  return (
    <div className="h-[200px] rounded-2xl relative overflow-hidden bg-[#eef5ef] mb-6 flex items-center justify-center border border-white/40">
      <div className="flex flex-col gap-2.5 relative z-10 w-[85%] mt-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="bg-white/90 backdrop-blur-md shadow-sm px-4 py-2.5 rounded-xl border border-white flex items-center gap-2"
          >
            <span className="text-[15px]">{item.emoji}</span>
            <span className="text-xs font-bold text-[#273522] truncate">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
