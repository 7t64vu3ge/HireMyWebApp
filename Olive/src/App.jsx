import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import PhoneHero from "./components/PhoneHero";
import Navbar from "./components/Navbar";

// Lazy-load below-fold sections for faster initial paint
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const HealthBenefits = lazy(() => import("./components/HealthBenefits"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Comparison = lazy(() => import("./components/Comparison"));
const IndependenceStatement = lazy(() => import("./components/IndependenceStatement"));
const Pricing = lazy(() => import("./components/Pricing"));
const FirstCTA = lazy(() => import("./components/FirstCTA"));
const FAQ = lazy(() => import("./components/FAQ"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="w-full relative flex flex-col mb-16 font-sans">

      {/* HERO SECTION THICK BOX CONTAINER */}
      <div className="mx-4 md:mx-6 mt-4 md:mt-6 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 bg-[#F5FAF6] mb-16 relative">
        <Navbar />
        <div className="pt-8 md:pt-16 pb-8 relative z-10">
          <Hero />
          <PhoneHero />
        </div>
      </div>

      <Suspense fallback={null}>
        <HowItWorks />
        <HealthBenefits />
        <Testimonials />
        <Comparison />
        <Pricing />
        <FirstCTA />
        <IndependenceStatement />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
