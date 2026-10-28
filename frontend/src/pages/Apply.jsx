import React, { useState } from "react";
import { Link } from "react-router-dom";

const Apply = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    program: "",
    faculty: "",
    previousGPA: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (step === 1) {
      const form = e.currentTarget.form;

      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }

    if (step === 2) {
      const form = e.currentTarget.form;

      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this handler to your backend to store applications.
    console.log("Admission application:", formData);

    alert(
      "Application form completed successfully! Please connect the form to the campus admission system to submit your application.",
    );
  };

  const inputClass =
    "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-[#075F6C] focus:ring-2 focus:ring-[#075F6C]/10";

  const labelClass = "mb-1.5 block text-xs font-bold text-stone-800";

  return (
    <main className="grow">
      <div className="min-h-screen w-full bg-stone-50 pb-20 font-sans">
        {/* Hero Header */}
        <div className="relative w-full overflow-hidden border-b border-emerald-800/20 bg-gradient-to-br from-[#075F6C] via-[#054a55] to-[#0a0a0a]/90 py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -right-12 -top-12 h-96 w-96 rounded-full border-4 border-[#3898a8]" />
            <div className="absolute -bottom-24 -left-12 h-80 w-80 rotate-45 transform border border-[#3898a8]" />
            <div className="absolute left-1/3 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#3898a8] to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-left">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400/80">
              <Link to="/" className="hover:underline">
                Home
              </Link>

              <span className="text-stone-300">/</span>

              <span className="text-stone-300">Apply for Admission</span>
            </div>

            <p className="mb-2 text-sm font-semibold text-emerald-300">
              Janjyoti Multiple Campus
            </p>

            <h1 className="relative max-w-4xl break-words font-heading text-3xl font-black leading-tight tracking-tight text-stone-100 sm:text-4xl md:text-5xl">
              Apply for Admission
            </h1>

            <p className="relative mt-3 max-w-2xl break-words font-body text-sm font-medium leading-relaxed text-stone-300 sm:text-base">
              Begin your academic journey with Janjyoti Multiple Campus.
              Complete the application form below to get started.
            </p>

            <p className="mt-2 text-sm text-stone-400">
              Bhimdatt, Kanchanpur, Nepal
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="mx-auto max-w-2xl px-6 py-12">
          {/* Step Indicator */}
          <ol className="mb-10 flex items-center justify-center gap-2 sm:gap-4">
            {[
              { number: 1, label: "Personal" },
              { number: 2, label: "Program" },
              { number: 3, label: "Review" },
            ].map((item, index) => (
              <li
                key={item.number}
                className="flex items-center gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      step === item.number
                        ? "bg-[#075F6C]/10 text-[#075F6C] ring-2 ring-[#075F6C]"
                        : step > item.number
                          ? "bg-[#075F6C] text-white"
                          : "bg-stone-200 text-stone-500"
                    }`}
                  >
                    {step > item.number ? "✓" : item.number}
                  </span>

                  <span
                    className={`hidden text-xs font-bold tracking-wide sm:block ${
                      step === item.number ? "text-stone-900" : "text-stone-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {index < 2 && (
                  <span className="h-px w-6 bg-stone-300 sm:w-10" />
                )}
              </li>
            ))}
          </ol>

          {/* Application Form */}
          <form onSubmit={handleSubmit}>
            {/* STEP 1: PERSONAL INFORMATION */}
            {step === 1 && (
              <div className="animate-fade-in space-y-5 text-left">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="e.g. Ram Bahadur Thapa"
                    className={inputClass}
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="98XXXXXXXX"
                      className={inputClass}
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Gender *</label>

                  <div className="flex flex-wrap gap-3">
                    {["male", "female", "other"].map((gender) => (
                      <label
                        key={gender}
                        className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm capitalize transition-colors ${
                          formData.gender === gender
                            ? "border-[#075F6C] bg-[#075F6C]/5 text-[#075F6C]"
                            : "border-stone-300 text-stone-600"
                        }`}
                      >
                        <input
                          className="accent-[#075F6C]"
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleChange}
                          required
                        />

                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className={labelClass}>
                    Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="Tole, Municipality, District"
                    className={`${inputClass} resize-none`}
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: PROGRAM INFORMATION */}
            {step === 2 && (
              <div className="animate-fade-in space-y-5 text-left">
                <div>
                  <label htmlFor="program" className={labelClass}>
                    Select Program *
                  </label>

                  <select
                    id="program"
                    name="program"
                    className={inputClass}
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose your program</option>
                    <option value="MBS">
                      Masters of Business Studies (MBS)
                    </option>
                    <option value="MA">Masters of Arts (MA)</option>
                    <option value="BCA">
                      Bachelor of Computer Applications (BCA)
                    </option>
                    <option value="BBS">
                      Bachelor of Business Studies (BBS)
                    </option>
                    <option value="BSW">Bachelor of Social Work (BSW)</option>
                    <option value="BA">Bachelor of Arts (BA)</option>
                    <option value="BEd">Bachelor of Education (B.Ed.)</option>
                    <option value="Other">Other</option>
                  </select>

                  <p className="mt-1.5 text-xs text-stone-500">
                    Confirm available programs with the campus before publishing
                    this form.
                  </p>
                </div>

                <div>
                  <label htmlFor="faculty" className={labelClass}>
                    Faculty / Stream
                  </label>

                  <select
                    id="faculty"
                    name="faculty"
                    className={inputClass}
                    value={formData.faculty}
                    onChange={handleChange}
                  >
                    <option value="">Select faculty / stream</option>
                    <option value="Management">Management</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Education">Education</option>
                    <option value="Science and Technology">
                      Science and Technology
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="previousGPA" className={labelClass}>
                    Previous Academic GPA or Percentage *
                  </label>

                  <input
                    id="previousGPA"
                    name="previousGPA"
                    type="text"
                    placeholder="e.g. 3.2 GPA or 75%"
                    className={inputClass}
                    value={formData.previousGPA}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="rounded-xl border border-[#075F6C]/15 bg-[#075F6C]/5 p-4">
                  <p className="text-sm font-semibold text-[#075F6C]">
                    Before proceeding
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Check that your selected program and academic details are
                    correct. Admission requirements may vary by program.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW INFORMATION */}
            {step === 3 && (
              <div className="animate-fade-in space-y-5 rounded-2xl border border-stone-200 bg-white p-6 text-left">
                <div className="mb-4 border-b border-stone-200 pb-3">
                  <h2 className="text-lg font-bold text-stone-900">
                    Review Your Application
                  </h2>

                  <p className="mt-1 text-sm text-stone-500">
                    Please check your information before submitting.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-stone-700">
                  {[
                    ["Full Name", formData.fullName],
                    ["Email", formData.email],
                    ["Phone", formData.phone],
                    ["Gender", formData.gender],
                    ["Address", formData.address],
                    ["Program", formData.program],
                    ["Faculty / Stream", formData.faculty],
                    ["Academic Score", formData.previousGPA],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 border-b border-stone-100 pb-2 sm:flex-row sm:justify-between sm:gap-4"
                    >
                      <span className="font-semibold text-stone-900">
                        {label}
                      </span>

                      <span className="break-words text-stone-600 sm:text-right">
                        {value || "Not provided"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-600">
                  By submitting, you confirm that the information you provided
                  is accurate to the best of your knowledge.
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="cursor-pointer rounded-lg px-5 py-2.5 text-sm font-bold text-stone-800 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer rounded-lg bg-[#075F6C] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#054a55]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>

          {/* Campus Information */}
          <div className="mt-10 border-t border-stone-200 pt-6 text-center">
            <p className="text-sm font-semibold text-stone-700">
              Janjyoti Multiple Campus
            </p>

            <p className="mt-1 text-sm text-stone-500">
              Bhimdatt, Kanchanpur, Nepal
            </p>

            <Link
              to="/contact"
              className="mt-3 inline-block text-sm font-semibold text-[#075F6C] hover:underline"
            >
              Contact the Campus
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Apply;
