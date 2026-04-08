"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const metrics = [
  { label: "Deployment Frequency", value: 95, target: "On-demand", color: "from-green-500 to-emerald-500" },
  { label: "Lead Time for Changes", value: 88, target: "< 1 hour", color: "from-blue-500 to-cyan-500" },
  { label: "Time to Restore Service", value: 92, target: "< 1 hour", color: "from-purple-500 to-pink-500" },
  { label: "Change Failure Rate", value: 97, target: "< 15%", color: "from-orange-500 to-red-500" }
];

export default function DoraMetrics() {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prev) =>
        prev.map((current, index) => {
          const target = metrics[index].value;
          if (current < target) {
            return Math.min(current + 2, target);
          }
          return current;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">DORA Metrics Dashboard</h2>
          <p className="text-xl text-mews-muted">Measuring operational excellence through data</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-mews-card border border-mews-border rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{metric.label}</h3>
                <span className="text-mews-accent font-semibold">{metric.target}</span>
              </div>
              
              <div className="relative h-4 bg-mews-border rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${animatedValues[index]}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  className={`absolute h-full bg-gradient-to-r ${metric.color} rounded-full`}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-mews-muted">Performance</span>
                <span className="font-bold">{animatedValues[index].toFixed(0)}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-mews-accent/10 border border-mews-accent/20 rounded-xl text-center"
        >
          <p className="text-mews-muted">
            <strong className="text-mews-accent">Elite Performance:</strong> These metrics reflect my commitment to building systems that enable rapid, reliable, and secure delivery at scale
          </p>
        </motion.div>
      </div>
    </section>
  );
}
