import { motion } from "motion/react";
import { serviceCategories } from "../data/services";

export function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--charcoal)] relative" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[var(--orange)] tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2
              className="text-4xl md:text-6xl text-white leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Every body. Every setting.
            </h2>
          </div>
          <p className="text-white/50 max-w-xs md:text-right leading-relaxed">
            From private rooms to open beaches — tailored wellness wherever you are on Kauai.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Image header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
                <div className="absolute top-5 left-5">
                  <span className="text-xs tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {category.tag}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3
                    className="text-2xl text-white"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service list */}
              <div className="bg-white/5 border border-white/10 border-t-0 rounded-b-2xl p-5 flex-1 flex flex-col">
                <ul className="columns-2 gap-x-4 space-y-2.5 flex-1">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex items-start gap-2 break-inside-avoid">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--orange)] shrink-0" />
                      <span className="text-white/80 text-sm leading-snug">
                        {service.name}
                        {service.note && (
                          <span className="block text-[var(--orange)] text-xs mt-0.5">
                            {service.note}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-2 text-[var(--orange)] text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  Book this service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom curve into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 20C240 80 480 100 720 100C960 100 1200 80 1440 20V100H0V20Z"
            fill="#F5EFE7"
          />
        </svg>
      </div>
    </section>
  );
}
