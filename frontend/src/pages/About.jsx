import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHistory, FaUsers } from "react-icons/fa";

function About() {
  const timelineEvents = [
    {
      year: "2019",
      title: "Company Founded",
      desc: "Launched by three senior telecom engineers who saw an urgent need for outsourced white-label VoIP support.",
    },
    {
      year: "2021",
      title: "24/7 Operations Scale-up",
      desc: "Expanded offices to cover global rotating shifts, guaranteeing sub-15 minute ticket responses under SLA.",
    },
    {
      year: "2023",
      title: "Unified Platform Certification",
      desc: "Established certified training pathways for Netsapiens, SkySwitch, Dialpad, 3CX, and Microsoft Teams.",
    },
    {
      year: "2025",
      title: "NOC Automation Suite v2",
      desc: "Deployed proprietary monitoring scripts to automatically capture and analyze carrier-level SIP registers.",
    },
  ];

  const team = [
    {
      name: "David Wright",
      role: "Co-Founder & CTO",
      avatar: "DW",
      color: "from-blue-500 to-indigo-600",
      bio: "15+ years engineering Netsapiens and asterisk PBX switch networks.",
    },
    {
      name: "Sophia Martinez",
      role: "Director of NOC Operations",
      avatar: "SM",
      color: "from-emerald-400 to-teal-500",
      bio: "Manages global rotating engineer shifts, dispatch, and SLA metrics.",
    },
    {
      name: "Arthur Chen",
      role: "Lead Tier 3 Engineer",
      avatar: "AC",
      color: "from-orange-400 to-red-500",
      bio: "Specializes in SBC policies, Powershell Direct Routing, and packet debugging.",
    },
    {
      name: "Liam O'Connor",
      role: "Client Onboarding Manager",
      avatar: "LO",
      color: "from-purple-500 to-pink-500",
      bio: "Builds custom handset templates, API webhooks, and call flows.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* About Hero */}
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
              OUR JOURNEY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            About VoIP Support Pro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Building the premier white-label technical support infrastructure that empowers telecom providers to scale globally.
          </motion.p>
        </div>
      </section>

      {/* Company Story & Mission/Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          
          {/* Story Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 font-display">
                Company Story
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                VoIP Support Pro was established in 2019 to solve a critical issue faced by growing telecom providers: the high cost and operational friction of staffing 24/7 technical support desks. We realized that hiring, training, and retaining skilled engineers for overnight shifts was dragging down carrier margins and distracting from sales.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We set out to build a highly optimized, fully certified Network Operations Center (NOC) that operates completely under our partners' white label. Today, we support over 50 service providers globally, managing tickets, SBC configs, and platform health with industry-leading SLA metrics.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/15 min-h-[300px] flex flex-col justify-between">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20%" cy="20%" r="50" fill="#fff" />
                  <circle cx="80%" cy="80%" r="70" fill="#fff" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-display mb-4">Enterprise Grade Standards</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We don't do generalist IT support. Our engineers are certified switch specialists who understand call routing dynamics, media latency, and session controllers inside out.
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-blue-200">
                100% white label operations
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 flex gap-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0 shadow-sm">
                <FaBullseye />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Our Mission</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  To provide telecom operators with seamless white-label technical support and engineering, allowing them to scale subscriber growth without increasing in-house staffing overhead.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 flex gap-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center text-xl shrink-0 shadow-sm">
                <FaEye />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Our Vision</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  To become the global backend engine behind high-performing voice operators, establishing the benchmark standard for outsourced UCaaS availability and incident triage.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block">
              <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
                TIMELINE
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Company Milestone Timeline
            </h2>
          </div>

          {/* Timeline Blocks */}
          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
            {timelineEvents.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                {/* Year Label (Absolute on left for desktop) */}
                <div className="hidden md:block absolute left-[-110px] top-0 text-right w-20 font-extrabold text-lg text-blue-600 font-display">
                  {item.year}
                </div>

                {/* Timeline dot node */}
                <div className="absolute left-[-6px] top-2.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-slate-50 shadow-sm" />

                {/* Mobile Year Badge */}
                <span className="inline-block md:hidden bg-blue-50 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded font-mono mb-2">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-2 max-w-xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Roster Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              PEOPLE Behind operations
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Our Leadership & Engineers
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Meet the certified telecom specialists responsible for maintaining your subscriber SLAs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between glow-border"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div>
                  {/* Initials Avatar Badge */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${member.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md mx-auto mb-6`}>
                    {member.avatar}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-semibold mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;