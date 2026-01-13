"use client";

import { Section, Card } from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section background="primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Have a project in mind? Let's discuss how we can help you transform your business.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us for any inquiries, project discussions, or partnership opportunities. Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-start gap-4 p-6 hover:border-primary transition-colors">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Silicon Towers, Silicon Valley Lane,<br />
                    Madhapur, Hyderabad – 500081,<br />
                    Telangana, India
                  </p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6 hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark mb-1">Email Us</h3>
                  <p className="text-gray-600">info@siddidharmikatech.com</p>
                  <p className="text-gray-600">scalesales@siddidharmikatech.com</p>
                </div>
              </Card>

              <Card className="flex items-start gap-4 p-6 hover:border-primary transition-colors">
                <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-dark mb-1">Call Us</h3>
                  <p className="text-gray-600">040-45077999</p>
                </div>
              </Card>
              
              <Card className="flex items-start gap-4 p-6 hover:border-primary transition-colors">
                 <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                 <div>
                    <h3 className="font-bold text-dark mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                 </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                  <option>General Inquiry</option>
                  <option>Database Services</option>
                  <option>Cloud Consulting</option>
                  <option>Enterprise Solutions</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help you?" />
              </div>

              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
