import { Link } from 'react-router-dom';
import { Card } from './Card';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    name: 'Winter Park Office',
    address: '123 Park Avenue, Winter Park, FL 32789',
    phone: '(407) 555-0100',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
  {
    name: 'Apopka Office',
    address: '456 Main Street, Apopka, FL 32703',
    phone: '(407) 555-0200',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
  },
  {
    name: 'Orlando Office',
    address: '789 Orange Avenue, Orlando, FL 32801',
    phone: '(407) 555-0300',
    hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">Our Locations</h2>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto">
            Conveniently located to serve you across Central Florida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="bg-white">
              <h3 className="heading-sm text-primary mb-4">{location.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <p className="body-sm text-text-secondary">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={20} />
                  <Link to={`tel:${location.phone}`} className="body-sm text-text-primary hover:text-primary font-semibold">
                    {location.phone}
                  </Link>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-primary shrink-0 mt-1" size={20} />
                  <p className="body-sm text-text-secondary">{location.hours}</p>
                </div>
              </div>

              <button className="mt-6 w-full py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all font-semibold">
                Get Directions
              </button>
            </Card>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=28.5383,-81.3792&t=&z=10&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Market Master Services Locations"
          ></iframe>
        </div>
      </div>
    </section>
  );
}