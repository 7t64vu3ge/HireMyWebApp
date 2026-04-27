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
        <AnimatedCard delay={0.1} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200 group flex flex-col">
          <h3 className="text-[17px] font-semibold text-[#273522] mb-6">
            {steps[0].title}
          </h3>
          <ScanDetectIllustration />
          <p className="text-[13px] text-[#707070] font-[500] leading-relaxed mt-auto pt-2">
            {steps[0].description}
          </p>
        </AnimatedCard>

        {/* Step 2: Data Analysis & Validation */}
        <AnimatedCard delay={0.2} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200 flex flex-col">
          <h3 className="text-[17px] font-semibold text-[#273522] mb-6">
            {steps[1].title}
          </h3>
          <DataAnalysisIllustration />
          <p className="text-[13px] text-[#707070] font-[500] leading-relaxed mt-auto pt-2">
            {steps[1].description}
          </p>
        </AnimatedCard>

        {/* Step 3: Actionable Insights */}
        <AnimatedCard delay={0.3} className="w-full mx-auto p-8 rounded-[14px] bg-[#F5FAF6] border border-gray-200 flex flex-col">
          <h3 className="text-[17px] font-semibold text-[#273522] mb-6">
            {steps[2].title}
          </h3>
          <InsightsIllustration />
          <p className="text-[13px] text-[#707070] font-[500] leading-relaxed mt-auto pt-2">
            {steps[2].description}
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}

/* ── Illustration Sub-Components ── */

const starPositions = [
  { left: "60.0879%", top: "56.0626%", scale: 0.337847, rotate: 86.9263, delay: 0.2 },
  { left: "0.742261%", top: "68.4438%", scale: 0.5, rotate: 149.84, delay: 1.1 },
  { left: "16.8835%", top: "29.9546%", scale: 0.522584, rotate: 101.063, delay: 0.5 },
  { left: "21.2515%", top: "42.328%", scale: 0.388243, rotate: 105.901, delay: 1.5 },
  { left: "18.1683%", top: "9.55101%", scale: 0.652454, rotate: 97.8461, delay: 0.8 },
  { left: "46.8667%", top: "6.74071%", scale: 0.4, rotate: 145.868, delay: 1.2 },
  { left: "61.1115%", top: "78.229%", scale: 0.3, rotate: 145.868, delay: 0.3 },
  { left: "11.284%", top: "43.3994%", scale: 0.362584, rotate: 118.483, delay: 0.9 },
  { left: "28.6127%", top: "39.1373%", scale: 0.192981, rotate: 142.186, delay: 1.8 },
  { left: "43.0175%", top: "65.7148%", scale: 0.236068, rotate: 100.344, delay: 0.4 },
  { left: "38.6034%", top: "19.697%", scale: 1.15087, rotate: 121.227, delay: 1.4 },
  { left: "8.77335%", top: "22.6511%", scale: 0.13074, rotate: 89.3775, delay: 0.7 }
];

