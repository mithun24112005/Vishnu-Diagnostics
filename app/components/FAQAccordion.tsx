"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeIn key={index} delay={index * 0.06}>
            <div className="bg-canvas border border-hairline-soft rounded-md overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-2/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-body font-medium text-ink pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-ink-muted shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-body text-ink-muted px-6 pb-6">
                {item.answer}
              </p>
            </div>
          </div>
        </FadeIn>
        );
      })}
    </div>
  );
}
