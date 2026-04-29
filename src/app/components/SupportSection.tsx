import { Check, Zap } from "lucide-react";

export function SupportSection() {
  return (
    <section className="py-24 bg-[var(--sand)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[var(--blue-gray)] tracking-widest uppercase mb-4">
            Website Maintenance
          </p>
          <h2 className="text-4xl md:text-5xl mb-5" style={{ fontFamily: "var(--font-serif)" }}>
            We've Got You Covered
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Every plan includes peace-of-mind support so your site stays running perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Support */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-[var(--border)]">
            <div className="mb-6">
              <p className="text-[var(--sage)] font-semibold uppercase tracking-widest text-sm mb-2">
                Included with all plans
              </p>
              <h3 className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Basic Support
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Standard coverage included at no extra cost.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Issues resolved within 24 hours",
                "Bug fixes & content updates",
                "Email & messaging support",
                "Monthly performance check",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage)]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[var(--sage)]" />
                  </div>
                  <span className="text-[var(--charcoal)]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[var(--border)]">
              <p className="text-2xl font-semibold text-[var(--charcoal)]">
                Included <span className="text-base font-normal text-[var(--muted-foreground)]">/ free with your plan</span>
              </p>
            </div>
          </div>

          {/* Premium Support */}
          <div className="bg-[var(--charcoal)] rounded-3xl p-10 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-[var(--sage)] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Upgrade
            </div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/5 rounded-full" />

            <div className="mb-6 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[var(--sage)]" />
                <p className="text-[var(--sage)] font-semibold uppercase tracking-widest text-sm">
                  Premium
                </p>
              </div>
              <h3 className="text-3xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                Priority Support
              </h3>
              <p className="text-white/60">
                White-glove care for businesses that can't afford downtime.
              </p>
            </div>

            <ul className="space-y-4 mb-8 relative z-10">
              {[
                "Everything in Basic Support",
                "2-hour emergency response",
                "Dedicated account manager",
                "Weekly performance reports",
                "Priority feature requests",
                "Quarterly strategy call",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--sage)]/30 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[var(--sage)]" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10 relative z-10">
              <p className="text-3xl font-semibold">
                $497<span className="text-lg font-normal text-white/50"> / mo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
