import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, GraduationCap, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Results = () => {
  const [examSession, setExamSession] = useState("");
  const [symbolNumber, setSymbolNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Dummy data for frontend testing only
  const dummyResults = [
    {
      symbolNumber: "1001",
      studentName: "Aarav Sharma",
      program: "BCA",
      examSession: "00af42d3-1859-40de-8cc5-dec0e1c320a4",
      subjects: [
        { name: "English", fullMarks: 100, passMarks: 40, marks: 85 },
        { name: "Mathematics", fullMarks: 100, passMarks: 40, marks: 78 },
        { name: "Computer Science", fullMarks: 100, passMarks: 40, marks: 92 },
        { name: "General Knowledge", fullMarks: 100, passMarks: 40, marks: 74 },
        { name: "Logical Reasoning", fullMarks: 100, passMarks: 40, marks: 88 },
      ],
    },
    {
      symbolNumber: "1002",
      studentName: "Sita Karki",
      program: "BSW",
      examSession: "00af42d3-1859-40de-8cc5-dec0e1c320a4",
      subjects: [
        { name: "English", fullMarks: 100, passMarks: 40, marks: 72 },
        { name: "Mathematics", fullMarks: 100, passMarks: 40, marks: 65 },
        { name: "Social Studies", fullMarks: 100, passMarks: 40, marks: 81 },
        { name: "General Knowledge", fullMarks: 100, passMarks: 40, marks: 69 },
        { name: "Logical Reasoning", fullMarks: 100, passMarks: 40, marks: 76 },
      ],
    },
    {
      symbolNumber: "1003",
      studentName: "Rohan Thapa",
      program: "BHM",
      examSession: "00af42d3-1859-40de-8cc5-dec0e1c320a4",
      subjects: [
        { name: "English", fullMarks: 100, passMarks: 40, marks: 35 },
        { name: "Mathematics", fullMarks: 100, passMarks: 40, marks: 55 },
        { name: "General Knowledge", fullMarks: 100, passMarks: 40, marks: 62 },
        { name: "Logical Reasoning", fullMarks: 100, passMarks: 40, marks: 48 },
        {
          name: "Hospitality Aptitude",
          fullMarks: 100,
          passMarks: 40,
          marks: 71,
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(null);
    setError("");
    setSubmitted(true);

    const foundResult = dummyResults.find(
      (student) =>
        student.symbolNumber.toLowerCase() ===
          symbolNumber.trim().toLowerCase() &&
        student.examSession === examSession,
    );

    if (!foundResult) {
      setError(
        "No dummy result found for this symbol number. Try 1001, 1002, or 1003.",
      );
      return;
    }

    const totalMarks = foundResult.subjects.reduce(
      (sum, subject) => sum + subject.marks,
      0,
    );

    const fullMarks = foundResult.subjects.reduce(
      (sum, subject) => sum + subject.fullMarks,
      0,
    );

    const passed = foundResult.subjects.every(
      (subject) => subject.marks >= subject.passMarks,
    );

    const percentage = (totalMarks / fullMarks) * 100;

    let grade = "F";
    if (passed) {
      if (percentage >= 80) grade = "A";
      else if (percentage >= 70) grade = "B+";
      else if (percentage >= 60) grade = "B";
      else if (percentage >= 50) grade = "C+";
      else if (percentage >= 40) grade = "C";
    }

    setResult({
      ...foundResult,
      totalMarks,
      fullMarks,
      percentage: percentage.toFixed(2),
      grade,
      status: passed ? "PASS" : "FAIL",
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="grow font-sans">
      <div className="w-full bg-gradient-to-br from-stone-50 via-blue-50/20 to-emerald-50/20 min-h-screen pb-20">
        {/* Hero Banner */}
        <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 8, 0],
                      scale: [1, 1.05, 1],
                      x: [0, -10, 0],
                      y: [0, 10, 0],
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
                  : { rotate: [45, 55, 45], y: [0, -10, 0] }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8] rotate-45"
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: shouldReduceMotion ? 0 : 0.18 },
              },
            }}
            className="max-w-7xl mx-auto px-6 relative z-10 text-left"
          >
            <motion.div
              variants={fadeUp}
              className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-stone-300">Exam Results</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words"
            >
              Exam Results
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-sm sm:text-base text-stone-400 font-medium max-w-2xl mt-3 leading-relaxed"
            >
              Check your final examination and entrance test results.
            </motion.p>
          </motion.div>
        </section>

        {/* Result Lookup Form */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden mb-8 border border-white/60"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#075F6C]" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2 text-center tracking-tight">
                Result Lookup Portal
              </h2>
              <p className="text-center text-sm sm:text-base text-stone-500 mb-6 sm:mb-8">
                Enter your symbol number to view your results
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div>
                  <label
                    htmlFor="examSession"
                    className="block text-sm font-semibold text-stone-700 mb-3"
                  >
                    Select Exam Session
                  </label>
                  <select
                    id="examSession"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-stone-100 focus:border-[#075F6C] focus:ring-4 focus:ring-[#075F6C]/10 transition-all outline-none bg-white text-stone-800"
                    required
                    value={examSession}
                    onChange={(e) => {
                      setExamSession(e.target.value);
                      setResult(null);
                      setError("");
                    }}
                  >
                    <option value="" disabled>
                      -- Select an exam session --
                    </option>
                    <option value="00af42d3-1859-40de-8cc5-dec0e1c320a4">
                      Scholarship Entrance Result (BCA, BHM, BBA, BITM, BIT,
                      BBM, BSW, BBS)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="symbolNumber"
                    className="block text-sm font-semibold text-stone-700 mb-3"
                  >
                    Symbol Number
                  </label>
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-400" />
                    <input
                      id="symbolNumber"
                      className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-stone-100 focus:border-[#075F6C] focus:ring-4 focus:ring-[#075F6C]/10 transition-all outline-none bg-white text-lg text-stone-800"
                      placeholder="Try 1001, 1002, or 1003"
                      required
                      type="text"
                      value={symbolNumber}
                      onChange={(e) => {
                        setSymbolNumber(e.target.value);
                        setResult(null);
                        setError("");
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!examSession || !symbolNumber.trim()}
                  className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#075F6C] to-emerald-600 hover:from-[#054a55] hover:to-emerald-700 text-white font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-[#075F6C]/20 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Search className="w-6 h-6" />
                  Check Result
                </button>

                <p className="text-center text-xs text-stone-400">
                  Demo symbol numbers: 1001, 1002, 1003
                </p>
              </form>
            </div>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700"
                role="alert"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dummy Result */}
          <AnimatePresence mode="wait">
            {result && (
              <motion.section
                key={result.symbolNumber}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden"
                aria-live="polite"
              >
                <div className="bg-gradient-to-r from-[#075F6C] to-emerald-700 p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-emerald-100 mb-2">
                        Sample result · Demo only
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Examination Result
                      </h2>
                      <p className="text-sm text-emerald-100 mt-2">
                        Scholarship Entrance Examination
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-bold ${
                        result.status === "PASS"
                          ? "bg-white text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {result.status === "PASS" ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      {result.status}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
                      <p className="text-xs text-stone-500 mb-1">
                        Student Name
                      </p>
                      <p className="font-bold text-stone-900">
                        {result.studentName}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
                      <p className="text-xs text-stone-500 mb-1">
                        Symbol Number
                      </p>
                      <p className="font-bold text-stone-900">
                        {result.symbolNumber}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
                      <p className="text-xs text-stone-500 mb-1">Program</p>
                      <p className="font-bold text-stone-900">
                        {result.program}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
                      <p className="text-xs text-stone-500 mb-1">
                        Exam Session
                      </p>
                      <p className="font-bold text-stone-900">
                        Scholarship Entrance
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-4">
                    Subject-wise Marks
                  </h3>

                  <div className="overflow-x-auto rounded-xl border border-stone-200">
                    <table className="w-full min-w-[420px] text-sm text-left">
                      <thead className="bg-stone-100 text-stone-600">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Subject</th>
                          <th className="px-4 py-3 font-semibold text-center">
                            Full Marks
                          </th>
                          <th className="px-4 py-3 font-semibold text-center">
                            Pass Marks
                          </th>
                          <th className="px-4 py-3 font-semibold text-center">
                            Marks Obtained
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.subjects.map((subject) => (
                          <tr
                            key={subject.name}
                            className="border-t border-stone-100"
                          >
                            <td className="px-4 py-3 text-stone-800 font-medium">
                              {subject.name}
                            </td>
                            <td className="px-4 py-3 text-center text-stone-600">
                              {subject.fullMarks}
                            </td>
                            <td className="px-4 py-3 text-center text-stone-600">
                              {subject.passMarks}
                            </td>
                            <td
                              className={`px-4 py-3 text-center font-bold ${
                                subject.marks < subject.passMarks
                                  ? "text-red-600"
                                  : "text-emerald-700"
                              }`}
                            >
                              {subject.marks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-stone-50 border-t-2 border-stone-200">
                        <tr>
                          <td className="px-4 py-4 font-bold text-stone-900">
                            Total
                          </td>
                          <td className="px-4 py-4 text-center font-bold">
                            {result.fullMarks}
                          </td>
                          <td className="px-4 py-4 text-center">—</td>
                          <td className="px-4 py-4 text-center font-extrabold text-[#075F6C]">
                            {result.totalMarks}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                      <p className="text-xs text-blue-700 mb-2">Percentage</p>
                      <p className="text-2xl font-black text-blue-900">
                        {result.percentage}%
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100">
                      <p className="text-xs text-amber-700 mb-2">Grade</p>
                      <p className="text-2xl font-black text-amber-900">
                        {result.grade}
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <p className="text-xs text-emerald-700 mb-2">Status</p>
                      <p className="text-2xl font-black text-emerald-900">
                        {result.status}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-stone-400 leading-relaxed">
                    This is illustrative dummy data for UI testing only. It is
                    not an official examination result or admission decision.
                  </p>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Results;
