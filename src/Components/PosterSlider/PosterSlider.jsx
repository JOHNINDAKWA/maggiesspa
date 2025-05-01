import { useState, useEffect } from "react";
import "./PosterSlider.css";

import poster1 from "../../assets/images/poster1.jpeg";
import poster2 from "../../assets/images/poster2.jpeg";
import poster3 from "../../assets/images/poster3.jpeg";
import poster4 from "../../assets/images/poster4.jpeg";

const posters = [poster1, poster2, poster3, poster4];

const PosterSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
      setIsChanging(false);
    }, 1000);
  };

  const prevSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + posters.length) % posters.length);
      setIsChanging(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="poster-slider-container">
      {/* Background overlay */}
      <div
        className="poster-background"
        style={{ backgroundImage: `url(${posters[current]})` }}
      ></div>

      {/* Poster Image with Smooth Slide & Zoom */}
      <div className="poster-content">
        <img
          src={posters[current]}
          alt="Promo Poster"
          className={`poster-image ${isChanging ? "exiting" : "active"}`}
        />
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button left" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default PosterSlider;
