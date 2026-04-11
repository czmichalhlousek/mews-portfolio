"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const values = [
  {
    title: "Delight Customers",
    description: "Driving innovation to create exceptional experiences that transform hospitality",
    icon: "🎯",
    alignment: "Led customer journey optimization for Avast One, increasing engagement through data-driven personalization and seamless onboarding experiences"
  },
  {
    title: "Cultivate Trust",
    description: "Fostering openness and transparency across teams to build lasting relationships",
    icon: "🤝",
    alignment: "Built cross-functional bridges between product, engineering, and business teams at Gen Digital, creating transparent workflows and shared success metrics"
  },
  {
    title: "Simplify Complexity",
    description: "Prizing agility by turning complex challenges into elegant, scalable solutions",
    icon: "⚡",
    alignment: "Architected end-to-end AI scam protection journey across global portfolio, simplifying complex security challenges into user-friendly experiences"
  },
  {
    title: "Listen Deeply",
    description: "Acting boldly on insights to create meaningful impact for customers and colleagues",
    icon: "👂",
    alignment: "Used customer telemetry and A/B testing to drive product decisions, transforming insights into actionable features for millions of users"
  },
  {
    title: "Win Together",
    description: "Enjoying the journey while collaborating to achieve shared success",
    icon: "🎉",
    alignment: "Orchestrated cross-brand GTM strategies across Avast/AVG/Norton, aligning diverse teams toward shared monetization goals"
  }
];

export default function MewserMindset() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  return (
    <section id="mewser-mindset" className="py-24 px-4 bg-mews-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Mewser Mindset</h2>
          <p className="text-xl text-mews-muted">Living the Mews values in every interaction</p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="p-12 bg-mews-dark border border-mews-border rounded-2xl text-center">
            <div className="text-6xl mb-6">{values[currentIndex].icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-mews-accent">{values[currentIndex].title}</h3>
            <p className="text-xl text-mews-muted leading-relaxed mb-6">{values[currentIndex].description}</p>
            <div className="mt-8 pt-6 border-t border-mews-border">
              <p className="text-sm text-mews-accent font-semibold mb-2">My Alignment:</p>
              <p className="text-base text-mews-muted leading-relaxed">{values[currentIndex].alignment}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-mews-card border border-mews-border rounded-lg hover:border-mews-accent transition-all duration-300"
              aria-label="Previous value"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-mews-card border border-mews-border rounded-lg hover:border-mews-accent transition-all duration-300"
              aria-label="Next value"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-mews-accent" : "bg-mews-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
