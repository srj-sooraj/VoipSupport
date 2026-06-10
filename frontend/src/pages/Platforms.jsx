import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaCheck } from "react-icons/fa";

function Platforms() {
  const platformsDetail = [
    {
      name: "Netsapiens Support",
      tagline: "Core tenant administration & API tuning",
      desc: "Comprehensive engineering for Netsapiens application servers. We configure call routing profiles, optimize multi-tenant domains, troubleshoot client register failures, and setup custom API hooks.",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-blue-600" fill="currentColor">
          <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="25" cy="25" r="6" />
          <path d="M 45 35 L 45 15 L 53 15 L 63 29 L 63 15 L 70 15 L 70 35 L 62 35 L 52 21 L 52 35 Z" />
          <text x="80" y="32" fontSize="19" fontWeight="800" fontFamily="system-ui">netsapiens</text>
        </svg>
      )
    },
    {
      name: "SkySwitch Support",
      tagline: "End-to-end device templates & portal setups",
      desc: "Specialized client onboarding and provisioning. We manage NDMS device templates, configure user seats, resolve SIP trunk latency spikes, build call flows, and triage portal feature questions.",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-sky-500" fill="currentColor">
          <path d="M15,28 C15,20 22,15 30,15 C38,15 41,20 43,23 C46,18 52,15 58,15 C68,15 72,23 72,30 C72,38 64,43 55,43 L15,43 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="35" cy="27" r="3" />
          <circle cx="53" cy="27" r="3" />
          <text x="85" y="33" fontSize="19" fontWeight="800" fontFamily="system-ui">SkySwitch</text>
        </svg>
      )
    },
    {
      name: "Dialpad Integration",
      tagline: "Feature setups & softphone diagnostics",
      desc: "Operational monitoring for Dialpad. We troubleshoot desktop client SIP registers, audit routing configurations, configure voice intelligence hooks, and resolve carrier trunking anomalies.",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-purple-600" fill="currentColor">
          <circle cx="15" cy="18" r="4" />
          <circle cx="27" cy="18" r="4" />
          <circle cx="39" cy="18" r="4" />
          <circle cx="15" cy="30" r="4" />
          <circle cx="27" cy="30" r="4" />
          <circle cx="39" cy="30" r="4" />
          <text x="56" y="32" fontSize="21" fontWeight="800" fontFamily="system-ui">dialpad</text>
        </svg>
      )
    },
    {
      name: "3CX Administration",
      tagline: "Cloud server tuning & bridges",
      desc: "Robust maintenance of on-premise and cloud-hosted 3CX PBX servers. We monitor firewall checker logs, verify SIP trunks, build call queues, and update Android/iOS softphone certificates.",
      logo: (
        <svg viewBox="0 0 140 50" className="h-10 w-auto text-cyan-600" fill="currentColor">
          <circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <text x="19" y="31" fontSize="18" fontWeight="900" fontFamily="system-ui">3</text>
          <text x="50" y="34" fontSize="26" fontWeight="900" fontFamily="system-ui" letterSpacing="1">CX</text>
        </svg>
      )
    },
    {
      name: "Teams Direct Routing",
      tagline: "SBC trunking & dialplan setups",
      desc: "Complete connectivity linking Teams users to SIP trunks. We manage certified SBCs, configure Powershell dialplans, map user numbers, and resolve voice latency in Teams clients.",
      logo: (
        <svg viewBox="0 0 200 50" className="h-10 w-auto text-indigo-600" fill="currentColor">
          <rect x="10" y="12" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 21 17 L 21 29 M 17 20 L 25 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text x="42" y="32" fontSize="18" fontWeight="800" fontFamily="system-ui">Teams</text>
        </svg>
      )
    },
    {
      name: "FreePBX Engineering",
      tagline: "Asterisk dialplans & module patches",
      desc: "Expert Asterisk engineering. We program custom dialplans, debug SIP/PJSIP trunk configurations, resolve echo issues, update system versions, and harden server firewall modules.",
      logo: (
        <svg viewBox="0 0 160 50" className="h-10 w-auto text-green-600" fill="currentColor">
          <path d="M12,25 Q12,12 25,12 T38,25 T25,38 T12,25" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M25,18 L25,32 M20,25 L30,25" stroke="currentColor" strokeWidth="2.5" />
          <text x="48" y="32" fontSize="20" fontWeight="800" fontFamily="system-ui">FreePBX</text>
        </svg>
      )
    }
  ];

  const coverageMatrix = [
    {
      area: "Endpoint Provisioning",
      t1: true,
      t2: true,
      t3: true,
    },
    {
      area: "SIP Trunk Registration",
      t1: true,
      t2: true,
      t3: true,
    },
    {
      area: "SBC Configuration & Policies",
      t1: false,
      t2: true,
      t3: true,
    },
    {
      area: "Custom API & Webhook Dev",
      t1: false,
      t2: false,
      t3: true,
    },
    {
      area: "Asterisk Code Level Debugging",
      t1: false,
      t2: false,
      t3: true,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-32 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] -z-10 animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full filter blur-[100px] -z-10 animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="bg-blue-900/50 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-800">
              INTEGRATION HUB
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            Supported Platforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Certified operations across the industry's most reliable UCaaS, cloud switches, and open-source PBX environments.
          </motion.p>
        </div>
      </section>

      {/* Detail Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {platformsDetail.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between glow-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
              >
                <div>
                  <div className="h-12 flex items-center mb-6">
                    {platform.logo}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {platform.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mt-1 mb-4">
                    {platform.tagline}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {platform.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Coverage Matrix */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              SLA CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Support Coverage Matrix
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              How our certified NOC engineers handle various operational tiers to keep your customer systems healthy.
            </p>
          </div>

          {/* Matrix table */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-800 border-b border-slate-200">
                    <th className="py-5 px-6 font-bold text-sm font-display">Service Task Area</th>
                    <th className="py-5 px-4 font-bold text-sm font-display text-center">Tier 1 Support</th>
                    <th className="py-5 px-4 font-bold text-sm font-display text-center">Tier 2 Support</th>
                    <th className="py-5 px-4 font-bold text-sm font-display text-center">Tier 3 Eng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
                  {coverageMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-5 px-6 font-semibold text-slate-800">{row.area}</td>
                      <td className="py-5 px-4 text-center">
                        {row.t1 ? <FaCheck className="inline text-emerald-500" /> : <span className="text-slate-300">-</span>}
                      </td>
                      <td className="py-5 px-4 text-center">
                        {row.t2 ? <FaCheck className="inline text-emerald-500" /> : <span className="text-slate-300">-</span>}
                      </td>
                      <td className="py-5 px-4 text-center">
                        {row.t3 ? <FaCheck className="inline text-emerald-500" /> : <span className="text-slate-300">-</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

export default Platforms;