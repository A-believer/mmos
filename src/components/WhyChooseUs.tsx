import { Card } from './Card';
import { Globe, DollarSign, Phone, Mail, Box } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Credible Business Presence',
    description: 'Use our verified address to register and represent your company professionally.',
  },
  {
    icon: Phone,
    title: 'Live Reception & Call Handling',
    description: 'Never miss an important call again.',
  },
  {
    icon: Mail,
    title: 'Mail Management',
    description: 'Secure mail handling with forwarding options.',
  },
  {
    icon: Box,
    title: 'Meeting Room Access',
    description: 'On-demand spaces to meet clients and partners.',
  },

  {
    icon: DollarSign,
    title: "Affordable & Flexible Plans",
    description: "Start small, scale as you grow."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Why Choose Market Master Services?</h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            We go beyond just an address. We help your business look, sound, and operate like a professional organization — even if you’re fully remote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <feature.icon className="text-text-light" size={20} />
              </div>
              <h3 className="heading-sm text-primary mb-3">{feature.title}</h3>
              <p className="body-md text-text-secondary">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}