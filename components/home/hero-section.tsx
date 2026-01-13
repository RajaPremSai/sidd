"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.span 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wider uppercase backdrop-blur-sm"
          >
            Start Your Digital Journey Now
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            DIGITAL TRANSFORMATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
              SERVICES
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Empowering Digital Evolution: Transforming Visions into Realities
          </p>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At Siddidharmika Solutions, we explore your digital potential, innovate tailored solutions, and transform your vision into reality, driving unparalleled success in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/services">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full h-12 px-8 text-base">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full h-12 px-8 text-base transition-colors">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
