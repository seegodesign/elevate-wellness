import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { TrustSection } from "./components/TrustSection";
import { ServicesSection } from "./components/ServicesSection";
import { PackagesSection } from "./components/PackagesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { LocalSEOSection } from "./components/LocalSEOSection";
import { Footer } from "./components/Footer";
import { StickyBookingButton } from "./components/StickyBookingButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <TrustSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="packages">
        <PackagesSection />
      </div>
      <div id="about">
        <WhyChooseSection />
      </div>
      <ExperienceSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="contact">
        <LocalSEOSection />
      </div>
      <Footer />
      <StickyBookingButton />
    </div>
  );
}