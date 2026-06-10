import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeadset, FaServer, FaTools, FaNetworkWired, FaUserCog, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHeadset />,
      title: "24/7 Technical Support",
      description: "Round-the-clock white-label desk support from certified Tier 1-3 VoIP engineers who represent your brand seamlessly.",
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/10",
    },
    {
      icon: <FaServer />,
      title: "Platform Monitoring",
      description: "Continuous tracking of network switches, SIP latency, and register logs to head off platform incidents before clients notice.",
      color: "from-emerald-400 to-teal-600",
      shadow: "shadow-emerald-500/10",
    },
    {
      icon: <FaTools />,
      title: "Troubleshooting",
      description: "Deep packet inspection, SIP ladder analyses, and RTP media debugging to isolate call quality and routing failure logs.",
      color: "from-orange-400 to-red-500",
      shadow: "shadow-orange-500/10",
    },
    {
      icon: <FaNetworkWired />,
      title: "Network Support",
      description: "Assistance with firewall configurations, SBC tuning, SD-WAN rules, and QoS setups to maintain crystal clear audio paths.",
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/10",
    },
    {
      icon: <FaUserCog />,
      title: "Customer Onboarding",
      description: "Assistance with system provisioning, device configuration templates, API hooks, and portal setups to speed up client turn-up times.",
      color: "from-amber-400 to-orange-500",
      shadow: "shadow-amber-500/10",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Management",
      description: "VoIP fraud prevention, IP blacklist automation, rate-limit policies, and encrypted SIP/SRTP security monitoring.",
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 85, damping: 18 } 
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-blue-50/50 filter blur-[80px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-slate-50/80 filter blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
              OUR SERVICES
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Expert VoIP Support Services
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive technical support and engineering solutions designed to accelerate growth for modern telecom and UCaaS providers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between glow-border"
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Modern Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white text-2xl shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300 mb-6`}>
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
              </div>

              {/* Action Link (Micro-interaction) */}
              <div className="pt-4 border-t border-slate-100/50 mt-auto flex">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
                >
                  Learn More
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" size={10} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;