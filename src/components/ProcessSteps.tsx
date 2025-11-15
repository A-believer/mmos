import { CalendarCheck2, FileStack, CircleCheckBig } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck2,
    number: '01',
    title: 'Choose Your Plan',
    description: 'Pick the virtual office package that fits your business.',
  },
  {
    icon: FileStack,
    number: '02',
    title: 'Verify & Set Up',
    description: "We’ll activate your address and services within 24–48 hours.",
  },
  {
    icon: CircleCheckBig,
    number: '03',
    title: 'Operate Like a Pro',
    description: 'Use your new address, phone line, and mail handling right away.',
  },
];

export function ProcessSteps() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-linear-to-br from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Fast Start in 3 Easy Steps</h2>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Getting started is simple. Here&apos;s how we make it easy for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-white/20"></div>
              )}
              
              <div className="relative text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-32 h-32 mb-6 bg-white rounded-full relative z-10 shadow-2xl">
                  <step.icon className="text-primary" size={48} />
                  <span className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="heading-sm text-white mb-3">{step.title}</h3>
                <p className="body-md text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}