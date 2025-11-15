

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Setup',
    question: 'How long does it take to activate my virtual office?',
    answer: 'Within 24–48 hours after verification and payment.',
  },
  {
    category: 'Services',
    question: 'Can I receive mail and packages?',
    answer: 'Yes! We securely handle and forward your mail to your chosen address.',
  },
  {
    category: 'Calls',
    question: 'Do you provide live call answering?',
    answer: 'Absolutely. A professional receptionist answers and forwards calls in your company’s name.',
  },
  {
    category: 'Meeting Rooms',
    question: 'Can I use a meeting room occasionally?',
    answer: 'Yes. Simply book in advance — rooms are available hourly or by the day.',
  },
  {
    category: 'Pricing',
    question: 'Do you have monthly or annual plans?',
    answer: 'We offer both. Save more with annual subscriptions.',
  },
 
  
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Frequently Asked Questions</h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-2">
                    {faq.category}
                  </span>
                  <h3 className="heading-sm text-text-primary">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`text-primary shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="body-md text-text-secondary">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="body-lg text-text-secondary mb-4">Still have questions?</p>
          <button 
            onClick={scrollToForm}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}