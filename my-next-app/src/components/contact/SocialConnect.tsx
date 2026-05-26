"use client";

import React from "react";
import { Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

interface SocialItem {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socials: SocialItem[] = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    url: "https://www.linkedin.com/company/biotech-international-limited",
    color: "hover:text-[#0077b5] hover:border-[#0077b5]",
  },
  // {
  //   name: "YouTube",
  //   icon: <Youtube className="h-6 w-6" />,
  //   url: "https://www.youtube.com/@biotechinternational",
  //   color: "hover:text-[#FF0000] hover:border-[#FF0000]",
  // },
  // {
  //   name: "Twitter",
  //   icon: <Twitter className="h-6 w-6" />,
  //   url: "#",
  //   color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]",
  // },
  // {
  //   name: "Facebook",
  //   icon: <Facebook className="h-6 w-6" />,
  //   url: "#",
  //   color: "hover:text-[#4267B2] hover:border-[#4267B2]",
  // },
];

const  SocialConnect: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Connect with Us Online
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Stay updated with the latest innovations, research breakthroughs, and
          sustainability initiatives from Biotech International.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className={`
                group flex items-center justify-center h-16 w-16 rounded-full 
                bg-white border-2 border-biotech-gold text-gray-600
                transition-all duration-300 transform hover:scale-110 hover:shadow-lg
                ${social.color}
              `}
            >
              <span className="group-hover:animate-pulse">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;
