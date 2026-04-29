import { useState } from "react";
import { Building2, Waves } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Location = "indoor" | "oceanfront";

const EMBEDS: Record<Location, { src: string; id: string }> = {
  indoor: {
    src: "https://api.leadconnectorhq.com/widget/group/r41cRr67i4wvr0I75paj",
    id: "r41cRr67i4wvr0I75paj_1777359498865",
  },
  oceanfront: {
    src: "https://api.leadconnectorhq.com/widget/group/001OycXJ4NA6CvB4nMFU",
    id: "001OycXJ4NA6CvB4nMFU_booking_page",
  },
};

export function BookingPage() {
  const [location, setLocation] = useState<Location>("indoor");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[var(--ocean)] via-[var(--blue-gray)] to-[var(--sage)] text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[var(--sage)]/20 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <p className="text-white tracking-widest uppercase mb-4">Elevate Wellness Kauai</p>
          <h1 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Book Your Session
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Choose a time that works for you. Same-day appointments often available.
          </p>

          {/* Location picker */}
          <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Where would you like your massage?</p>
          <div className="inline-flex rounded-2xl bg-white/10 border border-white/20 p-1.5 gap-1.5">
            <button
              onClick={() => setLocation("indoor")}
              className={`flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                location === "indoor"
                  ? "bg-[var(--sage)] text-white shadow-lg scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Indoor Studio
            </button>
            <button
              onClick={() => setLocation("oceanfront")}
              className={`flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                location === "oceanfront"
                  ? "bg-[var(--ocean)] text-white shadow-lg scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Waves className="w-5 h-5" />
              Oceanfront
            </button>
          </div>
        </div>
      </section>

      {/* Booking widget */}
      <section className="flex-1 bg-[var(--sand)] py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <iframe
            key={location}
            src={EMBEDS[location].src}
            style={{ width: "100%", minHeight: "800px", border: "none", overflow: "hidden" }}
            scrolling="no"
            id={EMBEDS[location].id}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
