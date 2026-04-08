"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

export default function GenExperience() {
  const achievements = [
    {
      icon: Award,
      title: "Trial Squad Architect",
      description: "Leading transformation to trial-led business model, orchestrating global portfolio pivot",
    },
    {
      icon: TrendingUp,
      title: "AI Product Monetization",
      description: "Architected end-to-end journey for AI-Powered Scam Guardian, expanding from browsing to email & mobile",
    },
    {
      icon: Users,
      title: "Team Lead & Educator",
      description: "Community educator across platforms, fostering technical workflow innovation and AI adoption",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Building functional CX simulations in hours using AI-native IDEs for GTM validation",
    },
  ];

  return (
    <section id="gen-experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mews-accent to-mews-accentHover bg-clip-text text-transparent">
            Gen Digital Experience
          </h2>
          <p className="text-xl text-mews-muted max-w-3xl mx-auto">
            8+ years scaling product-led monetization at a global cyber safety leader with 500M+ users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-mews-card border border-mews-border rounded-lg p-6 hover:border-mews-accent transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mews-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-mews-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-mews-muted">{achievement.description}</p>
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
          transition={{ duration: 0.6 }}
          className="bg-mews-card border border-mews-border rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">Launched Products with Global Impact</h3>
          <ul className="space-y-3 text-mews-muted">
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>Avast One 2.0:</strong> Hero product launch within Gen Digital's portfolio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>AI-Powered Scam Guardian:</strong> Expanded from browsing to email, mobile protection</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>Secure Identity:</strong> First identity protection solution within Avast portfolio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>AntiTrack:</strong> Monetization-led acquisition of TrackOFF company across Avast/AVG brands</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-mews-card border border-mews-border rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Key Capabilities</h3>
          <ul className="space-y-3 text-mews-muted">
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>GTM Preparation:</strong> End-to-end go-to-market strategy for new product launches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>Business Case Creation:</strong> Advanced forecast modeling and growth monetization strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>E2E Journey Optimization:</strong> Systematic customer journey optimization from acquisition to retention</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mews-accent mt-1">•</span>
              <span><strong>AI-Powered Automation:</strong> Content creation & triggers with automated product & pricing recommendations</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
