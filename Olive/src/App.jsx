import "./App.css";
import Hero from "./components/Hero";
import PhoneHero from "./components/ScannerCarousel";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import HealthBenefits from "./components/HealthBenefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full relative flex flex-col mb-16 font-sans">
      
      {/* HERO SECTION THICK BOX CONTAINER */}
      <div className="mx-4 md:mx-6 mt-4 md:mt-6 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-[#F5FAF6] shadow-sm mb-16 relative">
        <Navbar />
        <div className="pt-8 md:pt-16 pb-8 relative z-10">
          <Hero />
          <PhoneHero />
        </div>
      </div>
      
      <HowItWorks />
      
      <HealthBenefits />
      
      <Testimonials />
      
      {/* 100% Independent. Always. Section */}
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F3824] mb-6 tracking-tight">
            100% Independent.<br />Always.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
          </p>
        </div>
      </section>
      
      <Pricing />
      
      <Footer />
    </div>
  );
}

export default App;
