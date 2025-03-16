import './HomeAbout.css';
import Maggy from '../../assets/images/maggy3.jpeg';
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
          <h2>About Us</h2>
          <div className="home-about-line"></div>
          <p className="home-about-subtitle">Healing, Relaxation & Empowerment</p>
          <p className="home-about-details">
            Welcome to <strong>Maggie's Pregnancy & Postpartum Spa</strong>, where motherhood meets 
            rejuvenation. We specialize in nurturing treatments designed to ease the journey of 
            pregnancy and postpartum recovery. Our goal is to help women embrace this transformative 
            phase with comfort, care, and holistic well-being. Every mother deserves to heal, 
            recharge, and feel empowered.
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
