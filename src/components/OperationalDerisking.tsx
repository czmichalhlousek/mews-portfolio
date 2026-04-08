"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const strategies = [
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Data-driven A/B testing to validate hypotheses before full-scale rollout, maximizing ROI"
  },
  {
    icon: TrendingUp,
    title: "Telemetry Systems",
    description: "Implementing monitoring that flags anomalies before they impact customer experience"
  },
  {
    icon: AlertTriangle,
    title: "Forecast Modeling",
    description: "Advanced business case creation and growth monetization strategy to reduce uncertainty"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Building automated validation that ensures every CX journey meets quality standards"
  }
];

export default function OperationalDerisking() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Data-Driven Risk Reduction</h2>
          <p className="text-xl text-mews-muted">Minimizing uncertainty through validation and forecasting</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mews-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-mews-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                    <p className="text-mews-muted leading-relaxed">{strategy.description}</p>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-mews-accent/10 to-mews-accentHover/5 border border-mews-accent/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">The Gen Digital Legacy</h3>
          <p className="text-mews-muted leading-relaxed">
            At Gen Digital, I acted as the filter between C-suite vision and squad-level execution, providing Data-Driven Decision Support that influenced monetization strategy. My Trial Squad experience wasn't just about building features—it was about building the factory: the automation and telemetry that allowed those features to be measured and scaled.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
