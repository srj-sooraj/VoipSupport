import { motion } from "framer-motion";
import { FaTag, FaClock, FaAward, FaChartLine } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaTag />,
      title: "White Label Support",
      description: "We act as your in-house team. All tickets, chats, and calls are handled under your brand name, emails, and tools.",
      color: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-500/10"
    },
    {
      icon: <FaClock />,
      title: "24/7 Coverage",
      description: "Ensure round-the-clock peace of mind. We cover nights, weekends, and holidays so you never miss a client outage.",
      color: "from-emerald-400 to-teal-500",
      glow: "shadow-emerald-500/10"
    },
    {
      icon: <FaAward />,
      title: "Platform Expertise",
      description: "Get instant access to certified VoIP engineers. We possess deep tier-1 to tier-3 knowledge across major telecom systems.",
      color: "from-orange-400 to-red-500",
      glow: "shadow-orange-500/10"
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Operations",
      description: "Save on hiring, training, and overhead. Instantly expand or contract your support capacity as your subscriber base grows.",
      color: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/10"
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 18 } 
    },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-50/60 filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Trusted By VoIP Providers Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with us to deploy specialized NOC engineers directly under your brand name and capture enterprise customer trust.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start hover:-translate-y-1 glow-border"
            >
              {/* Icon container */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white text-lg shadow-lg ${item.glow} group-hover:scale-110 transition duration-300 mb-6`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;