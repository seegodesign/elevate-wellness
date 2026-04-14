import { Star } from "lucide-react";

export function TrustSection() {
  const reviews = [
    { platform: "Google", rating: 5.0, count: 127 },
    { platform: "Yelp", rating: 5.0, count: 89 },
    { platform: "TripAdvisor", rating: 5.0, count: 156 },
  ];

  return (
    <section className="py-16 bg-[var(--sand)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-[var(--blue-gray)] tracking-widest uppercase mb-4">
            Trusted by Locals & Visitors
          </p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Top-Rated Massage in Kapa'a
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.platform}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <p className="text-xl mb-3">{review.platform}</p>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--yellow)] text-[var(--yellow)]" />
                  ))}
                </div>
                <p className="text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {review.rating.toFixed(1)}
                </p>
              </div>
              <p className="text-[var(--muted-foreground)]">{review.count} reviews</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[var(--muted-foreground)] italic max-w-3xl mx-auto">
            "The best massage experience we've had on the island. Professional, relaxing, and incredibly convenient with their mobile service."
          </p>
          <p className="mt-3 text-[var(--ocean)]">— Sarah & Michael, San Francisco</p>
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 20L120 30C240 40 480 60 720 60C960 60 1200 40 1320 30L1440 20V80H0V20Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
