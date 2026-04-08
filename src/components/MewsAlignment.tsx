"use client";

import { motion } from "framer-motion";
import { Target, Database, Lock, Zap } from "lucide-react";

const alignments = [
  {
    icon: Target,
    title: "Centralized Identity",
    subtitle: "Rui Oliveira's M Suite",
    description: "Building unified systems that eliminate silos and create seamless user experiences across the Hospitality Cloud",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Ecosystem Mapping",
    subtitle: "Sofía Santos' Data Signals",
    description: "Transforming raw telemetry into actionable insights that drive product decisions and customer success",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Lock,
    title: "Secure by Design",
    subtitle: "Granular Permissions",
    description: "Implementing security-first architecture that protects data while enabling seamless collaboration",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Value Stream Mapping",
    subtitle: "Operational Excellence",
    description: "Optimizing the flow from concept to delivery, ensuring every sprint delivers measurable business impact",
    color: "from-purple-500 to-pink-500"
  }
];

export default function MewsAlignment() {
  return (
    <section id="alignment" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Mews Alignment Matrix</h2>
          <p className="text-xl text-mews-muted">Where my expertise meets the Mews vision</p>
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
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${alignment.color} flex items-center justify-center mb-6`}>
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
