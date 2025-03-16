import './HomeGallery.css'

import Collection_1 from '../../assets/images/gal1.jpg'
import Collection_2 from '../../assets/images/gal2.jpg'
import Collection_3 from '../../assets/images/gal3.jpg'
import Collection_4 from '../../assets/images/gal4.jpg'
import Collection_design from '../../assets/images/flowery.png'

const HomeGallery = () => {
  return (
    <div className='home-gallery-container'>
        <div className="home-gallery-left">
            <img className='gal1' src={Collection_1} alt="" />
        </div>
        <div className="home-gallery-middle">
            <div className="home-gallery-middle-top">
                <img className='gal2' src={Collection_2} alt="" />
                <img className='gal3' src={Collection_3} alt="" />
            </div>

            <div className="home-gallery-middle-bottom">
                <span>Incredible Spa Massage</span>
                <img src={Collection_design} alt="" />
            </div>
        </div>
        <div className="home-gallery-right">
            <img className='gal4' src={Collection_4} alt="" />
        </div>
      
    </div>
  )
}

export default HomeGallery
