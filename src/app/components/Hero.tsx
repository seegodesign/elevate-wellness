import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/70 via-[var(--ocean)]/50 to-[var(--sage)]/20 z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/src/imports/12453948-hd_1280_720_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-2 mb-6"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[var(--yellow)] text-[var(--yellow)]" />
            ))}
          </div>
          <div className="text-white/90 tracking-wide">Voted #1 Wellness Service in Kapa’a</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Kauai's Top-rated<br />
          Wellness Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
        >
          Couples massage, mobile services, and oceanside experiences — tailored wellness wherever you are on Kauai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#booking"
            className="px-10 py-4 bg-[var(--sage)] text-white rounded-full hover:bg-[var(--sage-dark)] transition-all duration-300 shadow-2xl hover:shadow-[var(--sage)]/50 hover:scale-105"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="px-10 py-4 bg-white/10 backdrop-blur-md text-white rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Decorative wave element */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 48L60 56C120 64 240 80 360 80C480 80 600 64 720 56C840 48 960 48 1080 52C1200 56 1320 64 1380 68L1440 72V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V48Z"
            fill="#F5EFE7"
          />
        </svg>
      </div> */}
    </section>
  );
}
