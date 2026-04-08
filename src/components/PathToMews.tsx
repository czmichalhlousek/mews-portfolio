"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Target } from "lucide-react";

const milestones = [
  {
    year: "Gen Digital",
    title: "Digital Success Lead",
    description: "Led trial squads and built automation systems that scaled feature measurement across the organization",
    icon: Briefcase,
    color: "from-blue-500 to-purple-500"
  },
  {
    year: "Evolution",
    title: "Growth Engineer",
    description: "Transitioned to building the systems that enable innovation, focusing on PLG and data-driven growth",
    icon: Rocket,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "Today",
    title: "Staff Technical Program Manager",
    description: "Bridging R&D velocity with GTM precision, ready to bring operational excellence to Mews",
    icon: Target,
    color: "from-orange-500 to-red-500"
  }
];

export default function PathToMews() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Path to Mews</h2>
          <p className="text-xl text-mews-muted">My evolution from Gen Digital to the Mews ecosystem</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mews-border hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="p-8 bg-mews-dark border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-bold mb-4`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-mews-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-mews-accent rounded-full items-center justify-center border-4 border-mews-card">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-mews-accent/10 to-mews-accentHover/5 border border-mews-accent/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready for the Next Chapter</h3>
            <p className="text-mews-muted max-w-2xl mx-auto">
              My journey has prepared me to bring operational excellence, data-driven decision making, and a human-centric approach to the Mews Hospitality Cloud
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
