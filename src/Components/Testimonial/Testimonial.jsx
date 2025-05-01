import TestimonyHead from "../../assets/images/tri-color-leaves.png";
import Client1 from "../../assets/images/client1.png";
import Client2 from "../../assets/images/client2.png";
import Client3 from "../../assets/images/client3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    text: "Before Maggie’s spa, I was running on three hours of sleep and a sore back from carrying my little one. But the moment I walked in, pure bliss! The massages? Heavenly. The herbal treatments? Like a warm hug. I left feeling like a QUEEN. Highly recommend to any mama who needs to feel like herself again!",
    image: Client1,
    name: "Sophia M.",
  },
  {
    text: "I walked in exhausted and walked out floating! My muscles were tense from carrying my ‘tiny’ human, but one session at Maggie’s and I felt brand new. The tea, the aromatherapy, the care… I nearly asked if they had a membership because I never wanted to leave. Best postpartum treat ever!",
    image: Client2,
    name: "Linda K.",
  },
  {
    text: "After sleepless nights and endless diaper changes, I NEEDED this. The massage worked out knots I didn’t even know I had, and the herbal wraps? Pure magic. My husband said I looked five years younger! If you’re a new mom, don’t think twice—this is self-care on another level!",
    image: Client3,
    name: "Emily J.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
  };

  return (
    <div className="testimonial-container">
      <div className="overlay"></div>

      {/* Heading inside the overlay */}
      <div className="testimonial-header">

        <h2 className="testimonial-title">What Our Happy Moms Say</h2>
        {/* <p className="testimonial-subtitle">
          Real stories from real supermoms who found peace, relaxation, and healing at Maggie’s Postpartum Spa.
        </p> */}
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-item new-design">
            <div className="testimonial-card">
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-img"
              />
              <div className="testimonial-body">
                <p className="testimonial-text">"{item.text}"</p>
                <h4 className="client-name">— {item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
