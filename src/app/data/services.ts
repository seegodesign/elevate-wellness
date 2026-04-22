export interface ServiceItem {
  name: string;
  note?: string;
}

export interface ServiceCategory {
  slug: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "massage-therapy",
    tag: "Massage",
    title: "Massage Therapy",
    description:
      "From relaxing to therapeutic — a full range of massage modalities tailored to your needs.",
    image:
      "https://images.unsplash.com/photo-1770625467514-f072c8a64a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Deep Tissue" },
      { name: "Lomi-Lomi" },
      { name: "Couples Massage" },
      { name: "Pre-natal" },
      { name: "Sports" },
      { name: "Thai" },
      { name: "Shiatsu" },
      { name: "Massage Cupping" },
      { name: "Custom Massage" },
      { name: "Structural Integration" },
      { name: "Large Group Massage", note: "Discounted Rate" },
    ],
  },
  {
    slug: "acupuncture",
    tag: "Acupuncture",
    title: "Acupuncture",
    description:
      "Restore balance and relieve pain with time-tested holistic therapies.",
    image:
      "https://images.unsplash.com/photo-1740689580128-9173edce303f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Foot Reflexology" },
      { name: "Moxabustion" },
      { name: "Cupping" },
      { name: "Tuning Forks" },
      { name: "E-Stim" },
    ],
  },
  {
    slug: "health-coaching",
    tag: "Wellness",
    title: "Health Coaching",
    description:
      "Personalized guidance to support your health, nutrition, and lifestyle goals.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Weight Loss" },
      { name: "Diet & Cleansing Plans" },
    ],
  },
];
