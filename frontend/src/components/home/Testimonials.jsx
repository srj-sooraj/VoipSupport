import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO",
      company: "TelcoFlow",
      review:
        "Outstanding support and platform expertise. They integrated with our Netsapiens switch setup seamlessly and reduced our average resolution times under 10 minutes.",
      avatar: "SJ",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Marcus Vance",
      role: "VP Operations",
      company: "SkyNet Connect",
      review:
        "Their white-label support desk acts exactly like our own team. Our customers receive rapid answers, and our customer retention rates climbed to 98.7% this quarter.",
      avatar: "MV",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "UCaaS Solutions",
      review:
        "We were drowning in overnight ticket queues before partnering with VoIP Support Pro. Now, their 24/7 coverage takes care of everything, letting our internal team focus on core growth.",
      avatar: "DC",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-100">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Outer Container */}
        <div className="relative bg-slate-50 border border-slate-200/50 rounded-[32px] p-8 md:p-12 shadow-sm overflow-hidden min-h-[340px] flex flex-col justify-between">
          <div className="absolute top-8 left-8 text-blue-100 -z-0">
            <FaQuoteLeft size={72} />
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex gap-1 text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic">
                  "{testimonials[index].review}"
                </p>

                {/* Customer Details & Avatar */}
                <div className="flex items-center gap-4 pt-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[index].color} flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md`}>
                    {testimonials[index].avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {testimonials[index].role}, {testimonials[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200/50 relative z-10">
            
            {/* Pagination dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > index ? 1 : -1);
                    setIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === index ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm transition active:scale-95"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm transition active:scale-95"
                aria-label="Next slide"
              >
                <FaChevronRight size={14} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;