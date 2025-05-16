import Service_1 from '../../assets/images/spa-services/mag6.jpg';
import Service_2 from '../../assets/images/spa-services/mag36.jpg';
import Service_3 from '../../assets/images/spa-services/mag10.jpg';
import Service_4 from '../../assets/images/spa-services/mag20.png';
import Service_5 from '../../assets/images/spa-services/mag16.png';
import Service_6 from '../../assets/images/spa-services/mag7.jpg';
import Service_7 from '../../assets/images/spa-services/mag34.jpg';
import Service_8 from '../../assets/images/spa-services/mag8.jpg';
import Service_9 from '../../assets/images/spa-services/mag2.jpg';
import Service_10 from '../../assets/images/spa-services/mag14.png';

const services = [
  {
    id: 1,
    title: "Prenatal Services",
    description: "Relieve back pain, improve circulation, and relax with safe, tailored techniques for moms-to-be.",
    detailed: "Designed to reduce muscle tension, improve circulation, and relieve common discomforts such as back pain and swelling. Tailored techniques ensure both mother and baby remain safe and comfortable.",
    image: Service_1,
    link: "/services/prenatal-massage",
    benefits: [
      "Reduces swelling and joint pain",
      "Improves sleep and relaxation"
    ],
    extras: [
      "Safe, pregnancy-approved techniques",
      "Can be combined with aromatherapy for relaxation"
    ]
  },
  {
    id: 2,
    title: "Postpartum Services",
    description: "Ease physical stress after childbirth, reduce pain, and speed up postpartum recovery.",
    detailed: "Focuses on easing the physical stresses of childbirth and speeding up recovery. Helps to reduce pain, improve mobility, and promote relaxation during the healing process.",
    image: Service_2,
    link: "/services/postpartum-massage",
    benefits: [
      "Speeds up postpartum healing",
      "Reduces anxiety and postpartum blues"
    ],
    extras: [
      "Helps in hormone regulation",
      "Supports better sleep patterns"
    ]
  },
  {
    id: 3,
    title: "Self-Care Services",
    description: "Luxurious treatments for skin, feet, and feminine wellness.",
    detailed:
      "Our Signature Self-Care Rituals are designed to nourish your skin, restore your energy, and honor your feminine essence. These treatments combine holistic techniques, ancient herbal traditions, and gentle cosmetic therapies to provide deep healing and radiant renewal from head to toe.",
    image: Service_3, // Replace with actual imported image
    link: "/services/self-care",
    benefits: [
      "Rejuvenates skin, feet, and intimate areas",
      "Boosts confidence and feminine well-being",
      "Supports emotional grounding and hormonal harmony"
    ],
    extras: [
      "Customized care with herbal ingredients, massage, and semi-cosmetic treatments",
      "Perfect for postpartum rejuvenation or everyday feminine restoration"
    ]
  },
  {
    id: 4,
    title: "Women's Wellness & Fertility",
    description: "Holistic therapies for breast health, emotional balance, and fertility support.",
    detailed:
      "Our Women's Wellness & Fertility service integrates nurturing breast care and transformative fertility rituals to empower women's health. From emotional healing and lymphatic therapy to fertility massage and reproductive detox, each session is a sacred path to renewal. Ideal for women preparing for conception, healing post-mastectomy, or simply reclaiming their vitality, this offering supports balance, detox, and emotional clarity.",
    image: Service_9, 
    link: "/services/womens-wellness",
    benefits: [
      "Stimulates reproductive and hormonal balance",
      "Relieves tension, migraines, and supports breast wellness",
      "Supports fertility naturally and emotionally"
    ],
    extras: [
      "Includes fertility massage, craniosacral therapy, herbal detox, and guided wellness rituals",
      "Tailored for pre-conception support, post-loss healing, and breast health enhancement"
    ]
  },


  {
    id: 5,
    title: "Postpartum Recovery & Herbal Support",
    description: "Rejuvenate, heal, and restore your body with holistic postpartum care.",
    detailed: "This combined service supports both the physical and hormonal aspects of recovery using therapeutic techniques and natural herbs to promote energy, healing, and lactation.",
    image: Service_6,
    link: "/services/postpartum-recovery-complete",
    benefits: [
      "Accelerates physical healing after childbirth",
      "Supports milk production and hormonal balance"
    ],
    extras: [
      "Includes organic recovery herbs",
      "Available as a package with massage or belly binding"
    ]
  },
  {
    id: 6,
    title: "Belly Binding Therapy",
    description: "Support your abdomen and aid recovery with traditional belly wrapping.",
    detailed: "Gentle compression around the midsection helps re-engage core muscles, supports the uterus, and relieves postpartum back pain.",
    image: Service_7,
    link: "/services/belly-binding",
    benefits: [
      "Improves posture and core stability",
      "Reduces bloating and discomfort"
    ],
    extras: [
      "Includes one-on-one guidance on application",
      "Comes with your own belly binder"
    ]
  },
  {
    id: 7,
    title: "Belly Scrub and Mask",
    description: "Nourishing treatments for your growing belly.",
    detailed: "Rejuvenate and hydrate your belly with natural scrubs and masks designed for pregnancy-safe pampering.",
    image: Service_4,
    link: "/services/belly-scrub-mask",
    benefits: [
      "Softens and smooths belly skin",
      "Reduces dryness and irritation"
    ],
    extras: [
      "Safe for all pregnancy stages",
      "Includes optional glow-boosting mask"
    ]
  },
  {
    id: 8,
    title: "At-Home Pregnancy Massage",
    description: "VIP prenatal spa session in your home — flowers, chocolate & care included.",
    detailed: "A luxurious prenatal massage experience in the comfort of your home with thoughtful extras like floral decor and a personal congratulatory message.",
    image: Service_5,
    link: "/services/at-home-massage",
    benefits: [
      "Convenient and private prenatal pampering",
      "Enhances emotional well-being"
    ],
    extras: [
      "Includes flowers and chocolate",
      "Designed to celebrate your pregnancy journey"
    ]
  },

  {
    id: 9,
    title: "Natural Womb Detox",
    description: "Traditional cleansing therapies for uterine health.",
    detailed: "Herbal and steam-based techniques to clear toxins, reduce bloating, and support a clean reproductive system.",
    image: Service_10,
    link: "/services/womb-detox",
    benefits: [
      "Eliminates toxin buildup",
      "Reduces inflammation in the womb"
    ],
    extras: [
      "Yoni steam and tea options available",
      "Works well post-birth or before conception"
    ]
  },
  {
    id: 10,
    title: "Holistic Preconception Care",
    description: "Optimize your body for pregnancy naturally and holistically.",
    detailed: "A full-body and lifestyle approach to conception that boosts wellness, reproductive health, and fertility confidence.",
    image: Service_8,
    link: "/services/preconception-care",
    benefits: [
      "Enhances natural fertility",
      "Supports emotional and physical preparation"
    ],
    extras: [
      "Endorsed by fertility specialists",
      "Ideal before natural or assisted conception"
    ]
  }
];

export default services;
