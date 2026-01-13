import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Siddidharmika Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <h3 className="text-2xl font-bold text-white">Siddidharmika</h3>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">
                Flat No 302, Marigold Block,<br />
                RDB Coconut Groove, Miyapur,<br />
                Hyderabad, 500049.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <a href="mailto:siddidharmika.solutions@gmail.com" className="text-sm hover:text-white transition-colors">
                siddidharmika.solutions@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <a href="tel:04045077999" className="text-sm hover:text-white transition-colors">
                040-45077999
              </a>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Key Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/consulting" className="hover:text-secondary transition-colors">Next-Gen Consulting</Link></li>
              <li><Link href="/services/data/azure-data" className="hover:text-secondary transition-colors">Azure Data Engineering</Link></li>
              <li><Link href="/services/data/databricks" className="hover:text-secondary transition-colors">Databricks Solutions</Link></li>
              <li><Link href="/services/database/mongodb" className="hover:text-secondary transition-colors">MongoDB Services</Link></li>
              <li><Link href="/services/enterprise/ebs" className="hover:text-secondary transition-colors">Oracle E-Business Suite</Link></li>
              <li><Link href="/consulting/ai" className="hover:text-secondary transition-colors">AI Consulting</Link></li>
              <li><Link href="/consulting/bi" className="hover:text-secondary transition-colors">BI Consulting</Link></li>
            </ul>
          </div>

          {/* Quick Links: Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/company/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/company/blogs" className="hover:text-secondary transition-colors">Blogs & Insights</Link></li>
              <li><Link href="/company/case-studies" className="hover:text-secondary transition-colors">Case Studies</Link></li>
              <li><Link href="/career" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <p className="text-sm mb-6">Stay updated with the latest in technology and digital transformation.</p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Siddidharmika Software Solutions Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
