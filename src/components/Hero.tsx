"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import MewsLogo from "./MewsLogo";

const name = "Michal Hloušek";
const positions = [
  "Digital Success Lead",
  "Strategic Growth Engineer",
  "Growth Generalist",
  "Monetization Lead",
  "Go to market expert",
];

function TypewriterEffect() {
  const [position, setPosition] = useState("");
  const [positionIndex, setPositionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = positions[positionIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (position === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setPosition(currentText.slice(0, position.length + 1));
        }
      } else {
        if (position === "") {
          setIsDeleting(false);
          setPositionIndex((positionIndex + 1) % positions.length);
        } else {
          setPosition(position.slice(0, position.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [position, positionIndex, isDeleting]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className="bg-gradient-to-r from-mews-accent to-mews-accentHover bg-clip-text text-transparent font-bold">
      {position}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="inline-block w-0.5 bg-mews-accent ml-1 align-middle"
        style={{ height: '1em' }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mews-accent/10 via-transparent to-mews-accentHover/10" />
      <div className="absolute inset-0 bg-gradient-radial from-mews-accent/20 via-transparent to-transparent" />
      
      {/* Floating orbs for particle effect - enhanced with pulsing */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 bg-mews-accent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-mews-accentHover rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [-50, 50, -50],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-mews-accent rounded-full blur-3xl"
      />
      
      {/* Additional smaller pulsing bubbles */}
      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-mews-accent rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-mews-accentHover rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-mews-accent rounded-full blur-xl"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          {/* MEWS Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="-mb-4 flex justify-center"
          >
            <MewsLogo className="w-48 h-48 md:w-64 md:h-64 dark:fill-white fill-black transition-colors duration-300" />
          </motion.div>

          {/* Prominent "I am Michal Hloušek" headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight whitespace-nowrap"
          >
            I am{" "}
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.03 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Dynamic typewriter effect for positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight h-12 sm:h-14 md:h-16 lg:h-20 whitespace-nowrap"
          >
            <TypewriterEffect />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-mews-muted mb-6"
          >
            Gen Digital | 8+ years scaling product-led monetization
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-mews-muted mb-8 italic"
          >
            "From customer journeys through building the systems that allow innovation to scale"
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#position-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-mews-accent hover:bg-mews-accentHover rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-mews-accent/25 hover:shadow-mews-accent/50"
          >
            Explore My Alignment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/michalhlousek/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 border border-mews-accent rounded-lg font-semibold transition-all duration-300 hover:bg-mews-accent/10"
          >
            <Linkedin className="w-6 h-6" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-mews-muted rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-mews-accent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