function ScanDetectIllustration() {
  return (
    <div className="h-[200px] rounded-2xl relative overflow-hidden flex items-center justify-center mb-6">
      {/* Viewfinder Corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-tl-xl" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-tr-xl" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-bl-xl" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-br-xl" />
      
      {/* Central Barcode/Avocado Graphic */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full flex justify-between">
            <div className="w-1 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-2 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-1 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-3 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-1.5 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-2 bg-[#1F3824] h-full rounded-sm"></div>
            <div className="w-1 bg-[#1F3824] h-full rounded-sm"></div>
          </div>
        </div>
        <span className="text-5xl relative z-10 filter drop-shadow-md">🥑</span>
        
        {/* Scan Line Animation */}
        <motion.div 
          animate={{ y: [-40, 40, -40] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute left-[-20px] right-[-20px] h-[3px] bg-black rounded-full shadow-[0_0_8px_2px_rgba(0,0,0,0.3)] z-20"
        />
      </div>
      
      {/* Popping Stars */}
      {starPositions.map((pos, idx) => (
        <motion.svg
          key={idx}
          className="pointer-events-none absolute z-20"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          style={{ 
            left: pos.left, 
            top: pos.top, 
            transform: `scale(${pos.scale}) rotate(${pos.rotate}deg)`,
            transformOrigin: "center"
          }}
          animate={{ opacity: [0, 0.8, 0], scale: [pos.scale * 0.8, pos.scale * 1.2, pos.scale * 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: pos.delay,
            ease: "easeInOut"
          }}
        >
          <path opacity="0.6" d="M11.3013 13.0702C10.537 13.1467 9.4709 12.8266 8.04671 12.1297L8.02026 12.1172L8.00061 12.1368C6.85364 13.2321 5.9347 13.8592 5.18172 14.0174L5.07559 14.0368C3.43069 14.2913 2.97659 12.7429 3.37591 9.85826L3.39176 9.74667L3.32493 9.71102C-0.730973 7.49471 -0.423501 5.47902 4.10718 4.64456L4.22767 4.62286L4.26634 4.417C4.66689 2.31333 5.24804 1.14741 6.19681 0.935047L6.28976 0.917604C7.29215 0.762556 8.22342 1.69761 9.27529 3.64222L9.37374 3.82687L9.49636 3.81097C14.0674 3.23758 14.9695 5.06618 11.7721 8.40381L11.718 8.45817L11.7674 8.55966C12.9937 11.1364 13.0512 12.737 11.5062 13.0391L11.4089 13.056L11.3013 13.0702Z" fill="#1F3824"></path>
        </motion.svg>
      ))}
    </div>
  );
}

function DataAnalysisIllustration() {
  return (
    <div className="h-[200px] rounded-2xl relative flex flex-col items-center justify-center mb-6">
      {/* Background Carousel */}
      <div className="relative w-full h-[120px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="flex gap-4 animate-scroll w-[200%]">
            {['/assets/ice-cream.png', '/assets/sea-salt.png', '/assets/spaghetti-squash.png', '/assets/ice-cream.png', '/assets/sea-salt.png', '/assets/spaghetti-squash.png'].map((src, i) => (
              <img key={i} src={src} alt="Product preview" className="w-20 h-20 bg-gray-100 object-cover rounded-[14px] flex-shrink-0 shadow-sm" />
            ))}
          </div>
        </div>
        {/* Edge blur gradients */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F5FAF6] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F5FAF6] to-transparent z-10" />

        {/* Center Dark Blur Backdrop (Hourglass effect) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[150%] bg-black/25 blur-md z-10 rounded-full" />
      </div>
      
      {/* Pill Foreground */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-20 flex items-center gap-2 mt-2 bg-[#EAF3EC] px-3 py-1.5 rounded-full"
      >
        <div className="w-[18px] h-[18px] rounded-full bg-[#3F634A] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span className="text-[13px] font-[600] text-[#3F634A]">Safe to consume</span>
      </motion.div>
    </div>
  );
}

function InsightsIllustration() {
  const images = ['/assets/sea-salt.png', '/assets/images/showcase.jpeg', '/assets/spaghetti-squash.png'];
  
  return (
    <div className="h-[200px] rounded-2xl relative flex flex-col items-center justify-center mb-6 overflow-hidden">
      {/* Faint green horizontal bars in background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-50 px-8">
        <div className="w-full h-5 bg-[#E1EFE4] rounded-full" />
        <div className="w-[90%] h-5 bg-[#E1EFE4] rounded-full" />
        <div className="w-[80%] h-5 bg-[#E1EFE4] rounded-full" />
        <div className="w-full h-5 bg-[#E1EFE4] rounded-full" />
        <div className="w-[85%] h-5 bg-[#E1EFE4] rounded-full" />
      </div>

      {/* 3 fanned images */}
      <div className="relative z-10 flex items-center justify-center w-full h-[150px]">
        {/* Left Card */}
        <motion.img 
          initial={{ rotate: 0, x: 0 }}
          whileInView={{ rotate: -12, x: -45, y: 15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={images[0]} 
          className="absolute w-20 h-[120px] object-cover rounded-xl shadow-md border-2 border-white/80"
        />
        {/* Right Card */}
        <motion.img 
          initial={{ rotate: 0, x: 0 }}
          whileInView={{ rotate: 12, x: 45, y: 15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={images[2]} 
          className="absolute w-20 h-[120px] object-cover rounded-xl shadow-md border-2 border-white/80"
        />
        {/* Center Card */}
        <motion.img 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={images[1]} 
          className="absolute w-[90px] h-[140px] object-cover rounded-xl shadow-xl border-2 border-white z-10"
        />
      </div>
    </div>
  );
}
