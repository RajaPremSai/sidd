"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Navigation Data
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: [
      {
        category: "Database Services",
        items: [
          { label: "Oracle DBA", href: "/services/database/oracle-dba" },
          { label: "MS SQL Server", href: "/services/database/mssql" },
          { label: "MySQL", href: "/services/database/mysql" },
          { label: "PostgreSQL", href: "/services/database/postgresql" },
          { label: "MongoDB", href: "/services/database/mongodb" },
        ],
      },
      {
        category: "Enterprise Solutions",
        items: [
          { label: "Oracle E-Business Suite", href: "/services/enterprise/ebs" },
          { label: "Oracle Fusion", href: "/services/enterprise/fusion" },
          { label: "SAP", href: "/services/enterprise/sap" },
          { label: "Exadata", href: "/services/enterprise/exadata" },
          { label: "Oracle Database Appliance", href: "/services/enterprise/oda" },
        ],
      },
      {
        category: "Cloud Services",
        items: [
          { label: "AWS", href: "/services/cloud/aws" },
          { label: "Azure", href: "/services/cloud/azure" },
          { label: "Oracle Cloud Infrastructure", href: "/services/cloud/oci" },
        ],
      },
      {
        category: "Data & Analytics",
        items: [
          { label: "Azure Data Engineering", href: "/services/data/azure-data" },
          { label: "Databricks", href: "/services/data/databricks" },
          { label: "PySpark", href: "/services/data/pyspark" },
          { label: "MSBI", href: "/services/data/msbi" },
          { label: "Oracle Analytics Cloud", href: "/services/data/oac" },
          { label: "Power BI", href: "/services/data/power-bi" },
        ],
      },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
    megaMenu: [
      {
        category: "Development & Frameworks",
        items: [
          { label: "Java", href: "/consulting/java" },
          { label: "Microsoft .NET", href: "/consulting/dotnet" },
          { label: "PL/SQL", href: "/consulting/plsql" },
          { label: "Salesforce", href: "/consulting/salesforce" },
        ],
      },
      {
        category: "Advanced Tech",
        items: [
          { label: "AI Consulting", href: "/consulting/ai" },
          { label: "BI Consulting", href: "/consulting/bi" },
          { label: "ML Consulting", href: "/consulting/ml" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    dropdown: [
      { label: "About Us", href: "/company/about" },
      { label: "Blogs", href: "/company/blogs" },
      { label: "Case Studies", href: "/company/case-studies" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span
              className={cn(
                "text-xl font-bold tracking-tight",
                isScrolled ? "text-primary" : "text-white mix-blend-difference" // Ensures visibility on hero
              )}
            >
              Siddidharmika
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                    isScrolled ? "text-gray-700" : "text-gray-100", // Adjusted for contrast
                    pathname === item.href && "text-secondary font-semibold"
                  )}
                >
                  {item.label}
                  {(item.megaMenu || item.dropdown) && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Mega Menu / Dropdown */}
                <AnimatePresence>
                  {activeMenu === item.label && (item.megaMenu || item.dropdown) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pt-2 w-max min-w-[200px] max-w-screen-xl"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 overflow-hidden">
                        {item.megaMenu ? (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {item.megaMenu.map((section) => (
                              <div key={section.category} className="space-y-3">
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                                  {section.category}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-gray-600 hover:text-secondary block hover:translate-x-1 transition-transform"
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2 min-w-[200px]">
                            {item.dropdown?.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="text-sm text-gray-600 hover:text-secondary hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button
                className={cn(
                  "hidden lg:flex",
                  !isScrolled && "bg-white text-primary hover:bg-gray-100"
                )}
              >
                Get in Touch
              </Button>
            </Link>
            
            <button
              className="lg:hidden relative z-50 p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-gray-900" : "text-white"} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 h-screen overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link
                    href={item.href}
                    className="text-lg font-bold text-gray-900 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu?.map((section) => (
                    <div key={section.category} className="pl-4 border-l-2 border-gray-100">
                      <h5 className="text-sm font-semibold text-primary mb-2">
                        {section.category}
                      </h5>
                      <ul className="space-y-2 mb-4">
                        {section.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="text-sm text-gray-600 block py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {item.dropdown?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block pl-4 text-sm text-gray-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/contact" className="w-full">
                <Button className="w-full mt-4" size="lg">Get in Touch</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
