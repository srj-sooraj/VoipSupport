import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowDown, FaServer, FaGlobe, FaBolt } from "react-icons/fa";

function AnimatedCounter({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse the value as a number
    const target = parseFloat(value);
    if (isNaN(target)) {
      setCount(value); // If not a number (like "24/7"), just set it
      return;
    }

    const isFloat = value.includes(".");
    let start = 0;
    const end = target;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = start + (end - start) * easeProgress;

      if (isFloat) {
        setCount(currentVal.toFixed(2));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value); // Make sure it ends exactly at target string
      }
    };

    requestAnimationFrame(updateCount);
  }, [value, isInView, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      value: "50",
      suffix: "%",
      title: "Lower Support Costs",
      description: "Optimize operations and save headcount budget.",
      icon: <FaArrowDown />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      value: "99.99",
      suffix: "%",
      title: "Platform Availability",
      description: "Continuous NOC tracking and proactive response.",
      icon: <FaServer />,
      color: "from-emerald-400 to-teal-600",
    },
    {
      value: "24/7",
      suffix: "",
      title: "Coverage",
      description: "Global team covering every time zone, holidays included.",
      icon: <FaGlobe />,
      color: "from-orange-400 to-red-500",
    },
    {
      value: "3",
      suffix: " Min",
      title: "Average Response Time",
      description: "Instantaneous triage and engineer assignment.",
      icon: <FaBolt />,
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 glow-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white text-lg shadow-lg shadow-blue-500/10 mb-6`}>
                {item.icon}
              </div>

              {/* Large Typography */}
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </h2>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;