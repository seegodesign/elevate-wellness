export function ExperienceSection() {
  const bgImage = "https://images.unsplash.com/photo-1593993709859-4b95f2c2ff6a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Palm trees on Kauai beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-[var(--sage)] tracking-widest uppercase mb-4">
          The Experience
        </p>
        <h2 className="text-4xl md:text-6xl mb-6 leading-tight text-white" style={{ fontFamily: 'var(--font-serif)' }}>
          Where Island Paradise<br />
          Meets Deep Relaxation
        </h2>
        <p className="text-lg text-white/70 mb-6 leading-relaxed">
          Imagine the gentle sound of waves, the warm Hawaiian sun, and skilled hands melting away every tension in your body.
        </p>
        <p className="text-lg text-white/70 mb-12 leading-relaxed">
          This isn't just a massage — it's an escape into pure tranquility. Whether you're celebrating an anniversary, honeymoon, or simply treating yourself, we create moments you'll treasure forever.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-white">
          <div>
            <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>60-90min</p>
            <p className="text-sm text-white/55">Session Options</p>
          </div>
          <div className="border-l border-white/20 pl-10">
            <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>100%</p>
            <p className="text-sm text-white/55">Customizable</p>
          </div>
          <div className="border-l border-white/20 pl-10">
            <p className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Island-wide</p>
            <p className="text-sm text-white/55">Mobile Service</p>
          </div>
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
            d="M0 30L60 40C120 50 240 70 360 75C480 80 600 70 720 60C840 50 960 40 1080 45C1200 50 1320 70 1380 80L1440 90V100H0V30Z"
            fill="#F5F0E9"
            fillOpacity="0.5"
          />
          <path
            d="M0 50L60 58C120 66 240 82 360 86C480 90 600 82 720 74C840 66 960 58 1080 62C1200 66 1320 82 1380 90L1440 98V100H0V50Z"
            fill="#F5F0E9"
          />
        </svg>
      </div>
    </section>
  );
}
