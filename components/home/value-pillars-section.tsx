"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/layout-components";
import { Database, CheckCircle, Users, BrainCircuit } from "lucide-react";

const PILLARS = [
  {
    title: "Data Empowerment",
    icon: Database,
    description: "Harnessing data potential for actionable insights."
  },
  {
    title: "Transformative Solutions",
    icon: CheckCircle,
    description: "Innovation-led strategies for business evolution."
  },
  {
    title: "Strategic Partnerships",
    icon: Users,
    description: "Collaborative growth and long-term value creation."
  },
  {
    title: "AI Integration",
    icon: BrainCircuit,
    description: "Future-ready intelligence embedded in operations."
  }
];

export function ValuePillarsSection() {
  return (
    <Section className="bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
         <h2 className="text-3xl font-bold mb-4">Core Value Pillars</h2>
         <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors text-center group"
          >
            <div className="w-16 h-16 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <pillar.icon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
