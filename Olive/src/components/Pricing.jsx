import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3824] mb-12 text-center tracking-tight"
        >
          Healthy Choices<br />
          <span className="text-[#386641]">Honest Pricing</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Monthly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 border border-gray-200 bg-white shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">monthly</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">$14.99</span>
              <span className="text-gray-500">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#E8F3EA] p-1 rounded-full">
                  <Check size={16} className="text-[#386641]" />
                </div>
                Unlimited Scans
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#E8F3EA] p-1 rounded-full">
                  <Check size={16} className="text-[#386641]" />
                </div>
                Unlimited Database Searches
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#E8F3EA] p-1 rounded-full">
                  <Check size={16} className="text-[#386641]" />
                </div>
                Comprehensive Lab-Testing Data
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-full border border-gray-200 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </motion.div>
          
          {/* Yearly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-8 bg-[#253612] text-white shadow-xl flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#386641] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
              Best Value
            </div>
            
            <h3 className="text-xl font-bold mb-2">yearly</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">$69.99</span>
              <span className="text-white/70">/yr</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Check size={16} className="text-white" />
                </div>
                Everything in monthly plan
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Check size={16} className="text-white" />
                </div>
                Get 7 months free
              </li>
              <li className="flex items-center gap-3 font-semibold text-[#86EFAC]">
                <div className="bg-[#86EFAC]/20 p-1 rounded-full">
                  <Check size={16} className="text-[#86EFAC]" />
                </div>
                60% Savings
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-full bg-white font-semibold text-[#253612] hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
