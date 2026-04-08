"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Target } from "lucide-react";

const positions = [
  {
    title: "Senior Product Operations Specialist",
    subtitle: "Medium Technical / Very High Soft Skills",
    technicalFit: 0.85,
    softSkillsFit: 0.95,
    pastExperienceFit: 0.8,
    overallFit: 0.85,
    description: "Strongest overall match. Involvement with product, developers, and ability to act as IC with no playbook align perfectly with role requirements.",
    highlights: ["Process optimization", "Cross-functional leadership", "Strategic influence without authority"],
    jdUrl: "https://www.mews.com/en/careers/jobs/4780581101?gh_jid=4780581101"
  },
  {
    title: "Lead Product Builder\n- Connectivity",
    subtitle: "Very High Technical / High Soft Skills",
    technicalFit: 0.7,
    softSkillsFit: 0.85,
    pastExperienceFit: 0.9,
    overallFit: 0.84,
    description: "Second strongest overall match, stretched due to not being a developer. AI skills and ability to prototype with AI tools are highly relevant for Mews' AI-native development vision.",
    highlights: ["AI-native prototyping", "Product intuition", "Rapid validation"],
    jdUrl: "https://www.mews.com/en/careers/jobs/4780557101?gh_jid=4780557101"
  },
  {
    title: "Senior Associate - Market Development",
    subtitle: "Low-Medium Technical / High Soft Skills",
    technicalFit: 0.75,
    softSkillsFit: 0.85,
    pastExperienceFit: 0.75,
    overallFit: 0.78,
    description: "Good fit overall, least fit of the three. Excellent for strategic operations. Ability to adapt to systems and act as executive gatekeeper aligns with scaling EMEA GTM operations.",
    highlights: ["Strategic operations", "Data-driven insights", "Cross-functional GTM leadership"],
    jdUrl: "https://www.mews.com/en/careers/jobs/4815380101?gh_jid=4815380101"
  }
];

export default function DoraMetrics() {
  return (
    <section id="position-fit" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Position Fit Evaluation</h2>
          <p className="text-xl text-mews-muted">How my experience aligns with Mews opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 leading-tight whitespace-pre-line">{position.title}</h3>
                <p className="text-sm text-mews-muted mb-2">{position.subtitle}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-mews-accent/20 border border-mews-accent/30 rounded-full">
                  <span className="text-sm font-bold text-mews-accent">Overall Fit: {Math.round(position.overallFit * 100)}%</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-mews-muted">Technical Fit</span>
                    <span className="font-semibold">{Math.round(position.technicalFit * 100)}%</span>
                  </div>
                  <div className="h-2 bg-mews-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${position.technicalFit * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-mews-muted">Soft Skills Fit</span>
                    <span className="font-semibold">{Math.round(position.softSkillsFit * 100)}%</span>
                  </div>
                  <div className="h-2 bg-mews-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${position.softSkillsFit * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-mews-muted">Past Experience Fit</span>
                    <span className="font-semibold">{Math.round(position.pastExperienceFit * 100)}%</span>
                  </div>
                  <div className="h-2 bg-mews-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${position.pastExperienceFit * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.45 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <p className="text-sm text-mews-muted mb-4 leading-relaxed">{position.description}</p>

              <div className="space-y-2 mb-4">
                {position.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-mews-accent flex-shrink-0" />
                    <span className="text-mews-muted">{highlight}</span>
                  </div>
                ))}
              </div>

              <a
                href={position.jdUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mews-accent hover:underline font-semibold"
              >
                View Job Description →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-mews-accent/10 to-mews-accentHover/5 border border-mews-accent/20 rounded-2xl text-center"
        >
          <p className="text-mews-muted text-sm leading-relaxed">
            Mews is building an AI-enabled workforce and encourages candidates to apply even if they don't meet 100% of the criteria. My blend of technical literacy, business leadership, and AI curiosity makes me highly adaptable across these roles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
