"use client";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Agriculture Solutions",
    description:
      "Enhance crop yield and soil health with our premium range of bio-fertilizers, bio-pesticides, and growth promoters.",
    image: "/images/pc1.png",
    badge: "🌱",
    buttonStyle: {
      background:
        "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
      color: "black", // green-900
    },
    badgeStyle: {
      background:
        "linear-gradient(90deg, #C9A24A 0%, #FFF1B8 50%, #B88A2E 100%)",
      color: "black",
    },
  },
  {
    title: "Public Health Solutions",
    description:
      "Advanced vector control and sanitation solutions for safer, healthier communities and urban environments.",
    image: "/images/pc2.png",
    badge: "🛡️",
    buttonStyle: {
      background: "#16a34a", // green-600
      color: "#ffffff",
    },
    badgeStyle: {
      background: "blue",
      color: "#ffffff",
    },
  },
];

export function ProductCategories() {
  return (
    <section className="py-12 bg-[#f4f9f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-poppins text-4xl font-bold text-green-800 mb-3">
            Explore Our Key Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized biological solutions designed for maximum efficacy and
            environmental sustainability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((item) => (
            <div
              key={item.title}
              className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm"
                    style={item.badgeStyle}
                  >
                    {item.badge}
                  </span>

                  <h3 className="font-poppins text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-white/90 mb-6 max-w-sm font-lato">
                  {item.description}
                </p>

                {/* View Products Button */}
                <Link href="/products">
                  <button
                    className="inline-flex items-center gap-2 px-5 py-2 font-inter rounded-lg shadow-md hover:scale-105 transition cursor-pointer group"
                    style={item.buttonStyle}
                  >
                    View Products
                    <ArrowRightIcon
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

<button className="group inline-flex items-center gap-2 bg-green-primary text-white font-inter font-medium px-6 py-3 rounded-full hover:bg-green-dark transition-colors duration-300 cursor-pointer">
  Know Our Strengths
  <ArrowRightIcon
    size={18}
    className="group-hover:translate-x-1 transition-transform"
  />
</button>;
