"use client";

import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Target } from "lucide-react";

const passions = [
  {
    icon: Lightbulb,
    title: "Content Creation",
    description: "Crafting compelling narratives that bridge technical complexity with business value"
  },
  {
    icon: Heart,
    title: "Helpful Mentorship",
    description: "Empowering teams through knowledge sharing and fostering collaborative growth"
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Building bridges between engineering, design, product, and business teams"
  },
  {
    icon: Target,
    title: "Business-Driven Impact",
    description: "Translating customer needs into measurable outcomes and strategic value"
  }
];

export default function DoraMetrics() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Passion & Expertise</h2>
          <p className="text-xl text-mews-muted">Where business acumen meets creative problem-solving</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mews-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-mews-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{passion.title}</h3>
                    <p className="text-mews-muted leading-relaxed">{passion.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-mews-accent/10 to-mews-accentHover/5 border border-mews-accent/20 rounded-2xl text-center"
        >
          <p className="text-mews-muted text-lg leading-relaxed">
            I believe in the power of clear communication and collaborative problem-solving. Whether it's crafting a business case, mentoring team members, or translating complex technical concepts into actionable insights, I'm driven by a genuine desire to help others succeed and create lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
