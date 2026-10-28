import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaChevronRight } from "react-icons/fa";

import collegeImage from "../assets/JMC_Image.png";
import pic from "../assets/pic.jpg"
import img from "../assets/img.jpg"
import image from "../assets/bcaimage.jpg"

const slides = [
  {
    image: collegeImage,
    heading: (
      <>
        JANJYOTI
        <br />
        MULTIPLE CAMPUS
      </>
    ),
    description:
      "Excellence in undergraduate education through analytical thinking, professional competency, and ethical leadership.",
    buttonText: "Explore Academics",
    buttonLink: "/academic",
  },
  {
    image: pic,
    heading: (
      <>
        SHAPE YOUR
        <br />
        FUTURE WITH US
      </>
    ),
    description:
      "Discover quality education, innovative learning, and opportunities to develop your skills for tomorrow.",
    buttonText: "Discover Programs",
    buttonLink: "/academic",
  },
  {
    image: image,
    heading: (
      <>
        LEARN TODAY
        <br />
        LEAD TOMORROW
      </>
    ),
    description:
      "Build your knowledge, confidence, and leadership skills in a supportive academic environment.",
    buttonText: "About Our College",
    buttonLink: "/about",
  },
  {
    image: img,
    heading: (
      <>
        YOUR JOURNEY
        <br />
        STARTS HERE
      </>
    ),
    description:
      "Take the next step toward your goals with an educational experience designed to inspire and empower.",
    buttonText: "Apply Now",
    buttonLink: "/admission",
  },
];

const announcements = [
  "Welcome to Janjyoti Multiple Campuse",
  "Explore our academic programs",
  "Admissions and enrollment information",
  "Graduation Ceremony",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="w-full overflow-hidden bg-gray-950 text-white">
      {/* HERO AREA */}
      <div className="relative flex min-h-[560px] items-center justify-center sm:min-h-[620px] lg:min-h-[680px]">
        {/* BACKGROUND IMAGE */}
        <div
          key={`image-${activeSlide}`}
          className="hero-image absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${currentSlide.image}")`,
          }}
          aria-hidden="true"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 text-center sm:px-8 lg:px-12">
          {/* HEADING */}
          <h1
            key={`heading-${activeSlide}`}
            className="hero-fade-up mx-auto max-w-5xl font-serif text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]"
          >
            {currentSlide.heading}
          </h1>

          {/* DESCRIPTION */}
          <div
            key={`description-${activeSlide}`}
            className="hero-fade-up mx-auto mt-7 max-w-3xl border-l-2 border-cyan-400 py-1 pl-5 text-left sm:mt-10 sm:pl-8"
            style={{ animationDelay: "150ms" }}
          >
            <p className="text-base font-medium leading-7 text-gray-100 sm:text-lg sm:leading-8 md:text-xl">
              {currentSlide.description}
            </p>
          </div>

          {/* CTA BUTTON */}
          <div
            key={`button-${activeSlide}`}
            className="hero-fade-up mt-8 sm:mt-12"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to={currentSlide.buttonLink}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl sm:px-10 sm:text-base"
            >
              {currentSlide.buttonText}

              <FaChevronRight className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="mt-9 flex items-center justify-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={activeSlide === index}
                className={`h-2.5 rounded-full transition-all duration-700 ${
                  activeSlide === index
                    ? "w-10 bg-orange-500"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* LATEST NEWS TICKER */}
      <div className="relative z-20 flex min-h-14 items-center overflow-hidden border-t border-cyan-300/30 bg-[#08616b]">
        <div className="z-10 flex shrink-0 items-center gap-2 bg-[#08616b] px-4 py-4 font-bold text-white sm:px-6">
          <FaBell className="text-sm" />
          <span className="text-xs sm:text-sm">LATEST NEWS</span>
        </div>

        <div className="relative flex min-w-0 flex-1 overflow-hidden py-4">
          <div className="ticker-track flex w-max shrink-0 items-center">
            {[...announcements, ...announcements].map((announcement, index) => (
              <div
                key={`${announcement}-${index}`}
                className="flex shrink-0 items-center gap-5 px-6 text-sm font-semibold text-white sm:gap-8 sm:px-8 sm:text-base"
              >
                <FaBell className="shrink-0" />
                <span>{announcement}</span>
                <span className="text-cyan-200/60">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        .hero-image {
          animation: imageZoom 5s ease-in-out both;
          transition: opacity 1000ms ease-in-out;
        }

        @keyframes imageZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }

        .hero-fade-up {
          animation: heroFadeUp 1000ms ease-out both;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ticker-track {
          animation: tickerScroll 35s linear infinite;
          will-change: transform;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes tickerScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-fade-up,
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
