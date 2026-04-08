"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk Strategy</h2>
          <p className="text-xl text-mews-muted mb-12 max-w-2xl mx-auto">
            I'm ready to bring operational excellence and growth architecture to Mews. Let's discuss how my experience aligns with your vision for the Hospitality Cloud
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/michalhlousek/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-mews-accent hover:bg-mews-accentHover rounded-lg font-semibold transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
              Connect on LinkedIn
            </a>
            
            <a
              href="mailto:michal.hlousek@email.com"
              className="group flex items-center gap-3 px-8 py-4 border border-mews-border hover:border-mews-accent rounded-lg font-semibold transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              Send an Email
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 bg-mews-card border border-mews-border rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Why I'm the Right Fit for Mews</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-mews-accent mb-2">Technical Alignment</h4>
                <p className="text-mews-muted text-sm">
                  Proficient in Azure DevOps, understanding how Pull Requests and Release Pipelines impact customer experience in a C#/.NET environment
                </p>
              </div>
              <div>
                <h4 className="font-bold text-mews-accent mb-2">Strategic Impact</h4>
                <p className="text-mews-muted text-sm">
                  Experience acting as the connective tissue between C-suite vision and squad-level execution, with data-driven decision support
                </p>
              </div>
              <div>
                <h4 className="font-bold text-mews-accent mb-2">PLG Expertise</h4>
                <p className="text-mews-muted text-sm">
                  Built systems that scale the Value-to-Paid journey, turning product features into growth engines
                </p>
              </div>
              <div>
                <h4 className="font-bold text-mews-accent mb-2">Human-Centric</h4>
                <p className="text-mews-muted text-sm">
                  Committed to the Mews values—Ambitious, Resilient, Curious, Open, Human—in every interaction
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
