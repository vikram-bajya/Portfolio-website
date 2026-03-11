"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations/ScrollReveal";
import { Briefcase, Code, Terminal, User } from "lucide-react";

const timeline = [
  {
    year: "2024 - Present",
    role: "Full-Stack Web Developer",
    company: "Project-Based (Remote)",
    description: "Engineered scalable Next.js applications, architected robust RESTful APIs, optimized MongoDB schemas, and implemented secure user authentication with RBAC via NextAuth.",
    icon: Terminal
  },
  {
    year: "2024 - 2028",
    role: "B.Tech in Chemical Engineering",
    company: "Birla Institute of Technology, Mesra",
    description: "CGPA: 7.24. Relevant coursework: Data Structures and Algorithms, Web Development, and System Design.",
    icon: Briefcase
  },
  {
    year: "2023",
    role: "Class XII (Science/Mathematics)",
    company: "Sainik Vidhya Mandir Senior Secondary School",
    description: "Passed with 86.20%. Active member of the National Cadet Corps (NCC).",
    icon: User
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative w-full pt-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              About Me
            </h2>
            <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div 
                className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10 bg-white/5"
                whileHover="hover"
              >
                {/* Profile Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                    <img 
                      src="/profile.png" 
                      alt="Vikram Bajya" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    Vikram Bajya
                  </h3>
                  <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 opacity-0 group-hover:opacity-100">
                    Performance-driven Full-Stack Developer.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Timeline & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                I am a specialized software engineer focusing on building exceptional digital experiences. 
                Currently, I am immersed in the world of <span className="text-purple-400 font-medium">3D web technologies</span> and <span className="text-cyan-400 font-medium">high-performance web applications</span>.
                My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
            </ScrollReveal>

            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-purple-500" /> Experience
            </h4>
            
            <StaggerChildren className="space-y-8 pl-4 border-l border-white/10 relative">
              {timeline.map((item, index) => (
                <StaggerItem key={index} className="relative pl-6">
                  {/* Timeline Node */}
                  <span className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h5 className="text-xl font-bold text-gray-200">{item.role}</h5>
                    <span className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 self-start sm:self-auto">
                      {item.year}
                    </span>
                  </div>
                  <div className="text-cyan-500 font-medium mb-3 flex items-center gap-2">
                    <item.icon size={16} /> {item.company}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
