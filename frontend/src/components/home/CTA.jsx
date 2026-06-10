import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      
      {/* Moving background glow blobs */}
      <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-600/20 filter blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-orange-600/10 filter blur-[120px] -z-10 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-[100px] -z-10" />

      {/* Subtle Vector Background Particles */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="2" fill="#fff" />
          <circle cx="85%" cy="30%" r="3" fill="#fff" />
          <circle cx="20%" cy="80%" r="1.5" fill="#fff" />
          <circle cx="75%" cy="75%" r="2" fill="#fff" />
          
          {/* Plus symbols representing particles */}
          <path d="M 40 40 L 40 50 M 35 45 L 45 45" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" transform="translate(100, 50)" />
          <path d="M 40 40 L 40 50 M 35 45 L 45 45" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" transform="translate(700, 150)" />
          <path d="M 40 40 L 40 50 M 35 45 L 45 45" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" transform="translate(300, 250)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-900/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Scale Seamlessly
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's Build Your Support Team
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Deploy dedicated, certified VoIP engineering staff behind your network brand and free your core resources to win more market share.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/book-demo"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Demo
            <FaArrowRight size={13} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/80 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaPhone size={12} className="text-slate-400" />
            Contact Sales
          </Link>
        </motion.div>

      </div>

    </section>
  );
}

export default CTA;