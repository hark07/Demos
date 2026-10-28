import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaCode, FaArrowRight } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const programsData = [
    {
      id: 1,
      code: "MBS",
      title: "Master of Business Studies (MBS)",
      description:
        "MBS TU is a postgraduate management program offered by Tribhuvan University, Nepal, focusing on business and management skills.",
      duration: "2 Years (4 Semesters)",
      icon: PiStudentFill,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 border border-amber-200",
      textColor: "text-amber-500",
      durationColor: "text-amber-600",
    },
    {
      id: 2,
      code: "MA",
      title: "Master of Arts (MA)",
      description:
        "MA stands for Master of Arts, a postgraduate degree focusing on humanities, social sciences, languages, and related subjects.",
      duration: "2 Years (4 Semesters)",
      icon: FaUsers,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-50 border border-rose-200",
      textColor: "text-rose-500",
      durationColor: "text-rose-600",
    },
    {
      id: 3,
      code: "BCA",
      title: "Bachelor of Computer Application (BCA)",
      description:
        "BCA is a 4-year undergraduate program focused on computer applications, programming, software development, and information technology.",
      duration: "4 Years (8 Semesters)",
      icon: FaCode,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50 border border-blue-200",
      textColor: "text-blue-600",
      durationColor: "text-blue-600",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="all-programs"
      className="programs-section relative w-full overflow-hidden bg-[#f1f3f6] px-4 py-16 font-sans sm:px-6 sm:py-20 md:px-8 lg:py-24"
    >
      <style>{`
        .programs-section {
          --program-teal: #044c54;
        }

        .programs-fade-up {
          opacity: 0;
          animation: programsFadeUp 1.4s cubic-bezier(.2,.65,.3,1) forwards;
        }

        .programs-header-delay {
          animation-delay: .15s;
        }

        .programs-button-delay {
          animation-delay: .4s;
        }

        @keyframes programsFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .programs-card {
          opacity: 0;
          animation: programsCardReveal 1.5s cubic-bezier(.2,.65,.3,1) forwards;
          transition:
            transform .8s cubic-bezier(.2,.65,.3,1),
            box-shadow .8s ease,
            border-color .6s ease;
          will-change: transform, opacity;
        }

        @keyframes programsCardReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0) scale(.985);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .programs-card:hover {
          transform: translate3d(0, -8px, 0);
          box-shadow: 0 24px 55px rgba(15, 23, 42, .09);
          border-color: rgba(4, 76, 84, .16);
        }

        .programs-icon {
          transition:
            transform .9s cubic-bezier(.2,.65,.3,1),
            box-shadow .8s ease;
        }

        .programs-card:hover .programs-icon {
          transform: rotate(-6deg) scale(1.09);
          box-shadow: 0 8px 22px rgba(15, 23, 42, .06);
        }

        .programs-arrow {
          transition: transform .7s cubic-bezier(.2,.65,.3,1);
        }

        .programs-card:hover .programs-arrow {
          transform: translateX(5px);
        }

        .programs-heading-line {
          transform-origin: left;
          animation: programsLineReveal 1.2s ease-out .5s both;
        }

        @keyframes programsLineReveal {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .programs-section *,
          .programs-section *::before,
          .programs-section *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
            will-change: auto !important;
          }import { Link } from 'react-router-dom';


          .programs-fade-up,
          .programs-card {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      {/* Soft background decorations */}
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className={`programs-fade-up mb-3 flex items-center gap-2 ${
                isVisible ? "" : ""
              }`}
            >
              <span className="h-[2px] w-6 bg-sky-500" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 sm:text-sm">
                Our Academic Programs
              </span>
            </div>

            <h2 className="programs-fade-up programs-header-delay max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#1e293b] sm:text-4xl lg:text-5xl">
              Explore Our
              <span className="mt-1 block text-[#044c54]">
                Undergraduate Degrees
              </span>
            </h2>

            <div className="programs-heading-line mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-teal-700" />
          </div>

          <a
            href="#all-programs"
            className="programs-fade-up programs-button-delay group inline-flex w-fit items-center justify-center gap-3 rounded-full border border-[#044c54]/25 bg-white/70 px-6 py-3 text-sm font-semibold text-[#044c54] shadow-sm backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-[#044c54] hover:bg-[#044c54] hover:text-white hover:shadow-lg"
          >
            <span>View All Programs</span>
            <FaArrowRight className="programs-arrow" />
          </a>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="programs-card group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
                style={{
                  animationDelay: isVisible
                    ? `${0.3 + index * 0.25}s`
                    : `${0.3 + index * 0.25}s`,
                }}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`programs-icon mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
                  >
                    <Icon className={`text-xl ${item.iconColor}`} />
                  </div>

                  {/* Program code */}
                  <span
                    className={`text-xs font-extrabold uppercase tracking-[0.16em] ${item.textColor}`}
                  >
                    {item.code}
                  </span>

                  {/* Program title */}
                  <h3 className="mt-3 mb-4 text-xl font-bold leading-snug text-[#1e293b] transition-colors duration-700 group-hover:text-[#044c54] sm:text-[22px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-7 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <div className="mb-5 h-px w-full bg-gray-100 transition-colors duration-700 group-hover:bg-teal-100" />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span
                        className={`text-sm font-bold ${item.durationColor}`}
                      >
                        {item.duration}
                      </span>

                      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                        Duration
                      </span>
                    </div>

                    <Link
                      to="/academic"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-[#044c54] transition-all duration-700 group-hover:bg-[#044c54] group-hover:text-white"
                    >
                      <FaArrowRight className="programs-arrow text-sm" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="programs-fade-up mt-12 text-center sm:mt-16">
          <p className="text-sm leading-7 text-gray-500">
            Discover your potential and take the next step toward your future
            with Janjyoti Multiple Campus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
