import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import bca from "../assets/bcaimg.jpg"

const Gallery = () => {
  const shouldReduceMotion = useReducedMotion();

  const galleryItems = [
    {
      id: 1,
      title: "BBS Department",
      description:
        "Academic journey and interactive learning environment of our BBS students.",
      image:
        "",
      imageCount: 26,
    },
    {
      id: 2,
      title: "BSW Department",
      description: "Fieldwork, Social Impact & Community Services",
      image:
        "",
      imageCount: 12,
    },
    {
      id: 3,
      title: "BHM Department",
      description: "Culinary Arts, Hospitality & Management",
      image:
        "",
      imageCount: 0,
    },
    {
      id: 4,
      title: "BCA Department",
      description: "Computing, Coding, and Technical Innovation",
      image:
        "",
      imageCount: 2,
    },
  ];

  // Smooth hero entrance.
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Reveal cards one after another.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.25,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="grow font-sans bg-stone-50 min-h-screen pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
        {/* Animated Background Decorations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 3,
              ease: "easeOut",
            }}
            className="absolute -top-12 -right-12 w-96 h-96 border-4 border-[#3898a8] rounded-full"
          />

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              rotate: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 45,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 3.5,
              ease: "easeOut",
            }}
            className="absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8]"
          />

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 2.5,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#3898a8] to-transparent origin-left"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 relative z-10 text-left"
        >
          <div className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-500"
            >
              Home
            </Link>

            <span className="text-stone-300">/</span>

            <span className="text-stone-300">Campus Gallery</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words">
            Campus Gallery
          </h1>

          <p className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed">
            Exploring the vibrant life of our BCA, BHM, and BSW departments.
          </p>
        </motion.div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {galleryItems.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
              }
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-700 bg-stone-200"
            >
              {/* Gallery Image */}
              <motion.img
                loading="lazy"
                decoding="async"
                alt={item.title}
                src={item.image}
                initial={{
                  scale: shouldReduceMotion ? 1 : 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.1,
                        transition: {
                          duration: 1.4,
                          ease: "easeOut",
                        },
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-64 object-cover"
              />

              {/* Content Overlay */}
              <motion.div
                initial={{
                  opacity: 0.8,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                }}
                className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent p-6 flex flex-col justify-end"
              >
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: "easeOut",
                  }}
                  className="text-xl font-heading font-bold text-white mb-1"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1,
                    delay: shouldReduceMotion ? 0 : 0.35,
                    ease: "easeOut",
                  }}
                  className="text-white/70 text-xs font-medium leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </motion.div>

              {/* Image Count Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.05,
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-sm"
              >
                <span>{item.imageCount}</span> Images
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Gallery;
