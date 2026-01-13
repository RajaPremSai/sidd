import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/layout-components";
import Image from "next/image"; // In case we want to add an image later
import Link from "next/link";

export function WhoWeAreSection() {
  return (
    <Section background="white">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2">
           <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center text-gray-400">
               {/* Placeholder for actual office/team image */}
               <span className="text-sm">Team / Office Image</span>
               
               {/* Decorative Abstract overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-multiply" />
           </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
             <div className="inline-block py-1 px-3 rounded-full bg-blue-50 text-secondary text-sm font-semibold tracking-wider uppercase">
               Who We Are
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-dark">
               Your Dependable Partner in the Data Landscape
             </h2>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-accent pl-6">
            We are your dependable partner in navigating the complexities of the data-driven landscape. With our expertise and dedication, we stand by your side as you embrace the opportunities and challenges of the digital age.
          </p>

          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
