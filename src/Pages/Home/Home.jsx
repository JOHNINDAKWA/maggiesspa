import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import "./Home.css";
import DeskTopMenu from "../../Components/DeskTopNav/DeskTopMenu";
import MobileMenu from "../../Components/MobileNav/MobileMenu";
import Landing from "../../Components/Landing/Landing";
import Bliss from "../../Components/Bliss/Bliss";
import Appointment from "../../Components/Appointment/Appointment";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import Stats from "../../Components/Stats/Stats";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WorkingHours from "../../Components/WorkingHours/WorkingHours";
import PosterSlider from "../../Components/PosterSlider/PosterSlider";
import HomeGallery from "../../Components/HomeGallery/HomeGallery";
import Footer from "../../Components/Footer/Footer";
import GiftCard from "../../Components/GiftCard/GiftCard";
import Future from "../../Components/Future/Future";
import Membership from "../../Components/Membership/Membership";
import HomeContact from "../../Components/HomeContact/HomeContact";
import HomeExplore from "../../Components/HomeExplore/HomeExplore";
import Deserve from "../../Components/Deserve/Deserve";
import SpaPackages from './../Package/PackageSections/SpaPackages/SpaPackages';
import Partners from "../../Components/Partners/Partners";
import HealthDisclaimer from './../../ServicesComponents/HealthDisclaimer/HealthDisclaimer';
import FeaturedArticles from "../../Components/FeaturedArticles/FeaturedArticles";

const Home = () => {


  return (
    <div className="home-container">
    

      <Landing/>
      <HomeAbout/>
      {/* <Stats/> */}
      <Partners/>
      
      {/* <Bliss/> */}
      <Appointment/>
      <Deserve/>
     
      <Testimonial/>
      <WorkingHours/>
      {/* <PosterSlider/> */}
      <GiftCard/>
      <Future/>
      {/* <HomeExplore/> */}
      <HealthDisclaimer/>
      {/* <SpaPackages/> */}
      {/* <Membership/> */}
      {/* <HomeGallery/> */}
      <FeaturedArticles/>
      <HomeContact/>
    </div>
  );
};

export default Home;
