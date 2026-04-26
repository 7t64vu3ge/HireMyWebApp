import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A3622] text-white pt-24 pb-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Keep your family safe with Olive</h3>
            <ul className="space-y-2 mb-8 text-white/80">
              <li className="flex items-center gap-2">✓ Effortless food scanning</li>
              <li className="flex items-center gap-2">✓ Peace of mind for parents</li>
              <li className="flex items-center gap-2">✓ Healthy product recommendations</li>
            </ul>
            <button className="bg-white text-[#1A3622] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Download for iOS
            </button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Explore Foods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergy Scanner App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gluten Free Scanner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dairy Free App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food Ingredient Checker</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">About</h4>
            <ul className="space-y-3 text-white/70 mb-8">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
            
            <p className="text-sm text-white/60 mb-2">Get the latest lab testing data sent directly to your inbox.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm w-full outline-none focus:border-white/50" />
              <button className="bg-[#386641] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#4a8055] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Medical Consent</a>
          </div>
          <p>© 2026 Olive Inc.</p>
        </div>
      </div>
    </footer>
  );
}
