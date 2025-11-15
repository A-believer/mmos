import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { ProcessSteps } from "./components/ProcessSteps";
import { Testimonials } from "./components/Testimonials";
// import { Locations } from './components/Locations';
import { FAQ } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Services />
        <ProcessSteps />
        <Testimonials />
        {/* <Locations /> */}
        <FAQ />
        <CTABanner />
        <ContactForm />
        <Footer />
      </main>{" "}
    </BrowserRouter>
  );
}
