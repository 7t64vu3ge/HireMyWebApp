import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { name: "Solutions", hasDropdown: true },
    { name: "Features", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Blog", hasDropdown: true },
    { name: "Restaurants", hasDropdown: false },
    { name: "Food", hasDropdown: true },
  ];

  return (
    <header className="relative z-[60] flex w-full flex-row items-center justify-between px-6 md:px-12 py-5">
      <nav className="flex items-center justify-between w-full">

        <div className="flex items-center">
          <a href="/" className="relative z-20 flex items-center  space-x-2 transition-opacity hover:opacity-80">
            <div className="w-[200px] md:w-[200px] ">
              <img src={logo} alt="Olive" className="w-full  object-contain" />
            </div>
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a
                href="#"
                className={`flex items-center gap-2 px-5 py-2.5 text-base font-semibold transition-all rounded-full
                  ${hoveredMenu === item.name ? "text-[#1F3824] bg-black/5" : "text-[#1F3824] hover:bg-black/5"}
                `}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${hoveredMenu === item.name ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              <AnimatePresence>
                {hoveredMenu === item.name && item.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[120%] left-0 w-72 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl p-4 border border-gray-100 overflow-hidden"
                  >
                    <div className="space-y-1">
                      <div className="p-4 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer group">
                        <p className="text-base font-bold text-[#1F3824]">
                          Overview
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Learn about Olive features
                        </p>
                      </div>
                      <div className="p-4 hover:bg-[#F5FAF6] rounded-xl transition-colors cursor-pointer">
                        <p className="text-base font-bold text-[#1F3824]">
                          Resources
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Read our latest articles
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-base font-semibold text-[#1F3824] px-4 py-2 hover:opacity-70 transition-opacity">
            Sign in
          </button>
          <button className=" flex items-center  bg-[#1A3622] text-white text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#2B5034] transition-all shadow-sm">
            Get Olive
            <ArrowRight size={15} className="ml-2" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
