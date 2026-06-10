import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";
import { motion } from "framer-motion";
import { FaHeadset, FaServer, FaTools, FaNetworkWired, FaUserCog, FaShieldAlt, FaRegCheckCircle } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHeadset />,
      title: "24/7 White Label Support",
      description: "Round-the-clock technical desk help operating natively in your ticket platform under your brand.",
      color: "from-blue-500 to-indigo-600",
      details: ["Tier 1-3 escalation desks", "Slack, Email & Phone lines", "White-label representation", "Custom ticket SLAs"]
    },
    {
      icon: <FaServer />,
      title: "Active NOC Monitoring",
      description: "Continuous surveillance of switches, register latency, and VoIP trunks to prevent outages.",
      color: "from-emerald-400 to-teal-600",
      details: ["Real-time switch tracking", "Packet loss alerting", "Automated alert triages", "SLA incident management"]
    },
    {
      icon: <FaTools />,
      title: "Advanced Troubleshooting",
      description: "Rapid debugging of call routing failures, registration bugs, and media paths using packet tools.",
      color: "from-orange-400 to-red-500",
      details: ["SIP ladder trace analysis", "RTP media flow debugs", "DNS/SRV resolution checks", "SIP code diagnostics"]
    },
    {
      icon: <FaNetworkWired />,
      title: "Telecom Network Support",
      description: "Engineering assistance to optimize session border controllers (SBC) and host firewalls.",
      color: "from-purple-500 to-pink-500",
      details: ["SBC policy optimizations", "NAT traversal debugging", "Bandwidth & QoS tuning", "SIP ALG diagnostic audits"]
    },
    {
      icon: <FaUserCog />,
      title: "Customer Onboarding",
      description: "Accelerated subscriber transitions with dialplan programming and endpoint provisioning templates.",
      color: "from-amber-400 to-orange-500",
      details: ["Dialplan configurations", "IVR & call flow builders", "Auto-provisioning setups", "IP handset configuration templates"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Fraud Audit",
      description: "Mitigation of carrier toll fraud and rate limits using real-time blacklists and traffic analysis.",
      color: "from-cyan-400 to-blue-500",
      details: ["Toll fraud preventions", "SIP register rate-limits", "IP blacklist automations", "TLS/SRTP encryption setup"]
    },
  ];

  const benefits = [
    {
      title: "99.99% Network Availability",
      desc: "Our active surveillance alerts our NOC team immediately, maintaining high service levels."
    },
    {
      title: "Transparent Brand Alignment",
      desc: "Your customers receive elite-tier technical support while identifying our engineers as your in-house staff."
    },
    {
      title: "Hiring & Training Savings",
      desc: "Avoid the complex costs of staffing internal engineers across rotating night, weekend, and holiday shifts."
    },
    {
      title: "Certified Telecom Staff",
      desc: "Get instant access to engineers certified across Netsapiens, SkySwitch, 3CX, Teams, and asterisk PBX."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Services Hero */}
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
              OPERATIONS CATALOG
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            Our VoIP Support Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Deploy dedicated telecom engineering desks, active infrastructure tracking, and white-label incident response behind your brand.
          </motion.p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 glow-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white text-xl shadow-md mb-6`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 border-t border-slate-200/60 pt-4 mb-6">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <FaRegCheckCircle className="text-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              OPERATIONAL IMPACT
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Why Telecom Providers Outsource to Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3 font-display">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
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

export default Services;