import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import DeskTopMenu from "./Components/DeskTopNav/DeskTopMenu";
import MobileMenu from "./Components/MobileNav/MobileMenu";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; 
import "./Pages/Home/Home.css"; 

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation(); // Get current route

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the URL changes

  return (
    <>
      <div className="home-container">
        {/* Top Section - Only visible on large screens */}
        {!isMobile && (
          <div className="top-home-section">
            <div className="top-home-wrapper">
              <div className="location">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div>
                  <span>Karen, 31 Nandi Rd</span>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
              <div className="logo">
                <img src="/logo.png" alt="Maggie's Spa Logo" />
              </div>
              <div className="contact">
                <div>
                  <span>Call Us On</span>
                  <span>+254 796 125 105</span>
                </div>
                <div className="icon-container">
                  <FaPhoneAlt className="icon" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conditionally render navigation */}
        {isMobile ? <MobileMenu /> : <DeskTopMenu />}

        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
