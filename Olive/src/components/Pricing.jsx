import AnimatedCard from "./ui/AnimatedCard";
import CheckItem from "./ui/CheckItem";
import { plans } from "../data/pricing";

export default function Pricing() {
  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 translate-x-[20%]">
        <img src="/src/assets/background.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-[50px] leading-tight text-[#1F3824] mb-16 text-center font-medium tracking-tight">
          Healthy Choices<br />
          Honest Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-end">
          {plans.map((plan, idx) => (
            <PricingCard key={plan.id} plan={plan} delay={0.1 * (idx + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay }) {
  const isDark = plan.variant === "dark";

  return (
    <AnimatedCard
      delay={delay}
      className={`rounded-[32px] p-8 md:p-10 flex flex-col relative overflow-visible ${
        isDark
          ? "bg-[#386641] text-white shadow-xl min-h-[460px]"
          : "bg-[#F5FAF6] text-[#1F3824] shadow-sm min-h-[420px]"
      }`}
    >
      {!isDark && (
        <div className="absolute -top-12 -left-6 w-24 h-24 rotate-[-10deg]">
          <img src="/src/assets/hero.png" alt="Mascot" className="w-full h-full object-contain" />
        </div>
      )}
      
      <h3 className={`text-[17px] font-medium mb-4 ${isDark ? "text-white/90" : "text-[#1F3824]/80"} capitalize`}>
        {plan.name}
      </h3>
      
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-[44px] font-bold tracking-tight">
          {plan.price}
        </span>
        {isDark && (
          <span className="text-[20px] text-white/50 line-through font-medium ml-1">
            $179.88
          </span>
        )}
        <span className={`text-[15px] font-medium ${isDark ? "text-white/70" : "text-[#1F3824]/60"}`}>
          {plan.period}
        </span>
      </div>
      
      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map((f) => (
          <li key={f.text} className="flex items-start gap-3">
            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? "bg-white text-[#386641]" : "bg-[#2E4A35] text-white"}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className={`text-[15px] font-medium leading-relaxed ${isDark ? "text-white/90" : "text-[#1F3824]/80"}`}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full text-[15px] font-bold transition-all hover:scale-[1.02] ${
        isDark 
          ? "bg-white text-[#2E4A35]" 
          : "bg-[#2E4A35] text-white"
      }`}>
        Subscribe
      </button>
    </AnimatedCard>
  );
}
