import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../imports/logo.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isScrolled
                    ? "text-[var(--charcoal)] hover:text-[var(--ocean)]"
                    : "text-white hover:text-[var(--sage)]"
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
              {navigation.map((item) => (
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
