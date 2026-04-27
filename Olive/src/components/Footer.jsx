const exploreLinks = [
  { label: "Explore Foods", href: "#" },
  { label: "Allergy Scanner App", href: "#" },
  { label: "Gluten Free Scanner", href: "#" },
  { label: "Dairy Free App", href: "#" },
  { label: "Food Ingredient Checker", href: "#" },
];

const aboutLinks = [
  { label: "Blog", href: "#" },
  { label: "Email us", href: "#" },
  { label: "Contact us", href: "#" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Medical Consent", href: "#" },
];

export default function Footer() {
  return (
    <footer className="px-4 py-8 md:px-8 max-w-7xl mx-auto w-full mb-12">
      <div className="bg-[#386641] text-white rounded-[40px] pt-16 md:pt-20 pb-10 px-8 md:px-16 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Explore Links */}
          <div className="md:col-span-4">
            <h4 className="text-[16px] font-medium mb-6">Explore More Olive Tools</h4>
            <ul className="space-y-4 text-white/70 text-[14px]">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Links */}
          <div className="md:col-span-3">
            <h4 className="text-[16px] font-medium mb-6">About</h4>
            <ul className="space-y-4 text-white/70 text-[14px]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-5 flex flex-col md:items-end">
            <div className="w-full md:max-w-sm">
              <div className="mb-4">
                <div className="flex items-center gap-1 font-extrabold text-[40px] tracking-tight text-[#B1C355]">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-1 mt-2">
                    <img src="/src/assets/hero.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  live
                </div>
              </div>
              <p className="text-[14px] text-white/80 mb-6 leading-relaxed">
                Get the latest lab testing data<br />sent directly to your inbox.
              </p>
              <div className="flex items-center gap-3 w-full">
                <input 
                  type="email" 
                  placeholder="Enter Email address" 
                  className="bg-white/10 border border-white/10 text-white placeholder-white/50 px-5 py-3 rounded-[20px] outline-none focus:border-white/30 transition-colors flex-1 text-[14px]"
                />
                <button className="bg-white text-[#2E4A35] px-6 py-3 rounded-[20px] font-bold hover:bg-gray-100 transition-colors flex-shrink-0 text-[14px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/70">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#" className="hover:text-white transition-colors">Sign in</a>
          </div>
          <div className="text-[13px] text-white/70">
            © 2026 Olive Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
