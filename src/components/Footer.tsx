import React from "react";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-lg border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-slate-300 text-sm sm:text-base">Website created by</span>
          <a 
            href="https://github.com/MitoruDev" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caner Elmas
          </a>
          <span className="text-slate-300 text-sm sm:text-base">with love ❤️</span>
        </div>
        
        {/* Additional footer content for larger screens */}
        <div className="hidden md:flex items-center justify-between mt-6 pt-6 border-t border-slate-800">
          <div className="text-slate-400 text-sm">
            © 2024 Caner Elmas. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/MitoruDev" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/caner-elmas" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:caner@example.com" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
