import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Megan L.",
      text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
      rating: 5,
      className: "top-[-20px] right-[20%] w-[280px]", // Top card
    },
    {
      name: "Tina B.",
      text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
      rating: 5,
      className: "bottom-[10%] right-[-5%] w-[300px]", // Right card
    },
    {
      name: "Lila M.",
      text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
      rating: 5,
      className: "bottom-[-40px] left-[20%] w-[300px]", // Bottom card
    }
  ];

  return (
    <section className="relative py-32 bg-white px-4 overflow-visible min-h-[800px] flex items-center justify-center">

      {/* Decorative Background Flower Art */}
      <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="#386641" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C115 40 160 40 160 100C160 160 115 160 100 200C85 160 40 160 40 100C40 40 85 40 100 0Z" />
          <path d="M0 100C40 85 40 40 100 40C160 40 160 85 200 100C160 115 160 160 100 160C40 160 40 115 0 100Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Left Side: Image with Floating Cards */}
          <div className="relative w-full md:w-1/2 aspect-square">
            {/* Main Image */}
            <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/image copy.png"
                alt="Mother and children"
                className="w-full h-full object-cover grayscale brightness-90"
              />
            </div>

            {/* Testimonial Cards Overlay */}
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`absolute bg-white rounded-2xl p-5 shadow-2xl border border-gray-50 z-10 hidden md:block ${t.className}`}
              >
                <p className="text-gray-700 text-sm leading-snug mb-3">"{t.text}"</p>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-900">{t.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[#1F3824] leading-tight mb-8">
                Real Mothers<br />Real Results
              </h2>

              <a href="#" className="inline-flex items-center gap-2 text-[#386641] font-medium hover:underline transition-all">
                read all 3,147+ reviews
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}