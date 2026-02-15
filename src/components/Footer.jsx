import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#dda0dd] to-[#7C3AED] text-white py-12 px-5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1️⃣ Brand & Short Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Tech Startup</h2>
          <p className="text-sm text-white/80">
            We craft digital experiences for innovative startups and small
            companies.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#7C3AED] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#7C3AED] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#7C3AED] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className="hover:text-[#7C3AED] transition-colors"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#7C3AED] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#7C3AED] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-white/80 mb-3">
            Stay updated with our latest projects and services.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black flex-1"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#78184a] to-[#7C3AED] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#7C3AED] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#7C3AED] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#7C3AED] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/70">
        © 2026 Tech Startup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
