"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What certifications does Biotech International hold?",
    answer:
      "Biotech International Ltd. holds multiple international certifications including ISO 9001:2015 for Quality Management, ISO 14001:2015 for Environmental Management, and GLP (Good Laboratory Practice) certification. Our manufacturing facilities are also cGMP compliant.",
  },
  {
    question: "Are your products suitable for organic farming?",
    answer:
      "Yes, the majority of our biopesticides, biofertilizers, and biofungicides are certified for organic farming. They are safe, eco-friendly, and leave no toxic residues, making them ideal for sustainable and organic agriculture practices.",
  },
  {
    question: "Can I request bulk quotations or export details?",
    answer:
      "Absolutely. We export to over 50 countries and specialize in bulk supply for large-scale agriculture and distribution. Please use the enquiry form above and select 'Other Inquiry' or mention your bulk requirements in the message field.",
  },
  {
    question: "Where are your manufacturing facilities located?",
    answer:
      "Our state-of-the-art manufacturing facilities and R&D centers are located in India. We maintain strict quality control protocols to ensure all products meet global standards before export.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-biotech-light rounded-full mb-4">
            <HelpCircle className="h-6 w-6 text-biotech-green" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:bg-gray-50"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-biotech-green transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-48 py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
