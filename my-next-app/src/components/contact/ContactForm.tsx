"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TextArea } from "../ui/TextArea";
export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  4;
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    productCategory: undefined,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = {
          ...prev,
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim())
      newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setShowLoader(true);
    // Simulate API call
    const phoneNumber = "919899987903";

    const text = `
*New Enquiry Form Submission*

 Name: ${formData.fullName}
 Company: ${formData.company}
 Country: ${formData.country}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Category: ${formData.productCategory}
 Message: ${formData.message}
`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // 👇 small delay for smooth UX
    setTimeout(() => {
      window.open(url, "_blank");

      setShowLoader(false); // 👈 loader stop
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);

    // Reset form after delay
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        productCategory: undefined,
        message: "",
      });
    }, 5000);
  };
  const productCategories = [
    {
      value: "",
      label: "select a category",
    },

    {
      value: "biopesticides",
      label: "Biopesticides",
    },
    {
      value: "biofertilizers",
      label: "Biofertilizers",
    },
    {
      value: "biofungicides",
      label: "Biofungicides",
    },
    {
      value: "biostimulants",
      label: "Biostimulants",
    },
    {
      value: "bionematicides",
      label: "Bionematicides",
    },
    {
      value: "public-health",
      label: "Public Health Products",
    },
    {
      value: "other",
      label: "Other Inquiry",
    },
  ];
  return (
    <section id="contact-form" className="py-16 bg-molecular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Form Side */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Send us a Message on Whatsapp
              </h2>
              <p className="mt-3 text-gray-600">
                Whether you're interested in our biological products, want to
                collaborate, or need technical details — fill out the form and
                our team will get in touch.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Redirecting to WhatsApp...
                </h3>
                <p className="text-gray-600">
                  Please click "Send" in WhatsApp to complete your enquiry.
                </p>
                <p className="text-gray-600">
                  Thank you for contacting Biotech International. Our technical
                  team will review your enquiry and respond shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    placeholder="Dr. John Doe"
                    required
                  />
                  <Input
                    label="Company / Organization"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Biotech Labs Inc."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="john@example.com"
                    required
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="India"
                  />
                  <Select
                    label="Product Category"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    options={productCategories}
                    placeholder="Select a category"
                  />
                </div>

                <TextArea
                  label="Message / Enquiry Details"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Please describe your requirements or questions..."
                  required
                  rows={5}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto min-w-[200px]"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="h-4 w-4" />}
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-2 hidden lg:block h-full min-h-[600px] relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-biotech-green to-biotech-dark opacity-90 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Biotech Laboratory Research"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 text-white">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Exporting sustainable biological solutions to over 50
                  countries worldwide. Join our network of partners committed to
                  greener agriculture.
                </p>
              </div>
            </div>
            {/* Molecular overlay pattern */}
            <div
              className="absolute inset-0 z-10 opacity-20"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
