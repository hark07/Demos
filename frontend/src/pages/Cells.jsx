import React from "react";
import { Link } from "react-router-dom";

import { motion, useReducedMotion } from "framer-motion";

const Cells = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="grow font-sans bg-stone-50 min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [0, 8, 0],
                    scale: [1, 1.06, 1],
                    x: [0, -12, 0],
                    y: [0, 12, 0],
                  }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-12 -right-12 w-96 h-96 border-4 border-[#3898a8] rounded-full"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: [45, 55, 45],
                    x: [0, 14, 0],
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8] rotate-45"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    opacity: [0.3, 0.8, 0.3],
                    scaleX: [0.85, 1, 0.85],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#3898a8] to-transparent"
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.2,
              },
            },
          }}
          className="max-w-7xl mx-auto px-6 relative z-10 text-left"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex flex-wrap items-center gap-2"
          >
            <Link to="/" className="hover:underline">
              HOME
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-300">
              COLLEGE COMMITTEES &amp; CELLS
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words"
          >
            College Committees &amp; Cells
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            variants={fadeUp}
            className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed"
          >
            Explore our governance, academic support, and student engagement
            units.
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "84px",
              opacity: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 1.2,
              delay: shouldReduceMotion ? 0 : 0.7,
              ease: "easeInOut",
            }}
            className="h-1 bg-emerald-400 rounded-full mt-6"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Cells;
