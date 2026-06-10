import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaClock, FaServer, FaUsers } from "react-icons/fa";

function GlobalPresence() {
  const [activeCountry, setActiveCountry] = useState("US");

  const countries = [
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      x: "22%",
      y: "36%",
      details: [
        "24/7 Support Available",
        "Certified VoIP Engineers",
        "White Label Support"
      ],
    },
    {
      code: "CA",
      name: "Canada",
      flag: "🇨🇦",
      x: "20%",
      y: "24%",
      details: [
        "24/7 Support Available",
        "Certified VoIP Engineers",
        "White Label Support"
      ],
    },
    {
      code: "GB",
      name: "United Kingdom",
      flag: "🇬🇧",
      x: "47%",
      y: "22%",
      details: [
        "24/7 Support Available",
        "Certified VoIP Engineers",
        "White Label Support"
      ],
    },
    {
      code: "IE",
      name: "Ireland",
      flag: "🇮🇪",
      x: "43%",
      y: "25%",
      details: [
        "24/7 Support Available",
        "Certified VoIP Engineers",
        "White Label Support"
      ],
    },
    {
      code: "IN",
      name: "India",
      flag: "🇮🇳",
      x: "72%",
      y: "50%",
      details: [
        "24/7 Support Available",
        "Certified VoIP Engineers",
        "White Label Support"
      ],
    },
  ];

  const stats = [
    { label: "24/7 Coverage", icon: <FaClock /> },
    { label: "5+ Countries", icon: <FaGlobe /> },
    { label: "99.99% Platform Availability", icon: <FaServer /> },
    { label: "Global Engineering Team", icon: <FaUsers /> },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100/80">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/40 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-orange-50/30 rounded-full filter blur-[90px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              GLOBAL OPERATIONS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Global Presence & Coverage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Supporting telecom providers and VoIP businesses across multiple regions with 24/7 engineering coverage and white-label support.
          </motion.p>
        </div>

        {/* Map & Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Container Column */}
          <div className="lg:col-span-7 relative bg-slate-50 border border-slate-200/50 rounded-[32px] p-6 shadow-sm overflow-hidden min-h-[300px] md:min-h-[420px] flex items-center justify-center">
            
            {/* World Map SVG Outline */}
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-auto text-slate-200/80 stroke-slate-300/60" 
              fill="none" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Simplified world continent outlines */}
              {/* North America */}
              <path d="M 120 100 Q 150 70 200 80 T 260 120 T 320 180 T 250 250 T 180 200 Z" fill="rgba(241, 245, 249, 0.5)" />
              <path d="M 230 60 L 260 80 L 280 60 Z" />
              {/* South America */}
              <path d="M 250 260 Q 280 300 320 340 T 350 440 T 300 450 T 250 350 T 230 280 Z" fill="rgba(241, 245, 249, 0.5)" />
              {/* Greenland */}
              <path d="M 330 40 Q 380 40 400 60 T 350 100 T 320 60 Z" fill="rgba(241, 245, 249, 0.5)" />
              {/* Europe & Africa */}
              <path d="M 450 120 Q 520 80 580 120 T 600 200 T 520 220 T 480 200 Z" fill="rgba(241, 245, 249, 0.5)" />
              <path d="M 480 220 Q 540 240 580 280 T 620 380 T 560 440 T 480 340 T 440 250 Z" fill="rgba(241, 245, 249, 0.5)" />
              {/* Asia & Australia */}
              <path d="M 580 120 Q 700 80 850 120 T 900 250 T 800 280 T 650 260 T 580 200 Z" fill="rgba(241, 245, 249, 0.5)" />
              <path d="M 780 320 Q 840 340 860 420 T 800 440 T 740 380 Z" fill="rgba(241, 245, 249, 0.5)" />
            </svg>

            {/* Glowing active connector lines mapping from US/UK/India */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full pointer-events-none z-10" fill="none">
              <defs>
                <linearGradient id="mapGlowLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {activeCountry === "US" && (
                <path d="M 220 180 Q 330 140 450 125" stroke="url(#mapGlowLine)" strokeWidth="2" strokeDasharray="5 5" />
              )}
              {activeCountry === "IN" && (
                <path d="M 720 250 Q 580 180 470 110" stroke="url(#mapGlowLine)" strokeWidth="2" strokeDasharray="5 5" />
              )}
              {activeCountry === "CA" && (
                <path d="M 200 120 Q 320 120 430 125" stroke="url(#mapGlowLine)" strokeWidth="2" strokeDasharray="5 5" />
              )}
            </svg>

            {/* Glowing Map Pins */}
            {countries.map((c) => (
              <button
                key={c.code}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none z-20 group"
                style={{ left: c.x, top: c.y }}
                onClick={() => setActiveCountry(c.code)}
                aria-label={`Select ${c.name}`}
              >
                {/* Outer ping pulse */}
                <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-75 -left-1 -top-1 transition-all ${
                  activeCountry === c.code 
                    ? "animate-ping bg-blue-500" 
                    : "group-hover:animate-ping bg-slate-400/50"
                }`} />
                {/* Inner marker node */}
                <span className={`relative block h-4 w-4 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                  activeCountry === c.code 
                    ? "bg-blue-600 scale-125" 
                    : "bg-slate-400 group-hover:bg-slate-600"
                }`} />
              </button>
            ))}

            {/* Overlay hint banner */}
            <div className="absolute bottom-4 left-6 text-[10px] font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              CLICK PINS TO VIEW REGIONAL COVERAGE DETAIL
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              {countries.map((c) => {
                if (c.code !== activeCountry) return null;
                return (
                  <motion.div
                    key={c.code}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 border border-slate-200/60 rounded-[32px] p-8 md:p-10 shadow-sm glow-border flex flex-col justify-between"
                  >
                    <div>
                      {/* Flag and Name Header */}
                      <div className="flex items-center gap-3.5 mb-6">
                        <span className="text-4xl shadow-sm filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
                          {c.flag}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 font-display">
                            {c.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100/50 uppercase mt-0.5 tracking-wider">
                            Active Node
                          </span>
                        </div>
                      </div>

                      {/* Detail list items */}
                      <ul className="space-y-4">
                        {c.details.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm font-semibold text-slate-600"
                          >
                            <FaCheckCircle className="text-blue-600 shrink-0 text-base" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/60 text-xs font-semibold text-slate-400 font-mono">
                      WHITE LABEL NETWORK DESK COORDINATED VIA SLA
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* Global Statistics Footer Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-100">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/40 hover:bg-slate-50/80 transition shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 font-display">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GlobalPresence;
