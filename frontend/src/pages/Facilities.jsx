import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Handshake,
  Globe,
  GraduationCap,
  DollarSign,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Facilities = () => {
  const [activeTab, setActiveTab] = useState("All Facilities");
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All Facilities",
    "Academic",
    "Infrastructure",
    "Student Life",
  ];

  const facilitiesData = [
    {
      id: 1,
      title: "Modern Infrastructure",
      description:
        "State-of-the-art labs, digital library, smart classrooms, and 24/7 wi-fi connectivity across campus.",
      icon: Building2,
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Industry Partnerships",
      description:
        "Direct MOUs with 50+ companies for internship placements, live projects, and graduate recruitment.",
      icon: Handshake,
      category: "Academic",
    },
    {
      id: 3,
      title: "Global Exposure",
      description:
        "Study tours, international seminars, and exchange programs with partner institutions in Asia and Europe.",
      icon: Globe,
      category: "Student Life",
    },
    {
      id: 4,
      title: "Expert Faculty",
      description:
        "120+ qualified faculty with PhDs, industry experience, and active research publications.",
      icon: GraduationCap,
      category: "Academic",
    },
    {
      id: 5,
      title: "Scholarship Support",
      description:
        "Merit-based and need-based scholarships covering up to 75% of tuition fees for eligible students.",
      icon: DollarSign,
      category: "Student Life",
    },
    {
      id: 6,
      title: "Award-Winning Campus",
      description:
        "Recognized as Best Managed Campus by TU and recipient of National Education Excellence Award 2023.",
      icon: Trophy,
      category: "Infrastructure",
    },
  ];

  const filteredFacilities =
    activeTab === "All Facilities"
      ? facilitiesData
      : facilitiesData.filter((item) => item.category === activeTab);

  const heroText = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
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

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="grow font-sans">
      <div className="min-h-screen bg-[#F7F6F3]">
        {/* Hero Header Section */}
        <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
          {/* Animated Background Decorations */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 8, 0],
                      scale: [1, 1.05, 1],
                      x: [0, -10, 0],
                      y: [0, 12, 0],
                    }
              }
              transition={{
                duration: 20,
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
                      x: [0, 12, 0],
                      y: [0, -10, 0],
                    }
              }
              transition={{
                duration: 24,
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
                      opacity: [0.25, 0.8, 0.25],
                      scaleX: [0.85, 1, 0.85],
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#3898a8] to-transparent"
            />
          </div>

          {/* Hero Content */}
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
              variants={heroText}
              className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2 flex-wrap"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-stone-300">College Facilities</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroText}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words"
            >
              College Facilities
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroText}
              className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed"
            >
              Why Janjyoti Multiple Campus?
            </motion.p>

            {/* Accent Line */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "80px",
                opacity: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                delay: shouldReduceMotion ? 0 : 0.7,
                ease: "easeInOut",
              }}
              className="h-1 bg-amber-400 rounded-full mt-6"
            />
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {/* Category Filter Tabs */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full overflow-x-auto scrollbar-none mb-8"
          >
            <div className="flex gap-2 p-2 bg-stone-200/60 rounded-xl w-fit min-w-max">
              {categories.map((cat) => {
                const isActive = activeTab === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveTab(cat)}
                    aria-pressed={isActive}
                    className={`relative px-4 py-2.5 rounded-xl cursor-pointer font-bold text-xs sm:text-sm whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075F6C] focus-visible:ring-offset-2 ${
                      isActive
                        ? "text-white"
                        : "text-stone-600 hover:text-[#075F6C]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="facility-active-tab"
                        className="absolute inset-0 bg-[#075F6C] rounded-xl shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 24,
                          mass: 1.1,
                        }}
                      />
                    )}

                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Facilities Grid */}
          <div className="space-y-12">
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            >
              <AnimatePresence mode="popLayout">
                {filteredFacilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.id}
                      layout={!shouldReduceMotion}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -7,
                              transition: {
                                duration: 0.35,
                                ease: "easeOut",
                              },
                            }
                      }
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-200/80 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Animated Icon */}
                        <motion.div
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.1,
                                  rotate: -5,
                                }
                          }
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-500"
                        >
                          <Icon className="w-6 h-6 text-amber-500" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-[#075F6C] transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Facilities;
