"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Gen Digital", color: "from-purple-500 to-purple-700" },
  { name: "Avast", color: "from-orange-500 to-red-500" },
  { name: "AVG", color: "from-green-500 to-teal-500" },
  { name: "Norton", color: "from-yellow-500 to-orange-500" },
  { name: "LifeLock", color: "from-blue-500 to-indigo-500" },
  { name: "Avira", color: "from-red-500 to-pink-500" },
];

export default function CompanyLogos() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mews-accent/5 via-transparent to-mews-accentHover/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-mews-accent to-mews-accentHover bg-clip-text text-transparent">
            Trusted Industry Leaders
          </h2>
          <p className="text-mews-muted">Building impact across global cybersecurity brands</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
              }}
              className="relative group"
            >
              <div className={`p-8 bg-mews-card border border-mews-border rounded-xl hover:border-mews-accent transition-all duration-300 relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex items-center justify-center h-24">
                  <div className={`text-2xl md:text-3xl font-black bg-gradient-to-br ${company.color} bg-clip-text text-transparent`}>
                    {company.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
