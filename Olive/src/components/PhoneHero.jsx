import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share } from "lucide-react";

const slides = [
  {
    image: "/assets/showcase.jpeg",
    thumbnail: { bg: "#3C8C70", label: "HONEY\nMAMA'S" },
    title: "Cacao-nectar Bar, Oregon Peppermint",
    brand: "Honey Mama's",
    score: 85,
    rating: "Excellent",
    oliverSays:
      '"This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. It\'s a nice option for an occasional treat, but just keep in mind the sugar content when considering it for your kids!"',
  },
  {
    image: "/assets/ice-cream.png",
    thumbnail: { bg: "#C05746", label: "OLIPOP" },
    title: "Strawberry Vanilla Sparkling Tonic",
    brand: "Olipop",
    score: 100,
    rating: "Excellent",
    oliverSays:
      '"This drink\'s high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars, making it a great choice for your kids while still feeling like a treat!"',
  },
  {
    image: "/assets/sea-salt.png",
    thumbnail: { bg: "#D4A843", label: "SIETE" },
    title: "Sea Salt Tortilla Chips, Grain Free",
    brand: "Siete",
    score: 92,
    rating: "Excellent",
    oliverSays:
      '"These chips are made with simple, clean ingredients like cassava flour and avocado oil. No artificial preservatives or harmful additives. A solid snack option for the whole family!"',
  },
];

const PhoneHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

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

          {/* ── Top Image Carousel ── */}
          <div className="w-full h-[240px] relative flex-shrink-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slide.image}
                alt={slide.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Carousel Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── Bottom Sheet UI (fixed, no scroll) ── */}
          <div className="flex-1 bg-white -mt-6 rounded-t-[24px] relative z-10 p-5 flex flex-col gap-4 overflow-hidden">

            {/* Header: Product Shot & Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex gap-4 items-start"
              >
                {/* Product Thumbnail */}
                <div className="w-[80px] h-[100px] bg-green-50 rounded-2xl border border-green-100 flex-shrink-0 flex flex-col items-center justify-center relative overflow-hidden">
                  <div
                    className="w-12 h-16 rounded-md flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: slide.thumbnail.bg }}
                  >
                    <span className="text-[8px] text-white font-bold text-center leading-tight whitespace-pre-line">
                      {slide.thumbnail.label}
                    </span>
                  </div>
                </div>

                {/* Title & Score */}
                <div className="flex flex-col flex-1 pt-1">
                  <h3 className="text-[#1F2937] leading-tight text-[17px] mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{slide.brand}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                      <div className="flex flex-col">
                        <span className="font-bold text-[#111827] text-[15px] leading-none">
                          {slide.score}/100
                        </span>
                        <span className="text-[11px] text-gray-500">{slide.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Heart size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
                      <Share size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Oliver Says Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="bg-white rounded-3xl border border-gray-100 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥑</span>
                  <span className="text-sm font-bold text-gray-900">Oliver Says:</span>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                  {slide.oliverSays}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Breakdown Header */}
            <div className="pt-2 border-t border-gray-50">
              <h4 className="text-gray-900 text-[15px]">Breakdown</h4>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneHero;
