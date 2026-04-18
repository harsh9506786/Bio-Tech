"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { TextArea } from "../ui/TextArea";
interface EnquiryFormProps {
  compact?: boolean;
}
export function EnquiryForm({ compact = false }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };
  if (isSuccess) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="bg-green-50 p-8 rounded-xl text-center border border-green-100"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
          Enquiry Sent!
        </h3>
        <p className="text-gray-600 mb-6 font-lato">
          Thank you for your interest. Our product specialist will contact you
          shortly.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send Another Enquiry
        </Button>
      </motion.div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${
        compact
          ? "p-6 bg-white rounded-xl shadow-lg border border-gray-100"
          : ""
      }`}
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 font-poppins">
            Need Help Finding the Right Product?
          </h3>
          <p className="text-gray-600 font-lato">
            Our specialists can guide you to the ideal biological solution.
          </p>
        </div>
      )}

      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        <Input label="Full Name" placeholder="John Doe" required />
        <Input
          label="Email Address"
          type="email"
          placeholder="john@company.com"
          required
        />
      </div>

      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        <Input label="Company / Organization" placeholder="Farm Co." />
        <Select
          label="Product Interest"
          options={[
            {
              value: "",
              label: "Select a category...",
            },
            {
              value: "agriculture",
              label: "Agriculture Solutions",
            },
            {
              value: "public-health",
              label: "Public Health Solutions",
            },
            {
              value: "bulk",
              label: "Bulk Manufacturing",
            },
            {
              value: "other",
              label: "Other Inquiry",
            },
          ]}
        />
      </div>

      <TextArea
        label="Message"
        placeholder="Tell us about your requirements..."
        required
      />

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        isLoading={isSubmitting}
        rightIcon={!isSubmitting && <Send className="w-4 h-4" />}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
