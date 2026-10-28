import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const collegeName = "Janjyoti Multiple Campus";
  const address = "Bhimdatt-18, Kanchanpur, Nepal";
  const established = "B.S. 2058";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect a backend or email service to send messages.
    console.log("Contact form data:", formData);

    setSubmitted(true);
  };

  return (
    <main className="grow font-sans">
      <div className="w-full min-h-screen bg-stone-50 space-y-12 pb-20">
        {/* Hero Banner Section */}
        <section className="relative w-full bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20 overflow-hidden border-b border-emerald-800/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-96 h-96 border-4 border-[#3898a8] rounded-full" />
            <div className="absolute -bottom-24 -left-12 w-80 h-80 border border-[#3898a8] rotate-45 transform" />
            <div className="absolute top-1/2 left-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#3898a8] to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3 flex items-center gap-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>

              <span className="text-stone-300">/</span>
              <span className="text-stone-300">Contact Us</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight max-w-4xl leading-tight break-words">
              Contact {collegeName}
            </h1>

            <p className="font-body text-sm sm:text-base text-stone-300 font-medium max-w-2xl mt-3 leading-relaxed">
              Get in touch with our campus for admission inquiries, academic
              information, and administrative support.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-200">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400" />
                {address}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-400" />
                Established {established}
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Map & Information */}
            <div className="space-y-6">
              {/* Location Map */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <iframe
                  title="Janjyoti Multiple Campus Location"
                  src="https://www.google.com/maps?q=Janjyoti%20Multiple%20Campus%2C%20Bhimdatt%2C%20Kanchanpur%2C%20Nepal&output=embed"
                  width="100%"
                  height="500"
                  className="rounded-xl shadow-lg border-0"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Address */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="text-[#075F6C] mt-1">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1">
                      Address
                    </h4>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="text-[#075F6C] mt-1">
                    <Phone size={20} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1">
                      Phone
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      099-418131 / 9858775085
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="text-[#075F6C] mt-1">
                    <Mail size={20} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1">
                      Email
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed break-words">
                      janjyoticampus2058@gmail.com
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="text-[#075F6C] mt-1">
                    <Clock size={20} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1">
                      Office Hours
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      08:00 AM - 05:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Campus Information */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <h3 className="font-bold text-stone-800 text-lg mb-3">
                  {collegeName}
                </h3>

                <div className="space-y-2 text-sm text-stone-600">
                  <p>
                    <span className="font-semibold text-stone-700">
                      Established:
                    </span>{" "}
                    {established}
                  </p>

                  <p>
                    <span className="font-semibold text-stone-700">
                      Location:
                    </span>{" "}
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm text-left h-fit">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#075F6C]">
                  Get In Touch
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mt-2">
                  Send a Message
                </h2>

                <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                  Have a question about admissions, academics, or campus
                  services? Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      placeholder="Your full name"
                      className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/20 outline-none transition"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-stone-700 mb-2"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      placeholder="you@example.com"
                      className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/20 outline-none transition"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/20 outline-none transition"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                {/* Department */}
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Department / Inquiry Type *
                  </label>

                  <select
                    id="department"
                    name="department"
                    className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/20 outline-none bg-white transition"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="admissions">Admissions</option>
                    <option value="academic">Academic</option>
                    <option value="admin">Administrative</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/20 outline-none resize-y transition"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl cursor-pointer font-bold text-white transition-all duration-300 bg-gradient-to-tr from-[#075F6C] via-[#054a55] to-[#0a0a0a] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send Message →
                </button>

                {/* Submission Feedback */}
                {submitted && (
                  <div
                    role="status"
                    className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm leading-relaxed"
                  >
                    Your form data was captured in the browser, but the message
                    has not been emailed. A backend or email service must be
                    connected to deliver messages to the campus.
                  </div>
                )}

                <p className="text-xs text-stone-400 text-center leading-relaxed">
                  Your information should be used only to respond to your
                  inquiry.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
