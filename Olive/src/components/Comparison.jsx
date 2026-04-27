import { motion } from "framer-motion";
import { Check, X, Apple } from "lucide-react";

export default function Comparison() {
  const features = [
    {
      name: "Detailed Product Breakdown",
      olive: true,
      carrot: true,
      b: true,
    },
    {
      name: "Comprehensive Water Data",
      olive: true,
      carrot: false,
      b: false,
    },
    {
      name: "Seed Oil Free Dining Map",
      olive: true,
      carrot: false,
      b: false,
    },
    {
      name: "Seed Oil Flagging",
      olive: true,
      carrot: false,
      b: true,
    },
    {
      name: "Certified Lab-Testing Data",
      olive: true,
      carrot: false,
      b: false,
    },
  ];

  return (
    <section className="px-4 py-16 md:px-8 max-w-6xl mx-auto">
      <div className="bg-[#426B4B] rounded-[40px] px-6 py-16 md:p-20 flex flex-col items-center shadow-xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] leading-tight text-white font-medium mb-8">
            Olive Food Scanner App <br /> vs. The Rest
          </h2>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-sm hover:bg-opacity-90 transition-all">
            <Apple size={18} />
            Download for iOS
          </button>
        </div>

        {/* Comparison Table */}
        <div className="w-full max-w-4xl">
          {/* Header Row */}
          <div className="grid grid-cols-4 items-center mb-8 px-4">
            <div className="col-span-1"></div>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[#2E4A35] rounded-full flex items-center justify-center text-2xl shadow-sm border-2 border-white/10">
                🥑
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-3xl">🥕</div>
            </div>
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#426B4B] text-xl border-2 border-[#426B4B]">
                B
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 items-center py-6 border-b border-white/10 last:border-0 px-4"
              >
                <div className="col-span-1 text-white font-medium text-[15px] md:text-base">
                  {feature.name}
                </div>
                
                <div className="flex justify-center">
                  {feature.olive ? (
                    <div className="w-7 h-7 rounded-full bg-[#B1C355] flex items-center justify-center text-[#426B4B]">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="text-red-500" size={24} strokeWidth={3} />
                  )}
                </div>

                <div className="flex justify-center">
                  {feature.carrot ? (
                    <div className="w-7 h-7 rounded-full bg-[#B1C355] flex items-center justify-center text-[#426B4B]">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="text-[#FF4A4A]" size={24} strokeWidth={3} />
                  )}
                </div>

                <div className="flex justify-center">
                  {feature.b ? (
                    <div className="w-7 h-7 rounded-full bg-[#B1C355] flex items-center justify-center text-[#426B4B]">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  ) : (
                    <X className="text-[#FF4A4A]" size={24} strokeWidth={3} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
