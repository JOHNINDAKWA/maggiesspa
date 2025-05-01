import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";
import DeskTopMenu from "./Components/DeskTopNav/DeskTopMenu";
import MobileMenu from "./Components/MobileNav/MobileMenu";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Pages/Home/Home.css";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation();

  // Routes where footer should be hidden
  const hideFooterRoutes = ["/appointments", "/users"];
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="home-container">
        {!isMobile && (
          <div className="top-home-section">
            <div className="top-home-wrapper">
              <div className="location">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div>
                  <span>Karen 31 Collective</span>
                  <span>Ngong Rd, Nairobi</span>
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

        {isMobile ? <MobileMenu /> : <DeskTopMenu />}

        <main>
          <Outlet />
        </main>

        {/* Only show footer if NOT on hidden routes */}
        {!shouldHideFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
