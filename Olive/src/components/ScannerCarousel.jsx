import React from "react";
import { Heart, Share, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const PhoneHero = () => {
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center bg-transparent py-10 overflow-hidden">
      
      {/* ── Symmetrical Background Carousel ── */}
      <div className="absolute top-1/2 -translate-y-[80%] left-1/2 -translate-x-1/2 w-full max-w-[900px] flex justify-between items-center z-10 pointer-events-none px-4 md:px-0">
        {/* Far Left */}
        <div className="hidden md:block w-[140px] h-[140px] rounded-[32px] bg-yellow-50/60 backdrop-blur-md opacity-40 shadow-sm transform -translate-x-8 scale-90" />
        {/* Mid Left */}
        <div className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-[32px] bg-red-50/70 backdrop-blur-md opacity-60 shadow-md transform translate-x-4 md:translate-x-12 scale-95" />
        {/* Spacer for Phone */}
        <div className="w-[320px] hidden md:block" />
        {/* Mid Right */}
        <div className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-[32px] bg-orange-50/70 backdrop-blur-md opacity-60 shadow-md transform -translate-x-4 md:-translate-x-12 scale-95" />
        {/* Far Right */}
        <div className="hidden md:block w-[140px] h-[140px] rounded-[32px] bg-green-50/60 backdrop-blur-md opacity-40 shadow-sm transform translate-x-8 scale-90" />
      </div>

      {/* ── Main Phone Mockup ── */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-50 h-[640px] w-[320px] mx-auto mt-4"
      >
        {/* Hardware Bezel */}
        <div className="absolute inset-0 z-[3] rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[#EAEAEA] border-[6px] border-[#F5F5F5] ring-1 ring-gray-200" />

        {/* Inner Screen */}
        <div className="absolute inset-0 top-[8px] left-[8px] right-[8px] bottom-[8px] z-[4] bg-white rounded-[40px] overflow-hidden flex flex-col">
          
          {/* Dynamic Island (Camera) */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-[20] w-[110px] h-[32px] bg-black rounded-full flex items-center justify-end px-3 shadow-sm">
            <div className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#080808]" />
            </div>
          </div>

          {/* Top Full-Bleed Image Area */}
          <div className="w-full h-[240px] bg-blue-100/50 relative flex-shrink-0">
          </div>

          {/* Bottom Sheet UI */}
          <div className="flex-1 bg-white -mt-6 rounded-t-[24px] relative z-10 p-5 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
            
            {/* Header: Product Shot & Title */}
            <div className="flex gap-4 items-start">
              {/* Product Thumbnail */}
              <div className="w-[80px] h-[100px] bg-green-50 rounded-xl border border-green-100 flex-shrink-0 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="w-12 h-16 bg-[#3C8C70] rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-[8px] text-white font-bold text-center leading-tight">HONEY<br/>MAMA'S</span>
                </div>
              </div>

              {/* Title & Score */}
              <div className="flex flex-col flex-1 pt-1">
                <h3 className="font-bold text-[#1F2937] leading-tight text-[17px] mb-1">
                  Cacao-nectar Bar, Oregon Peppermint
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">Honey Mama's</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                    <div className="flex flex-col">
                      <span className="font-bold text-[#111827] text-[15px] leading-none">85/100</span>
                      <span className="text-[11px] text-gray-500">Excellent</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Heart size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
                    <Share size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Oliver Says Box */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🥑</span>
                <span className="text-sm font-bold text-gray-900">
                  Oliver Says:
                </span>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                "This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. It's a nice option for an occasional treat, but just keep in mind the sugar content when considering it for your kids!"
              </p>
            </div>

            {/* Breakdown Header */}
            <div className="pt-2 border-t border-gray-50">
              <h4 className="font-bold text-gray-900 text-[15px]">Breakdown</h4>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneHero;
