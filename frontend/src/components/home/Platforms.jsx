import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Platforms() {
  const platforms = [
    {
      name: "Netsapiens",
      desc: "Complete Tier 1-3 engineering, tenant setups, routing configuration, API integrations, and portal troubleshooting.",
      color: "hover:border-blue-500/50 hover:shadow-blue-500/5",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-slate-400 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor">
          <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="25" cy="25" r="6" />
          <path d="M 45 35 L 45 15 L 53 15 L 63 29 L 63 15 L 70 15 L 70 35 L 62 35 L 52 21 L 52 35 Z" />
          <text x="80" y="32" fontSize="19" fontWeight="800" fontFamily="system-ui">netsapiens</text>
        </svg>
      ),
    },
    {
      name: "SkySwitch",
      desc: "Provisioning management, portal administration, device templates, SIP trunk diagnostics, and user onboarding support.",
      color: "hover:border-sky-500/50 hover:shadow-sky-500/5",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-slate-400 group-hover:text-sky-600 transition-colors duration-300" fill="currentColor">
          <path d="M15,28 C15,20 22,15 30,15 C38,15 41,20 43,23 C46,18 52,15 58,15 C68,15 72,23 72,30 C72,38 64,43 55,43 L15,43 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="35" cy="27" r="3" />
          <circle cx="53" cy="27" r="3" />
          <text x="85" y="33" fontSize="19" fontWeight="800" fontFamily="system-ui">SkySwitch</text>
        </svg>
      ),
    },
    {
      name: "Dialpad",
      desc: "Custom integrations, softphone troubleshooting, call flow setups, speech-to-text configurations, and latency diagnostics.",
      color: "hover:border-purple-500/50 hover:shadow-purple-500/5",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-slate-400 group-hover:text-purple-600 transition-colors duration-300" fill="currentColor">
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
      name: "3CX",
      desc: "On-prem and cloud system deployment, active monitoring, bridge setups, SBC configuration, and softphone maintenance.",
      color: "hover:border-cyan-500/50 hover:shadow-cyan-500/5",
      logo: (
        <svg viewBox="0 0 140 50" className="h-10 w-auto text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" fill="currentColor">
          <circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <text x="19" y="31" fontSize="18" fontWeight="900" fontFamily="system-ui">3</text>
          <text x="50" y="34" fontSize="26" fontWeight="900" fontFamily="system-ui" letterSpacing="1">CX</text>
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      desc: "Direct Routing setups, SBC configurations (Audiocodes/Ribbon), Teams Admin Center management, and licensing triage.",
      color: "hover:border-indigo-500/50 hover:shadow-indigo-500/5",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" fill="currentColor">
          <rect x="10" y="12" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 21 17 L 21 29 M 17 20 L 25 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text x="42" y="32" fontSize="18" fontWeight="800" fontFamily="system-ui">Teams</text>
        </svg>
      ),
    },
    {
      name: "FreePBX",
      desc: "Asterisk dialplan engineering, custom modules, SIP trunk setups, IVR creation, security auditing, and updates management.",
      color: "hover:border-green-500/50 hover:shadow-green-500/5",
      logo: (
        <svg viewBox="0 0 160 50" className="h-10 w-auto text-slate-400 group-hover:text-green-600 transition-colors duration-300" fill="currentColor">
          <path d="M12,25 Q12,12 25,12 T38,25 T25,38 T12,25" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M25,18 L25,32 M20,25 L30,25" stroke="currentColor" strokeWidth="2.5" />
          <text x="48" y="32" fontSize="20" fontWeight="800" fontFamily="system-ui">FreePBX</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background glowing circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              SUPPORTED PLATFORMS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Platform Expertise Across Leading Providers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Our specialized engineers are fully certified across all major UCaaS and PBX ecosystems, providing deep tier-3 operations under your white label.
          </motion.p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={`group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${platform.color}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Brand Logo Container */}
                <div className="mb-6 h-12 flex items-center">
                  {platform.logo}
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {platform.desc}
                </p>
              </div>

              {/* Interaction Details */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <Link
                  to="/platforms"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 group-hover:text-blue-600 transition"
                >
                  Explore Coverage
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" size={10} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Platforms;