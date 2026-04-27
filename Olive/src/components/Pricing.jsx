import AnimatedCard from "./ui/AnimatedCard";
import CheckItem from "./ui/CheckItem";
import SectionHeading from "./ui/SectionHeading";
import { plans } from "../data/pricing";

export default function Pricing() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <SectionHeading
          className="text-4xl md:text-5xl lg:text-6xl text-[#1F3824] mb-12 text-center tracking-tight"
        >
          Healthy Choices<br />
          <span className="text-[#386641]">Honest Pricing</span>
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
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
      className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${
        isDark
          ? "bg-[#253612] text-white shadow-xl"
          : "border border-gray-200 bg-white shadow-sm"
      }`}
    >
      {plan.badge && (
        <div className="absolute top-0 right-0 bg-[#386641] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
          {plan.badge}
        </div>
      )}
      
      <h3 className={`text-xl mb-2 ${isDark ? "" : "text-gray-900"}`}>
        {plan.name}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className={`text-4xl font-bold ${isDark ? "" : "text-gray-900"}`}>
          {plan.price}
        </span>
        <span className={isDark ? "text-white/70" : "text-gray-500"}>
          {plan.period}
        </span>
      </div>
      
      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((f) => (
          <CheckItem
            key={f.text}
            text={f.text}
            highlight={f.highlight}
            variant={plan.variant}
          />
        ))}
      </ul>
      
      <button
        className={`w-full py-4 rounded-full font-semibold transition-colors ${
          isDark
            ? "bg-white text-[#253612] hover:bg-gray-100"
            : "border border-gray-200 text-gray-900 hover:bg-gray-50"
        }`}
      >
        Subscribe
      </button>
    </AnimatedCard>
  );
}
