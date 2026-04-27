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
              <h3 className="text-[26px] mb-8 text-[#273522] font-semibold">
                {benefit.title}
              </h3>
              {benefit.id === "clarity" && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Olive breaks down every ingredient into clear, actionable information.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.
                    </p>
                  </div>
                </div>
              )}
              {benefit.id === "filtering" && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Olive flags harmful additives and controversial ingredients before they become mainstream concerns.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Keeps you ahead of potential food safety concerns.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Gives busy parents the confidence to make safer food choices every time.
                    </p>
                  </div>
                </div>
              )}
              {benefit.id === "outcomes" && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Empowers parents to feel more in control of their family's health.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Delivers personalized suggestions for healthier food choices.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 bg-[#3F634A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-[16px] font-[500] text-[#4A4A4A] leading-relaxed">
                      Promotes long-term well-being through informed, balanced decisions.
                    </p>
                  </div>
                </div>
              )}
              {benefit.id !== "clarity" && benefit.id !== "filtering" && benefit.id !== "outcomes" && (
                <p className="text-gray-600 leading-relaxed text-[16px] font-[500]">
                  {benefit.description}
                </p>
              )}
            </div>

            {benefit.id === "clarity" && (
              <div className="bg-gradient-to-b from-[#E7F0E8] to-[#ABC5B1] rounded-3xl overflow-hidden flex flex-col items-center justify-between p-6 m-4 relative h-[420px]">
                {/* 3 Fanned Images */}
                <div className="relative flex items-center justify-center w-full h-[180px] mt-2">
                  <img 
                    src="/assets/images/showcase.jpeg" 
                    className="absolute w-28 h-36 object-cover rounded-xl shadow-lg border-2 border-white -rotate-12 -translate-x-14"
                    alt="Left"
                  />
                  <img 
                    src="/assets/sea-salt.png" 
                    className="absolute w-28 h-36 object-cover rounded-xl shadow-lg border-2 border-white rotate-12 translate-x-14"
                    alt="Right"
                  />
                  <img 
                    src="/assets/ice-cream.png" 
                    className="absolute w-32 h-40 object-cover rounded-[14px] shadow-xl border-2 border-white z-10 -translate-y-2"
                    alt="Center"
                  />
                </div>

                {/* Score Pill */}
                <div className="bg-[#EAF3EC] rounded-2xl p-3 px-5 flex items-center gap-4 w-[90%] max-w-[320px] shadow-sm z-20 mt-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <img src="/assets/ice-cream.png" className="w-10 h-10 object-cover rounded" alt="Icon" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1F3824] text-[16px]">Straus Ice Cream</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#3F634A] text-[16px]">96/100</span>
                      <span className="text-[#3F634A] text-sm font-medium">Excellent</span>
                    </div>
                  </div>
                </div>

                {/* Positives & Negatives */}
                <div className="grid grid-cols-2 gap-4 w-full mt-4 h-[120px]">
                  <div className="bg-white/40 rounded-2xl p-4 flex flex-col gap-2.5 border border-white/60 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <div className="w-5 h-5 rounded-full bg-[#3F634A] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-[15px] font-semibold text-[#3F634A]">Positives</span>
                    </div>
                    <div className="flex gap-2"><div className="h-5 w-full bg-white/70 rounded-md"/><div className="h-5 w-8 bg-white/70 rounded-md"/></div>
                    <div className="flex gap-2"><div className="h-5 w-full bg-white/70 rounded-md"/><div className="h-5 w-12 bg-white/70 rounded-md"/></div>
                    <div className="flex gap-2"><div className="h-5 w-10 bg-white/70 rounded-md"/><div className="h-5 w-full bg-white/70 rounded-md"/></div>
                  </div>
                  <div className="bg-white/40 rounded-2xl p-4 flex flex-col gap-2.5 border border-white/60 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <div className="w-5 h-5 rounded-full bg-[#8E4A4A] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                      <span className="text-[15px] font-semibold text-[#8E4A4A]">Negatives</span>
                    </div>
                    <div className="flex gap-2"><div className="h-5 w-full bg-white/70 rounded-md"/><div className="h-5 w-8 bg-white/70 rounded-md"/></div>
                    <div className="flex gap-2"><div className="h-5 w-full bg-white/70 rounded-md"/><div className="h-5 w-12 bg-white/70 rounded-md"/></div>
                    <div className="flex gap-2"><div className="h-5 w-10 bg-white/70 rounded-md"/><div className="h-5 w-full bg-white/70 rounded-md"/></div>
                  </div>
                </div>
              </div>
            )}

            {benefit.id === "filtering" && (
              <div className="bg-gradient-to-b from-[#FEF5F7] to-[#FCD5DE] rounded-3xl overflow-hidden min-h-[420px] flex items-center justify-center relative m-4 pointer-events-none">
                <div className="absolute flex flex-col justify-center gap-5 -rotate-[15deg] scale-110 w-[200%] origin-center">
                  {[
                    { dir: 'left', type: 'positive', items: ['Organic Ingredients', 'Low PFAS', 'Plant-Based', 'Organic Ingredients', 'Low PFAS', 'Plant-Based'] },
                    { dir: 'right', type: 'positive', items: ['Antioxidants', '100% Whole Grain', 'Cholesterol-Free', 'Antioxidants', '100% Whole Grain', 'Cholesterol-Free'] },
                    { dir: 'left', type: 'negative', items: ['Monosodium Glutamate', 'Potassium Sorbate', 'Monosodium Glutamate', 'Potassium Sorbate', 'Monosodium Glutamate', 'Potassium Sorbate'] },
                    { dir: 'right', type: 'negative', items: ['Xanthan Gum', 'Potassium Bromate', 'Aspartame', 'Xanthan Gum', 'Potassium Bromate', 'Aspartame'] },
                    { dir: 'left', type: 'negative', items: ['Saccharin', 'Palm Oil', 'Sodium Benzoate', 'Saccharin', 'Palm Oil', 'Sodium Benzoate'] },
                  ].map((row, rIdx) => (
                    <motion.div
                      key={rIdx}
                      animate={{ x: row.dir === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
                      transition={{ repeat: Infinity, duration: row.dir === 'left' ? 20 : 25, ease: "linear" }}
                      className="flex gap-4 whitespace-nowrap items-center w-max"
                    >
                      {row.items.map((item, i) => (
                        <div key={i} className="bg-black/10 backdrop-blur-md text-[#1F1A24] border border-black/5 rounded-full px-4 py-2.5 flex items-center gap-3 font-semibold shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                          <div className="w-5 h-5 bg-[#1F1A24] text-white rounded-full flex items-center justify-center flex-shrink-0">
                            {row.type === 'positive' ? (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ) : (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            )}
                          </div>
                          <span className="text-[15px]">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {benefit.id === "outcomes" && (
              <div className="bg-[#F6EED5] rounded-3xl overflow-hidden min-h-[420px] flex items-center justify-center relative m-4">
                <img
                  src="/assets/family.png"
                  alt="Avocado Family"
                  className="w-[85%] h-auto object-contain"
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
