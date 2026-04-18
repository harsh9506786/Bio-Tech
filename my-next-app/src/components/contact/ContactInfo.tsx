"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
            Corporate Office
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-linear-to-r from-[#C5A24A] via-[#F3D78A] to-[#B88A2E]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* ================= CONTACT DETAILS ================= */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-biotech-light text-biotech-green">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Visit Us
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    VIPPS Centre, 2, Local Shopping Centre,
                    <br />
                    Block – EFGH, Greater Kailash-II,
                    <br />
                    New Delhi – 110048, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-biotech-light text-biotech-green">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <p className="mt-2 text-gray-600">
                    <span>+91 98999 87903</span>
                    <br />
                    <span>+91 99710 94165</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-biotech-light text-biotech-green">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Email Us
                  </h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="mailto:projects@biotech-int.com"
                      className="hover:text-biotech-green transition-colors"
                    >
                      projects@biotech-int.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-biotech-light text-biotech-green">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Business Hours
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Monday – Friday: 9:00 AM – 6:00 PM
                    <br />
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MAP ================= */}
          <div className="relative bg-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-200 h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0791458970666!2d77.2382761!3d28.5373407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2305eaaaaab%3A0x6cda54f76945ce17!2sBiotech%20International%20Limited!5e0!3m2!1sen!2sin!4v1771401449184!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Biotech International Limited Location"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
