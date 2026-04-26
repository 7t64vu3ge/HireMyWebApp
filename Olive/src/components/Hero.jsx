import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Apple } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Hero() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <div className="flex flex-col w-full">
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 md:px-6 mt-6 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
          <span className="text-xs font-medium text-gray-600">
            Trusted by thousands of healthy families
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight text-[#1A3622] mb-6 leading-[1.05]"
        >
          The Safest Way to <br /> Shop for Groceries
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.35rem] leading-relaxed text-gray-600 max-w-2xl mb-10 font-medium tracking-tight"
        >
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients From Your Family's Diet and Get Expert-Backed Food
          Insights
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 bg-[#1A3622] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2B5034] transition-all hover:scale-105"
        >
          Download for iOS
        </motion.button>
      </main>
    </div>
  );
}
