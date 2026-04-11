"use client";

import { motion } from "framer-motion";
import { Target, Database, Lock, Zap } from "lucide-react";

const alignments = [
  {
    icon: Target,
    title: "Product Operations",
    subtitle: "Process & Value Stream Optimization",
    description: "Connecting cross-functional teams across product, delivery, engineering, and business to drive monetization and growth",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Online GTM Strategy",
    subtitle: "Digital Acquisition & Conversion",
    description: "Designing online customer journeys, optimizing conversion funnels, and implementing data-driven tactics for digital growth",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Lock,
    title: "AI-Native Product Building",
    subtitle: "Rapid Prototyping & Validation",
    description: "Building functional CX simulations in hours using AI-native IDEs, moving from hypothesis to validated journey quickly",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Cross-Functional Leadership",
    subtitle: "Stakeholder Management",
    description: "Influencing without authority across engineering, design, product, and business teams to drive shared outcomes",
    color: "from-purple-500 to-pink-500"
  }
];

export default function MewsAlignment() {
  return (
    <section id="alignment" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mews-accent/5 via-transparent to-mews-accentHover/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mews-accent to-mews-accentHover bg-clip-text text-transparent">Core Expertise</h2>
          <p className="text-xl text-mews-muted">8+ years of specialized growth and operational excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {alignments.map((alignment, index) => {
            const Icon = alignment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
                }}
                className="p-8 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${alignment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${alignment.color} flex items-center justify-center mb-6 shadow-lg shadow-${alignment.color.split('-')[1]}-500/25 group-hover:shadow-xl group-hover:shadow-${alignment.color.split('-')[1]}-500/40 transition-shadow duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{alignment.title}</h3>
                <p className="text-mews-accent font-semibold mb-4">{alignment.subtitle}</p>
                <p className="text-mews-muted leading-relaxed">{alignment.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
