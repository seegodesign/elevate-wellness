import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile version (bottom center) */}
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToBooking}
            className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-[var(--sage)] text-white rounded-full shadow-2xl hover:shadow-[var(--sage)]/50 flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </motion.button>

          {/* Desktop version (bottom right) */}
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToBooking}
            className="hidden md:flex fixed bottom-8 right-8 z-50 px-8 py-4 bg-[var(--sage)] text-white rounded-full shadow-2xl hover:shadow-[var(--sage)]/50 items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}
