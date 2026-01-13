"use client";

import { Section } from "@/components/ui/layout-components";
import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = ["Assess", "Analyze", "Design", "Execute"];

export function ProcessSection() {
  return (
    <Section background="white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left: Text & Steps */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Navigating Success: <br />
            <span className="text-primary">Our Proven Process</span>
          </h2>
          <p className="text-gray-600 text-lg">
             A structured approach ensures that we deliver consistent, high-quality results tailored to your unique requirements.
          </p>

          <div className="space-y-6">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-light border border-gray-200 flex items-center justify-center font-bold text-xl text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="text-xl font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Video Placeholder */}
        {/* Right: Workflow Visual */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group border border-gray-800">
             <Image 
               src="/images/process-workflow.png"
               alt="Siddidharmika Proven Process Workflow"
               fill
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
             
             {/* Dynamic Overlay Effect */}
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
                <div>
                   <p className="text-white font-bold text-lg mb-1">Visualized Workflow</p>
                   <p className="text-gray-300 text-sm">From concept to execution, we ensure transparency.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
