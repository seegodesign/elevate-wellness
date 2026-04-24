import { Star } from "lucide-react";

const platformLogos: Record<string, React.ReactNode> = {
  Google: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57C21.36 18.19 22.56 15.42 22.56 12.25z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Yelp: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.16 12.73l-4.703 1.14c-.477.114-.813-.46-.516-.863l2.795-3.899c.297-.41.898-.34 1.09.125.48 1.172.688 2.46.516 3.758a.64.64 0 0 1-.183.74zm-2.302 4.458l-4.14-2.346c-.418-.24-.34-.878.12-1.008l4.664-1.25a.64.64 0 0 1 .748.367c.422 1.14.5 2.418.203 3.633-.09.371-.477.594-.836.473a.638.638 0 0 1-.16-.07l-.6-.8zm-5.695 3.8L11.8 16.15c-.063-.476.523-.762.879-.441l3.543 3.11c.355.312.273.882-.145 1.078-1.078.508-2.29.656-3.496.43a.64.64 0 0 1-.504-.54l-.617-1.23.5 1.23zm-4.696-1.055c-.36.12-.734-.082-.875-.43-.383-.988-.43-2.102-.117-3.153.094-.32.383-.535.718-.516l4.817.3c.484.03.68.64.313.977l-3.555 3.219a.62.62 0 0 1-.36.148l-1.3.455 1.3-.455zm-.89-8.43l2.934 3.793c.3.39-.023.95-.504.863L4.297 14.17a.64.64 0 0 1-.496-.516C3.617 12.367 3.77 11.07 4.2 9.883c.14-.379.535-.57.918-.453.152.047.29.14.39.266l1.065 1.067z" fill="#D32323"/>
    </svg>
  ),
  TripAdvisor: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-4.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm9 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-4.5.5c-.69 0-1.327.2-1.865.541L12 11.5l1.865-1.459A3.478 3.478 0 0 0 12 9.5zm-4.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-8.5 4.5c.621 1.166 1.86 2 3.5 2h2c1.64 0 2.879-.834 3.5-2H8z" fill="#34E0A1"/>
    </svg>
  ),
};

export function TrustSection() {
  const reviews = [
    { platform: "Google", rating: 4.9, count: 157 },
    { platform: "Yelp", rating: 4.9, count: 245 },
    { platform: "TripAdvisor", rating: 4.9, count: 195 },
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
                <div className="flex justify-center mb-3">
                  {platformLogos[review.platform]}
                </div>
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

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20L120 30C240 40 480 60 720 60C960 60 1200 40 1320 30L1440 20V80H0V20Z"
            fill="var(--charcoal)"
          />
        </svg>
      </div>
    </section>
  );
}
