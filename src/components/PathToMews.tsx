"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Target } from "lucide-react";

const milestones = [
  {
    year: "2018-2022",
    title: "Junior to Senior E-Commerce Specialist",
    description: "Led monetization and UX architecture for privacy portfolio (VPN, AntiTrack, BreachGuard), managing Avast One launch and TrackOFF acquisition integration",
    icon: Briefcase,
    color: "from-blue-500 to-purple-500"
  },
  {
    year: "2022-2023",
    title: "Principal Product Growth Generalist",
    description: "Spearheaded E2E personalization, engineered automated digital success journeys using PowerBI and Adobe Analytics, scaled lifecycle architecture globally",
    icon: Rocket,
    color: "from-green-500 to-teal-500"
  },
  {
    year: "2023-Present",
    title: "Growth Monetization Lead & PLG",
    description: "Leading cross-functional teams, orchestrating trial-led transformation of global portfolio, architecting AI product monetization for 100M+ users",
    icon: Target,
    color: "from-orange-500 to-red-500"
  }
];

export default function PathToMews() {
  return (
    <section id="path-to-mews" className="py-24 px-4 bg-mews-card/50">
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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-mews-border" />
          
          <div className="space-y-12 md:space-y-12">
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
                  <div className="w-12 h-12 bg-mews-accent rounded-full flex items-center justify-center border-4 border-mews-card flex-shrink-0 ml-0 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`flex-1 ml-6 md:ml-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="p-6 md:p-8 bg-mews-dark border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-bold mb-4`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-mews-muted leading-relaxed text-sm md:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex flex-1" />
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
            <h3 className="text-2xl font-bold mb-4">Why MEWS?</h3>
            <p className="text-mews-muted max-w-2xl mx-auto mb-4">
              "I am drawn to Mews for the same reason I joined Avast nearly a decade ago: the unique energy of a Czech-born global challenger. I thrive in agile, 'no-playbook' environments where high autonomy is the standard and speed is a feature."
            </p>
            <p className="text-mews-muted max-w-2xl mx-auto">
              Having seen Avast evolve from a local hero into a global leader (Gen Digital), I am eager to apply my experience in scaling product-led monetization and operational systems to help Mews redefine the hospitality industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
