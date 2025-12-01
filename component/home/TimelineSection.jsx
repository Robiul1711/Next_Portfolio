"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Senior MERN Stack Developer",
    company: "Freelance / Remote",
    description:
      "Building full-stack applications with React, Next.js, Node.js, and MongoDB. Focused on modern UI, API architecture, and performance optimization.",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "Self Projects & Collaborations",
    description:
      "Developed responsive UI, implemented animations, improved design systems, and worked on API integrations using React & Tailwind CSS.",
  },
  {
    year: "2023",
    title: "Learner & Junior Developer",
    company: "Personal Journey",
    description:
      "Started learning full-stack development, practiced building projects, mastered Git, JavaScript, and MERN fundamentals.",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full py-20 section-padding-x text-white">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Experience & Journey</h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A timeline of my growth, learning phases, and the professional path
          that shaped me as a MERN stack developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-white/10 ml-4 md:ml-10">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-14 ml-6"
          >
            {/* Dot */}
            <div className="absolute -left-[11px] w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_20px_6px_rgba(0,255,255,0.4)]"></div>

            {/* Year */}
            <h3 className="text-cyan-400 font-semibold text-lg">{item.year}</h3>

            {/* Title */}
            <h4 className="text-2xl font-bold mt-1">{item.title}</h4>

            {/* Company */}
            <p className="text-gray-400 text-sm">{item.company}</p>

            {/* Description */}
            <p className="text-gray-300 mt-3 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
