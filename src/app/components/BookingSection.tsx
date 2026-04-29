import { useState } from "react";
import { Link } from "react-router";
import { Calendar, Clock, MapPin, CreditCard, Building2, Waves } from "lucide-react";

type Location = "indoor" | "oceanfront";

const EMBEDS: Record<Location, { src: string; id: string }> = {
  indoor: {
    src: "https://api.leadconnectorhq.com/widget/group/r41cRr67i4wvr0I75paj",
    id: "r41cRr67i4wvr0I75paj_1777359498865",
  },
  oceanfront: {
    src: "https://api.leadconnectorhq.com/widget/group/001OycXJ4NA6CvB4nMFU",
    id: "001OycXJ4NA6CvB4nMFU_1777358545714",
  },
};

export function BookingSection() {
  const [location, setLocation] = useState<Location>("indoor");
  const steps = [
    {
      icon: Calendar,
      title: "Select Service",
      description: "Choose from couples massage, mobile service, or beachside experience"
    },
    {
      icon: Clock,
      title: "Choose Time",
      description: "Pick a date and time that works for your schedule"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Provide your hotel, rental, or preferred beach location"
    },
    {
      icon: CreditCard,
      title: "Confirm",
      description: "Secure your booking with easy payment options"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--ocean)] via-[var(--blue-gray)] to-[var(--sage)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--sage)]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-white tracking-widest uppercase mb-4">
            Easy Booking
          </p>
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Reserve Your Session
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Book online in minutes or call us directly. Same-day appointments often available.
          </p>
        </div>

        {/* Booking Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full" />
                  </div>
                )}

                <div className="mb-4 inline-flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                    <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border-2 border-white/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>


        {/* Book Now CTA */}
        <div className="text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[var(--ocean)] rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </Link>
          <p className="mt-4 text-white/60 text-sm">Same-day appointments often available</p>
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 20C240 70 480 90 720 90C960 90 1200 70 1440 20V100H0V20Z"
            fill="#F5EFE7"
            fillOpacity="0.5"
          />
          <path
            d="M0 40C240 80 480 100 720 100C960 100 1200 80 1440 40V100H0V40Z"
            fill="#F5EFE7"
          />
        </svg>
      </div>
    </section>
  );
}
