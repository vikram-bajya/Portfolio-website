"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Send, CheckCircle2, Copy, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const email = "vjat39915@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => setFormStatus("success"), 1500);
    // Reset after success message
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 relative w-full border-t border-white/5 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Have a proposal, an idea, or just want to say hi? I&apos;m currently open for new opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Chat with me</h4>
                    <p className="text-gray-400 mb-4">I&apos;m always excited to hear about new projects.</p>
                    <div 
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                      onClick={handleCopy}
                    >
                      <span className="text-gray-200 font-medium tracking-wide">{email}</span>
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <CheckCircle2 size={18} className="text-green-400" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                          >
                            <Copy size={18} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                    <p className="text-gray-400">Available globally for remote work.<br/>Based in India.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-bold">#</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Phone</h4>
                    <p className="text-gray-400">+91-8094320067</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.4}>
            <form onSubmit={handleSubmit} className="bg-[#05021a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle animated border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "idle" && (
                    <>Send Message <Send size={18} /></>
                  )}
                  {formStatus === "submitting" && (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  )}
                  {formStatus === "success" && (
                    <>Message Sent! <CheckCircle2 size={18} /></>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
