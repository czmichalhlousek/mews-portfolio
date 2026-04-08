"use client";

import { motion } from "framer-motion";
import { Code2, Database as DatabaseIcon, GitBranch, Zap, Cpu } from "lucide-react";

const techStack = [
  { icon: Code2, name: "AI-Augmented Development", description: "Windsurf/Cascade for rapid prototyping" },
  { icon: DatabaseIcon, name: "PowerBI Analytics", description: "Data-driven decision making & visualization" },
  { icon: GitBranch, name: "LLM-Enabled Workflows", description: "Using ChatGPT, Gemini, Claude for content creation, automation, and flows" },
  { icon: Cpu, name: "Cross-Functional Collaboration", description: "Engineering, Design, Product, Platform teams" }
];

export default function GrowthEngine() {
  return (
    <section className="py-24 px-4 bg-mews-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Growth Engine</h2>
          <p className="text-xl text-mews-muted">Moving from Zero to Delivery in hours, not weeks</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 bg-gradient-to-br from-mews-accent/10 to-mews-accentHover/5 border border-mews-accent/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-mews-accent">AI-Native Development Workflow</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-mews-accent mb-2">Ideation</div>
              <p className="text-mews-muted">Rapid prototyping with AI-assisted coding</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-mews-accent mb-2">Validation</div>
              <p className="text-mews-muted">Data-driven A/B testing & telemetry</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-mews-accent mb-2">Deployment</div>
              <p className="text-mews-muted">Collaborative delivery with cross-functional teams</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-mews-accent mb-4" />
                <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                <p className="text-mews-muted">{tech.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
