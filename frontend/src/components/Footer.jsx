import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoDotFill, GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import logo from "../assets/JMC_Logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academic" },
    { name: "Notices", href: "/notices" },
    { name: "Gallery", href: "/gallery" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  const academicPrograms = [
    { name: "Academic Programs", href: "/academic" },
    { name: "Masters", href: "/academic" },
    { name: "Undergraduate Programs", href: "/academic" },
    { name: "Higher Education", href: "/academic" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/jmc2058",
      icon: FaFacebookF,
      hoverClass: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
      hoverClass: "hover:bg-pink-600",
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
      hoverClass: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#075F6C] via-[#054a55] to-[#0a0a0a] text-stone-300 pt-14 sm:pt-16 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-b border-white/20 pb-10 sm:pb-12">
        {/* Column 1: Campus Information */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Janjyoti Multiple Campus Logo"
              className="w-18 h-18 object-cover rounded-full bg-transparent"
            />

            <div>
              <h3 className="font-bold text-lg text-white tracking-tight leading-tight">
                Janjyoti Multiple
              </h3>

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
                Campus
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-stone-300/80 max-w-sm">
            Janajyoti Multiple Campus, affiliated with Tribhuvan University, is
            committed to quality education, academic excellence, and student
            success.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/10 ${social.hoverClass} hover:border-transparent transition-all duration-300 group`}
                >
                  <Icon className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-5">
          <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-amber-400">
            Quick Links
          </h4>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-stone-300/80 hover:text-amber-400 transition-colors duration-200"
                  >
                    <GoDotFill className="text-stone-500 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Column 3: Academic Programs */}
        <div className="space-y-5">
          <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-amber-400">
            Academic Programs
          </h4>

          <ul className="flex flex-col gap-4 text-sm">
            {academicPrograms.map((program) => (
              <li key={program.name}>
                <a
                  href={program.href}
                  className="flex items-start gap-3 text-stone-300/80 hover:text-amber-400 transition-colors duration-200 group"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-500 group-hover:bg-amber-400 transition-colors shrink-0" />
                  <span>{program.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="space-y-5">
          <h4 className="font-bold text-xs uppercase tracking-[0.18em] text-amber-400">
            Contact Information
          </h4>

          <div className="flex flex-col gap-5 text-sm text-stone-300/80">
            {/* Address */}
            <div className="flex items-start gap-3">
              <GoLocation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />

              <p className="leading-relaxed">
                Kanchanpur, Mahendranagar, Nepal
              </p>
            </div>

            {/* Telephone */}
            <div className="flex items-start gap-3">
              <GoDeviceMobile className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />

              <a
                href="tel:1122334455"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Tel: 1122334455
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 min-w-0">
              <GoMail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />

              <a
                href="mailto:janjyoticampus@gmail.com"
                className="break-all hover:text-amber-400 transition-colors duration-200"
              >
                janjyoticampus2058@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Janjyoti Multiple Campus. All rights
          reserved.
        </p>

        <p className="text-[11px] text-stone-400 uppercase tracking-widest font-medium">
          Quality Education for a Better Future
        </p>
      </div>
    </footer>
  );
};

export default Footer;
