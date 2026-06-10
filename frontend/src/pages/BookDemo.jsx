import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheck, FaAward, FaHourglassHalf, FaRegCommentDots } from "react-icons/fa";

function BookDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Received! A product specialist will email you to schedule a calendar invite.");
  };

  const demoCoverage = [
    "White-label ticketing integration demo",
    "Live Network Operations Center (NOC) dashboard tour",
    "SIP tracer and debugging tool walkthrough",
    "SLA package pricing and customization discussion",
  ];

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
              BOOK A SESSION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight font-display text-white"
          >
            Request a Technical Demo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            See how our managed NOC teams operate directly behind your brand to keep client switches healthy.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Trust stats and details */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  What to Expect in the Session
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  In this 20-minute product tour, a senior VoIP engineer will walk you through our operational setups and show how we interface with your team.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3">
                {demoCoverage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck size={9} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust Indicator Widgets */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">OPERATIONAL TRUST METRICS</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Metric 1 */}
                  <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl">
                    <div className="text-blue-600 mb-2">
                      <FaHourglassHalf size={15} />
                    </div>
                    <span className="block text-xl font-bold text-slate-900 font-display">&lt; 3 Min</span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Average Ticket Triage</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl">
                    <div className="text-orange-500 mb-2">
                      <FaAward size={15} />
                    </div>
                    <span className="block text-xl font-bold text-slate-900 font-display">100%</span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Certified Engineers</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Scheduler Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                  <FaCalendarAlt size={16} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Schedule Your Demo
                  </h3>
                  <p className="text-xs text-slate-500">Pick a time and our dispatcher will align an engineer.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Telecom Corp"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@telecomcorp.com"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                    <FaRegCommentDots />
                    VoIP Platform & Requirements
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="We use Netsapiens/SkySwitch and want to outsource tier-1 ticketing during night/weekend shifts..."
                    className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-sm shadow-md shadow-orange-500/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Request Demo Schedule
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

export default BookDemo;