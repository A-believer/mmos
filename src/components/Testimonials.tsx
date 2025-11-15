import { Card } from './Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Rodriguez',
    service: 'Virtual Business Address',
    text: 'Setting up my virtual office with Market Master was seamless and affordable. Having a real Orlando business address gave my company instant credibility.',
    rating: 5,
    language: 'en',
  },
  {
    name: 'Carlos Mendez',
    service: 'Mail Handling & Forwarding',
    text: 'Their mail forwarding service keeps my business running smoothly even while I travel. Reliable, fast, and very professional!',
    rating: 5,
    language: 'es',
  },
  {
    name: 'Jennifer Smith',
    service: 'Call Answering Service',
    text: 'I love that every call is answered with my business name. My clients think I have a full office team — it’s been a game-changer for my brand',
    rating: 5,
    language: 'en',
  },
];

export function Testimonials() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='testimonials' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">What Our Clients Say</h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">Don’t just take our word for it — hear from professionals who trust Market Master Office Services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background-alt border border-border">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="body-md text-text-primary mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="body-sm text-text-secondary">{testimonial.service}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-border">
            <Star className="text-primary fill-primary" size={24} />
            <span className="font-semibold text-text-primary">4.9/5 Rating</span>
            <span className="text-text-secondary">•</span>
            <span className="text-text-secondary">200+ Google Reviews</span>
          </div>
          <div>
            <button
              onClick={scrollToForm}
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              Join Our Satisfied Clients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}