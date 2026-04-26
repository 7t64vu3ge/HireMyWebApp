import React from "react";
import { motion } from "framer-motion";

export default function HealthBenefits() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-[#F5FAF6]">
      {/* Green Box Section */}
      <div className="pb-24 md:py-48 bg-[#386641] px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row p-8 md:p-0 justify-between max-w-5xl mx-auto items-start gap-10"
        >
          {/* Heading Area */}
          <div className="flex relative text-primary items-center justify-center">
            <h2 className="font-semibold max-w-xl text-2xl md:text-[3.2rem] text-white leading-tight">
              Health Benefits of Using Olive
            </h2>
          </div>

          {/* Description & Action */}
          <div className="flex gap-6 flex-col">
            <div className="max-w-sm md:text-xl text-sm text-[#F5FAF6]">
              Olive proactively flags harmful ingredients and offers
              personalized recommendations, empowering you to make better
              choices for your family's health.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#386641] px-6 py-3 text-sm font-medium shadow-sm hover:bg-opacity-90 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overlapping Cards Section */}
      <div className="-mt-24 flex flex-col px-4 md:px-8 pb-24 gap-8">
        {/* Feature Card 1 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-4 bg-white max-w-5xl mx-auto rounded-3xl grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-gray-100"
        >
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Achieve Nutritional Clarity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Olive breaks down every ingredient so you know exactly what you're
              eating and how it impacts your long-term health goals.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center">
            <img src="/assets/images/cta.png" alt="Feature Preview" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 bg-white max-w-5xl mx-auto rounded-3xl grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-gray-100"
        >
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Proactive Ingredient Filtering
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Instantly identify hidden sugars, synthetic dyes, and harmful
              additives before they reach your shopping cart.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center relative overflow-hidden">
            {/* Animated Horizontal Track */}
            <div className="absolute inset-0 flex items-center bg-gray-50 overflow-hidden opacity-50">
               <motion.div 
                 animate={{ x: ["0%", "-50%"] }} 
                 transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                 className="flex gap-4 whitespace-nowrap pl-4"
               >
                 {["High Fibre", "No MSG", "Low PFAS", "No Seed Oils", "High Fibre", "No MSG", "Low PFAS", "No Seed Oils"].map((tag, i) => (
                   <span key={i} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm">{tag}</span>
                 ))}
               </motion.div>
            </div>
            <img src="/assets/images/showcase.jpeg" alt="Feature Preview" className="w-full h-full object-cover relative z-10 opacity-20" />
          </div>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 bg-white max-w-5xl mx-auto rounded-3xl grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-gray-100"
        >
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Real Health Outcomes for Your Family
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empowers parents to feel more in control of their family's health, delivering personalized suggestions and promoting long-term well-being through informed, balanced decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
