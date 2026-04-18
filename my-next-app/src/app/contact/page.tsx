"use client";

import { useEffect } from "react";
import { Users } from "lucide-react";
import Button from "@/components/ui/Button";
import ContactInfo from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import SocialConnect from "@/components/contact/SocialConnect";
import FAQ from "@/components/contact/FAQ";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  // SEO: Page title
  useEffect(() => {
    document.title = "Contact Biotech International Ltd. – Enquiries & Support";
  }, []);

  // Smooth scroll to contact form
  // const scrollToForm = (): void => {
  //   const formElement = document.getElementById("contact-form");
  //   if (formElement) {
  //     formElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");

    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-br from-biotech-green to-[#006030] text-white py-20  pt-36 md:pt-0 lg:py-28 overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Abstract Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-biotech-gold opacity-10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl font-poppins mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch with Us
          </h1>

          <p className="text-xl font-lato text-gray-100 max-w-3xl mx-auto mb-10 font-light">
            We're here to assist you with product enquiries, distribution
            partnerships, and corporate collaborations. Reach out to our team —
            we'll respond promptly.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            style={{
              background:
                "linear-gradient(90deg, #C9A24A 0%, #F3D78A 50%, #B88A2E 100%)",
            }}
          >
            Send Enquiry
          </Button>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <ContactInfo />
        <ContactForm />

        {/* ================= PARTNER CTA ================= */}
        <section className="bg-linear-to-r from-biotech-green to-[#00552a] py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-3"
                  style={{
                    background:
                      "linear-gradient(90deg, #C5A24A 0%, #F3D78A 50%, #B88A2E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Become a Partner
                </h2>

                <p className="text-white text-lg max-w-2xl">
                  Looking to become a distributor or discuss large-scale supply
                  requirements? Our business development team is here to assist.
                </p>
              </div>

              <Button
                size="lg"
                rightIcon={<Users className="h-5 w-5" />}
                className="text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                onClick={() => router.push("/contact#contact-form")}
                style={{
                  background:
                    "linear-gradient(90deg, #C9A24A 0%, #F3D78A 50%, #B88A2E 100%)",
                }}
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        <SocialConnect />
        <FAQ />
      </main>
    </div>
  );
};

export default ContactPage;
