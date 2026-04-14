import { motion } from "motion/react";

export function VideoSection() {
  return (
    <section className="py-20 bg-[var(--sand)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl text-[var(--ocean-dark)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Experience the Aloha Spirit
          </h2>
          <p className="text-lg text-[var(--ocean)]/80 max-w-2xl mx-auto">
            See what a session with us feels like — from the moment you arrive to the moment you leave restored.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/z2jzDwmGaIY?rel=0&modestbranding=1"
            title="Elevate Wellness experience video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
