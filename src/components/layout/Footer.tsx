"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0a0710] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto max-w-6xl flex flex-col items-center relative z-10">
        <div className="flex gap-6 mb-8">
          {[
            { icon: Github, href: "https://github.com/vikram-bajya" },
            { icon: Linkedin, href: "https://linkedin.com/in/vikram-bajya" },
            { icon: Mail, href: "mailto:vjat39915@gmail.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            >
              <item.icon size={18} />
            </motion.a>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm text-center mb-6">
          © {new Date().getFullYear()} Vikram Bajya. Built with Next.js, Tailwind, & Three.js.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <span className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
            <ArrowUp size={18} />
          </span>
          <span className="text-xs uppercase tracking-widest font-medium">Back to Top</span>
        </motion.button>
      </div>
    </footer>
  );
}
