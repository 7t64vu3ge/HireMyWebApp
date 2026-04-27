import { motion } from "framer-motion";

export default function FirstCTA() {
  return (
    <section className="px-4 py-8 md:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-[#386641] rounded-[40px] md:rounded-[60px] flex flex-col items-center overflow-hidden relative shadow-xl">
        
        {/* Large Curved Image at the Top */}
        <div className="w-full relative h-[300px] md:h-[450px]">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/assets/images/showcase.jpeg")',
              clipPath: 'ellipse(120% 100% at 50% 0%)'
            }}
          />
          {/* Add a subtle dark overlay to the image to match the mood */}
          <div 
            className="absolute inset-0 w-full h-full bg-black/20"
            style={{ 
              clipPath: 'ellipse(120% 100% at 50% 0%)'
            }}
          />
        </div>

        {/* Text and Button Section */}
        <div className="py-16 md:py-24 px-6 flex flex-col items-center text-center relative z-10 w-full -mt-12 md:-mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-10 max-w-3xl tracking-tight"
          >
            Protect Your Family<br />
            From Hidden Toxins
          </motion.h2>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white text-[#2E4A35] px-8 py-4 rounded-full font-bold text-[15px] md:text-base hover:bg-opacity-90 transition-all shadow-md hover:scale-[1.02]"
          >
            Sign up for Olive today
          </motion.button>
        </div>

      </div>
    </section>
  );
}
