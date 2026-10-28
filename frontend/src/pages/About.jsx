import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaEye,
  FaBullseye,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaAward,
  FaCheck,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

import { assets, facultyData } from "../assets/assets";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [facultySubTab, setFacultySubTab] = useState(0);

  const collegeName = "Janjyoti Multiple Campus";
  const established = "B.S. 2058";
  const address = "Bhimdatt-18, Kanchanpur, Nepal";

  const tabs = [
    "Leadership",
    "Vision & Mission",
    "Faculty Staff",
    "Administrative Staff",
  ];

  const facultyCategories = [
    "BSW Faculty",
    "BHM Faculty",
    "BBM Faculty",
    "BCA Faculty",
    "BBS Faculty",
  ];

  const objectives = [
    {
      title: "Global Standards",
      description:
        "To establish an ideal education center that offers a learning environment of global standard in various programs.",
      icon: <FaGraduationCap />,
      color: "emerald",
    },
    {
      title: "Ethics & Discipline",
      description:
        "To nurture self-confidence, self-discipline, and ethics of the student, helping them become responsible citizens.",
      icon: <FaShieldAlt />,
      color: "amber",
    },
    {
      title: "Career Competence",
      description:
        "To prepare students for challenging and rewarding careers through quality and competence-based educational programs.",
      icon: <FaBriefcase />,
      color: "blue",
    },
    {
      title: "Proactive Graduates",
      description:
        "To produce proactive graduates with integrated personalities who can meet the changing needs of global employers.",
      icon: <FaAward />,
      color: "purple",
    },
    {
      title: "ICT & Research",
      description:
        "To integrate information and communication technology (ICT) and research-based education into modern learning facilities.",
      icon: <FaLaptopCode />,
      color: "indigo",
    },
    {
      title: "Faculty Development",
      description:
        "To promote research, scholarship, academic freedom, and continuous professional faculty development.",
      icon: <FaSearch />,
      color: "rose",
    },
  ];

  return (
    <main className="grow about-page">
      <style>{`
        .about-page {
          --slow-ease: cubic-bezier(0.22, 1, 0.36, 1);
          overflow-x: clip;
        }

        .about-hero {
          isolation: isolate;
        }

        .hero-content {
          animation: aboutHeroReveal 1.8s var(--slow-ease) both;
        }

        @keyframes aboutHeroReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .hero-circle {
          animation: aboutCircleFloat 16s ease-in-out infinite alternate;
        }

        .hero-square {
          animation: aboutSquareFloat 20s ease-in-out infinite alternate;
        }

        .hero-line {
          animation: aboutLineGlow 8s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes aboutCircleFloat {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(-35px, 25px, 0) scale(1.06); }
        }

        @keyframes aboutSquareFloat {
          from { transform: translate3d(0, 0, 0) rotate(45deg); }
          to { transform: translate3d(25px, -20px, 0) rotate(60deg); }
        }

        @keyframes aboutLineGlow {
          from { opacity: 0.35; transform: scaleX(0.8); }
          to { opacity: 1; transform: scaleX(1); }
        }

        .breadcrumb-link {
          transition: color 0.7s ease;
        }

        .breadcrumb-link:hover {
          color: white;
        }

        .about-tabs {
          isolation: isolate;
        }

        .tab-indicator {
          transition: transform 0.9s var(--slow-ease);
          will-change: transform;
        }

        .about-tab-content {
          animation: aboutContentReveal 1.25s var(--slow-ease) both;
          transform-origin: top center;
        }

        @keyframes aboutContentReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 24px, 0);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .leadership-card {
          animation: aboutCardReveal 1.5s var(--slow-ease) both;
          transition:
            box-shadow 1s ease,
            border-color 1s ease,
            transform 1s var(--slow-ease);
        }

        .chairman-card {
          animation-delay: 0.08s;
        }

        .leadership-card:hover {
          transform: translate3d(0, -5px, 0);
          box-shadow: 0 24px 55px -35px rgba(4, 76, 84, 0.42);
          border-color: rgba(7, 95, 108, 0.25);
        }

        .leader-image {
          transition:
            transform 2.2s var(--slow-ease),
            filter 1.4s ease;
        }

        .leadership-card:hover .leader-image {
          transform: scale(1.045);
          filter: saturate(1.06);
        }

        @keyframes aboutCardReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .slow-card {
          animation: aboutCardReveal 1.5s var(--slow-ease) both;
          transition:
            transform 1s var(--slow-ease),
            box-shadow 1s ease,
            border-color 1s ease;
        }

        .slow-card:nth-child(1) { animation-delay: 0.1s; }
        .slow-card:nth-child(2) { animation-delay: 0.3s; }

        .slow-card:hover {
          transform: translate3d(0, -6px, 0);
          box-shadow: 0 25px 55px -35px rgba(4, 76, 84, 0.3);
          border-color: rgba(7, 95, 108, 0.25);
        }

        .icon-motion {
          transition:
            transform 1s var(--slow-ease),
            box-shadow 1s ease;
        }

        .slow-card:hover .icon-motion {
          transform: translate3d(0, -4px, 0) rotate(5deg);
          box-shadow: 0 12px 25px -15px rgba(7, 95, 108, 0.5);
        }

        .mission-goal {
          animation: aboutGoalReveal 1.2s var(--slow-ease) both;
        }

        .mission-goal:nth-child(2) { animation-delay: 0.12s; }
        .mission-goal:nth-child(3) { animation-delay: 0.24s; }
        .mission-goal:nth-child(4) { animation-delay: 0.36s; }

        @keyframes aboutGoalReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 12px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .objective-card {
          opacity: 0;
          animation: aboutObjectiveReveal 1.3s var(--slow-ease) forwards;
          animation-delay: calc(var(--card-index, 0) * 130ms);
          transition:
            transform 1s var(--slow-ease),
            box-shadow 1s ease,
            border-color 1s ease;
        }

        @keyframes aboutObjectiveReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .objective-card:hover {
          transform: translate3d(0, -5px, 0);
          box-shadow: 0 20px 40px -28px rgba(0, 0, 0, 0.25);
          border-color: rgba(7, 95, 108, 0.3);
        }

        .objective-icon {
          transition:
            transform 0.9s var(--slow-ease),
            border-radius 0.9s ease;
        }

        .objective-card:hover .objective-icon {
          transform: rotate(-7deg) scale(1.08);
          border-radius: 16px;
        }

        .objective-emerald { background: #ecfdf5; color: #059669; }
        .objective-amber { background: #fffbeb; color: #d97706; }
        .objective-blue { background: #eff6ff; color: #2563eb; }
        .objective-purple { background: #faf5ff; color: #9333ea; }
        .objective-indigo { background: #eef2ff; color: #4f46e5; }
        .objective-rose { background: #fff1f2; color: #e11d48; }

        .faculty-tab {
          transition:
            background-color 0.75s ease,
            color 0.75s ease,
            transform 0.75s var(--slow-ease),
            box-shadow 0.75s ease,
            border-color 0.75s ease;
        }

        .faculty-tab:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 8px 18px -12px rgba(4, 76, 84, 0.45);
        }

        .faculty-card {
          opacity: 0;
          animation: aboutFacultyReveal 1.5s var(--slow-ease) forwards;
          animation-delay: calc(var(--card-index, 0) * 110ms);
          transition:
            transform 1.1s var(--slow-ease),
            box-shadow 1.1s ease,
            border-color 1.1s ease;
        }

        @keyframes aboutFacultyReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .faculty-card:hover {
          transform: translate3d(0, -7px, 0);
          box-shadow: 0 24px 45px -28px rgba(4, 76, 84, 0.32);
          border-color: rgba(7, 95, 108, 0.3);
        }

        .faculty-image {
          transition:
            transform 2s var(--slow-ease),
            filter 1.4s ease;
        }

        .faculty-card:hover .faculty-image {
          transform: scale(1.07);
          filter: saturate(1.08);
        }

        .admin-card {
          animation: aboutCardReveal 1.5s var(--slow-ease) both;
          transition: box-shadow 1s ease, border-color 1s ease;
        }

        .admin-card:hover {
          box-shadow: 0 24px 55px -35px rgba(4, 76, 84, 0.3);
          border-color: rgba(7, 95, 108, 0.25);
        }

        .about-page button:focus-visible,
        .about-page a:focus-visible {
          outline: 2px solid #075f6c;
          outline-offset: 4px;
        }

        @media (max-width: 640px) {
          .hero-circle { animation-duration: 20s; }
          .hero-square { animation-duration: 24s; }

          .leadership-card:hover,
          .slow-card:hover,
          .objective-card:hover,
          .faculty-card:hover {
            transform: translate3d(0, -3px, 0);
          }

          .leader-image,
          .faculty-image {
            transition-duration: 1.5s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
            filter: none !important;
          }

          .about-page .objective-card,
          .about-page .faculty-card {
            opacity: 1;
          }
        }
      `}</style>

      <div className="w-full bg-stone-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="about-hero relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="hero-circle absolute -top-12 -right-12 w-96 h-96 border-4 border-[#3898a8] rounded-full" />
            <div className="hero-square absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8] rotate-45" />
            <div className="hero-line absolute top-1/2 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#3898a8] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left hero-content">
            <div className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="text-stone-300">/</span>
              <span className="text-stone-300">About Our Institution</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words">
              About {collegeName}
            </h1>

            <p className="font-body text-sm sm:text-base text-stone-300 font-medium max-w-2xl mt-3 leading-relaxed">
              Building futures through quality education, knowledge, and
              service.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-xs sm:text-sm text-stone-200">
              <span className="flex items-center gap-2">
                <FaGraduationCap className="text-emerald-400" />
                Established {established}
              </span>
              <span className="flex items-center gap-2">
                <FaSearch className="text-emerald-400" />
                {address}
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-3 sm:px-6 mt-12 text-left">
          {/* Main Tabs */}
          <div className="w-full overflow-x-auto scrollbar-none">
            <div
              className="about-tabs inline-flex min-w-max bg-stone-200/60 p-1.5 gap-1 rounded-2xl border border-stone-200/60 relative"
              role="tablist"
              aria-label="About institution sections"
            >
              <div
                className="tab-indicator absolute top-1.5 bottom-1.5 bg-white shadow-md rounded-xl pointer-events-none"
                style={{
                  width: "124px",
                  transform: `translateX(${activeTab * 130 + 6}px)`,
                }}
              />

              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  id={`about-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls={`about-panel-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={`relative z-10 font-heading font-bold cursor-pointer text-[10px] sm:text-xs md:text-sm px-2 md:px-4 lg:px-6 h-8 md:h-9 whitespace-nowrap transition-colors duration-500 ${
                    activeTab === index
                      ? "text-[#044c54]"
                      : "text-stone-500 hover:text-[#044c54]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div
            key={activeTab}
            id={`about-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${activeTab}`}
            className="about-tab-content mt-10 w-full"
          >
            {/* LEADERSHIP */}
            {activeTab === 0 && (
              <div className="space-y-6">
                <article className="leadership-card chairman-card sm:p-8 md:p-10 mx-auto bg-white/70 border border-stone-200/60 rounded-3xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                    <div className="md:col-span-4 min-h-60 relative bg-stone-100 overflow-hidden">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt="College Chairperson"
                        className="leader-image w-full h-full min-h-72 object-cover object-top"
                        src={assets.Chairperson}
                      />
                    </div>

                    <div className="md:col-span-8 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white via-red-50/15 to-blue-900/10">
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-sky-600 uppercase">
                        College Chairperson
                      </span>
                      <h2 className="font-heading font-bold text-stone-800 text-xl md:text-2xl mt-1">
                        {collegeName}
                      </h2>
                      <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                        Welcome to {collegeName}, an institution committed to
                        providing quality education and creating opportunities
                        for academic and personal growth. We aim to build a
                        supportive learning environment where students develop
                        knowledge, practical skills, discipline, and confidence
                        to contribute meaningfully to society.
                      </p>
                      <div className="mt-5 space-y-2 text-sm text-stone-600">
                        <p>
                          <strong>Established:</strong> {established}
                        </p>
                        <p>
                          <strong>Address:</strong> {address}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <article className="leadership-card bg-white/70 border border-stone-200/60 rounded-3xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch h-full">
                      <div className="sm:col-span-5 h-64 sm:h-auto min-h-72 relative bg-stone-100 overflow-hidden">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Campus Chief"
                          className="leader-image w-full h-full min-h-72 object-cover object-center"
                          src={assets.CampusChief}
                        />
                      </div>
                      <div className="sm:col-span-7 p-6 flex flex-col justify-center bg-gradient-to-br from-white via-red-50/10 to-blue-900/10">
                        <span className="text-[10px] font-bold tracking-wider text-sky-600 uppercase">
                          Campus Chief
                        </span>
                        <h3 className="font-heading font-bold text-stone-800 text-base mt-1">
                          Academic Excellence
                        </h3>
                        <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                          Our campus works to provide a positive academic
                          environment, support students in their educational
                          journey, and encourage them to prepare for future
                          professional and personal challenges.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="leadership-card bg-white/70 border border-stone-200/60 rounded-3xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-12 items-stretch h-full">
                      <div className="sm:col-span-5 h-64 sm:h-auto min-h-72 relative bg-stone-100 overflow-hidden">
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Academic administration"
                          className="leader-image w-full h-full min-h-72 object-cover object-center"
                          src={assets.Administration}
                        />
                      </div>
                      <div className="sm:col-span-7 p-6 flex flex-col justify-center bg-gradient-to-br from-white via-red-50/10 to-blue-900/10">
                        <span className="text-[10px] font-bold tracking-wider text-sky-600 uppercase">
                          Academic Administration
                        </span>
                        <h3 className="font-heading font-bold text-stone-800 text-base mt-1">
                          Student Development
                        </h3>
                        <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                          We encourage learning, research, practical experience,
                          and student participation to support academic
                          achievement and the overall development of every
                          learner.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            )}

            {/* VISION & MISSION */}
            {activeTab === 1 && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <article className="slow-card bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200/60 flex flex-col justify-between">
                    <div>
                      <div className="icon-motion w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 text-xl">
                        <FaEye />
                      </div>
                      <h2 className="text-2xl font-black text-stone-800 mb-4">
                        Our Vision
                      </h2>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        To establish {collegeName} as a center of academic
                        excellence by providing quality education and preparing
                        capable, responsible, and globally competent human
                        resources who can contribute to society.
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-stone-100">
                      <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase">
                        JANJYOTI • EMPOWERING FUTURES
                      </span>
                    </div>
                  </article>

                  <article className="slow-card bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-200/60">
                    <div className="icon-motion w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 mb-6 text-xl">
                      <FaBullseye />
                    </div>
                    <h2 className="text-2xl font-black text-stone-800 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      To provide accessible and excellent educational
                      opportunities that respond to community needs and prepare
                      students to meet economic, social, and professional
                      challenges.
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                        Core Institutional Goals
                      </h4>
                      {[
                        "Strengthen teaching and learning through quality education and a supportive academic environment.",
                        "Develop capable human resources by nurturing the potential of every student.",
                        "Promote academic excellence, responsible citizenship, and effective campus management.",
                      ].map((goal, index) => (
                        <div
                          key={index}
                          className="mission-goal flex items-start gap-3 text-sm text-stone-600"
                        >
                          <FaCheck className="text-rose-500 mt-1 shrink-0" />
                          <span>{goal}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>

                {/* Core Objectives */}
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <FaSearch className="text-[#075F6C]" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#075F6C]">
                      Core Objectives
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {objectives.map((objective, index) => (
                      <article
                        key={objective.title}
                        className="objective-card bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm flex items-start gap-4"
                        style={{ "--card-index": index }}
                      >
                        <div
                          className={`objective-icon objective-${objective.color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg`}
                        >
                          {objective.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-800 mb-1">
                            {objective.title}
                          </h4>
                          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                            {objective.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* FACULTY STAFF */}
            {activeTab === 2 && (
              <div className="space-y-8">
                <div className="flex flex-wrap gap-2">
                  {facultyCategories.map((category, index) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setFacultySubTab(index)}
                      aria-pressed={facultySubTab === index}
                      className={`faculty-tab px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer ${
                        facultySubTab === index
                          ? "bg-[#044c54] text-white"
                          : "bg-white text-stone-600 border border-stone-200/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div
                  key={facultySubTab}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {(facultyData[facultySubTab] || []).map((faculty, index) => (
                    <article
                      key={faculty.name}
                      className="faculty-card bg-white rounded-2xl p-5 border border-stone-200/60 shadow-sm flex flex-col items-center text-center group"
                      style={{ "--card-index": index }}
                    >
                      <div className="w-full h-64 rounded-xl overflow-hidden bg-stone-100 mb-4">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={faculty.img}
                          alt={faculty.name}
                          className="faculty-image w-full h-full object-cover object-top"
                        />
                      </div>
                      <h3 className="font-bold text-stone-800 text-base">
                        {faculty.name}
                      </h3>
                      <span className="text-xs font-black tracking-wider uppercase mt-1 text-[#044c54]">
                        {faculty.role}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* ADMINISTRATIVE STAFF */}
            {activeTab === 3 && (
              <article className="admin-card bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200/60 space-y-6">
                <h2 className="text-2xl font-bold font-heading text-stone-800">
                  Administrative Staff
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The administrative team at {collegeName} supports the
                  day-to-day operations of the campus and assists students,
                  guardians, and faculty members. The team aims to maintain
                  efficient administration and a welcoming academic environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                    <span className="text-xs uppercase tracking-widest font-bold text-stone-400">
                      Established
                    </span>
                    <p className="text-lg font-bold text-[#075F6C] mt-2">
                      {established}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                    <span className="text-xs uppercase tracking-widest font-bold text-stone-400">
                      Campus Address
                    </span>
                    <p className="text-lg font-bold text-[#075F6C] mt-2">
                      {address}
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
