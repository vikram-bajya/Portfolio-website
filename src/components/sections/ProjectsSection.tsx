"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SnapCart: Grocery Delivery Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
    description: "A scalable delivery platform with interactive maps and sub-second live location tracking via Socket.io.",
    tech: ["TypeScript", "Next.js", "Socket.io", "Tailwind CSS","Leaflet","MongoDB"],
    github: "https://github.com/vikram-bajya",
    live: "https://1snapcart.vercel.app/"
  },
  {
    id: 2,
    title: "Full-Stack Real Estate Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "A high-performance property platform scoring 90+ on Lighthouse, featuring dynamic pricing and interactive reviews.",
    tech: ["MERN Stack", "CRUD", "NextAuth", "REST APIs","MongoDB"],
    github: "https://github.com/vikram-bajya",
    live: "https://apna-home-tour.onrender.com/"
  }
];

const categories = ["All", "Frontend", "Full Stack"];

// Internal hook for tilt effect
function TiltCard({ project }: { project: Project }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Calculate rotation (-15 to 15 degrees)
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative group perspective-[1000px]"
    >
      <motion.div
        className="w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Project Image */}
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="relative h-48 overflow-hidden block group/image">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10" />
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
            style={{ transform: "translateZ(30px)" }}
          />
        </a>

        {/* Content */}
        <div className="p-6 relative z-20" style={{ transform: "translateZ(50px)" }}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={project.live} className="text-gray-400 hover:text-cyan-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative w-full border-t border-white/5 bg-gradient-to-b from-transparent to-[#05021a]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                Featured Work
              </h2>
              <div className="h-[2px] w-[100px] bg-gradient-to-r from-cyan-500 to-transparent" />
            </div>

            {/* Filter Pills */}
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border-transparent"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="w-full py-20 text-center text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
