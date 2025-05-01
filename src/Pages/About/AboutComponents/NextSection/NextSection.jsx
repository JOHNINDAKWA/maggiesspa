import { useEffect, useState, useRef } from "react";
import "./NextSection.css";
import { Link } from "react-router-dom";

const NextSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const progressBars = [
    { label: "Relaxing Atmosphere", value: 98 },
    { label: "Professional Therapists", value: 99 },
    { label: "State-of-the-Art Equipment", value: 95 },
    { label: "Premium Organic Products", value: 97 },
  ];

  return (
    <div ref={sectionRef} className="next-section-container">
      {/* Left Content */}
      <div className="next-section-left">
        <h2>Experience Ultimate Wellness at Maggy P & P Spa</h2>
        <p>
          At Maggy P & P Spa, we blend luxury with holistic wellness to provide 
          rejuvenating experiences. From expert massage therapies to premium skincare, 
          we ensure every visit leaves you refreshed, relaxed, and renewed.
        </p>
        
       <Link to='/book'><button>Book Your Session</button></Link> 
      </div>

      {/* Right Content (Progress Bars) */}
      <div className="next-section-right">
        {progressBars.map((item, index) => (
          <div key={index} className="progress-bar-container">
            <div className="progress-label">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: isVisible ? `${item.value}%` : "0%",
                  transition: "width 2s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextSection;