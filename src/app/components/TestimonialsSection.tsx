import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jennifer & Mark",
      location: "Seattle, WA",
      text: "The couples massage on the beach was the highlight of our honeymoon. The sound of the waves, the professional setup, and the skilled therapists made it absolutely magical. Highly recommend!",
      rating: 5
    },
    {
      name: "David L.",
      location: "Los Angeles, CA",
      text: "I've had massages all over the world, and this was top-tier. The mobile service was so convenient - they came right to our vacation rental. Deep tissue was exactly what I needed after hiking the Na Pali Coast.",
      rating: 5
    },
    {
      name: "Amanda & Chris",
      location: "Chicago, IL",
      text: "We were nervous about finding quality massage on the island, but Elevate Wellness exceeded expectations. Friendly, professional, and the beachside experience was unforgettable. Thank you!",
      rating: 5
    },
    {
      name: "Robert M.",
      location: "Denver, CO",
      text: "The acupuncture session helped my lower back pain that had been bothering me for months. Combined with the massage, I felt like a new person. The therapists really know their craft.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[var(--warm-white)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--sand)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[var(--blue-gray)] tracking-widest uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Loved by Visitors & Locals
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Real experiences from real people who found their moment of peace with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--yellow)] text-[var(--yellow)]" />
                ))}
              </div>

              <p className="text-[var(--charcoal)] mb-6 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--ocean)] to-[var(--sage)] flex items-center justify-center text-white text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--ocean)] hover:text-[var(--ocean-light)] transition-colors"
          >
            Read more reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
            d="M0 30L80 35C160 40 320 50 480 45C640 40 800 20 960 15C1120 10 1280 20 1360 25L1440 30V100H1360C1280 100 1120 100 960 100C800 100 640 100 480 100C320 100 160 100 80 100H0V30Z"
            fill="#698DA0"
            fillOpacity="0.3"
          />
          <path
            d="M0 50L80 55C160 60 320 70 480 65C640 60 800 40 960 35C1120 30 1280 40 1360 45L1440 50V100H1360C1280 100 1120 100 960 100C800 100 640 100 480 100C320 100 160 100 80 100H0V50Z"
            fill="#698DA0"
          />
        </svg>
      </div>
    </section>
  );
}
