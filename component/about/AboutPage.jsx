"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "@/public/images/profile.png"; // Change to your image

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white section-padding-x py-20">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          About Me
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          I am a passionate MERN Stack Developer focused on building clean,
          modern web applications with exceptional user experiences.
        </p>
      </motion.div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-cyan-500/20"
          >
            <Image
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-5">Who Am I?</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a full-stack MERN developer with experience in React, Node.js,
            Express, MongoDB, and Next.js. I love designing clean UI layouts and
            building robust, scalable systems.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            My development style focuses on performance, maintainability, and
            user-friendly design. I specialize in:
          </p>

          <ul className="text-gray-300 space-y-3">
            <motion.li
              whileHover={{ x: 10, color: "#22d3ee" }}
              className="flex items-center gap-3"
            >
              🚀 MERN Stack Development
            </motion.li>

            <motion.li
              whileHover={{ x: 10, color: "#22d3ee" }}
              className="flex items-center gap-3"
            >
              🎨 UI/UX & Responsive Design
            </motion.li>

            <motion.li
              whileHover={{ x: 10, color: "#22d3ee" }}
              className="flex items-center gap-3"
            >
              ⚡ Next.js + API Integration
            </motion.li>

            <motion.li
              whileHover={{ x: 10, color: "#22d3ee" }}
              className="flex items-center gap-3"
            >
              🔥 Animations with Framer Motion
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">

          {[
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Framer Motion",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(34, 211, 238, 0.1)",
              }}
              className="px-4 py-3 rounded-lg border border-white/10 text-gray-300 cursor-pointer hover:text-cyan-400"
            >
              {tech}
            </motion.div>
          ))}

        </div>
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
        <p className="text-gray-400 mb-6">
          I’m available for freelance work, collaborations, and remote roles.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Contact Me
        </motion.a>
      </motion.div>

    </div>
  );
}
