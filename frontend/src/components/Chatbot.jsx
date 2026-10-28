import React, { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaComments,
  FaPaperPlane,
  FaUser,
  FaMinus,
  FaGraduationCap,
} from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste! 🙏 Welcome to Janjyoti Multiple Campus. How can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const responseTimer = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (responseTimer.current) {
        clearTimeout(responseTimer.current);
      }
    };
  }, []);

  const getResponse = (message) => {
    const text = message.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|namaste|नमस्ते|नमस्कार)[!.,\s]*$/i.test(text)) {
      return "Namaste! 🙏 Welcome to Janjyoti Multiple Campus, Bhimdatta-18, Kanchanpur. What would you like to know?";
    }

    // Academic programs
    if (
      /\b(course|courses|program|programs|faculty|bachelor|degree|bca|bba|bsw|bhm|education)\b/i.test(
        text,
      ) ||
      text.includes("पढाइ") ||
      text.includes("कोर्स")
    ) {
      return "🎓 Thank you for your interest in Janjyoti Multiple Campus!\n\nFor accurate information about available academic programs, faculties, eligibility, and course duration, please visit the campus or contact the administration.\n\nYou can also explore the Academic section of our website if available.";
    }

    // Admissions
    if (
      /\b(admission|apply|application|enroll|enrollment|eligibility|entrance|admission form)\b/i.test(
        text,
      ) ||
      text.includes("भर्ना")
    ) {
      return "📝 Interested in joining Janjyoti Multiple Campus?\n\nPlease contact the campus administration to confirm current admission requirements, application procedures, entrance examinations, required documents, and deadlines.\n\nAdmission information may change each academic year.";
    }

    // Notices and examinations
    if (
      /\b(notice|notices|announcement|announcements|exam|exams|examination|routine|schedule|timetable)\b/i.test(
        text,
      ) ||
      text.includes("सूचना") ||
      text.includes("परीक्षा")
    ) {
      return "📢 Looking for campus notices or examination routines?\n\nPlease check the Notices section of the campus website or contact the administration for the latest official announcements and examination schedules.";
    }

    // Results
    if (
      /\b(result|results|marksheet|grade|grades|gpa|passed|pass list)\b/i.test(
        text,
      ) ||
      text.includes("नतिजा")
    ) {
      return "📄 To check examination results, visit the Results section of the campus website if available, or consult the relevant university's official results portal.\n\nFor help with a particular result, please contact the campus administration.";
    }

    // Fees and scholarships
    if (
      /\b(fee|fees|tuition|cost|price|payment|scholarship|scholarships|financial aid)\b/i.test(
        text,
      ) ||
      text.includes("शुल्क") ||
      text.includes("छात्रवृत्ति")
    ) {
      return "💰 For current tuition fees, payment schedules, and scholarship opportunities at Janjyoti Multiple Campus, please contact the campus administration.\n\nFees and scholarship eligibility depend on the program and current campus policies.";
    }

    // Contact information
    if (
      /\b(contact|phone|telephone|email|address|location|directions|map|reach)\b/i.test(
        text,
      ) ||
      text.includes("सम्पर्क") ||
      text.includes("ठेगाना")
    ) {
      return "📍 Janjyoti Multiple Campus\n\nAddress: Bhimdatta-18, Kanchanpur, Nepal.\n\nFor the official phone number, email address, and directions, please consult the campus's official website or administration.";
    }

    // Facilities
    if (
      /\b(facility|facilities|library|libraries|lab|labs|laboratory|hostel|transport|internet|classroom|canteen)\b/i.test(
        text,
      )
    ) {
      return "🏫 Would you like to know about campus facilities?\n\nPlease contact Janjyoti Multiple Campus to confirm the availability of its library, laboratories, classrooms, student services, and other facilities.";
    }

    // Campus identity
    if (
      /\b(about|campus|college|university|janjyoti|janjyoti multiple campus)\b/i.test(
        text,
      )
    ) {
      return "🎓 Welcome to Janjyoti Multiple Campus!\n\n📍 Location: Bhimdatta-18, Kanchanpur, Nepal.\n\nI can help guide you with questions about academic programs, admissions, examinations, results, fees, scholarships, and campus facilities.";
    }

    // Greetings and thanks
    if (/\b(thanks|thank you|thankyou|धन्यवाद)\b/i.test(text)) {
      return "You're welcome! 😊 Thank you for your interest in Janjyoti Multiple Campus. Feel free to ask another question.";
    }

    // Fallback
    return "😊 Thank you for your question!\n\nI can help guide you with:\n\n🎓 Academic programs\n📝 Admissions\n📢 Notices and exam routines\n📄 Examination results\n💰 Fees and scholarships\n🏫 Campus facilities\n📍 Campus location and contact information\n\nPlease ask me about any of these topics.";
  };

  const sendMessage = (e, customMessage) => {
    e?.preventDefault();

    const text = (customMessage ?? input).trim();

    if (!text || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text,
      },
    ]);

    setInput("");
    setIsTyping(true);

    responseTimer.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: getResponse(text),
        },
      ]);

      setIsTyping(false);
      responseTimer.current = null;
    }, 700);
  };

  const quickQuestions = [
    "Available courses",
    "Admission process",
    "Latest notices",
  ];

  return (
    <div className="fixed bottom-4 right-4 z-[9999] sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      {isOpen && (
        <section
          role="dialog"
          aria-label="Janjyoti Multiple Campus chatbot"
          className="mb-4 flex h-[min(600px,calc(100dvh-100px))] w-[calc(100vw-32px)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl sm:w-[380px]"
        >
          {/* Header */}
          <header className="flex items-center gap-3 bg-gradient-to-r from-[#075F6C] to-[#054a55] p-4 text-white">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15">
              <FaGraduationCap size={24} />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-sm font-bold sm:text-base">
                Janjyoti Campus Assistant
              </h2>

              <p className="mt-1 flex items-center gap-1.5 text-xs text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Campus Help Desk
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chatbot"
              className="rounded-full p-2 transition hover:bg-white/20"
            >
              <FaMinus />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-full p-2 transition hover:bg-white/20"
            >
              <FaTimes />
            </button>
          </header>

          {/* Welcome Banner */}
          <div className="border-b border-stone-100 bg-stone-50 px-4 py-3">
            <p className="text-sm font-semibold text-stone-800">
              How can we help you? 👋
            </p>

            <p className="mt-1 text-xs text-stone-500">
              Ask us about programs, admissions, and campus information.
            </p>
          </div>

          {/* Messages */}
          <div
            className="flex-1 space-y-4 overflow-y-auto bg-white p-4"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075F6C]/10 text-[#075F6C]">
                    <FaRobot />
                  </div>
                )}

                <div
                  className={`max-w-[82%] whitespace-pre-line break-words rounded-2xl px-3.5 py-3 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-[#075F6C] text-white"
                      : "rounded-bl-sm border border-stone-100 bg-stone-50 text-stone-700"
                  }`}
                >
                  {message.text}
                </div>

                {message.sender === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <FaUser size={13} />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#075F6C]/10 text-[#075F6C]">
                  <FaRobot />
                </div>

                <div
                  className="flex gap-1 rounded-xl bg-stone-100 px-4 py-3"
                  aria-label="Assistant is typing"
                >
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#075F6C]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#075F6C] [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#075F6C] [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-stone-100 px-3 py-3">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  disabled={isTyping}
                  onClick={() => sendMessage(null, question)}
                  className="rounded-full border border-[#075F6C]/20 px-3 py-2 text-xs font-medium text-[#075F6C] transition hover:bg-[#075F6C] hover:text-white disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Message Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-stone-100 bg-white p-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 p-1.5 focus-within:border-[#075F6C] focus-within:ring-2 focus-within:ring-[#075F6C]/10">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our campus..."
                aria-label="Type your message"
                maxLength={2000}
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-stone-800 outline-none placeholder:text-stone-400"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#075F6C] text-white transition hover:bg-[#054a55] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-stone-400">
              Janjyoti Multiple Campus · Kanchanpur, Nepal
            </p>
          </form>
        </section>
      )}

      {/* Floating Chat Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }}
        aria-label={isOpen ? "Close chat" : "Open campus chatbot"}
        aria-expanded={isOpen}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#075F6C] to-[#054a55] text-white shadow-xl shadow-[#075F6C]/30 transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#075F6C]/30 sm:h-16 sm:w-16"
      >
        {isOpen ? <FaTimes size={23} /> : <FaComments size={26} />}
      </button>
    </div>
  );
};

export default Chatbot;
