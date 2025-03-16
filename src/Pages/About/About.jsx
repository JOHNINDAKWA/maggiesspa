import React from 'react'
import AboutBanner from './AboutBanner'
import AboutLanding from './AboutComponents/AboutLanding/AboutLanding'
import NextSection from './AboutComponents/NextSection/NextSection'
import WhyChooseUs from './AboutComponents/WhyChooseUs/WhyChooseUs'
import BestForYou from './AboutComponents/BestForYou/BestForYou'
import HomeExplore from './../../Components/HomeExplore/HomeExplore';
import AboutExplore from './AboutComponents/AboutExplore/AboutExplore'
import HomeGallery from '../../Components/HomeGallery/HomeGallery'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutLanding/>
      <NextSection/>
      <AboutExplore/>
      <WhyChooseUs/>
      <BestForYou/>
      {/* <HomeGallery/> */}
        
      
    </div>
  )
}

export default About
