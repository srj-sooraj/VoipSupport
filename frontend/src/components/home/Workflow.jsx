import { motion } from "framer-motion";
import { FaFileInvoice, FaUserCog, FaSearchMinus, FaCheckDouble } from "react-icons/fa";

function Workflow() {
  const steps = [
    {
      num: "01",
      icon: <FaFileInvoice />,
      title: "Ticket Created",
      desc: "An end-user submits a request via Slack, email, or portal under your brand name.",
      color: "text-blue-600 bg-blue-50 border-blue-100",
      glow: "shadow-blue-500/10",
      illustration: (
        <svg viewBox="0 0 100 60" className="w-24 h-14 mx-auto text-blue-500/30" fill="currentColor">
          <rect x="10" y="5" width="80" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="20" x2="60" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="32" x2="80" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="25" cy="45" r="4" />
        </svg>
      )
    },
    {
      num: "02",
      icon: <FaUserCog />,
      title: "Engineer Assigned",
      desc: "Our dispatch engine routes the ticket to a certified VoIP platform expert in &lt; 3 minutes.",
      color: "text-orange-500 bg-orange-50 border-orange-100",
      glow: "shadow-orange-500/10",
      illustration: (
        <svg viewBox="0 0 100 60" className="w-24 h-14 mx-auto text-orange-500/30" fill="currentColor">
          <circle cx="50" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 30 45 A 20 20 0 0 1 70 45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="75" cy="15" r="3" />
          <line x1="65" y1="15" x2="85" y2="15" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      num: "03",
      icon: <FaSearchMinus />,
      title: "Investigation",
      desc: "Our engineer runs SIP ladders, inspects call traces, and checks latency logs directly.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
      glow: "shadow-indigo-500/10",
      illustration: (
        <svg viewBox="0 0 100 60" className="w-24 h-14 mx-auto text-indigo-500/30" fill="currentColor">
          <circle cx="45" cy="25" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="55" y1="35" x2="75" y2="55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="38" y1="25" x2="52" y2="25" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      num: "04",
      icon: <FaCheckDouble />,
      title: "Resolution",
      desc: "The root cause is resolved, the customer receives updates, and logs are documented.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      glow: "shadow-emerald-500/10",
      illustration: (
        <svg viewBox="0 0 100 60" className="w-24 h-14 mx-auto text-emerald-500/30" fill="currentColor">
          <rect x="10" y="5" width="80" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 35 30 L 45 40 L 65 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 18 } 
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-20 space-y-4">
          <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
            HOW WE WORK
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Support Workflow
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A highly optimized NOC workflow that turns raw alerts and ticket queues into rapid, documented engineering solutions.
          </p>
        </div>

        {/* Timeline Layout */}
        <motion.div 
          className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-emerald-500/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="group relative bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Timeline bubble node */}
              <div className={`w-14 h-14 rounded-full border-2 ${step.color} flex items-center justify-center text-xl shadow-md ${step.glow} group-hover:scale-110 transition duration-300 mb-6`}>
                {step.icon}
              </div>

              {/* Step counter badge */}
              <span className="absolute top-6 right-6 text-xs font-mono font-bold text-slate-400 bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 px-2 py-0.5 rounded transition">
                {step.num}
              </span>

              {/* Illustration element */}
              <div className="mb-4">
                {step.illustration}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Workflow;