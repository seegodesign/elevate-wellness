import { MapPin, Phone, Mail } from "lucide-react";

export function LocalSEOSection() {
  return (
    <section className="relative py-24 bg-[#F5EFE7]">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12 text-[var(--charcoal)]">
          <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Serving All of Kauai
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            Based in Kapa'a · Mobile Service Island-Wide
          </p>
        </div>

        {/* SEO paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
            Elevate Wellness Kauai proudly offers premium <strong className="text-[var(--blue-gray)]">massage services in Kauai</strong>, specializing in <strong className="text-[var(--blue-gray)]">couples massage</strong>, <strong className="text-[var(--blue-gray)]">mobile massage therapy</strong>, and unique <strong className="text-[var(--blue-gray)]">beachside massage experiences</strong>. Based in <strong className="text-[var(--blue-gray)]">Kapa'a</strong>, we provide convenient mobile services throughout the island, from Princeville to Poipu.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            Whether you're staying in Princeville, Hanalei, Kapaa, Lihue, Koloa, or Poipu, our licensed massage therapists bring professional wellness services directly to you. From <strong className="text-[var(--blue-gray)]">relaxing Swedish massage</strong> to <strong className="text-[var(--blue-gray)]">therapeutic deep tissue</strong>, we customize every session to meet your needs.
          </p>
        </div>

        {/* 3-column info row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-4 bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[var(--ocean)]" />
            </div>
            <div>
              <h4 className="text-[var(--charcoal)] mb-1 text-2xl">Service Areas</h4>
              <p className="text-[var(--muted-foreground)] text-sm">
                Princeville · Hanalei · Kapa'a · Lihue · Koloa · Poipu
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-[var(--ocean)]" />
            </div>
            <div>
              <h4 className="text-[var(--charcoal)] mb-1 text-2xl">Call or Text</h4>
              <p className="text-[var(--muted-foreground)] text-sm">(808) 555-0123</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--ocean)]/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[var(--ocean)]" />
            </div>
            <div>
              <h4 className="text-[var(--charcoal)] mb-1 text-2xl">Email Us</h4>
              <p className="text-[var(--muted-foreground)] text-sm">info@elevatewellnesskauai.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
