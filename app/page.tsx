"use client";

import { motion } from "framer-motion";
import { FaTruck, FaShieldAlt, FaClock, FaBox } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">

      {/* STICKY GLASS NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md py-4 px-6 md:px-8 flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="Logo" className="w-40 md:w-48 h-auto" />
        </div>
        <div>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold shadow transition">
            <FaTruck /> Request a Quote
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gray-900/70 text-white py-24 md:py-32 px-4 md:px-6 text-center overflow-hidden backdrop-blur-sm">
        {/* Floating gradient bubbles */}
        <div className="absolute -z-10 w-full h-full top-0 left-0">
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-red-500/30 to-white/10 blur-3xl top-10 left-1/4 animate-pulse-slow"></div>
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-gray-400/20 to-white/10 blur-3xl bottom-20 right-1/3 animate-pulse-slow"></div>
          <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-red-600/20 to-white/10 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-l from-red-400/10 to-white/10 blur-2xl top-1/3 right-1/4 animate-pulse-slow"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4 uppercase leading-tight"
        >
          MOVE FASTER. DELIVER SMARTER.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
        >
          Reliable medical courier and logistics services — fast, secure, and compliant with industry standards.
        </motion.p>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-4 md:px-8 py-16 md:py-20 max-w-6xl mx-auto bg-gray-900/80 rounded-2xl backdrop-blur-sm mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-white">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { title: "Medical Courier", desc: "HIPAA-compliant transport of medical specimens, pharmaceuticals, and supplies.", icon: <FaShieldAlt className="mx-auto text-red-600 mb-2 w-8 h-8" /> },
            { title: "Temperature-Controlled Delivery", desc: "Safe transport for sensitive materials requiring strict temperature management.", icon: <FaBox className="mx-auto text-red-600 mb-2 w-8 h-8" /> },
            { title: "Business Logistics", desc: "Customized delivery solutions to keep your operations running smoothly and efficiently.", icon: <FaClock className="mx-auto text-red-600 mb-2 w-8 h-8" /> },
          ].map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-2xl"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
              <p className="text-gray-200 text-sm md:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA + FORM SECTION */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white/90 backdrop-blur-sm rounded-2xl max-w-4xl mx-auto shadow-2xl mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Ready to partner with us?</h2>
        <p className="text-gray-700 text-center mb-10">
          Contact us today for reliable, professional service.
        </p>

        <form
          action="https://formspree.io/f/mpqjlnel"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select
            name="timeline"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="asap">ASAP</option>
            <option value="next_month">Within the next month</option>
            <option value="1_2_months">1–2 months</option>
            <option value="3_plus_months">3+ months</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg mt-2"
          >
            <FaTruck /> Submit Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-300 text-gray-500 mt-12">
        © {new Date().getFullYear()} GLO Solutions. All rights reserved.
      </footer>

      {/* Placeholder for live chat script */}
      {/* Example for Tawk.to: paste script here or in _document.tsx */}
    </main>
  );
}