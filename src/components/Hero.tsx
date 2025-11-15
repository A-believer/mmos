import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Phone } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlJTIwY29sbGFib3JhdGlvbnxlbnwwfDB8fHwxNzYyNTczOTcxfDA&ixlib=rb-4.1.0&q=85"
          alt="Vitaly Gariev on Unsplash"
          width={2560}
          height={2560}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-text-light animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-3 bg-primary/20 rounded-full border border-primary/40">
              <span className="text-primary font-semibold text-lg capitalize">
                🌐 Your Office, Anywhere.
              </span>
            </div>

            <h1 className="heading-xl text-text-light mb-8">
              Build a Professional Business Presence and Operate Seamlessly from
              Anywhere
            </h1>

            <p className="body-lg text-text-light/90 mb-10 max-w-2xl mx-auto">
              Flexible virtual office solutions that help your business look
              credible and stay connected.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button onClick={scrollToForm} variant="primary" size="lg">
                📅 Book Free Consultation
              </Button>
              <Link
                to="tel: +1 202-212-9328"
                className="border-2 border-text-light inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 px-10 py-4 text-lg bg-transparent text-white hover:bg-gray-100 hover:text-black shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2" size={20} />
                Call Now for Free Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 text-text-light/80">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="body-md">4.9/5 Google Reviews</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="body-md">15+ Years Experience</span>
              </div> */}
              <div className="flex items-center gap-2">
                <span className="text-3xl">👥</span>
                <span className="body-md">5,000+ Clients Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
