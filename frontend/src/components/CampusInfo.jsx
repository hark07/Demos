import React, { useEffect, useRef, useState } from "react";
import {
  FaBookOpen,
  FaUsers,
  FaAward,
  FaArrowTrendUp,
  FaGraduationCap,
  FaArrowRight,
  FaStar,
} from "react-icons/fa6";

import campus from "../assets/JMC_Image.png";

const stats = [
  {
    icon: FaBookOpen,
    value: 6,
    suffix: "+",
    label: "Academic Programs",
  },
  {
    icon: FaUsers,
    value: 10000,
    suffix: "+",
    label: "Enrolled Students",
  },
  {
    icon: FaAward,
    value: 95,
    suffix: "%",
    label: "Success & Achievement",
  },
  {
    icon: FaArrowTrendUp,
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
  },
];

const values = [
  {
    title: "Academic Excellence",
    description:
      "Providing quality education and meaningful learning opportunities to empower students for a successful future.",
  },
  {
    title: "A Vision for Tomorrow",
    description:
      "Inspiring capable, confident, and responsible graduates through innovation, dedication, and lifelong learning.",
  },
];

function CountUp({ end, suffix = "", duration = 2400, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

export default function CampusInfo() {
  const statisticsRef = useRef(null);
  const [statisticsVisible, setStatisticsVisible] = useState(false);

  useEffect(() => {
    const element = statisticsRef.current;

    if (!element) return;

    // Respect reduced-motion accessibility preferences.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setStatisticsVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setStatisticsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatisticsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="campus-info min-h-screen overflow-hidden bg-[#fffefe] text-slate-900">
      <style>{`
        .campus-info {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .campus-gradient-text {
          background: linear-gradient(
            100deg,
            #096c7c,
            #168ca5 48%,
            #37b2df
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .campus-fade-up {
          opacity: 0;
          animation: campusFadeUp 1.3s cubic-bezier(.2,.65,.3,1) forwards;
        }

        .campus-delay-1 { animation-delay: .15s; }
        .campus-delay-2 { animation-delay: .30s; }
        .campus-delay-3 { animation-delay: .45s; }
        .campus-delay-4 { animation-delay: .60s; }

        @keyframes campusFadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .campus-image-reveal {
          opacity: 0;
          animation: campusImageReveal 1.7s cubic-bezier(.2,.65,.3,1) .3s forwards;
        }

        @keyframes campusImageReveal {
          from {
            opacity: 0;
            transform: translate3d(22px, 12px, 0) scale(.97);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .campus-legacy-float {
          animation: campusLegacyFloat 6s ease-in-out 2s infinite;
        }

        @keyframes campusLegacyFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        .campus-orange-frame {
          animation: campusFrameFloat 8s ease-in-out infinite;
        }

        @keyframes campusFrameFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, 4px);
          }
        }

        .campus-stat {
          opacity: 0;
          animation: campusStatReveal 1.2s ease-out forwards;
        }

        @keyframes campusStatReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .campus-photo {
          transition:
            transform 1.4s cubic-bezier(.2,.65,.3,1),
            filter 1.4s ease;
        }

        .campus-photo-wrap:hover .campus-photo {
          transform: scale(1.035);
          filter: saturate(1.08);
        }

        @media (max-width: 640px) {
          .campus-orange-frame {
            border-left-width: 10px;
            border-top-width: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .campus-info *,
          .campus-info *::before,
          .campus-info *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

          .campus-fade-up,
          .campus-image-reveal,
          .campus-stat {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>

      <section className="relative mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 top-72 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

        {/* Main introduction */}
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* Left content */}
          <div className="relative z-10">
            <div className="campus-fade-up mb-5 flex items-center gap-2">
              <span className="h-[2px] w-5 bg-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-orange-600 sm:text-xs">
                A Legacy of 25 Years
              </span>
            </div>

            <h1 className="campus-fade-up campus-delay-1 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[54px] xl:text-[62px]">
              Welcome to
              <span className="campus-gradient-text mt-1 block">
                Janjyoti Multiple Campus
              </span>
            </h1>

            <div className="campus-fade-up campus-delay-2 mt-7 space-y-4 text-[13px] leading-[1.95] text-slate-600 sm:text-sm sm:leading-7">
              <p className="border-l-[3px] border-teal-600 pl-4">
                Janjyoti Multiple Campus celebrates 25 years of academic legacy,
                learning, and opportunity. We are committed to supporting
                students through quality higher education, encouraging
                intellectual curiosity, and helping them build a brighter
                future.
              </p>

              <p>
                Over the years, our campus has focused on creating an
                environment where students can develop knowledge, critical
                thinking, and confidence. We believe that education should
                empower every learner to discover their potential and prepare
                for the opportunities and challenges of a changing world.
              </p>

              <p>
                Through dedicated teaching, student-centered learning, and a
                commitment to continuous improvement, Janjyoti Multiple Campus
                strives to nurture responsible individuals who can contribute
                positively to their communities and society.
              </p>
            </div>

            {/* Campus values */}
            <div className="campus-fade-up campus-delay-3 mt-8 grid grid-cols-1 gap-5 border-t border-slate-200 pt-5 sm:grid-cols-2 sm:gap-7">
              {values.map((value) => (
                <article key={value.title} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  <div>
                    <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-900">
                      {value.title}
                    </h2>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to action */}
            <div className="campus-fade-up campus-delay-4 mt-7">
              <a
                href="#campus-statistics"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl"
              >
                Discover Our Campus
                <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right campus image */}
          <div className="campus-image-reveal relative mx-auto w-full max-w-[530px] lg:ml-auto">
            <div className="absolute -bottom-4 -right-3 left-4 top-4 rounded-2xl bg-slate-200/70 sm:-bottom-5 sm:-right-5 sm:left-5 sm:top-5" />

            <div className="campus-orange-frame absolute -left-3 -top-3 z-0 h-[47%] w-[70%] rounded-tl-[30px] border-l-[13px] border-t-[13px] border-orange-400 sm:-left-5 sm:-top-5 sm:border-l-[17px] sm:border-t-[17px]" />

            <div className="absolute -right-2 top-8 z-0 h-24 w-24 rotate-45 rounded-2xl bg-orange-100/70 sm:-right-4 sm:top-12 sm:h-32 sm:w-32" />

            <div className="campus-photo-wrap relative z-10 overflow-hidden rounded-2xl border-[7px] border-white bg-white shadow-[0_15px_45px_rgba(15,23,42,0.13)] sm:border-[9px]">
              <img
                src={campus}
                alt="Janjyoti Multiple Campus building"
                className="campus-photo aspect-[4/4.1] w-full object-cover object-center sm:aspect-[4/3.8] lg:aspect-[4/4.3]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                  <FaStar className="text-orange-300" />
                  Learning for a Better Tomorrow
                </div>
              </div>
            </div>

            {/* Floating 25-year badge */}
            <div className="campus-legacy-float absolute -left-3 top-5 z-20 rounded-xl bg-[#20252d] px-4 py-3 text-white shadow-xl shadow-slate-900/20 sm:-left-6 sm:top-8 sm:px-5 sm:py-4">
              <div className="text-2xl font-black leading-none tracking-tight text-orange-400 sm:text-3xl">
                25+
              </div>
              <div className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-wide text-slate-200 sm:text-[10px]">
                Years of
                <br />
                Academic Legacy
              </div>
            </div>

            <div className="absolute -bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-500 shadow-lg sm:right-12">
              <FaGraduationCap className="text-xl" />
            </div>
          </div>
        </div>

        {/* Animated statistics */}
        <div
          ref={statisticsRef}
          id="campus-statistics"
          className="relative z-10 mt-20 grid grid-cols-2 gap-x-4 gap-y-10 border-t border-slate-100 pt-10 sm:mt-24 sm:gap-x-8 sm:pt-12 lg:mt-28 lg:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="campus-stat flex flex-col items-center text-center"
                style={{
                  animationDelay: `${0.3 + index * 0.18}s`,
                }}
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f1f2] text-teal-800 transition-all duration-700 hover:scale-110 hover:bg-orange-100 hover:text-orange-600 sm:h-14 sm:w-14">
                  <Icon className="text-lg sm:text-xl" />
                </div>

                <div className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2400 + index * 200}
                    start={statisticsVisible}
                  />
                </div>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="campus-fade-up mt-16 text-center sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 sm:text-sm">
            25 Years of Inspiring Minds
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Building knowledge, character, and opportunities for generations.
          </p>
        </div>
      </section>
    </main>
  );
}
