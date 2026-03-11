"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { HeroModel } from "@/components/3d/HeroModel";

export function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6 pt-10 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm font-medium text-purple-300 inline-block"
          >
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-purple-500">Vikram</span> <br />
            I build{" "}
            <AnimatedText
              words={[
                "MERN Stack Apps",
                "Next.js Platforms",
                "Real-time Systems",
                "Secure APIs",
              ]}
              cursorStyle="_"
            />
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Performance-driven Full-Stack Developer specializing in Next.js and the MERN stack. I architect secure, real-time applications with a focus on optimizing system performance.
          </p>
          
          <div className="flex gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-shadow"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[500px] w-full relative hidden md:block"
        >
          {/* Subtle glow behind 3D model */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <Canvas className="w-full h-full" camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <HeroModel />
            <Environment preset="city" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={10} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
