"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Agriculture", href: "/products" },
  { label: "Public Health", href: "/publichealth" },
  { label: "Contact", href: "/contact" },
  {label : "Gallery" , href : "/gallery"}
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isWhiteIconPage = pathname === "/" || pathname === "/contact" || pathname === "/gallery";

  const mobileIconColor = isWhiteIconPage ? "text-white" : "text-black";

  return (
    <header className="absolute md:sticky top-0 left-0 w-full z-50 bg-transparent md:bg-white font-poppins">
      {/* absolute md:fixed top-0 left-0 w-full z-50 bg-transparent md:bg-white font-poppins */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" aria-label="Go to Home">
          {/* Mobile Logo */}
          <Image
            src={
              isWhiteIconPage
                ? "/images/logos/logowhite.png"
                : "/images/logos/logoblack.png"
            }
            alt="AgroCorp Logo"
            width={300}
            height={120}
            className={`object-contain w-auto cursor-pointer md:hidden
      ${isWhiteIconPage ? "h-32 -ml-15 -mt-6 sm:-ml-3" : "h-18"}
    `}
            priority
          />

          {/* Desktop Logo (always black) */}
          <Image
            src="/images/logos/logoblack.png"
            alt="AgroCorp Logo"
            width={400}
            height={200}
            className="hidden md:block object-contain w-auto h-22 cursor-pointer"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-gray-700  font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-green-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact#contact-form"
            className="bg-green-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-green-800 transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`md:hidden text-3xl z-50 transition-colors cursor-pointer duration-300
    ${mobileIconColor}
    ${isWhiteIconPage ? "-translate-y-4" : "translate-y-0"}
  `}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.25 },
            }}
            className="md:hidden overflow-hidden mx-4 bg-white rounded-xl shadow-xl"
          >
            <div className="px-6 py-6 space-y-5">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-medium text-gray-800"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact#contact-form"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-green-primary text-white py-3 rounded-md font-semibold text-lg"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
