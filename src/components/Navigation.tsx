"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Linkedin, Mail, Menu, X } from "lucide-react";

const sections = [
  { name: "Gen Digital Experience", id: "gen-experience" },
  { name: "Core Expertise", id: "alignment" },
  { name: "Growth Engine", id: "growth-engine" },
  { name: "Risk Reduction", id: "operational-derisking" },
  { name: "Mewser Mindset", id: "mewser-mindset" },
  { name: "Position Fit", id: "position-fit" },
  { name: "Path to Mews", id: "path-to-mews" },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Show navbar after scrolling past hero (approx 100vh)
  const navbarOpacity = useTransform(scrollY, [0, 500], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    const handleSectionHighlight = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionHighlight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionHighlight);
    };
  }, []);

  return (
    <motion.nav
      style={{ opacity: navbarOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 bg-mews-dark/90 backdrop-blur-md border-b border-mews-border transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-mews-accent"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Metro-style menu - desktop */}
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto no-scrollbar flex-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-mews-accent text-white"
                    : "text-mews-muted hover:bg-mews-accent/10 hover:text-mews-accent"
                }`}
              >
                {section.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/michalhlousek/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-mews-accent hover:bg-mews-accentHover rounded-lg transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:cz.michalhlousek@gmail.com"
              className="p-2 border border-mews-border hover:border-mews-accent rounded-lg transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-mews-border pt-4"
          >
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-mews-accent text-white"
                      : "text-mews-muted hover:bg-mews-accent/10 hover:text-mews-accent"
                  }`}
                >
                  {section.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
