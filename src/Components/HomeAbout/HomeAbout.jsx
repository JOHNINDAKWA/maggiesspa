import './HomeAbout.css';
import Maggy from '../../assets/images/maggy20.jpg';
import Img1 from '../../assets/images/image1.jpg';
import Img2 from '../../assets/images/image2.jpg';
import Img3 from '../../assets/images/image3.jpg';
import Img4 from '../../assets/images/image4.jpg';
import Img5 from '../../assets/images/two.jpg';
import Img6 from '../../assets/images/six.jpg';
import Marquee from 'react-fast-marquee';

const HomeAbout = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <div className="home-about-container">
      {/* Left Side: Maggy's Image */}
      <div className="home-about-image">
        <img src={Maggy} alt="Founder of Maggie's Spa" />
      </div>

      {/* Right Side: About Section + Image Slider */}
      <div className="home-about-content">
      <h2>The Heart of Maggie’s</h2>
        <div className="home-about-line"></div>
        <p className="home-about-subtitle">Where Motherhood Meets Wellness</p>
        <p className="home-about-details">
          <strong>Maggie's Pregnancy & Postpartum Spa</strong> is a sanctuary for every woman’s journey—
          from pregnancy to postpartum and beyond. With a decade of experience in luxury wellness,
          our treatments combine traditional healing with modern care. Here, each session is designed
          to restore, uplift, and honor your unique transformation as a mother and a woman.
        </p>

        {/* Marquee Slider */}
        <div className="home-about-slider">
          <Marquee speed={50} pauseOnHover={true} gradient={false}>
            {images.map((img, i) => (
              <img key={i} src={img} alt={`Slide ${i}`} className="slider-img" />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
