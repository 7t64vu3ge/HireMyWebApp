import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the Food Scanner App and how does it work?",
    answer: "The Olive Food Scanner App uses advanced computer vision to read product barcodes or ingredient lists, instantly cross-referencing them against our comprehensive database of additives, toxins, and dietary profiles to give you an easy-to-understand health rating.",
  },
  {
    question: "How does Olive ensure the accuracy of the Food Scanner App results?",
    answer: "Our database is built on certified lab-testing data and peer-reviewed nutritional science. We continuously update our information to ensure the ratings and ingredient flags you see are accurate and trustworthy.",
  },
  {
    question: "Which products can I scan with the Food Scanner App?",
    answer: "You can scan nearly any packaged grocery product in North America. Our database covers hundreds of thousands of items, and if a product isn't recognized, our AI can often analyze the ingredients list directly from a photo.",
  },
  {
    question: "Can the Food Scanner App be customized to my family's dietary needs?",
    answer: "Yes! You can set specific dietary preferences (e.g., gluten-free, dairy-free, nut allergies) and the app will instantly flag any product that contains ingredients conflicting with your family's profile.",
  },
  {
    question: "Is my data secure when I use the Olive?",
    answer: "Absolutely. We are 100% independent and do not sell user data to third parties. Your family's dietary preferences and scanning history are encrypted and stored securely.",
  },
  {
    question: "When will the Android version of the Food Scanner App be available?",
    answer: "We are currently focusing on perfecting the iOS experience, but an Android version is actively in development. Sign up for our newsletter to be notified when it launches!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-8 md:px-8 max-w-5xl mx-auto w-full">
      <div className="bg-[#FAF6EC] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-24 shadow-sm relative overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <h2 className="text-4xl md:text-[50px] lg:text-[56px] text-[#2E4A35] font-medium leading-tight mb-8">
            Frequently Asked<br />Questions by Parents
          </h2>
          
          <div className="absolute right-0 top-0 md:-right-8 md:top-4 w-16 md:w-20 hidden sm:block animate-[bounce_3s_ease-in-out_infinite]">
            <img src="/assets/logo.png" alt="Thumbs Up Mascot" className="w-full h-auto drop-shadow-md" />
          </div>

          <button className="bg-[#2E4A35] text-white px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#1A3622] transition-colors shadow-sm">
            <span className="text-[18px]">🫒</span>
            Download for iOS
          </button>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border-b border-[#2E4A35]/10 last:border-0"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-[17px] md:text-[19px] font-medium text-[#2E4A35] pr-8 group-hover:text-[#1A3622] transition-colors">
                  {faq.question}
                </span>
                <div className="w-6 h-6 rounded-full bg-[#2E4A35] flex items-center justify-center flex-shrink-0 text-white transition-transform duration-300">
                  {openIndex === idx ? (
                    <Minus size={14} strokeWidth={3} />
                  ) : (
                    <Plus size={14} strokeWidth={3} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-12 text-[#2E4A35]/80 text-[16px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
