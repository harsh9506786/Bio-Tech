"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute md:relative top-0 left-0 w-full z-50 bg-transparent md:bg-white md:border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="AgroCorp Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-600 transition">
            About
          </Link>
          <Link href="/products" className="hover:text-green-600 transition">
            Products
          </Link>
          <Link href="/research" className="hover:text-green-600 transition">
            Research
          </Link>
          <Link
            href="/sustainability"
            className="hover:text-green-600 transition"
          >
            Sustainability
          </Link>
          <Link href="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT: Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/enquire"
            className="bg-green-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* MOBILE: Hamburger / Close Button */}
        <button
          className="md:hidden text-3xl text-white relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 mx-4 bg-white text-black rounded-xl shadow-lg px-6 py-6 space-y-5">
          <Link href="/" className="block font-medium text-lg">
            Home
          </Link>
          <Link href="/about" className="block font-medium text-lg">
            About
          </Link>
          <Link href="/products" className="block font-medium text-lg">
            Products
          </Link>
          <Link href="/research" className="block font-medium text-lg">
            Research
          </Link>
          <Link href="/sustainability" className="block font-medium text-lg">
            Sustainability
          </Link>
          <Link href="/contact" className="block font-medium text-lg">
            Contact
          </Link>

          <Link
            href="/enquire"
            className="block text-center bg-green-700 text-white py-3 rounded-md font-semibold text-lg"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
