import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "../../imports/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: "Couples Massage", href: "#services" },
      { name: "Mobile Massage", href: "#services" },
      { name: "Beachside Massage", href: "#services" },
      { name: "Acupuncture", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Book Now", href: "#booking" },
      { name: "Contact", href: "#contact" }
    ],
    areas: [
      { name: "Princeville", href: "#" },
      { name: "Kapa'a", href: "#" },
      { name: "Lihue", href: "#" },
      { name: "Poipu", href: "#" }
    ]
  };

  return (
    <footer className="bg-[var(--charcoal)] text-white relative">
      {/* Top curve divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full transform rotate-180"
        >
          <path
            d="M0 20L120 30C240 40 480 60 720 60C960 60 1200 40 1320 30L1440 20V80H0V20Z"
            fill="#F5EFE7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Elevate Wellness Kauai"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium massage and wellness services in Kauai. Specializing in couples massage, mobile therapy, and beachside experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--sage)] flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--sage)] flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[var(--sage)] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[var(--sage)] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Service Areas
            </h4>
            <ul className="space-y-3">
              {navigation.areas.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[var(--sage)] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sage)]/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[var(--sage)]" />
              </div>
              <div>
                <p className="text-sm text-white/60">Call or Text</p>
                <a href="tel:808-555-0123" className="hover:text-[var(--sage)] transition-colors">
                  (808) 555-0123
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sage)]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[var(--sage)]" />
              </div>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <a href="mailto:info@elevatewellnesskauai.com" className="hover:text-[var(--sage)] transition-colors">
                  info@elevatewellnesskauai.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sage)]/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[var(--sage)]" />
              </div>
              <div>
                <p className="text-sm text-white/60">Based in</p>
                <p>Kapa'a, Kauai, HI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Elevate Wellness Kauai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-[var(--sage)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--sage)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
