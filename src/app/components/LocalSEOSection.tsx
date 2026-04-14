import { MapPin, Phone, Mail } from "lucide-react";

export function LocalSEOSection() {
  return (
    <section className="py-24 bg-[var(--sand)] relative">
      {/* Top spacing for curve from previous section */}
      <div className="h-8" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map/Location Visual */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1674095164399-f239aadf476a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Kauai coastline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean)]/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  Serving All of Kauai
                </h3>
                <p className="text-white/90">
                  Based in Kapa'a • Mobile Service Island-Wide
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Professional Massage Services Across Kauai
            </h2>
            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
              Elevate Wellness Kauai proudly offers premium <strong>massage services in Kauai</strong>, specializing in <strong>couples massage</strong>, <strong>mobile massage therapy</strong>, and unique <strong>beachside massage experiences</strong>. Based in <strong>Kapa'a</strong>, we provide convenient mobile services throughout the island, from Princeville to Poipu.
            </p>
            <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
              Whether you're staying in Princeville, Hanalei, Kapaa, Lihue, Koloa, or Poipu, our licensed massage therapists bring professional wellness services directly to you. From <strong>relaxing Swedish massage</strong> to <strong>therapeutic deep tissue</strong> and <strong>acupuncture therapy</strong>, we customize every session to meet your needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--ocean)]" />
                </div>
                <div>
                  <h4 className="mb-1">Service Areas</h4>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    Princeville • Hanalei • Kapa'a • Lihue • Koloa • Poipu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--ocean)]" />
                </div>
                <div>
                  <h4 className="mb-1">Call or Text</h4>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    (808) 555-0123
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--ocean)]" />
                </div>
                <div>
                  <h4 className="mb-1">Email Us</h4>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    info@elevatewellnesskauai.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
