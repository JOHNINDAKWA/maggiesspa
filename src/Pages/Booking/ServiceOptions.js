const serviceOptions = {
    Prenatal: {
      "Prenatal Treatments": [
        { label: "90 mins (2 treatments)", value: 90, price: "KES 11,300" },
        { label: "1 hr 45 mins (4 treatments)", value: 105, price: "KES 12,250" },
        { label: "2 hr (4 treatments)", value: 120, price: "KES 14,000" },
      ],
      Packages: [
        {
          label: "3x 2hr sessions (3 treatments)",
          value: 120,
          price: "KES 40,000",
        },
        {
          label: "Unveil (4 treatments) – 3hrs",
          value: 180,
          price: "KES 21,345",
        },
        {
          label: "Holistic Therapy (5 treatments) – 3hrs 30min",
          value: 210,
          price: "KES 31,800",
        },
      ],
      Massages: [
        { label: "60 mins", value: 60, price: "KES 6,000" },
        { label: "90 mins", value: 90, price: "KES 9,000" },
      ],
      "Bump Luxe Facial": [
        { label: "75 mins (3 treatments)", value: 75, price: "KES 8,535" },
      ],
    },
  
    Postpartum: {
      "Consecutive Packages": [
        {
          label: "3 Days (2 baby treatments + 4 mama treatments)",
          value: 90,
          price: "KES 21,000",
        },
        { label: "5 Days (2 baby + 7 mama)", value: 90, price: "KES 35,000" },
        { label: "7 Days (2 baby + 8 mama)", value: 90, price: "KES 50,000" },
        { label: "10 Days (2 baby + 10 mama)", value: 90, price: "KES 67,500" },
        { label: "14 Days (2 baby + 11 mama)", value: 90, price: "KES 92,000" },
        { label: "21 Days (2 baby + 13 mama)", value: 90, price: "KES 135,000" },
      ],
      "One-off Packages - Mama & Little One": [
        {
          label: "Little Hands, Big Hands (2 baby, 4 mama treatments) – 2-5 hrs",
          value: 150,
          price: "KES 22,740",
        },
        {
          label:
            "Golden Steps (2 baby treatments, gift baskets, custom video, 20 edited pics) – 2-3 hrs",
          value: 120,
          price: "KES 28,000",
        },
        {
          label: "Harmony After Loss (3 treatments, gift basket) – 3 hrs",
          value: 180,
          price: "KES 23,450",
        },
      ],
      "Postpartum Healing": [
        {
          label: "Postpartum Healing Therapy (4 treatments) – 2hrs",
          value: 120,
          price: "KES 14,250",
        },
        {
          label: "Post Birth Balance Session (3 treatments) – 2hrs",
          value: 120,
          price: "KES 11,320",
        },
        {
          label: "Golden Recovery Therapy (4 holistic treatments) – 3hrs 30mins",
          value: 210,
          price: "KES 31,800",
        },
      ],
      Massages: [
        { label: "75 mins", value: 75, price: "KES 6,500" },
        { label: "90 mins", value: 90, price: "KES 9,000" },
      ],
    },
  
    Fertility: {
      "Therapies & Rituals": [
        {
          label: "Pure Skin Therapy – 3 treatments (1 hr)",
          value: 60,
          price: "KES 5,700",
        },
        {
          label: "Foot Wellness Ritual – 2 treatments (1 hr 30 mins)",
          value: 90,
          price: "KES 8,535",
        },
        {
          label: "Bare and Beautiful – 4 treatments (1 hr 15 mins)",
          value: 75,
          price: "KES 5,300",
        },
        {
          label: "New Me Renewal – 2 treatments (1 hr)",
          value: 60,
          price: "KES 5,700",
        },
        {
          label: "Breast Divine Release – 2 treatments (1 hr 15 mins)",
          value: 75,
          price: "KES 7,000",
        },
      ],
      "Fertility Packages (each session 60 min)": [
        {
          label: "Starter Fertility – 3 sessions over 1 month (1 treatment)",
          value: 60,
          price: "KES 16,000",
        },
        {
          label: "Advanced Fertility – 6 sessions over 2 months (3 treatments)",
          value: 60,
          price: "KES 30,000",
        },
        {
          label:
            "Premium Fertility Boost – 9 sessions over 3 months (5 treatments)",
          value: 60,
          price: "KES 45,000",
        },
      ],
      Massages: [
        { label: "60 mins", value: 60, price: "KES 6,000" },
        { label: "90 mins", value: 90, price: "KES 8,000" },
        { label: "60 min – Home service", value: 60, price: "KES 8,500" },
      ],
    },
  
    Selfcare: {
      "Lymphatic Care": [
        {
          label: "Lymphatic Facial – 1 treatment (1 hr)",
          value: 60,
          price: "KES 4,500",
        },
        {
          label: "Lymphatic Full Body – 1 treatment (1 hr 15 mins)",
          value: 75,
          price: "KES 7,000",
        },
      ],
    },
  };

  export default serviceOptions