import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { getCurriculumByProgram } from "../assets/curriculum";

const ProgramDetail = () => {
  const { id } = useParams();

  // Supports /academic/bca, /academic/mbs, etc.
  const program = getCurriculumByProgram(id);

  const [activeTab, setActiveTab] = useState(2);
  const [openSemester, setOpenSemester] = useState(null);

  const shouldReduceMotion = useReducedMotion();

  // Reset the accordion when the selected program changes.
  useEffect(() => {
    setActiveTab(2);

    if (program?.curriculum?.length) {
      const lastYear = program.curriculum[program.curriculum.length - 1];

      const lastSemester = lastYear?.semesters?.[lastYear.semesters.length - 1];

      setOpenSemester(lastSemester?.number ?? null);
    } else {
      setOpenSemester(null);
    }
  }, [id]);

  const toggleSemester = (semesterNumber) => {
    setOpenSemester((current) =>
      current === semesterNumber ? null : semesterNumber,
    );
  };

  const totalSubjects = useMemo(() => {
    if (!program?.curriculum) return 0;

    return program.curriculum.reduce(
      (total, year) =>
        total +
        year.semesters.reduce(
          (count, semester) => count + semester.subjects.length,
          0,
        ),
      0,
    );
  }, [program]);

  const tabs = [
    {
      id: 0,
      label: "Overview",
      Icon: BookOpen,
    },
    {
      id: 1,
      label: "Eligibility",
      Icon: CheckCircle2,
    },
    {
      id: 2,
      label: "Syllabus",
      Icon: GraduationCap,
    },
  ];

  const heroVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  // Handle unknown or missing program IDs.
  if (!program) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#044c54]/10 text-[#044c54]">
            <GraduationCap className="h-8 w-8" />
          </div>

          <h1 className="text-3xl font-black text-stone-800">
            Program Not Found
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-stone-500">
            The academic program you are looking for does not exist or is
            currently unavailable.
          </p>

          <Link
            to="/academic"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#044c54] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#033940]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Browse Academic Programs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grow">
      <div className="min-h-screen w-full overflow-hidden bg-stone-50 pb-20 font-sans">
        {/* ==================== HERO SECTION ==================== */}

        <section className="relative w-full overflow-hidden border-b border-emerald-800/20 bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20">
          {/* Animated background decorations */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
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
              className="absolute -right-12 -top-12 h-96 w-96 rounded-full border-4 border-[#3898a8]"
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
              className="absolute -bottom-24 -left-12 h-80 w-80 border border-[#3898a8]"
            />

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2.5,
                delay: 0.4,
                ease: "easeInOut",
              }}
              className="absolute left-1/3 top-1/2 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#3898a8] to-transparent"
            />
          </div>

          {/* Hero content */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto max-w-7xl px-6 text-left"
          >
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400/80">
              <Link
                to="/academic"
                className="flex items-center gap-1 transition-colors duration-300 hover:text-white"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                Academic Programs
              </Link>
            </div>

            <h1 className="max-w-4xl break-words font-heading text-3xl font-black leading-tight tracking-tight text-stone-100 sm:text-4xl md:text-5xl">
              {program.title} ({program.shortName})
            </h1>

            <p className="mt-3 max-w-2xl font-body text-sm font-medium italic leading-relaxed text-stone-300 sm:text-base">
              {program.description}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <motion.span
                variants={itemVariants}
                className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-stone-200 backdrop-blur-md"
              >
                {program.duration} ({program.semesters} Semesters)
              </motion.span>

              <motion.span
                variants={itemVariants}
                className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-stone-200 backdrop-blur-md"
              >
                {program.university}
              </motion.span>
            </motion.div>
          </motion.div>
        </section>

        {/* ==================== MAIN CONTENT ==================== */}

        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="relative mb-10 inline-flex flex-wrap gap-1 rounded-2xl border border-stone-200 bg-stone-200/60 p-1.5 backdrop-blur-sm"
          >
            {tabs.map(({ id, label, Icon }) => (
              <motion.button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ duration: 0.25 }}
                aria-pressed={activeTab === id}
                className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors duration-300 sm:px-5 sm:text-sm ${
                  activeTab === id
                    ? "bg-white text-[#044c54] shadow-md shadow-stone-300/50"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* ==================== LEFT CONTENT ==================== */}

            <div className="min-w-0 lg:col-span-8">
              <AnimatePresence mode="wait">
                {/* OVERVIEW TAB */}
                {activeTab === 0 && (
                  <motion.div
                    key="overview"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-8"
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#044c54]/10 text-[#044c54]">
                          <BookOpen className="h-6 w-6" />
                        </div>

                        <div>
                          <h2 className="text-xl font-bold text-stone-800">
                            Program Introduction
                          </h2>

                          <p className="mt-1 text-xs text-stone-500">
                            About {program.shortName}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-stone-600">
                        {program.description}
                      </p>

                      <p className="text-sm leading-relaxed text-stone-600">
                        The {program.title} program provides students with
                        academic knowledge and practical skills relevant to
                        their chosen field. Students explore core subjects,
                        develop analytical abilities, and build a foundation for
                        professional growth and further study.
                      </p>
                    </motion.div>

                    {/* Program highlights */}
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      className="space-y-5 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <h2 className="text-xl font-bold text-stone-800">
                        What You Will Explore
                      </h2>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {program.highlights?.map((highlight, index) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-2xl border border-stone-200/60 bg-stone-50/80 p-4"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#044c54]/10 text-xs font-bold text-[#044c54]">
                              {index + 1}
                            </div>

                            <span className="text-sm font-semibold text-stone-700">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Program facts */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {[
                        {
                          label: "Duration",
                          value: program.duration,
                        },
                        {
                          label: "Semesters",
                          value: String(program.semesters),
                        },
                        {
                          label: "Total Subjects",
                          value: String(totalSubjects),
                        },
                      ].map((fact) => (
                        <div
                          key={fact.label}
                          className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm"
                        >
                          <p className="text-xs text-stone-500">{fact.label}</p>

                          <p className="mt-2 text-lg font-black text-[#044c54]">
                            {fact.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ELIGIBILITY TAB */}
                {activeTab === 1 && (
                  <motion.div
                    key="eligibility"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div className="space-y-5 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#044c54]/10 text-[#044c54]">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>

                        <div>
                          <h2 className="text-xl font-bold text-stone-800">
                            Admission Eligibility
                          </h2>

                          <p className="mt-1 text-xs text-stone-500">
                            Requirements for {program.shortName}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-stone-600">
                        Applicants should meet the academic qualifications and
                        admission requirements prescribed by the university for
                        the selected program.
                      </p>

                      <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                          <span className="leading-relaxed">
                            <strong className="text-stone-800">
                              Academic qualification:
                            </strong>{" "}
                            Applicants must have completed the required previous
                            level of education or an equivalent qualification
                            recognized by the university.
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                          <span className="leading-relaxed">
                            <strong className="text-stone-800">
                              Minimum grades:
                            </strong>{" "}
                            Applicants must meet the minimum grades, marks, or
                            GPA required by the applicable admission guidelines.
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                          <span className="leading-relaxed">
                            <strong className="text-stone-800">
                              Entrance examination:
                            </strong>{" "}
                            Applicants must take and pass any entrance
                            examination required for the selected program.
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                          <span className="leading-relaxed">
                            <strong className="text-stone-800">
                              Documentation:
                            </strong>{" "}
                            Applicants should submit the required academic
                            certificates, identification, application form, and
                            other supporting documents.
                          </span>
                        </li>
                      </ul>

                      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                        <p className="text-xs leading-relaxed text-amber-800">
                          <strong>Important:</strong> These are general
                          placeholder requirements. Check the university's
                          official admission notice for the exact
                          qualifications, entrance requirements, and deadlines
                          for this program.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* SYLLABUS TAB */}
                {activeTab === 2 && (
                  <motion.div
                    key="syllabus"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="space-y-8"
                  >
                    {/* Curriculum header */}
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center justify-between rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-6"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#044c54]/10 text-[#044c54]">
                          <GraduationCap className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <h2 className="text-lg font-bold text-stone-800">
                            Curriculum Structure
                          </h2>

                          <p className="mt-1 text-xs text-stone-500">
                            {program.semesters} Semesters · {totalSubjects}{" "}
                            Total Subjects
                          </p>
                        </div>
                      </div>

                      <span className="ml-3 shrink-0 rounded-xl bg-stone-100 px-3 py-2 text-xs font-bold text-stone-600">
                        {program.shortName}
                      </span>
                    </motion.div>

                    {/* Curriculum years */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-8"
                    >
                      {program.curriculum.map((yearGroup) => (
                        <motion.section
                          key={yearGroup.year}
                          variants={itemVariants}
                          className="space-y-4"
                        >
                          <h3 className="pl-1 text-xs font-bold uppercase tracking-widest text-stone-400">
                            {yearGroup.year}
                          </h3>

                          <div className="space-y-4">
                            {yearGroup.semesters.map((sem) => {
                              const isOpen = openSemester === sem.number;

                              const contentId = `semester-content-${program.id}-${sem.number}`;

                              return (
                                <motion.div
                                  key={sem.number}
                                  layout={!shouldReduceMotion}
                                  transition={{
                                    layout: {
                                      duration: shouldReduceMotion ? 0 : 0.5,
                                      ease: [0.22, 1, 0.36, 1],
                                    },
                                  }}
                                  className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm"
                                >
                                  {/* Accordion header */}
                                  <button
                                    type="button"
                                    onClick={() => toggleSemester(sem.number)}
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                    className="group flex w-full cursor-pointer items-center justify-between p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#044c54] sm:p-6"
                                  >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                      <motion.div
                                        animate={{
                                          scale:
                                            isOpen && !shouldReduceMotion
                                              ? 1.04
                                              : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black transition-colors duration-300 sm:h-12 sm:w-12 ${
                                          isOpen
                                            ? "bg-[#044c54] text-white shadow-md"
                                            : "bg-stone-100 text-stone-700"
                                        }`}
                                      >
                                        {sem.number}
                                      </motion.div>

                                      <div>
                                        <h4 className="font-heading text-sm font-bold text-stone-800 transition-colors duration-300 group-hover:text-[#044c54] sm:text-base">
                                          Semester {sem.number}
                                        </h4>

                                        <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-500">
                                          <BookOpen className="h-3.5 w-3.5" />
                                          {sem.subjects.length} Subjects
                                        </p>
                                      </div>
                                    </div>

                                    <motion.div
                                      animate={{
                                        rotate: isOpen ? 180 : 0,
                                      }}
                                      transition={{
                                        duration: shouldReduceMotion ? 0 : 0.3,
                                        ease: "easeInOut",
                                      }}
                                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-500"
                                    >
                                      <ChevronDown className="h-4 w-4" />
                                    </motion.div>
                                  </button>

                                  {/* Accordion subjects */}
                                  <AnimatePresence initial={false}>
                                    {isOpen && (
                                      <motion.div
                                        key="subjects"
                                        id={contentId}
                                        initial={{
                                          height: 0,
                                          opacity: 0,
                                        }}
                                        animate={{
                                          height: "auto",
                                          opacity: 1,
                                          transition: {
                                            height: {
                                              duration: shouldReduceMotion
                                                ? 0
                                                : 0.5,
                                              ease: [0.22, 1, 0.36, 1],
                                            },
                                            opacity: {
                                              duration: shouldReduceMotion
                                                ? 0
                                                : 0.35,
                                              delay: shouldReduceMotion
                                                ? 0
                                                : 0.08,
                                            },
                                          },
                                        }}
                                        exit={{
                                          height: 0,
                                          opacity: 0,
                                          transition: {
                                            height: {
                                              duration: shouldReduceMotion
                                                ? 0
                                                : 0.35,
                                              ease: "easeInOut",
                                            },
                                            opacity: {
                                              duration: shouldReduceMotion
                                                ? 0
                                                : 0.15,
                                            },
                                          },
                                        }}
                                        className="overflow-hidden"
                                      >
                                        <div className="border-t border-stone-100 px-4 pb-6 pt-5 sm:px-6">
                                          <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                                          >
                                            {sem.subjects.map(
                                              (subject, index) => (
                                                <motion.div
                                                  key={subject}
                                                  variants={itemVariants}
                                                  whileHover={
                                                    shouldReduceMotion
                                                      ? undefined
                                                      : {
                                                          x: 3,
                                                          transition: {
                                                            duration: 0.2,
                                                          },
                                                        }
                                                  }
                                                  className="flex items-center gap-3.5 rounded-2xl border border-stone-200/60 bg-stone-50/80 p-3 transition-colors duration-300 hover:bg-stone-100/80 sm:p-4"
                                                >
                                                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-stone-200/70 text-xs font-bold text-stone-600">
                                                    {index + 1}
                                                  </div>

                                                  <span className="text-xs font-semibold tracking-tight text-stone-800 sm:text-sm">
                                                    {subject}
                                                  </span>
                                                </motion.div>
                                              ),
                                            )}
                                          </motion.div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.section>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ==================== RIGHT SIDEBAR ==================== */}

            <motion.aside
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-6 lg:col-span-4"
            >
              {/* Admissions card */}
              <motion.div
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="space-y-4 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-stone-800">
                    Admissions Open
                  </h3>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                    Apply Now
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-stone-500">
                  Interested in studying {program.shortName}? Contact our
                  admissions team for program details, application procedures,
                  and available seats.
                </p>

                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Link
                    to="/admissions"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#044c54] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#033940] sm:text-sm"
                  >
                    Apply for Admission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick facts */}
              <motion.div
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="space-y-4 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-lg"
              >
                <h3 className="text-base font-bold text-stone-800">
                  Quick Facts
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 border-b border-stone-100 py-2">
                    <span className="text-stone-500">Program</span>

                    <span className="text-right font-bold text-stone-800">
                      {program.shortName}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-stone-100 py-2">
                    <span className="text-stone-500">Duration</span>

                    <span className="text-right font-bold text-stone-800">
                      {program.duration}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-stone-100 py-2">
                    <span className="text-stone-500">University</span>

                    <span className="max-w-[60%] text-right font-bold text-stone-800">
                      {program.university}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-b border-stone-100 py-2">
                    <span className="text-stone-500">Semesters</span>

                    <span className="font-bold text-stone-800">
                      {program.semesters}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 py-2">
                    <span className="text-stone-500">Total Subjects</span>

                    <span className="font-bold text-stone-800">
                      {totalSubjects}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Program highlights */}
              <motion.div
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="space-y-4 rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-lg"
              >
                <h3 className="text-base font-bold text-stone-800">
                  Program Highlights
                </h3>

                <div className="flex flex-wrap gap-2">
                  {program.highlights?.map((highlight, index) => {
                    const highlightColors = [
                      "border-sky-100 bg-sky-50 text-sky-700",
                      "border-emerald-100 bg-emerald-50 text-emerald-700",
                      "border-amber-100 bg-amber-50 text-amber-700",
                      "border-rose-100 bg-rose-50 text-rose-700",
                    ];

                    return (
                      <span
                        key={highlight}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                          highlightColors[index % highlightColors.length]
                        }`}
                      >
                        {highlight}
                      </span>
                    );
                  })}
                </div>
              </motion.div>

              {/* Curriculum summary */}
              <motion.div
                variants={itemVariants}
                className="space-y-3 rounded-3xl border border-[#044c54]/10 bg-[#044c54]/5 p-6"
              >
                <div className="flex items-center gap-2 text-[#044c54]">
                  <GraduationCap className="h-5 w-5" />

                  <h3 className="text-sm font-bold">Curriculum Overview</h3>
                </div>

                <p className="text-xs leading-relaxed text-stone-600">
                  Explore all {program.semesters} semesters of the{" "}
                  {program.shortName} curriculum and review the subjects
                  included in each semester.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(2);
                    setOpenSemester(
                      program.curriculum?.[0]?.semesters?.[0]?.number ?? null,
                    );
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#044c54] transition-colors hover:text-[#087886]"
                >
                  Explore syllabus
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProgramDetail;
