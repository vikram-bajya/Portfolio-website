"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations/ScrollReveal";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js & React", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "UI Architecture", level: 85 },
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js (REST APIs)", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "NextAuth / Security", level: 90 },
    ]
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "C++", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Socket.io", level: 85 },
    ]
  }
];

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 1500;
    const incrementTime = Math.abs(Math.floor(totalDuration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}%</span>;
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative w-full bg-[#030014]">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Proficiency</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              A detailed breakdown of my technical skills and the tools I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal direction="up" delay={catIndex * 0.2} key={category.title}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white-[0.07] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                
                <StaggerChildren delayContainer={0.2} staggerDelay={0.15} className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <StaggerItem key={index} className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-bold tracking-wider">
                          <AnimatedCounter value={skill.level} />
                        </span>
                      </div>
                      
                      {/* Progress Bar Track */}
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        {/* Progress Bar Fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px]" />
                        </motion.div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
