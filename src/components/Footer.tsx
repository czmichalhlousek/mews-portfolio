"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-mews-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-mews-muted text-sm">
              © 2026 Michal Hloušek. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/michalhlousek/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mews-muted hover:text-mews-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:cz.michalhlousek@gmail.com"
              className="text-mews-muted hover:text-mews-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
