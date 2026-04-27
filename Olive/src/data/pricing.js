export const plans = [
  {
    id: "monthly",
    name: "monthly",
    price: "$14.99",
    period: "/mo",
    badge: null,
    features: [
      { text: "Unlimited Scans", highlight: false },
      { text: "Unlimited Database Searches", highlight: false },
      { text: "Comprehensive Lab-Testing Data", highlight: false },
    ],
    variant: "light",
  },
  {
    id: "yearly",
    name: "yearly",
    price: "$69.99",
    period: "/yr",
    badge: "Best Value",
    features: [
      { text: "Everything in monthly plan", highlight: false },
      { text: "Get 7 months free", highlight: false },
      { text: "60% Savings", highlight: true },
    ],
    variant: "dark",
  },
];
