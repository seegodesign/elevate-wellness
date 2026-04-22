import { Check } from "lucide-react";

export function PackagesSection() {
  const packages = [
    {
      name: "Individual Massage",
      duration: "60 or 90 minutes",
      features: [
        "Swedish or Deep Tissue",
        "Aromatherapy oils included",
        "Customized pressure",
        "Hot towel treatment",
        "Calming music"
      ],
      popular: false
    },
    {
      name: "Couples Massage",
      duration: "60 or 90 minutes",
      features: [
        "Side-by-side experience",
        "Two licensed therapists",
        "Aromatherapy & hot towels",
        "Champagne upgrade available",
        "Perfect for special occasions"
      ],
      popular: true
    },
    {
      name: "Beach Experience",
      duration: "90 minutes",
      features: [
        "Beachfront setup",
        "Ocean sounds & breeze",
        "Professional massage table",
        "Coconut oil treatment",
        "Truly unique experience"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--sand)] to-[var(--warm-white)] relative">
      {/* Top spacing for curve from previous section */}
      <div className="h-8" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[var(--blue-gray)] tracking-widest uppercase mb-4">
            Popular Options
          </p>
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Choose Your Perfect Session
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Approachable wellness for everyone. Each session is personalized to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-[var(--sage)] scale-105 md:scale-110' : 'hover:scale-105'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--sage)] text-white px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {pkg.name}
                </h3>
                <p className="text-[var(--muted-foreground)]">{pkg.duration}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage)]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[var(--sage)]" />
                    </div>
                    <span className="text-[var(--charcoal)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[var(--sage)] text-white hover:bg-[var(--sage-dark)] shadow-lg'
                    : 'bg-[var(--ocean)] text-white hover:bg-[var(--ocean-light)]'
                }`}
              >
                Reserve Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--muted-foreground)]">
            All sessions include consultation and personalized treatment.{' '}
            <a href="#" className="text-[var(--ocean)] hover:underline">Contact us</a> for custom packages.
          </p>
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
            d="M0 40C180 60 360 80 540 75C720 70 900 40 1080 30C1260 20 1380 30 1410 35L1440 40V100H0V40Z"
            fill="#FDFBF7"
            fillOpacity="0.6"
          />
          <path
            d="M0 60C180 75 360 90 540 85C720 80 900 50 1080 40C1260 30 1380 40 1410 45L1440 50V100H0V60Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
