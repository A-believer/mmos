import { Card } from "./Card";
import { MapPin, Mail, PhoneCall, Users } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Virtual Business Address",
    items: [
      " Prestigious Orlando-based business address",
      "Register your company with credibility",
      "Mail & package reception",
      "Use on business cards, websites, and filings",
      "Secure forwarding and storage options",
    ],
    image:
      "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxhY2NvdW50YW50JTIwdGF4JTIwY2FsY3VsYXRvciUyMGRvY3VtZW50cyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzYyNzc1MDY2fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Giorgio Tomassetti on Unsplash",
  },
  {
    icon: Mail,
    title: "Mail Handling & Forwarding",
    items: [
      " Mail receipt & digital notifications",
      "Scan, hold, or forward mail anywhere",
      "Safe, confidential, and tracked",
      "Mail pickup by appointment",
      "Flexible mail management plans",
    ],
    image:
      "https://images.unsplash.com/photo-1632152053988-e94d3d77829b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxhY2NvdW50aW5nJTIwYm9va2tlZXBpbmclMjBsYXB0b3AlMjBmaW5hbmNpYWwlMjBidXNpbmVzc3xlbnwwfDB8fHwxNzYyNzc1MDY2fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "2H Media on Unsplash",
  },
  {
    icon: PhoneCall,
    title: "Call Answering & Reception",
    items: [
      "Dedicated local phone number",
      "Personalized live call answering",
      "Message taking & call forwarding",
      "Voicemail-to-email service",
      "Boost your brand professionalism",
    ],
    image:
      "https://images.unsplash.com/photo-1576243165717-ce0a37f0ac8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMGltbWlncmF0aW9uJTIwdmlzYSUyMGRvY3VtZW50cyUyMHRyYXZlbHxlbnwwfDB8fHwxNzYyNzc1MDY2fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Caio Pezzo on Unsplash",
  },
  {
    icon: Users,
    title: "Meeting Room & Admin Support",
    items: [
      "On-demand meeting rooms",
      "Workspace by the hour or day",
      "Administrative & clerical support",
      "Document preparation assistance",
      "Custom business service packages",
    ],
    image:
      "https://images.unsplash.com/photo-1566232137428-27dd00f5c6bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxub3RhcnklMjBzdGFtcCUyMHNlYWwlMjBsZWdhbCUyMGRvY3VtZW50c3xlbnwwfDB8fHwxNzYyNzc1MDY2fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Anne Nygård on Unsplash",
  },
];

export function Services() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Our Services</h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive professional virtual office solutions tailored to meet
            your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden bg-white">
              {/* Service Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <h3 className="heading-sm text-primary mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="body-sm text-text-secondary flex items-start"
                  >
                    <span className="text-primary mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
              >
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
