"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white section-padding-x py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#111] mb-6">
            <span className="text-2xl">📧</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-md">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-gray-300">
            <p>contact@yoursaas.ai</p>
            <p>+1 (800) 123 XX21</p>
            <p>support@yoursaas.ai</p>
          </div>

          {/* Map */}
          <div className="relative mt-12">
            <img
              src="/images/worldmap.png"
              alt="world map"
              className="w-full opacity-30"
            />

            {/* Glow Pin */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-10 flex flex-col items-center">
              <span className="bg-[#222] px-3 py-1 rounded-full text-sm mb-2 shadow">
                We are here
              </span>

              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_6px_rgba(0,255,255,0.6)]"></div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="relative p-10 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl overflow-hidden">

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/grid.svg')] bg-repeat pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-400">Full name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-sm text-gray-400">Company</label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none resize-none"
              />
            </div>

            {/* Button */}
            <button className="px-6 py-3 rounded-md bg-white text-black font-semibold mt-4">
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
