import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <Link
            to={"/"}
            className="w-[250px] h-20 object-contain flex items-center justify-center"
          >
            <img src="/mmos-logo.png" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-white hover:text-gray-500"
                  : "text-white hover:text-accent"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-white hover:text-gray-500"
                  : "text-white hover:text-accent"
              }`}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-white hover:text-gray-500"
                  : "text-white hover:text-accent"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-white hover:text-gray-500"
                  : "text-white hover:text-accent"
              }`}
            >
              FAQ
            </button>
            <Link
              to="tel:4075550100"
              className={`flex items-center gap-2 transition-colors font-medium ${
                isScrolled
                  ? "text-white hover:text-gray-500"
                  : "text-white hover:text-accent"
              }`}
            >
              <Phone size={18} />
              +1 202-212-9328
            </Link>
            <Button onClick={scrollToForm} variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled
                ? "text-white hover:text-gray-500"
                : "text-white hover:text-accent"
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden py-6 border-t ${
              isScrolled
                ? "border-border bg-white"
                : "border-white/20 bg-background-dark/95"
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-gray-500 transition-colors font-medium text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-white hover:text-gray-500 transition-colors font-medium text-left py-2"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("locations")}
                className="text-white hover:text-gray-500 transition-colors font-medium text-left py-2"
              >
                Locations
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white hover:text-gray-500 transition-colors font-medium text-left py-2"
              >
                FAQ
              </button>
              <Link
                to="tel:4075550100"
                className="flex items-center gap-2 text-white hover:text-gray-500 transition-colors font-medium py-2"
              >
                <Phone size={18} />
                (407) 555-0100
              </Link>
              <Button
                onClick={scrollToForm}
                variant="primary"
                size="md"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
