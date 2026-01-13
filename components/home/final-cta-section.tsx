import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/80" />
      
      <div className="container mx-auto px-4 relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to Unlock Superior Digital Solutions?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Partner with Siddidharmika to transform your vision into reality with our expert consulting services.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
