"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFax,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/components/ui/Loader";

export default function Footer() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const agricultureSolutions = [
    "All",
    "Biopesticides",
    "Biofungicides",
    "Botanical Pesticides",
    "Seed Dressing",
    "Biofertilizers",
    "Biodecomposer",
    "Bioacaricides",
    "Pheromone Lures and Traps",
    "Bionematicides",
    "Biostimulants",
  ];

  const publicHealthSolutions = ["Biolarvicides", "Bednet"];

  const handleSubcategoryClick = async (subcategory: string) => {
    setIsLoading(true);
    await router.push(
      `/products?subcategory=${encodeURIComponent(
        subcategory,
      )}#subcategory-section`,
    );
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <Loader />
        </div>
      )}

      <footer className="bg-[#0f172a] text-white py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Logo + Social */}
          <div className="flex flex-col items-start">
            {/* Logos */}
            <div className="flex items-center mb-3 -ml-7">
              <Image
                src="/images/logos/logowhite.png"
                alt="Biotech Main Logo"
                width={280}
                height={150}
                className="object-contain"
              />
              <Image
                src="/images/logos/roundlogo.png"
                alt="Biotech Mini Logo"
                width={52}
                height={52}
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm">
              Biological innovations. Sustainable Growth. Pioneering the future
              of agriculture and public health through advanced microbial
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-0 lg:ml-16 mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-accent transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>

            {/* Agriculture Solutions */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gold-accent mb-2">
                Agriculture Solutions
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {agricultureSolutions.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleSubcategoryClick(item.toLowerCase())}
                      className="hover:text-gold-accent transition cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Public Health Solutions */}
            <div>
              <h4 className="text-sm font-semibold text-gold-accent mb-2">
                Public Health Solutions
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {publicHealthSolutions.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleSubcategoryClick(item.toLowerCase())}
                      className="hover:text-gold-accent transition cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start gap-2 mb-2">
              <MapPinIcon size={18} className="text-gold-accent shrink-0" />
              <span>
                VIPPS Centre 2, Local Shopping Centre, Block-EFGH, Greater
                Kailash-II, New Delhi-110048 India
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <PhoneIcon size={18} className="text-gold-accent" />
              <Link href="tel:+919899987903">+91 9899987903</Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <PhoneIcon size={18} className="text-gold-accent" />
              <Link href="tel:+919971094165">+91 9971094165</Link>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon size={18} className="text-gold-accent" />
              <Link href="projects@biotech-int.com">
                projects@biotech-int.com
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-8">
              Connect with us online
            </h3>
            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <Link href="#" className="hover:text-gold-accent">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BioTech International. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
