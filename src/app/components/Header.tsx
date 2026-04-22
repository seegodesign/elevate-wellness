import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../imports/logo.png";
import { serviceCategories } from "../data/services";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/75 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-start absolute left-6 top-0">
            <img
              src={logo}
              alt="Elevate Wellness Kauai"
              className="h-28 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services mega menu */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen((o) => !o)}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  isScrolled
                    ? "text-[var(--charcoal)] hover:text-[var(--ocean)]"
                    : "text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50" style={{ width: `${serviceCategories.length * 250}px` }}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[var(--border)]">
                  <div className={`grid divide-x divide-[var(--border)]`} style={{ gridTemplateColumns: `repeat(${serviceCategories.length}, 1fr)` }}>
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug} className="p-5">
                        <div className="mb-3">
                          <h3 className="font-semibold text-[var(--charcoal)] leading-snug text-md">
                            {cat.title}
                          </h3>
                          <p className="mt-1 text-sm text-[var(--charcoal)]/55 leading-snug">
                            {cat.description}
                          </p>
                        </div>
                        <ul className="space-y-0.5">
                          {cat.services.map((item) => (
                            <li key={item.name}>
                              <a
                                href="#services"
                                onClick={() => setIsServicesOpen(false)}
                                className="flex flex-col px-2 py-1.5 rounded-lg hover:bg-[var(--sand)] transition-colors duration-150 group"
                              >
                                <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--ocean)] transition-colors">
                                  {item.name}
                                </span>
                                {item.note && (
                                  <span className="text-xs text-[var(--sage)]">
                                    {item.note}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border)] px-5 py-3 bg-[var(--sand)]/50">
                    <a
                      href="#booking"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-sm text-[var(--sage)] font-medium hover:underline"
                    >
                      Book any service →
                    </a>
                  </div>
                </div>
                </div>
              )}
            </div>

            {navigation
              .filter((item) => item.name !== "Services")
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isScrolled
                      ? "text-[var(--charcoal)] hover:text-[var(--ocean)]"
                      : "text-white hover:underline"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            <button
              onClick={scrollToBooking}
              className="px-6 py-2 bg-[var(--sage)] text-white rounded-full hover:bg-[var(--sage-dark)] transition-all duration-300"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isScrolled ? "text-[var(--charcoal)]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-6 space-y-4">
              {/* Services expandable group */}
              <div className="space-y-4">
                {serviceCategories.map((cat) => (
                  <div key={cat.slug}>
                    <p className="text-xs tracking-widest uppercase text-[var(--ocean)] mb-1">
                      {cat.tag}
                    </p>
                    {cat.services.map((item) => (
                      <a
                        key={item.name}
                        href="#services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-2 py-1.5 text-[var(--charcoal)] hover:text-[var(--ocean)] transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--ocean)]/40" />
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-xs text-[var(--sage)] bg-[var(--sage)]/10 px-1.5 py-0.5 rounded-full">
                            {item.note}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--border)]" />
              {navigation
                .filter((item) => item.name !== "Services")
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[var(--charcoal)] hover:text-[var(--ocean)] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              <button
                onClick={scrollToBooking}
                className="px-6 py-3 bg-[var(--sage)] text-white rounded-full hover:bg-[var(--sage-dark)] transition-all duration-300 text-center"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
