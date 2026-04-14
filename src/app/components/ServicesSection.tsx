import { Heart, Truck, Waves, Sparkles } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Couples Massage Kauai",
      description: "Reconnect with your partner through our signature couples massage experience. Enjoy side-by-side relaxation in a tranquil setting, perfect for honeymooners and couples visiting Kauai.",
      image: "https://images.unsplash.com/photo-1770625467514-f072c8a64a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      keywords: "couples massage, romantic massage Kauai, honeymoon massage"
    },
    {
      icon: Truck,
      title: "Mobile Massage Kauai",
      description: "Experience the ultimate convenience with our mobile massage service. We bring professional massage therapy directly to your hotel, vacation rental, or beachside location anywhere in Kauai.",
      image: "https://images.unsplash.com/photo-1755610146353-d22fe8083edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      keywords: "mobile massage, in-room massage, hotel massage Kauai"
    },
    {
      icon: Waves,
      title: "Beachside Massage Experience",
      description: "Relax to the sound of ocean waves with our unique beachside massage service. Feel the gentle Hawaiian breeze while our skilled therapists melt away your stress right on the beach.",
      image: "https://images.unsplash.com/photo-1674095177914-7de88735f15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      keywords: "beach massage, oceanfront massage, outdoor massage Kauai"
    },
    {
      icon: Sparkles,
      title: "Acupuncture Therapy",
      description: "Complement your massage with traditional acupuncture therapy. Our licensed acupuncturist helps restore balance, relieve pain, and promote natural healing using time-tested techniques.",
      image: "https://images.unsplash.com/photo-1740689580128-9173edce303f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      keywords: "acupuncture Kauai, holistic healing, wellness therapy"
    },
  ];

  return (
    <section className="py-24 bg-[var(--warm-white)] relative">
      {/* Top spacing for curve from previous section */}
      <div className="h-12" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[var(--ocean)] tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Wellness Experiences Tailored<br className="hidden md:block" /> to Your Needs
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            From couples massage to mobile services across Kauai, discover the perfect treatment for your relaxation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--ocean)]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                    <Icon className="w-6 h-6 text-[var(--ocean)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {service.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--ocean)] text-white rounded-full hover:bg-[var(--ocean-light)] transition-colors duration-300">
                    Book This Service
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0C240 60 480 100 720 100C960 100 1200 60 1440 0V100H0V0Z"
            fill="#F5EFE7"
            fillOpacity="0.5"
          />
          <path
            d="M0 20C240 80 480 100 720 100C960 100 1200 80 1440 20V100H0V20Z"
            fill="#F5EFE7"
          />
        </svg>
      </div>
    </section>
  );
}
