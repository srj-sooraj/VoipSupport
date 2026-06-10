import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { FaEnvelope, FaClock, FaShieldAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Our team will contact you shortly.");
  };

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full filter blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="bg-blue-900/50 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-800">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Contact Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Have questions about SLA packages or integrations? Reach out and we'll reply shortly.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Business Info & Map Placeholder */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Info Cards */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Corporate Information
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our network dispatch engine and active monitoring lines are active 24/7/365. For pricing and partnerships, contact sales.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Support */}
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <FaEnvelope size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-display">Email Support</h4>
                    <p className="text-xs text-slate-500 mt-0.5">sales@voipsupportpro.com</p>
                    <p className="text-xs text-slate-500">support@voipsupportpro.com</p>
                  </div>
                </div>

                {/* Operations Hours */}
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <FaClock size={15} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-display">Coverage SLA</h4>
                    <p className="text-xs text-slate-500 mt-0.5">24/7/365 Active NOC Shifts</p>
                    <p className="text-xs text-slate-500">Response SLA guaranteed &lt; 15 minutes</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative bg-slate-900 rounded-[24px] p-6 border border-slate-800 shadow-md min-h-[240px] flex flex-col justify-between overflow-hidden">
                {/* Grid Overlay background simulating map blueprint */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>NOC MAIN COORDINATES</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE LINK
                  </span>
                </div>

                {/* Styled Vector Map Illustration */}
                <div className="relative z-10 py-6 flex items-center justify-center">
                  <svg viewBox="0 0 200 80" className="w-full h-20 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Simulated city grids or network links */}
                    <path d="M10,40 Q40,10 80,45 T140,20 T190,50" />
                    <path d="M10,20 Q60,60 110,30 T190,30" strokeDasharray="3 3" />
                    
                    {/* Location Pin Glow Nodes */}
                    <circle cx="80" cy="45" r="4" fill="#2563EB" stroke="#fff" strokeWidth="1" />
                    <circle cx="140" cy="20" r="4" fill="#F97316" stroke="#fff" strokeWidth="1" />
                    <motion.circle
                      cx="80" cy="45" r="10"
                      stroke="#2563EB"
                      strokeWidth="1"
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center gap-2 text-slate-300 text-xs">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div>
                    <span className="font-bold text-white block">Global Support NOC</span>
                    <span className="text-slate-400 text-[10px]">Austin, TX • London, UK • Bangalore, IN</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Send a Message
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6">
                Fill in the form and an account executive will contact you under 1 business hour.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="SLA Packages Quote Request"
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell us about your active VoIP platforms and subscriber seat size..."
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <FaPaperPlane size={12} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;