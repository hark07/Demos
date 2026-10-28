import React, { useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaHandshake,
  FaGlobe,
  FaGraduationCap,
  FaDollarSign,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const featuresData = [
    {
      id: 1,
      title: "Modern Infrastructure",
      description:
        "A supportive learning environment with modern classrooms, learning resources, and facilities that encourage academic growth.",
      icon: FaBuilding,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 border border-amber-200",
    },

    {
      id: 2,
      title: "Scholarship Opportunities",
      description:
        "Explore available scholarship and financial support opportunities designed to help eligible students pursue higher education.",
      icon: FaDollarSign,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 border border-amber-200",
    },
    {
      id: 3,
      title: "25 Years of Excellence",
      description:
        "Building on 25 years of educational legacy, with a continuing commitment to knowledge, student development, and community growth.",
      icon: FaTrophy,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 border border-amber-200",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
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
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="why-campus relative w-full overflow-hidden bg-[#f8fafc] px-4 py-16 font-sans sm:px-6 sm:py-20 md:px-8 lg:py-24"
    >
      <style>{`
        .why-campus {
          --why-orange: #f97316;
          --why-navy: #0f172a;
          --why-teal: #044c54;
        }

        .why-fade-up {
          opacity: 0;
          animation: whyFadeUp 1.4s cubic-bezier(.2,.65,.3,1) forwards;
        }

        .why-heading-delay {
          animation-delay: .2s;
        }

        .why-description-delay {
          animation-delay: .4s;
        }

        @keyframes whyFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .why-feature-card {
          opacity: 0;
          animation: whyCardReveal 1.5s cubic-bezier(.2,.65,.3,1) forwards;
          transition:
            transform .9s cubic-bezier(.2,.65,.3,1),
            box-shadow .9s ease,
            border-color .7s ease;
        }

        @keyframes whyCardReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 35px, 0) scale(.985);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        .why-feature-card:hover {
          transform: translate3d(0, -9px, 0);
          border-color: rgba(249, 115, 22, .35);
          box-shadow: 0 25px 60px -20px rgba(15, 23, 42, .18);
        }

        .why-feature-icon {
          transition:
            transform .9s cubic-bezier(.2,.65,.3,1),
            box-shadow .8s ease,
            background-color .7s ease;
        }

        .why-feature-card:hover .why-feature-icon {
          transform: rotate(4deg) scale(1.1);
          box-shadow: 0 10px 22px rgba(249, 115, 22, .12);
        }

        .why-feature-arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition:
            opacity .6s ease,
            transform .6s cubic-bezier(.2,.65,.3,1);
        }

        .why-feature-card:hover .why-feature-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .why-bottom-line {
          transform-origin: center;
          animation: whyLineReveal 1.4s ease-out .4s both;
        }

        @keyframes whyLineReveal {
          from {
            opacity: 0;
            transform: scaleX(.1);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-campus *,
          .why-campus *::before,
          .why-campus *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

          .why-fade-up,
          .why-feature-card {
            opacity: 1;
            animation: none;
          }

          .why-feature-arrow {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="why-fade-up inline-flex items-center justify-center gap-2">
            <span className="h-[2px] w-5 bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 md:text-sm">
              Why Janjyoti Multiple Campus
            </span>

            <span className="h-[2px] w-5 bg-orange-500" />
          </div>

          <h2 className="why-fade-up why-heading-delay mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
            A Campus Built for
            <span className="mt-1 block text-[#044c54]">Your Future</span>
          </h2>

          <p className="why-fade-up why-description-delay mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover a learning environment focused on academic growth, personal
            development, and opportunities for a brighter future. Celebrating 25
            years of educational legacy.
          </p>

          <div className="why-bottom-line mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 text-left sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuresData.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="why-feature-card group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
                style={{
                  animationDelay: isVisible
                    ? `${0.2 + index * 0.18}s`
                    : `${0.2 + index * 0.18}s`,
                }}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`why-feature-icon mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
                  >
                    <Icon className={`text-xl ${item.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 flex items-center justify-between gap-3 text-lg font-bold leading-snug text-[#0f172a] transition-colors duration-700 group-hover:text-orange-600 sm:text-xl">
                    <span>{item.title}</span>

                    <FaArrowRight className="why-feature-arrow shrink-0 text-sm text-orange-500" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-7 text-gray-500 transition-colors duration-700 group-hover:text-gray-700">
                    {item.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="mt-7 flex items-center gap-2 border-t border-gray-100 pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400 transition-transform duration-700 group-hover:scale-150" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors duration-700 group-hover:text-[#044c54]">
                    Janjyoti Multiple Campus
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="why-fade-up mt-14 text-center sm:mt-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#044c54] sm:text-sm">
            25 Years of Inspiring Minds
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Together, we continue to create opportunities, nurture talent, and
            inspire the next generation of learners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
