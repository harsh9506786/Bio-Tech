"use client";

import React, { useState } from "react";
import Loader from "@/components/ui/Loader";

const FloatingIcon = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    const phoneNumber = "9899987903";
    const message = "Hi, I am interested in your products";
    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    const newWindow = window.open(url, "_blank");

    // 👇 fallback (agar block ho gaya)
    if (!newWindow) {
      window.location.href = url;
    }
    // 👇 loader control
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={handleClick}
        className="fixed bottom-6 right-4 sm:bottom-5 sm:right-5 z-50 bg-green-500 hover:bg-green-600 hover:scale-110 text-white p-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.757 5.594 2.074 7.949L0 32l7.89-2.063a15.88 15.88 0 0 0 8.11 2.222c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.206c-2.568 0-5.04-.67-7.2-1.94l-.515-.304-4.68 1.223 1.25-4.56-.334-.527A13.38 13.38 0 0 1 2.67 16.396c0-7.35 5.98-13.33 13.33-13.33s13.33 5.98 13.33 13.33-5.98 13.33-13.33 13.33zm7.46-9.98c-.408-.204-2.414-1.19-2.788-1.326-.374-.136-.646-.204-.918.204s-1.054 1.326-1.292 1.598c-.238.272-.476.306-.884.102-.408-.204-1.722-.635-3.28-2.026-1.212-1.082-2.03-2.418-2.268-2.826-.238-.408-.025-.628.18-.832.184-.183.408-.476.612-.714.204-.238.272-.408.408-.68.136-.272.068-.51-.034-.714-.102-.204-.918-2.21-1.258-3.028-.332-.8-.67-.69-.918-.702l-.782-.014c-.272 0-.714.102-1.088.51-.374.408-1.428 1.396-1.428 3.402 0 2.006 1.462 3.944 1.666 4.216.204.272 2.876 4.392 6.974 6.158.976.42 1.736.67 2.33.858.978.31 1.868.266 2.57.162.784-.116 2.414-.986 2.754-1.94.34-.952.34-1.768.238-1.94-.102-.17-.374-.272-.782-.476z" />
        </svg>
      </div>

      {/* 🔥 Full Screen Loader */}
      {loading && (
        <div className="fixed inset-0 z-[999] bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <Loader text="Opening WhatsApp..." />
        </div>
      )}
    </>
  );
};

export default FloatingIcon;
