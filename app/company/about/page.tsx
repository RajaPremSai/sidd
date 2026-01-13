"use client";

import { Section, Card } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Siddidharmika</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to empowering businesses through digital transformation.
            </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </section>

      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
                {/* Placeholder Image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                    Office / Team Image
                 </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-dark">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Siddidharmika Software Solutions Pvt Ltd is a premier technology consulting firm based in Hyderabad, India. We specialize in comprehensive database management, cloud services, and enterprise solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to help organizations of all sizes leverage the power of data and cloud technology to achieve operational excellence and sustainable growth. With a customer-centric approach, we deliver tailored solutions that address unique business challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="space-y-2">
                  <h4 className="font-bold text-primary text-3xl">50+</h4>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
               </div>
               <div className="space-y-2">
                  <h4 className="font-bold text-primary text-3xl">20+</h4>
                  <p className="text-sm text-gray-500">Expert Consultants</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="light">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-8">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Target className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Our Vision</h3>
               <p className="text-gray-600">To be the global partner of choice for digital transformation, known for our integrity, innovation, and excellence.</p>
            </Card>
            <Card className="p-8">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Our Mission</h3>
               <p className="text-gray-600">Empowering businesses with cutting-edge technology solutions that drive efficiency, agility, and competitive advantage.</p>
            </Card>
            <Card className="p-8">
               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Shield className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Our Values</h3>
               <p className="text-gray-600">Integrity, Customer Success, Innovation, and Continuous Learning are at the heart of everything we do.</p>
            </Card>
         </div>
      </Section>
    </div>
  );
}
