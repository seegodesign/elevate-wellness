import { motion } from "motion/react";
import { Award, MapPin, Heart, Waves } from "lucide-react";

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Licensed Therapists",
      description: "All our massage therapists are licensed, insured, and have years of experience in therapeutic bodywork."
    },
    {
      icon: MapPin,
      title: "Convenient Mobile Service",
      description: "We come to you anywhere in Kauai - your hotel, vacation rental, or favorite beach spot."
    },
    {
      icon: Waves,
      title: "Relaxing Beachside Setup",
      description: "Experience the magic of massage therapy with ocean waves and tropical breezes as your backdrop."
    },
    {
      icon: Heart,
      title: "Personalized Treatments",
      description: "Every session is customized to your needs, preferences, and comfort level. Your wellness, your way."
    }
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--ocean-dark)]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--orange)] tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-6xl text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Elevate difference.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Friendly, professional, and dedicated to creating the perfect relaxation experience for you.
          </p>
        </motion.div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <div className="mb-5 w-14 h-14 rounded-full bg-[var(--orange)]/20 border border-[var(--orange)]/30 flex items-center justify-center group-hover:bg-[var(--orange)]/30 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[var(--orange)]" />
                </div>
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
