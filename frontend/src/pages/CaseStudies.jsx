import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";
import { motion } from "framer-motion";
import { FaChartBar, FaRegClock, FaSignal, FaArrowRight } from "react-icons/fa";

function CaseStudies() {
  const studies = [
    {
      metric: "50% Cost Savings",
      title: "Reducing Night Shift Staffing Overhead",
      partner: "Netsapiens Provider (12,000+ subscriber seats)",
      problem: "The client was spending over $18,000 per month keeping two full-time engineers on-call during overnight and weekend hours, resulting in low employee morale and high salary budgets.",
      solution: "VoIP Support Pro deployed a white-label Tier 1-3 helpdesk. We took over all overnight, weekend, and holiday coverage, integrating with their existing Jira Service Desk natively.",
      result: "Slashed monthly support payroll costs by 52%, while boosting weekend ticket SLA compliance rates to 100% with no staffing turnover.",
      quote: "VoIP Support Pro allowed us to expand our support hours without breaking our hiring budget. Their engineers are fast and very professional.",
      author: "Director of Ops, TelcoFlow",
      icon: <FaChartBar />,
      color: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-500/10"
    },
    {
      metric: "3-Min Response SLA",
      title: "Slashes Ticket Triage Delays Globally",
      partner: "SkySwitch reseller (8,500 subscriber seats)",
      problem: "Customer complaints were rising due to long ticket wait times. Average ticket response times hovered around 45 minutes during busy daytime operations.",
      solution: "We deployed a dedicated dispatch layer. Our active triage team monitors queues, assigning incoming calls and critical SIP issues to engineers in under 3 minutes.",
      result: "Reduced average ticket response times from 45 minutes to just 3 minutes, raising customer satisfaction scores (CSAT) from 78% to 96.5%.",
      quote: "Ticket wait times dropped to zero. Our customers are wowed by the speed of their white-label VoIP engineers.",
      author: "VP Support, SkyNet Connect",
      icon: <FaRegClock />,
      color: "from-orange-400 to-red-500",
      glow: "shadow-orange-500/10"
    },
    {
      metric: "99.99% Uptime Achieved",
      title: "Active NOC Monitoring Prevents Outage Cascade",
      partner: "UCaaS Carrier (22,000+ subscriber seats)",
      problem: "Frequent registration and DNS latency spikes went unnoticed until clients started calling in. Lack of active switch monitoring caused massive SLA refund penalties.",
      solution: "Installed custom NOC monitoring scripts tracking registrar register logs, active calls, and trunk latency, backed by immediate automated triaging.",
      result: "Detected and mitigated 14 carrier-level routing issues before client-facing impacts occurred, achieving 99.99% SLA availability levels.",
      quote: "Having 24/7 active eyes on our networks has saved us from multiple platform outages. Essential service for carrier brands.",
      author: "CTO, UCaaS Solutions",
      icon: <FaSignal />,
      color: "from-emerald-400 to-teal-600",
      glow: "shadow-emerald-500/10"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Case Studies Hero */}
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
              SUCCESS STORIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            Case Studies & Metrics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Real results showing how our managed support desks and NOC operations optimize availability and scale telecom providers.
          </motion.p>
        </div>
      </section>

      {/* Studies Listing */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-8 lg:gap-12 glow-border"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
            >
              
              {/* Left Column: Metric & Logo */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${study.color} flex items-center justify-center text-white text-xl shadow-md ${study.glow} mb-6`}>
                    {study.icon}
                  </div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                    Key Performance Metric
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                    {study.metric}
                  </h2>
                </div>

                <div className="text-xs font-semibold text-slate-500 font-mono">
                  {study.partner}
                </div>
              </div>

              {/* Right Column: Case brief & quote */}
              <div className="lg:col-span-8 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[11px] tracking-wider mb-2">The Challenge</h4>
                    <p className="text-slate-500 leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[11px] tracking-wider mb-2">The Solution</h4>
                    <p className="text-slate-500 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50 text-sm">
                  <h4 className="font-bold text-emerald-800 uppercase text-[11px] tracking-wider mb-1">Impact Result</h4>
                  <p className="text-emerald-700 leading-relaxed">{study.result}</p>
                </div>

                {/* Client mini-quote */}
                <div className="pt-4 border-t border-slate-200 text-sm italic text-slate-500 leading-relaxed">
                  "{study.quote}"
                  <span className="block mt-2 not-italic text-xs font-bold text-slate-700">
                    — {study.author}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

export default CaseStudies;