import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaChartLine, FaRegClock, FaUsers, FaArrowRight } from "react-icons/fa";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden py-16 lg:py-28">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 filter blur-[80px] -z-10 animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-100/40 filter blur-[100px] -z-10 animate-float-delayed" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100 shadow-sm shadow-blue-100/50">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                24/7 White Label Support
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            >
              The Dedicated VoIP{" "}
              <span className="text-gradient font-display block sm:inline">Support Team</span>{" "}
              Behind High-Performing Telecom Providers
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants} 
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              24/7 white-label support, platform management, onboarding, troubleshooting and monitoring for telecom providers worldwide.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/book-demo" 
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-orange-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Demo
                <FaArrowRight size={14} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants} 
              className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-600"
            >
              <span className="flex items-center gap-2 text-slate-800">
                <FaCheckCircle className="text-blue-600 text-base" />
                99.99% Uptime Guarantee
              </span>
              <span className="flex items-center gap-2 text-slate-800">
                <FaCheckCircle className="text-blue-600 text-base" />
                24/7 Coverage
              </span>
              <span className="flex items-center gap-2 text-slate-800">
                <FaCheckCircle className="text-blue-600 text-base" />
                Certified Engineers
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Dashboard Mockup */}
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
          >
            {/* Glow backdrop behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-orange-500/10 filter blur-3xl opacity-60 rounded-3xl" />

            {/* Main Mockup Screen */}
            <div className="relative w-full max-w-[540px] bg-slate-900 rounded-[32px] p-6 shadow-2xl border border-slate-800/80 glow-effect overflow-hidden">
              
              {/* Header row with mock browser buttons */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                <div className="flex gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-widest uppercase bg-slate-800 px-3 py-1 rounded-md">
                  NOC Operations Active
                </div>
              </div>

              {/* Grid content inside mockup */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Active Tickets Card */}
                <motion.div 
                  className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 hover:bg-slate-800/60 transition"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium uppercase">Active Tickets</span>
                    <span className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <FaChartLine size={14} />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-white font-mono">14</h3>
                    <p className="text-xs text-green-400 font-medium flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      4 resolved this hour
                    </p>
                  </div>
                </motion.div>

                {/* Response Time Card */}
                <motion.div 
                  className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 hover:bg-slate-800/60 transition"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium uppercase">Response Time</span>
                    <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                      <FaRegClock size={14} />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-white font-mono">3 min</h3>
                    <p className="text-xs text-slate-400 mt-1">SLA target &lt; 15m</p>
                  </div>
                </motion.div>

                {/* Performance Chart / Platform Health */}
                <motion.div 
                  className="col-span-2 bg-slate-800/40 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 hover:bg-slate-800/60 transition"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xs text-slate-400 font-medium uppercase block">Platform Health</span>
                      <h4 className="text-lg font-bold text-white mt-0.5">99.99% Availability</h4>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                      Operational
                    </span>
                  </div>
                  
                  {/* Neon SVG Line Chart */}
                  <div className="h-28 w-full flex items-end relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 80 Q 50 60 100 70 T 200 40 T 300 20 T 400 30"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 0 80 Q 50 60 100 70 T 200 40 T 300 20 T 400 30 L 400 100 L 0 100 Z"
                        fill="url(#chartGlow)"
                      />
                      {/* Animated Node Circle */}
                      <motion.circle
                        cx="300"
                        cy="20"
                        r="5"
                        fill="#F97316"
                        stroke="#fff"
                        strokeWidth="1.5"
                        animate={{ r: [5, 8, 5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-800">
                    <span>00:00 UTC</span>
                    <span>08:00 UTC</span>
                    <span>16:00 UTC</span>
                  </div>
                </motion.div>

                {/* Online Engineers */}
                <motion.div 
                  className="col-span-2 bg-slate-800/40 backdrop-blur-md rounded-2xl p-4 border border-slate-700/50 hover:bg-slate-800/60 transition flex items-center justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-orange-400">
                      <FaUsers size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Online Engineers</h4>
                      <p className="text-xs text-slate-400">Certified VoIP specialists active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <span className="w-7 h-7 rounded-full bg-blue-600 border border-slate-900 flex items-center justify-center text-[9px] font-bold text-white">NS</span>
                      <span className="w-7 h-7 rounded-full bg-orange-500 border border-slate-900 flex items-center justify-center text-[9px] font-bold text-white">SS</span>
                      <span className="w-7 h-7 rounded-full bg-emerald-600 border border-slate-900 flex items-center justify-center text-[9px] font-bold text-white">3C</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </motion.div>

              </div>
              
              {/* Bottom glassmorphic overlay for a floating dashboard effect */}
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-blue-500/20 rounded-full filter blur-2xl" />
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-orange-500/10 rounded-full filter blur-2xl" />
            </div>

            {/* Micro Floating Card representing platform event */}
            <motion.div 
              className="absolute bottom-8 left-[-20px] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 w-56 z-10 hover:shadow-2xl transition"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Netsapiens Link</p>
                <p className="text-[10px] text-slate-400">Latency: 12ms (Normal)</p>
              </div>
            </motion.div>

            {/* Micro Floating Card 2 */}
            <motion.div 
              className="absolute top-8 right-[-20px] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 w-48 z-10 hover:shadow-2xl transition hidden sm:flex"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                <FaCheckCircle size={14} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Tier 3 Escalation</p>
                <p className="text-[10px] text-slate-400">0 cases pending SLA</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;