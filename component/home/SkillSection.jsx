"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrbitingSkills from "../common/OrbitingSkills";


const skills = [
  "HTML / CSS / Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js / Next.js",
  "Node.js / Express.js",
  "MongoDB / Mongoose",
  "REST API Development",
  "Framer Motion Animations",
];

const SkillSection = () => {
  return (
    <div className="w-full section-padding-x text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A mix of frontend UI craftsmanship, backend logic, API architecture, and modern tooling.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Skill Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
         
  <OrbitingSkills />
          </motion.div>
       

        {/* RIGHT — Skill List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6">Technical Expertise</h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            I specialize in full-stack development using the MERN stack. I build modern,
            scalable applications with clean UI, animations, and optimized performance.
          </p>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                  scale: 1.03,
                  color: "#22d3ee",
                }}
                className="px-4 py-3 border border-white/10 rounded-lg text-gray-300 cursor-pointer bg-[#0c0c0c] hover:border-cyan-400/40 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SkillSection;
