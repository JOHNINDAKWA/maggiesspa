import { useState, useEffect } from "react";
import "./Landing.css";

import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import Two from "../../assets/images/postnatal4.jpg";
import One from "../../assets/images/spa-services/mag11.jpg";

import Three from "../../assets/images/nine.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: Two,
    header: "Prenatal & Postpartum Care",
    description:
      "Experience expert massage therapies designed to relieve tension, support recovery, and enhance overall well-being during and after pregnancy.",
  },
  {
    image: Three,
    header: "Holistic Maternal Wellness",
    description:
      "Our spa combines traditional healing practices and modern therapies to create a nurturing space for mothers to heal, rejuvenate, and thrive.",
  },
  {
    image: One,
    header: "Luxury & Comfort for Mothers",
    description:
      "Indulge in premium treatments crafted for expecting and new mothers, ensuring relaxation, restoration, and balance for both body and mind.",
  },
];

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing">
      {/* Social Icons Sidebar */}
      <div className="social-sidebar">
        <a href="#">
          <RiFacebookFill />
        </a>
        <a href="#">
          <RiInstagramLine />
        </a>
        <a href="#">
          <RiTwitterXFill />
        </a>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="content">
            <h1 key={currentSlide} className="header animated">
              {slide.header}
            </h1>
            <p key={`desc-${currentSlide}`} className="description animated">
              {slide.description}
            </p>
            <Link to="/book">
              <button
                key={`btn-${currentSlide}`}
                className="book-landing animated"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      {/* Decorative Element on Right */}
      <div className="landing-flair">
        <div className="floating-circle"></div>
        <div className="floating-leaf">🍃</div>
        <div className="scroll-arrow">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Landing;
