import { CheckCircle } from 'lucide-react';

export function CTABanner() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-linear-to-r from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of business owners who trust Market Master Office Services for their professional business address, mail handling, and virtual receptionist needs.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-white" size={24} />
              <span className="body-md">Real Business Address</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-white" size={24} />
              <span className="body-md">Mail Handling & Forwarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-white" size={24} />
              <span className="body-md">Call Answering Support</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            📅 Start Your Virtual Office Today
          </button>

          <p className="body-sm text-white/70 mt-6">
            Instant activation • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}