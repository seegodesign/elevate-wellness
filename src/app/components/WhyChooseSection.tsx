import { Award, MapPin, Heart, Waves } from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Licensed Therapists",
      description: "All our massage therapists are licensed, insured, and have years of experience in therapeutic bodywork."
    },
    {
      icon: MapPin,
      title: "Convenient Mobile Service",
      description: "We come to you anywhere in Kauai - your hotel, vacation rental, or favorite beach spot."
    },
    {
      icon: Waves,
      title: "Relaxing Beachside Setup",
      description: "Experience the magic of massage therapy with ocean waves and tropical breezes as your backdrop."
    },
    {
      icon: Heart,
      title: "Personalized Treatments",
      description: "Every session is customized to your needs, preferences, and comfort level. Your wellness, your way."
    }
  ];

  return (
    <section className="py-24 bg-[var(--warm-white)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--sage)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--ocean)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[var(--ocean)] tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Why Choose Elevate Wellness Kauai
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Friendly, professional, and dedicated to creating the perfect relaxation experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--ocean)]/20 rounded-full blur-xl group-hover:bg-[var(--sage)]/30 transition-colors duration-500" />
                    <div className="relative bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-light)] p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {reason.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-3xl px-12 py-8 shadow-xl">
            <p className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Serving Kauai since 2018
            </p>
            <p className="text-[var(--muted-foreground)]">
              Over 5,000 happy clients and counting
            </p>
          </div>
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60C160 90 320 100 480 95C640 90 800 70 960 65C1120 60 1280 70 1360 75L1440 80V120H0V60Z"
            fill="#F5EFE7"
            fillOpacity="0.4"
          />
          <path
            d="M0 80C160 100 320 110 480 105C640 100 800 80 960 75C1120 70 1280 80 1360 85L1440 90V120H0V80Z"
            fill="#F5EFE7"
          />
        </svg>
      </div>
    </section>
  );
}
