import { motion } from "framer-motion";

function TrustedBy() {
  const logos = [
    {
      name: "Netsapiens",
      svg: (
        <svg viewBox="0 0 200 50" className="h-9 w-auto" fill="currentColor">
          <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="25" cy="25" r="6" />
          <path d="M 45 35 L 45 15 L 53 15 L 63 29 L 63 15 L 70 15 L 70 35 L 62 35 L 52 21 L 52 35 Z" />
          <text x="80" y="32" fontSize="19" fontWeight="800" fontFamily="system-ui">netsapiens</text>
        </svg>
      ),
    },
    {
      name: "SkySwitch",
      svg: (
        <svg viewBox="0 0 200 50" className="h-9 w-auto" fill="currentColor">
          <path d="M15,28 C15,20 22,15 30,15 C38,15 41,20 43,23 C46,18 52,15 58,15 C68,15 72,23 72,30 C72,38 64,43 55,43 L15,43 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="35" cy="27" r="3" />
          <circle cx="53" cy="27" r="3" />
          <text x="85" y="33" fontSize="19" fontWeight="800" fontFamily="system-ui">SkySwitch</text>
        </svg>
      ),
    },
    {
      name: "Dialpad",
      svg: (
        <svg viewBox="0 0 200 50" className="h-9 w-auto" fill="currentColor">
          <circle cx="15" cy="18" r="4" />
          <circle cx="27" cy="18" r="4" />
          <circle cx="39" cy="18" r="4" />
          <circle cx="15" cy="30" r="4" />
          <circle cx="27" cy="30" r="4" />
          <circle cx="39" cy="30" r="4" />
          <text x="56" y="32" fontSize="21" fontWeight="800" fontFamily="system-ui">dialpad</text>
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      svg: (
        <svg viewBox="0 0 200 50" className="h-9 w-auto" fill="currentColor">
          {/* Teams icon shape */}
          <rect x="10" y="12" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 21 17 L 21 29 M 17 20 L 25 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text x="42" y="32" fontSize="18" fontWeight="800" fontFamily="system-ui">Teams</text>
        </svg>
      ),
    },
    {
      name: "3CX",
      svg: (
        <svg viewBox="0 0 140 50" className="h-9 w-auto" fill="currentColor">
          <circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <text x="19" y="31" fontSize="18" fontWeight="900" fontFamily="system-ui">3</text>
          <text x="50" y="34" fontSize="26" fontWeight="900" fontFamily="system-ui" letterSpacing="1">CX</text>
        </svg>
      ),
    },
    {
      name: "FreePBX",
      svg: (
        <svg viewBox="0 0 160 50" className="h-9 w-auto" fill="currentColor">
          {/* Phone outline & tree shape */}
          <path d="M12,25 Q12,12 25,12 T38,25 T25,38 T12,25" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M25,18 L25,32 M20,25 L30,25" stroke="currentColor" strokeWidth="2.5" />
          <text x="48" y="32" fontSize="20" fontWeight="800" fontFamily="system-ui">FreePBX</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          PLATFORM COMPATIBILITY & SUPPORT EXPERTISE
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((item, index) => (
            <motion.div
              key={index}
              className="text-slate-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {item.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;