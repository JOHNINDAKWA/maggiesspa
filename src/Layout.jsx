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
  const [isNavSticky, setIsNavSticky] = useState(false);

  // Routes where footer should be hidden
 const hideFooterRoutes = ["/login", "/appointments", "/users", "/pricing"];
  const isDetailPage = pathname.startsWith("/appointments/");

  const shouldHideFooter = hideFooterRoutes.includes(pathname) || isDetailPage;

  // NEW: Routes where the entire navigation should be hidden
  const hideNavRoutes = [
    "/login",
    "/appointments",
    "/users",
    "/pricing",
    "/reports",
    "/settings",
    "/profile",
    "/inquiries",
    "/reviews",
  ];

  // NEW: Check if the current path is in the list of routes to hide the nav
  const shouldHideNav = hideNavRoutes.includes(pathname) || pathname.startsWith('/appointments/');

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  useEffect(() => {
    const handleScroll = () => {
      if (shouldHideNav) return; // Do nothing if nav is hidden
      const topSection = document.querySelector('.top-home-section');
      if (topSection) {
        const topSectionBottom = topSection.offsetTop + topSection.offsetHeight;
        if (window.scrollY > topSectionBottom && !isNavSticky) {
          setIsNavSticky(true);
        } else if (window.scrollY <= topSectionBottom && isNavSticky) {
          setIsNavSticky(false);
        }
      } else if (window.scrollY > 0 && !isNavSticky) {
          setIsNavSticky(true);
      } else if (window.scrollY === 0 && isNavSticky) {
          setIsNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavSticky, shouldHideNav]); // Add shouldHideNav to dependencies

  return (
    <>
      <div className="home-container">
        {/* Conditional rendering for the entire navbar section */}
        {!shouldHideNav && (
          <>
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
          </>
        )}

        <main className={isNavSticky && !shouldHideNav ? "main-content-shifted" : ""}>
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