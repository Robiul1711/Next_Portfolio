"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "Mastering React Hook Form",
    description: "Build perfect forms with RHF + Zod validation.",
    date: "Jan 12, 2025",
    slug: "react-hook-form-guide",
    tag: "React",
    thumbnail: "/images/blog/rhf.jpg",
  },
  {
    title: "Best MERN Folder Structure",
    description: "Write professional, scalable MERN applications.",
    date: "Jan 5, 2025",
    slug: "mern-best-structure",
    tag: "MERN",
    thumbnail: "/images/blog/mern.jpg",
  },
  {
    title: "TanStack Query Full Guide",
    description: "Fetch, cache & manage API data like a professional.",
    date: "Dec 29, 2024",
    slug: "tanstack-guide",
    tag: "React",
    thumbnail: "/images/blog/tanstack.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="section-padding-x py-20 bg-black min-h-screen">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Blog & Insights
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Articles on React, MERN, UI animation, API architecture & modern frontend development.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="px-3 py-1 text-xs uppercase tracking-wide bg-cyan-500/10 text-cyan-400 rounded-full">
                {post.tag}
              </span>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-white mt-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {post.description}
              </p>

              <div className="text-gray-500 text-xs mt-4">{post.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
