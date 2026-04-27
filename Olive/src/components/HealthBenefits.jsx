import { motion } from "framer-motion";
import AnimatedCard from "./ui/AnimatedCard";
import { sectionHeader, benefits } from "../data/healthBenefits";
import { filterTags } from "../data/howItWorks";

export default function HealthBenefits() {
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
            <h2 className="max-w-xl text-2xl md:text-[3.2rem] text-white leading-tight">
              {sectionHeader.title}
            </h2>
          </div>

          {/* Description & Action */}
          <div className="flex gap-6 flex-col">
            <div className="max-w-sm md:text-xl text-sm text-[#F5FAF6]">
              {sectionHeader.description}
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
        {benefits.map((benefit, idx) => (
          <AnimatedCard
            key={benefit.id}
            delay={0.1 * (idx + 1)}
            className="p-4 bg-white max-w-5xl mx-auto rounded-3xl grid grid-cols-1 lg:grid-cols-2 shadow-sm border border-gray-100"
          >
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>

            {benefit.id === "clarity" && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center">
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {benefit.id === "filtering" && (
              <div className="bg-gray-50 rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center relative">
                {/* Animated Horizontal Track */}
                <div className="absolute inset-0 flex items-center bg-gray-50 overflow-hidden opacity-50">
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex gap-4 whitespace-nowrap pl-4"
                  >
                    {[...filterTags, ...filterTags].map((tag, i) => (
                      <span key={i} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 shadow-sm">{tag}</span>
                    ))}
                  </motion.div>
                </div>
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="w-full h-full object-cover relative z-10 opacity-20"
                  loading="lazy"
                />
              </div>
            )}
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
