"use client";

import { Section, Card } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Play, Database, Shield, Zap, TrendingUp, Server, Globe, Lock, Share2, Activity, Code, Layout, Lightbulb, Users, Cpu, FileText, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Icon Mapping
const ICON_MAP: Record<string, any> = {
  "Zap": Zap,
  "Shield": Shield,
  "TrendingUp": TrendingUp,
  "Database": Database,
  "Server": Server,
  "Globe": Globe,
  "CheckCircle": CheckCircle,
  "Lock": Lock,
  "Share2": Share2,
  "Activity": Activity,
  "Code": Code,
  "Layout": Layout,
  "Lightbulb": Lightbulb, // Map Lightbulb to Zap if needed, or import
  "Users": Users,
  "Cpu": Cpu,
  "FileText": FileText,
  "Smartphone": Smartphone,
  "Cloud": CloudIcon
};

// Helper for ambiguous imports
function CloudIcon(props: any) { return <div {...props}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.1-1.2-.6-2.3-1.4-3.3-1.6-1.8-4.4-1.8-6 0-.8.9-1.2 2.1-1.3 3.3H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h14.5c1.7 0 3-1.3 3-3z"/></svg></div> }

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  benefits: { 
    title: string; 
    description: string; 
    icon?: string 
  }[];
  offerings: { 
    title: string; 
    description: string; 
     slug?: string;
  }[];
  process?: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  ctaTitle?: string;
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  benefits,
  offerings,
  process,
  ctaTitle = "Ready to elevate your business?",
}: ServicePageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">{subtitle}</p>
            <Link href="/contact">
               <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base">Get Started</Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 blur-xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 bg-accent/10 rounded-full blur-2xl" />
      </section>

      {/* Overview */}
      <Section className="pb-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-6">Overview</h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-4">
            {typeof description === 'string' ? (
               description.split('\n').map((para, i) => <p key={i}>{para}</p>)
            ) : (
               description
            )}
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, idx) => {
             const IconComponent = benefit.icon ? ICON_MAP[benefit.icon] || CheckCircle : CheckCircle;
             return (
               <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                  <div className="w-16 h-16 mx-auto bg-blue-100 text-primary rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
               </div>
             );
          })}
        </div>
      </Section>

      {/* Offerings / Our Services */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Our Services</h2>
          <p className="text-gray-600">What we offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offer) => (
            <Card key={offer.title} className="hover:border-primary transition-all group p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{offer.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed line-clamp-4">{offer.description}</p>
              {offer.slug ? (
                 <Link href={offer.slug} className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider group-hover:gap-2 transition-all">
                   Learn More <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
              ) : (
                 <button className="flex items-center text-sm font-bold text-secondary uppercase tracking-wider group-hover:gap-2 transition-all">
                   Learn More <ArrowRight className="ml-2 w-4 h-4" />
                 </button>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      {process && (
        <Section>
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-dark mb-4">{process.title}</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">{process.description}</p>
           </div>

           <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Video Placeholder */}
              <div className="w-full lg:w-1/2">
                 <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                       </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-secondary" />
                       </div>
                       <div className="flex justify-between text-xs text-white font-medium mt-2">
                          <span>00:00</span>
                          <span>02:45</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Steps */}
              <div className="w-full lg:w-1/2 space-y-8">
                 {process.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                       <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                          {idx + 1}
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-dark mb-2">{step.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section background="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 pattern-grid-lg opacity-10" />
        <div className="relative z-10">
           <h2 className="text-3xl font-bold mb-6 text-white">{ctaTitle}</h2>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-dark hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
               Contact Us
             </Button>
           </Link>
        </div>
      </Section>
    </div>
  );
}
