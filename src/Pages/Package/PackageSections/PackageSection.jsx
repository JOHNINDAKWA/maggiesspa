import Price1 from "../../../assets/images/price1.jpg";
import Price2 from "../../../assets/images/price2.jpg";
import Price3 from "../../../assets/images/price3.jpg";
import Price4 from "../../../assets/images/price4.jpg";
import Price5 from "../../../assets/images/price5.jpg";
import Price6 from "../../../assets/images/price6.jpg";
import Price7 from "../../../assets/images/price7.jpg";
import Price8 from "../../../assets/images/price8.jpg";
import './PackageSection.css'

const serviceCategories = [
  {
    heading: "Prenatal",
    subgroups: [

      {
        title: "Prenatal Treatments",
        image: Price2,
        services: [
          { description: "90 mins (2 treatments)", price: "KES 11,300" },
          { description: "1 hr 45 mins (4 treatments)", price: "KES 12,250" },
          { description: "2 hr (4 treatments)", price: "KES 14,000" }
        ]
      },
      {
        title: "Packages",
        image: Price4,
        services: [
          { description: "3x 2hr sessions (3 treatments)", price: "KES 40,000" },
          { description: "Unveil (4 treatments) – 3hrs", price: "KES 21,345" },
          { description: "Holistic Therapy (5 treatments) – 3hrs 30min", price: "KES 31,800" }
        ]
      },
      {
        title: "Massages",
        image: Price1,
        services: [
          { description: "60 mins", price: "KES 6,000" },
          { description: "90 mins", price: "KES 9,000" }
        ]
      },
      {
        title: "Bump Luxe Facial",
        image: Price3,
        services: [
          { description: "75 mins (3 treatments)", price: "KES 8,535" }
        ]
      },

    ]
  },
  {
    heading: "Postpartum",
    subgroups: [
      {
        title: "Consecutive Packages",
        image: Price8,
        services: [
          { description: "3 Days (2 baby treatments + 4 mama treatments)", price: "KES 21,000" },
          { description: "5 Days (2 baby + 7 mama)", price: "KES 35,000" },
          { description: "7 Days (2 baby + 8 mama)", price: "KES 50,000" },
          { description: "10 Days (2 baby + 10 mama)", price: "KES 67,500" },
          { description: "14 Days (2 baby + 11 mama)", price: "KES 92,000" },
          { description: "21 Days (2 baby + 13 mama)", price: "KES 135,000" }
        ]
      },
      {
        title: "One-off Packages - Mama & Little One",
        image: Price7,
        services: [
          { description: "Little Hands, Big Hands (2 baby, 4 mama treatments) – 2-5 hrs", price: "KES 22,740" },
          { description: "Golden Steps (2 baby treatments, gift baskets, custom video, 20 edited pics) – 2-3 hrs", price: "KES 28,000" },
          { description: "Harmony After Loss (3 treatments, gift basket) – 3 hrs", price: "KES 23,450" }
        ]
      },
      {
        title: "Postpartum Healing",
        image: Price6,
        services: [
          { description: "Postpartum Healing Therapy (4 treatments) – 2hrs", price: "KES 14,250" },
          { description: "Post Birth Balance Session (3 treatments) – 2hrs", price: "KES 11,320" },
          { description: "Golden Recovery Therapy (4 holistic treatments) – 3hrs 30mins", price: "KES 31,800" }
        ]
      },
      {
        title: "Massages",
        image: Price5,
        services: [
          { description: "75 mins", price: "KES 6,500" },
          { description: "90 mins", price: "KES 9,000" }
        ]
      },

    ]
  },
  {
    heading: "Fertility",
    subgroups: [
      {
        title: "Therapies & Rituals",
        image: Price3,
        services: [
          { description: "Pure Skin Therapy – 3 treatments (1 hr)", price: "KES 5,700" },
          { description: "Foot Wellness Ritual – 2 treatments (1 hr 30 mins)", price: "KES 8,535" },
          { description: "Bare and Beautiful – 4 treatments (1 hr 15 mins)", price: "KES 5,300" },
          { description: "New Me Renewal – 2 treatments (1 hr)", price: "KES 5,700" },
          { description: "Breast Divine Release – 2 treatments (1 hr 15 mins)", price: "KES 7,000" }
        ]
      },
      
      {
        title: "Fertility Packages (each session 60 min)",
        image: Price2,
        services: [
          { description: "Starter Fertility – 3 sessions over 1 month (1 treatment)", price: "KES 16,000" },
          { description: "Advanced Fertility – 6 sessions over 2 months (3 treatments)", price: "KES 30,000" },
          { description: "Premium Fertility Boost – 9 sessions over 3 months (5 treatments)", price: "KES 45,000" }
        ]
      },
      {
        title: "Massages",
        image: Price1,
        services: [
          { description: "60 mins", price: "KES 6,000" },
          { description: "90 mins", price: "KES 8,000" },
          { description: "60 min – Home service", price: "KES 8,500" }
        ]
      }
    ]
  },
  {
    heading: "Selfcare Services",
    subgroups: [

      {
        title: "Lymphatic Care",
        image: Price4,
        services: [
          { description: "Lymphatic Facial – 1 treatment (1 hr)", price: "KES 4,500" },
          { description: "Lymphatic Full Body – 1 treatment (1 hr 15 mins)", price: "KES 7,000" }
        ]
      }
    ]
  }
];

const PackageSection = () => {
  return (
    <section className="package-section2">
    <div className="package-wrapper2">
      {serviceCategories.map((category, catIdx) => (
        <div key={catIdx} className="category-row2">
          <h2 className="category-heading2">{category.heading}</h2>
          <div className="subcategory-row2">
            {category.subgroups.map((sub, subIdx) => (
              <div key={subIdx} className="subcategory-card2">
                <div className="subcategory-content2">
                  <div className="subcategory-info2">
                    <h3 className="subcategory-title2">{sub.title}</h3>
                    <ul className="service-list2">
                      {sub.services.map((service, i) => (
                        <li key={i} className="service-item2">
                          <span className="service-description2">{service.description}</span>
                          <span className="service-price2">{service.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default PackageSection;