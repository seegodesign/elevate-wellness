export function ExperienceSection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1724217981585-f28f2375f3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      alt: "Palm trees on Kauai beach",
      size: "large"
    },
    {
      url: "https://images.unsplash.com/photo-1770625467514-f072c8a64a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      alt: "Relaxing spa environment",
      size: "medium"
    },
    {
      url: "https://images.unsplash.com/photo-1674095177914-7de88735f15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      alt: "Beach scene in Kauai",
      size: "medium"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[var(--sand)] to-[var(--warm-white)] relative">
      {/* Top spacing for curve from previous section */}
      <div className="h-8" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-[var(--sage)] tracking-widest uppercase mb-4">
              The Experience
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Where Island Paradise<br />
              Meets Deep Relaxation
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-6 leading-relaxed">
              Imagine the gentle sound of waves, the warm Hawaiian sun, and skilled hands melting away every tension in your body.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] mb-8 leading-relaxed">
              This isn't just a massage - it's an escape into pure tranquility. Whether you're celebrating an anniversary, honeymoon, or simply treating yourself, we create moments you'll treasure forever.
            </p>
            <div className="flex flex-wrap gap-6 text-[var(--charcoal)]">
              <div>
                <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>60-90min</p>
                <p className="text-sm text-[var(--muted-foreground)]">Session Options</p>
              </div>
              <div className="border-l-2 border-[var(--sage)]/30 pl-6">
                <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>100%</p>
                <p className="text-sm text-[var(--muted-foreground)]">Customizable</p>
              </div>
              <div className="border-l-2 border-[var(--sage)]/30 pl-6">
                <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Island-wide</p>
                <p className="text-sm text-[var(--muted-foreground)]">Mobile Service</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="order-1 lg:order-2 relative h-[600px]">
            {/* Large image */}
            <div className="absolute top-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[0].url}
                alt={images[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Medium image 1 */}
            <div className="absolute bottom-12 left-0 w-2/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images[1].url}
                alt={images[1].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Medium image 2 */}
            <div className="absolute top-1/3 left-1/4 w-2/5 h-1/3 rounded-3xl overflow-hidden shadow-2xl z-10">
              <img
                src={images[2].url}
                alt={images[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--sage)] rounded-full opacity-20 blur-2xl" />
          </div>
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
            d="M0 30L60 40C120 50 240 70 360 75C480 80 600 70 720 60C840 50 960 40 1080 45C1200 50 1320 70 1380 80L1440 90V100H0V30Z"
            fill="#FDFBF7"
            fillOpacity="0.5"
          />
          <path
            d="M0 50L60 58C120 66 240 82 360 86C480 90 600 82 720 74C840 66 960 58 1080 62C1200 66 1320 82 1380 90L1440 98V100H0V50Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
