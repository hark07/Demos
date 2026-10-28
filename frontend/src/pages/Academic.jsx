import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const Academic = () => {
  const shouldReduceMotion = useReducedMotion();

  const programs = [
    {
      id: "mbs",
      code: "MBS",
      badgeBg: "bg-[#EA580C]",
      title: "Masters of Business Studies (MBS)",
      duration: "2 Years (4 Semesters)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ5MB-hP2ALRAz0BWKQp8jKS6_Pycnzh-fOBoPRDL6jvYpeVBOeypwFjI&s=10",
      university: "Tribhuvan University (TU)",
      description:
        "MBS TU is a postgraduate management program offered by Tribhuvan University, Nepal, focusing on business and management skills.",
      tags: ["Business Management", "Accounting", "Finance", "Marketing"],
      tagColors: "text-amber-700 bg-amber-50 border-amber-100",
    },
    {
      id: "ma",
      code: "MA",
      badgeBg: "bg-rose-600",
      title: "Masters of Arts (MA)",
      duration: "2 Years (4 Semesters)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ5MB-hP2ALRAz0BWKQp8jKS6_Pycnzh-fOBoPRDL6jvYpeVBOeypwFjI&s=10",
      university: "Tribhuvan University (TU)",
      description:
        "MA stands for Master of Arts, a postgraduate degree focusing on humanities, social sciences, languages, and related subjects.",
      tags: ["Humanities", "Social Sciences", "Sociology"],
      tagColors: "text-rose-700 bg-rose-50 border-rose-100",
    },
    {
      id: "bca",
      code: "BCA",
      badgeBg: "bg-[#2563EB]",
      title: "Bachelor of Computer Application (BCA)",
      duration: "4 Years (8 Semesters)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRWJ-LSmcinz55I5RkWeXSFNe1s_xWTidc67qtXgV-w&s=10",
      university: "Tribhuvan University (TU)",
      description:
        "The Bachelor of Computer Application (BCA) is a specialized four-year degree under Tribhuvan University designed for the next generation of IT professionals. The curriculum centers on practical application development, teaching students to build, maintain, and secure complex digital systems.",
      tags: [
        "AI & Machine Learning",
        "Full Stack Web Dev",
        "Cloud Computing",
        "Software Engineer",
        "Data Scientist",
      ],
      tagColors: "text-sky-700 bg-sky-50 border-sky-100",
    },
    {
      id: "bbs",
      code: "BBS",
      badgeBg: "bg-[#2563EB]",
      title: "Bachelor of Business Studies (BBS)",
      duration: "4 Years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIc3C5tcvVSJnKhWi6AEbA_e5_MHAhAQRKkprW6j9VQ&s=10",
      university: "Tribhuvan University (TU)",
      description:
        "BBS is a four-year undergraduate program affiliated with Tribhuvan University, focusing on accounting, finance, marketing, management, and business skills.",
      tags: ["Business Management", "Accounting", "Finance"],
      tagColors: "text-sky-700 bg-sky-50 border-sky-100",
    },
    {
      id: "bsw",
      code: "BSW",
      badgeBg: "bg-[#2563EB]",
      title: "Bachelor of Social Work (BSW)",
      duration: "4 Years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoAaDuA5H6tqydt4QzMA7vwLDjbkfrD0kN9eB8guZ3Q&s",
      university: "Tribhuvan University (TU)",
      description:
        "BSW is an undergraduate program focusing on social work, community development, human rights, social justice, and professional helping skills.",
      tags: [
        "Social Work, Community Development",
        "Human Rights",
        "Social Justice",
        "Social Services",
      ],
      tagColors: "text-sky-700 bg-sky-50 border-sky-100",
    },
    {
      id: "ba",
      code: "BA",
      badgeBg: "bg-[#2563EB]",
      title: "Bachelor of Arts (BA)",
      duration: "4 Years",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2Ax6hoGQ7jkKxxQvzFwCIVapDEut98LK1ykVcFXwJw&s",
      university: "Tribhuvan University (TU)",
      description:
        "BA is an undergraduate program focusing on humanities, social sciences, languages, literature, culture, and critical thinking for personal development.",
      tags: [
        "Humanities",
        "Social Sciences",
        "Sociology",
        "Political Science",
        "Literature",
      ],
      tagColors: "text-sky-700 bg-sky-50 border-sky-100",
    },
  ];

  // Slow, smooth entrance animations.
  const heroVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Reveal program cards one after another.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 45,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="grow">
      <div className="w-full min-h-screen bg-stone-50 space-y-12 pb-20 font-sans overflow-hidden">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
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
                rotate: 20,
                x: -30,
              }}
              animate={{
                opacity: 1,
                rotate: 45,
                x: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 3.5,
                ease: "easeOut",
              }}
              className="absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8]"
            />

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2.5,
                delay: 0.5,
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

              <span className="text-stone-300">Our Academic Offerings</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words">
              Our Academic Offerings
            </h1>

            <p className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed break-words">
              Five TU-affiliated undergraduate programs designed for
              intellectual rigour, professional readiness, and social impact.
            </p>
          </motion.div>
        </section>

        {/* Academic Program Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {programs.map((program) => (
              <motion.div
                key={program.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: {
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }
                }
                className="h-full"
              >
                <article className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700 text-left h-full flex flex-col">
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full bg-stone-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent z-10 pointer-events-none" />

                    <motion.img
                      loading="lazy"
                      decoding="async"
                      alt={program.title}
                      src={program.image}
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                              transition: {
                                duration: 1.2,
                                ease: "easeOut",
                              },
                            }
                      }
                      className="w-full h-full object-cover"
                    />

                    {/* Program Badge */}
                    <div
                      className={`absolute top-4 left-4 z-20 ${program.badgeBg} text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider`}
                    >
                      {program.code}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      {program.duration}
                    </div>

                    {/* Program Title */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h2 className="font-heading font-bold text-white text-lg sm:text-xl tracking-tight drop-shadow-sm">
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
                    <div className="space-y-3.5">
                      {/* University */}
                      <div className="flex items-center gap-2 text-[#006A38] text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4 flex-none" />

                        <span>{program.university}</span>
                      </div>

                      {/* Description */}
                      <p className="font-body text-stone-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {program.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {program.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] font-medium px-2.5 py-1 rounded-md border ${program.tagColors} max-w-full truncate`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Explore Button */}
                    <Link
                      to={`/academic/${program.id}`}
                      className="group w-full py-3 px-4 border border-[#044c54] text-[#044c54] font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors duration-500 mt-auto"
                    >
                      <span>Explore {program.code} Program</span>

                      <motion.span
                        animate={
                          shouldReduceMotion ? undefined : { x: [0, 3, 0] }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1.5,
                          ease: "easeInOut",
                        }}
                        className="inline-flex"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Academic;
