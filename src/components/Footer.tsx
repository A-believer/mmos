

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="bg-background-dark text-white border-t border-gray-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link
            to={"/"}
            className="w-[250px] h-20 object-contain flex items-center justify-center"
          >
            <img src="/mmos-logo.png" alt="" />
          </Link>
            <p className="body-sm text-white/80 mb-6">
              Whether you’re looking to establish a local presence, manage
              remote operations efficiently, or enhance your company’s
              professional image, Market Master Office Services offers flexible,
              affordable, and scalable solutions to help your business thrive.
            </p>
            <div className="flex gap-4">
              <Link
                to="https://web.facebook.com/marketmasterusa?_rdc=1&_rdr"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="https://www.instagram.com/marketmasterusa/"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#services"
                  className="body-sm text-white/80 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="#locations"
                  className="body-sm text-white/80 hover:text-primary transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="#faq"
                  className="body-sm text-white/80 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="body-sm text-white/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="body-sm text-white/80 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="text-primary shrink-0 mt-1" size={16} />
                <span className="body-sm text-white/80"> +1 202-212-9328</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="text-primary shrink-0 mt-1" size={16} />
                <span className="body-sm text-white/80">
                  info@marketmasterservices.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-primary shrink-0 mt-1" size={16} />
                <span className="body-sm text-white/80">
                  403 W Pennsylvania Ave, Towson, MD 21204, United States
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-primary shrink-0 mt-1" size={16} />
                <span className="body-sm text-white/80">
                  Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 10AM-4PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Stay Updated</h4>
            <p className="body-sm text-white/80 mb-4">
              Subscribe to get service updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="body-sm text-white/60">
              © 2025 Market Master Services. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <Link
                to="#"
                className="body-sm text-white/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="body-sm text-white/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="body-sm text-white/60 hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
