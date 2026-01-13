"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";
import { Section } from "@/components/ui/layout-components";

const STEPS = [
  {
    title: "Explore",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
    items: ["Holistic Assessment", "Client Collaboration", "Strategic Planning"],
    description: "We dive deep into your business ecosystem to identify opportunities."
  },
  {
    title: "Innovate",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
    items: ["Research and Development", "Creative Problem-Solving", "Agile Methodology"],
    description: "Tailoring cutting-edge solutions that address your specific challenges."
  },
  {
    title: "Transform",
    icon: Rocket,
    color: "bg-teal-100 text-teal-600",
    items: ["Execution Excellence", "Change Management", "Continuous Improvement"],
    description: "Turning strategies into tangible results that drive growth."
  }
];

export function ExploreSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.title}
            variants={itemVariants}
            className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
              <step.icon className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
            
            <ul className="space-y-3">
              {step.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
