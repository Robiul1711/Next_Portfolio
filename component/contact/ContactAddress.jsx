import React from "react";
import { FcBusinessContact } from "react-icons/fc";
const ContactAddress = () => {
  return (
    <div>
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#111] mb-6">
        <FcBusinessContact className="text-4xl"/>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>

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

      {/* Real Map */}
      <div className="relative mt-12 w-full h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.825399299239!2d90.4031032750564!3d23.80684198663052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fab15c93d7%3A0xa552e52d5549a958!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactAddress;
