"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Send, Mail } from "lucide-react";
// React Icons-এর সঠিক ইমপোর্ট (যা একদম নিখুঁতভাবে কাজ করবে)
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <footer className="border-t border-[#AE7C54]/20 bg-gradient-to-r from-[#010f11] via-[#02191c] to-[#03282d] pt-16 pb-12 mt-auto text-left">

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl border border-[#AE7C54]/15 bg-white/[0.04] p-2 shadow-inner shadow-black/20 transition hover:border-[#AE7C54]/30"
          >
            <img
              src="/logo.png"
              alt="Fable"
              className="h-[76px] w-auto shrink-0 rounded-xl border border-[#AE7C54]/35 bg-[#f6f1ea] object-contain p-1.5 shadow-lg shadow-black/35"
            />
          </Link>

          <p className="text-[#f6f1ea]/65 text-xs leading-relaxed max-w-xs">
            A premium digital platform connecting global ebook lovers with exceptional independent authors. Discover, read, and trade original literature securely.
          </p>

          <div className="flex gap-4 pt-1">
            <a className="text-[#f6f1ea]/50 hover:text-[#AE7C54] transition-colors" href="#">
              <FaFacebook size={18} />
            </a>
            <a className="text-[#f6f1ea]/50 hover:text-[#AE7C54] transition-colors" href="#">
              <FaTwitter size={18} />
            </a>
            <a className="text-[#f6f1ea]/50 hover:text-[#AE7C54] transition-colors" href="#">
              <FaInstagram size={18} />
            </a>
            <a className="text-[#f6f1ea]/50 hover:text-[#AE7C54] transition-colors" href="#">
              <FaGithub size={18} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#AE7C54] pl-2 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2.5 text-[#f6f1ea]/70 text-xs font-bold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ebooks">Browse Ebooks</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/auth/signin">Login / Portal</Link></li>
          </ul>
        </motion.div>

        {/* Genres */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#AE7C54] pl-2 mb-4">
            Top Genres
          </h3>

          <ul className="space-y-2.5 text-[#f6f1ea]/70 text-xs font-bold">
            <li><Link href="/ebooks?genre=Fiction">Fiction Literature</Link></li>
            <li><Link href="/ebooks?genre=Mystery">Mystery & Suspense</Link></li>
            <li><Link href="/ebooks?genre=Romance">Romance Novels</Link></li>
            <li><Link href="/ebooks?genre=Sci-Fi">Sci-Fi & Fantasy</Link></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#AE7C54] pl-2 mb-4">
              Newsletter
            </h3>

            <p className="text-[#f6f1ea]/60 text-xs mb-3">
              Subscribe to receive updates and releases.
            </p>

            <div className="relative flex items-center max-w-xs">
              <Mail className="absolute left-3 text-[#f6f1ea]/30 h-4 w-4" />

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-white/[0.03] border border-[#AE7C54]/25 text-[#f6f1ea] text-xs rounded-xl pl-9 pr-12 py-3 outline-none focus:border-[#AE7C54] transition"
              />

              <button className="absolute right-1.5 bg-[#AE7C54] hover:bg-[#c99367] text-white p-2 rounded-lg">
                <Send size={12} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#AE7C54] pl-2 mb-2">
              Legal
            </h3>

            <div className="flex gap-4 text-[#f6f1ea]/50 text-[11px] font-bold">
              <a>About Us</a>
              <a>Contact</a>
              <a>Privacy Policy</a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-6 border-t border-[#AE7C54]/15 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[#f6f1ea]/40 text-xs font-medium"
      >
        <p>&copy; {new Date().getFullYear()} Fable. All rights reserved.</p>
        <p className="text-[10px] tracking-wider uppercase opacity-80">
          Built for Excellence
        </p>
      </motion.div>

    </footer>
  );
}