import "./MembershipPlans.css";

const membershipPlans = [
  {
    title: "Silver Membership",
    price: "KES 25,000 ($175) per month",
    features: [
      "2 Prenatal or Postpartum Massages",
      "1 Pregnancy Facial",
      "Access to 2 Support Group Workshops"
    ],
    gradient: "linear-gradient(135deg, #b0bec5,rgb(112, 112, 112))",
    buttonColor: "rgb(112, 112, 112)"
  },
  {
    title: "Gold Membership",
    price: "KES 40,000 ($280) per month",
    features: [
      "4 Prenatal or Postpartum Massages",
      "1 Full Body Exfoliation & Skin Treatment",
      "2 Prenatal Yoga Classes",
      "1 Herbal Sitz Bath"
    ],
    gradient: "linear-gradient(135deg, #ffd700,rgb(93, 71, 4))",
    buttonColor: "rgb(93, 71, 4)"
  },
  {
    title: "Platinum Membership",
    price: "KES 60,000 ($420) per month",
    features: [
      "6 Prenatal or Postpartum Massages",
      "2 Facials or Body Treatments",
      "Unlimited Yoga & Wellness Classes",
      "Full Access to Support Groups & Workshops",
      "Monthly Wellness Consultation"
    ],
    gradient: "linear-gradient(135deg, #7c4dff,rgb(49, 4, 148))",
    buttonColor: "rgb(49, 4, 148)"
  }
];

const MembershipPlans = () => {
  return (
    <section className="membership-container2">
      <h2 className="membership-heading2">
        Membership Plans <span>(Exclusive Wellness Access)</span>
      </h2>
      <p className="membership-subtext2">
        Ideal for repeat clients who want regular wellness treatments at a discount.
      </p>
      <div className="membership-grid2">
        {membershipPlans.map((plan, index) => (
          <div key={index} className="membership-card2" style={{ background: plan.gradient }}>
            <h3 className="membership-title2">{plan.title}</h3>
            <p className="membership-price2">{plan.price}</p>
            <ul className="membership-features2">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="join-now-btn2"
              style={{ background: plan.buttonColor }}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
