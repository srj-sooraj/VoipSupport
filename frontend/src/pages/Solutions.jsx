import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";
import { motion } from "framer-motion";
import { FaHeadset, FaNetworkWired, FaShieldAlt, FaUsers, FaCheck, FaTimes } from "react-icons/fa";

function Solutions() {
  const solutions = [
    {
      icon: <FaHeadset />,
      title: "White Label Support Desk",
      desc: "Deploy a complete support team operating directly inside your ticketing platform. Under your brand name, our engineers resolve end-user queries via email, Slack, or portal desks.",
      color: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-500/10"
    },
    {
      icon: <FaNetworkWired />,
      title: "24/7 Carrier NOC Monitoring",
      desc: "Sleep soundly while our Network Operations Center tracks your switches, SIP latency, and register logs. We triage active incidents immediately, coordinating with carriers directly.",
      color: "from-emerald-400 to-teal-600",
      glow: "shadow-emerald-500/10"
    },
    {
      icon: <FaShieldAlt />,
      title: "VoIP Security & Fraud Mitigation",
      desc: "Protect your carrier margins. We configure rate limits, setup real-time IP blacklists, audit security setups, and track toll-call patterns to head off routing fraud.",
      color: "from-orange-400 to-red-500",
      glow: "shadow-orange-500/10"
    },
    {
      icon: <FaUsers />,
      title: "Staff Augmentation",
      desc: "Instantly add certified Netsapiens, SkySwitch, Dialpad, and 3CX engineers to your crew. Avoid recruitment fees, training costs, and high staff turnover.",
      color: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/10"
    }
  ];

  const comparison = [
    {
      metric: "Hiring & Training Budget",
      inHouse: "High ($80k+/yr per engineer + recruitment)",
      voipPro: "Fractional (Outsourced monthly SLA packages)",
      better: true,
    },
    {
      metric: "24/7/365 Rotations Coverage",
      inHouse: "Difficult (requires complex shift schedules)",
      voipPro: "Instant (Fully covered distributed global team)",
      better: true,
    },
    {
      metric: "Average SLA Response Speed",
      inHouse: "15m - 2h (dependent on current workload)",
      voipPro: "Under 3 minutes (Dedicated NOC dispatchers)",
      better: true,
    },
    {
      metric: "Platform Certification Breadth",
      inHouse: "Limited (individual engineer training silos)",
      voipPro: "Comprehensive (Netsapiens, SkySwitch, 3CX, Teams)",
      better: true,
    },
    {
      metric: "Night / Holiday SLA gaps",
      inHouse: "Frequent (high staff fatigue and callouts)",
      voipPro: "Zero (redundant global shifts cover all hours)",
      better: true,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Solutions Hero */}
      <section className="relative bg-slate-950 text-white py-32 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full filter blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="bg-blue-900/50 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-800">
              ENTERPRISE SOLUTIONS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            SaaS Telecom Support Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Tailored engineering support built to optimize availability, protect margins, and scale operations seamlessly.
          </motion.p>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 border border-slate-200/60 rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 glow-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white text-xl shadow-md mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              OPERATIONAL COMPARISON
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              In-House Staffing vs. Managed NOC
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Compare the costs, risks, and performance targets of running independent overnight shifts versus deploying VoIP Support Pro.
            </p>
          </div>

          {/* Comparison Cards Layout */}
          <div className="space-y-4">
            {comparison.map((row, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 grid md:grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="font-bold text-slate-900 text-sm md:text-base font-display">
                  {row.metric}
                </div>
                <div className="text-slate-500 text-xs md:text-sm flex items-center gap-2">
                  <FaTimes className="text-red-400 shrink-0" />
                  <span>{row.inHouse}</span>
                </div>
                <div className="text-slate-900 font-medium text-xs md:text-sm flex items-center gap-2 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50">
                  <FaCheck className="text-blue-600 shrink-0" />
                  <span>{row.voipPro}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

export default Solutions;