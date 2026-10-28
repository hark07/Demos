import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, BookOpen } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedNoticeId, setSelectedNoticeId] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const noticesList = [
    {
      id: 1,
      day: "14",
      month: "OCT",
      title: "Graduation Ceremony",
      program: "All Programs",
      category: "General",
      date: "2026-10-14",
      author: "Administration",
      image:
        "https://namunacollege.edu.np/uploads/notices/graduation-ceremony/WhatsApp-Image-2026-10-14-at-2.47.28-AM-1791971881546.jpeg",
      description:
        "Graduation Ceremony BCA, BHM, BSW, and BBS programs. Date: 30th Ashoj 2083 Time: 10:00 AM Venue: Ramada by Wyndham",
    },
  ];

  const categories = ["All", "General"];

  const filteredNotices = noticesList.filter((notice) => {
    const matchesSearch = [
      notice.title,
      notice.program,
      notice.description,
      notice.author,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || notice.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const activeNotice =
    filteredNotices.find((notice) => notice.id === selectedNoticeId) ||
    filteredNotices[0];

  const easing = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.9,
        ease: easing,
      },
    },
  };

  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.13,
        delayChildren: 0.1,
      },
    },
  };

  const noticeCardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.75,
        ease: easing,
      },
    },
  };

  return (
    <main className="grow font-sans">
      <div className="w-full bg-stone-50 min-h-screen pb-20">
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
                      scale: [1, 1.05, 1],
                      x: [0, -12, 0],
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
                  staggerChildren: shouldReduceMotion ? 0 : 0.18,
                },
              },
            }}
            className="max-w-7xl mx-auto px-6 relative z-10 text-left"
          >
            <motion.div
              variants={fadeUp}
              className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2 flex-wrap"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-stone-300">
                Official Notices &amp; Announcements
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words"
            >
              Official Notices &amp; Announcements
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed"
            >
              Real-time updates from the administration, faculty, and
              departments.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "84px", opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                delay: shouldReduceMotion ? 0 : 0.7,
                ease: "easeInOut",
              }}
              className="h-1 bg-emerald-400 rounded-full mt-6"
            />
          </motion.div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8 text-left">
          {/* Left Column: Notices List & Filters */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.12,
                },
              },
            }}
            className="w-full lg:w-1/3 space-y-4"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-heading font-bold text-stone-900 mb-4"
            >
              Notices
            </motion.h2>

            {/* Search and Categories */}
            <motion.div variants={fadeUp} className="space-y-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />

                <input
                  type="text"
                  placeholder="Search notices..."
                  aria-label="Search notices"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#075F6C]/20 transition-all text-sm font-body"
                />
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      aria-pressed={isSelected}
                      className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075F6C] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "text-white"
                          : "bg-stone-200/70 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="notice-category-indicator"
                          className="absolute inset-0 bg-[#075F6C] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Notice List */}
            <motion.div
              variants={listContainer}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredNotices.map((notice) => {
                  const isSelected = selectedNoticeId === notice.id;

                  return (
                    <motion.button
                      key={notice.id}
                      type="button"
                      layout={!shouldReduceMotion}
                      variants={noticeCardVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : -10,
                        transition: { duration: 0.2 },
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              x: 3,
                              transition: { duration: 0.25 },
                            }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                      onClick={() => setSelectedNoticeId(notice.id)}
                      aria-pressed={isSelected}
                      className={`relative w-full text-left p-4 rounded-xl cursor-pointer border-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075F6C] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "bg-white border-[#075F6C] shadow-md"
                          : "bg-white border-stone-200 hover:border-stone-400"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="selected-notice-border"
                          className="absolute left-0 top-3 bottom-3 w-1 bg-[#075F6C] rounded-r-full"
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 26,
                          }}
                        />
                      )}

                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center justify-center bg-stone-100 rounded-lg p-2 min-w-[3.5rem]">
                          <span className="font-heading font-black text-stone-900 text-lg leading-none">
                            {notice.day}
                          </span>
                          <span className="font-body font-bold text-[#075F6C] text-[10px] uppercase tracking-wider">
                            {notice.month}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <h3 className="font-heading font-bold text-stone-900 text-sm leading-tight">
                            {notice.title}
                          </h3>
                          <p className="text-[10px] text-stone-500 font-medium">
                            {notice.program}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>

              {filteredNotices.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-stone-200 p-6 text-center"
                >
                  <Search className="w-6 h-6 mx-auto mb-3 text-stone-400" />
                  <p className="text-sm font-semibold text-stone-700">
                    No notices found
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Try another search term or category.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.aside>

          {/* Right Column: Notice Details */}
          <section className="w-full lg:w-2/3 lg:sticky lg:top-6 lg:self-start">
            <AnimatePresence mode="wait">
              {activeNotice ? (
                <motion.article
                  key={activeNotice.id}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: shouldReduceMotion ? 0.01 : 0.65,
                      ease: easing,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : -8,
                    transition: {
                      duration: shouldReduceMotion ? 0.01 : 0.2,
                    },
                  }}
                  className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-stone-200"
                >
                  {/* Notice Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div className="space-y-2 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-stone-900 break-words">
                        {activeNotice.title}
                      </h2>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-stone-400" />
                          {activeNotice.date}
                        </span>

                        {activeNotice.author && (
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-stone-400" />
                            {activeNotice.author}
                          </span>
                        )}

                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-stone-400" />
                          {activeNotice.program}
                        </span>
                      </div>
                    </div>
                  </div>

                  <hr className="border-stone-200 mb-6" />

                  {/* Notice Image */}
                  {activeNotice.image && (
                    <motion.a
                      href={activeNotice.image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open image for ${activeNotice.title}`}
                      initial={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.985,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.8,
                        ease: easing,
                      }}
                      className="block mb-6 overflow-hidden rounded-xl border border-stone-200 bg-stone-50"
                    >
                      <motion.img
                        src={activeNotice.image}
                        alt={activeNotice.title}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full max-h-[32rem] object-contain"
                      />
                    </motion.a>
                  )}

                  {/* Notice Description */}
                  <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                    {activeNotice.description}
                  </p>
                </motion.article>
              ) : (
                <motion.div
                  key="empty-notice"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-8 rounded-2xl border border-stone-200 text-center"
                >
                  <p className="text-stone-600">
                    Select a notice to view its details.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Notice;
