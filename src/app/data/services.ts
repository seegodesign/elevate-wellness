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
    slug: "signature-relaxation",
    tag: "Signature",
    title: "Signature & Relaxation",
    description:
      "Iconic experiences designed for rest and connection — from Hawaiian Lomi-Lomi to couples and group sessions.",
    image:
      "https://images.unsplash.com/photo-1770625467514-f072c8a64a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Lomi-Lomi" },
      { name: "Couples Massage" },
      { name: "Custom Massage" },
      { name: "Large Group Massage", note: "Discounted Rate" },
    ],
  },
  {
    slug: "therapeutic-rehabilitative",
    tag: "Therapeutic",
    title: "Therapeutic & Rehabilitative",
    description:
      "Goal-oriented modalities focused on pain relief, recovery, and structural wellness.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Deep Tissue" },
      { name: "Sports" },
      { name: "Pre-natal" },
      { name: "Structural Integration" },
      { name: "Massage Cupping" },
    ],
  },
  {
    slug: "specialty-bodywork",
    tag: "Specialty",
    title: "Specialty Bodywork",
    description:
      "Eastern and cultural techniques that go beyond the ordinary — balancing body, breath, and energy.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    services: [
      { name: "Thai" },
      { name: "Shiatsu" },
    ],
  },
];
