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
          <div className="space-y-6">
            <div className="border-l-4 border-mews-accent pl-4">
              <h4 className="font-bold text-lg mb-2">Avast One 2.0</h4>
              <p className="text-mews-muted text-sm mb-2">Hero product launch (September 2025) with scaling to April 2026</p>
              <p className="text-mews-muted text-sm">Led go-to-market strategy and customer journey optimization for the flagship product</p>
              <a href="https://www.avast.com/en-us/avast-one#pc" target="_blank" rel="noopener noreferrer" className="text-mews-accent text-sm hover:underline">View Product →</a>
            </div>
            <div className="border-l-4 border-mews-accent pl-4">
              <h4 className="font-bold text-lg mb-2">AI-Powered Scam Guardian</h4>
              <p className="text-mews-muted text-sm mb-2">Expanded protection from browsing to email, mobile, and Deepfake detection</p>
              <p className="text-mews-muted text-sm">Architected end-to-end customer journey for AI scam protection across global portfolio</p>
              <a href="https://www.avast.com/en-us/premium-security#pc" target="_blank" rel="noopener noreferrer" className="text-mews-accent text-sm hover:underline">View Product →</a>
            </div>
            <div className="border-l-4 border-mews-accent pl-4">
              <h4 className="font-bold text-lg mb-2">Secure Identity</h4>
              <p className="text-mews-muted text-sm mb-2">First identity protection solution within Avast portfolio</p>
              <p className="text-mews-muted text-sm">Led market positioning and customer communication strategy for new identity protection offering</p>
              <a href="https://www.avast.com/en-us/secure-identity#pc" target="_blank" rel="noopener noreferrer" className="text-mews-accent text-sm hover:underline">View Product →</a>
            </div>
            <div className="border-l-4 border-mews-accent pl-4">
              <h4 className="font-bold text-lg mb-2">AntiTrack</h4>
              <p className="text-mews-muted text-sm mb-2">Monetization-led acquisition of TrackOFF company across Avast/AVG brands</p>
              <p className="text-mews-muted text-sm">Orchestrated cross-brand GTM strategy and customer journey integration</p>
              <a href="https://www.avast.com/en-us/antitrack#pc" target="_blank" rel="noopener noreferrer" className="text-mews-accent text-sm hover:underline">View Product →</a>
            </div>
          </div>
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
