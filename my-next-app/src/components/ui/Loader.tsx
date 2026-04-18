"use client";

import Image from "next/image";

export default function Loader({ text = "Loading" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      {/* spinning image */}
      <div className="w-14 h-14 rounded-full border-4 border-biotech-green/20 border-t-biotech-green animate-spin overflow-hidden">
        <Image
          src="/images/logos/roundlogo.png"
          alt="loading"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}
