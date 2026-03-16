'use client';

import { useState } from 'react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer: "Infrastructure tooling, self-hosted platforms, AI-powered features, and full-stack product builds. If it involves Go, Next.js, Docker, or developer tools — I'm in."
  },
  {
    question: "What does a typical engagement look like?",
    answer: "Most projects start with a scoping call where we align on goals and architecture. From there, I work in focused sprints with regular demos. MVPs typically take 4-8 weeks; larger systems 2-4 months."
  },
  {
    question: "Do you do freelance or contract work?",
    answer: "Yes. I'm available for contract engagements, consulting, and one-off project builds. Flexible on structure — hourly, milestone-based, or retainer."
  },
  {
    question: "Can you work with an existing team?",
    answer: "Absolutely. I can plug in as a senior engineer, architect the backend, or lead the infrastructure side. I'm comfortable with async-first workflows and adapt quickly to team processes."
  },
  {
    question: "What's your approach to open-source?",
    answer: "I build in the open whenever possible. Nixopus is fully open-source with 1300+ stars. I believe in software you can own, inspect, and run on your own terms."
  },
  {
    question: "How do you handle DevOps and deployment?",
    answer: "I build CI/CD pipelines, containerized deployments, and automated infrastructure. With Nixopus, I've solved deploy-like-Vercel on your own VPS — the same thinking applies to client work."
  },
  {
    question: "What technologies do you prefer?",
    answer: "Go and Next.js are my daily drivers. PostgreSQL, Redis, Docker, and Caddy for infrastructure. But tools are choices — I pick whatever solves the problem cleanly."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="animate-fade-up" style={{ animationDelay: '250ms' }}>
      <div className="mb-8">
        <h2 className="text-base mb-2 font-semibold">FAQ</h2>
        <div className="h-px w-12" style={{ backgroundColor: 'var(--color-border)' }}></div>
      </div>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
