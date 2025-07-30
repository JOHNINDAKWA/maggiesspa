import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import DeskTopMenu from "./Components/DeskTopNav/DeskTopMenu";
import MobileMenu from "./Components/MobileNav/MobileMenu";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Pages/Home/Home.css";
import GrandOpeningPopup from "./Components/GrandOpeningPopup/GrandOpeningPopup";
import StickyCountdown from "./Components/StickyCountdown/StickyCountdown";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false); // NEW: State for sticky navigation

  // Routes where footer should be hidden
  const hideFooterRoutes = ["/appointments", "/users", "/pricing"];
  const isDetailPage = pathname.startsWith("/appointments/");

  const shouldHideFooter =
    hideFooterRoutes.includes(pathname) || isDetailPage;

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
  }, [pathname]);

  // Show popup on initial load, only once per session, and only on home page
  useEffect(() => {
    if (pathname === '/') {
      const hasSeenPopup = sessionStorage.getItem('hasSeenGrandOpeningPopup');
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenGrandOpeningPopup', 'true');
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // NEW: Scroll event listener for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const topSection = document.querySelector('.top-home-section');
      if (topSection) {
        // Get the bottom position of the top-home-section
        const topSectionBottom = topSection.offsetTop + topSection.offsetHeight;
        // If current scroll position is past the bottom of the top section, make nav sticky
        if (window.scrollY > topSectionBottom && !isNavSticky) {
          setIsNavSticky(true);
        } else if (window.scrollY <= topSectionBottom && isNavSticky) {
          setIsNavSticky(false);
        }
      } else if (window.scrollY > 0 && !isNavSticky) { // Fallback if top-home-section not found (e.g. on other pages)
         setIsNavSticky(true);
      } else if (window.scrollY === 0 && isNavSticky) {
         setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavSticky]); // Re-run effect if isNavSticky changes

  return (
    <>
      <div className="home-container">
        {!isMobile && (
          <div className="top-home-section">
            <div className="top-home-wrapper">
              {/* Combined Locations */}
              <div className="location">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div>
                  <span className="location-title">Our Locations</span>
                  <span className="address-line">Karen 31 Collective, Ngong Rd, Nairobi</span>
                  <span className="address-line">Shop 14 Restaurant, Nanyuki Town</span>
                </div>
              </div>

              {/* Logo */}
              <div className="logo">
                <img src="/logo.png" alt="Maggie's Spa Logo" />
              </div>

              {/* Contact Info (Phone/Email) */}
              <div className="contact">
                <div>
                  <span>+254796125105</span>
                  <span>info@maggiespa.co.ke</span>
                </div>
                <div className="icon-container">
                  <FaPhoneAlt className="icon" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pass the isNavSticky prop to DeskTopMenu */}
        {isMobile ? <MobileMenu /> : <DeskTopMenu isSticky={isNavSticky} />}

        <main className={isNavSticky ? "main-content-shifted" : ""}> {/* NEW: Shift content down */}
          <Outlet />
        </main>

        {/* Grand Opening Popup */}
        <GrandOpeningPopup isOpen={showPopup} onClose={handleClosePopup} />

        {/* Sticky Countdown - Always visible now */}
        <StickyCountdown onOpenPopup={handleOpenPopup} />

        {/* Only show footer if NOT on hidden routes */}
        {!shouldHideFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;