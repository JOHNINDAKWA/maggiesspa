import './PostPartum.css'
import Service1 from '../../../../assets/images/spa-services/mag35.jpg';
import Service2 from '../../../../assets/images/spa-services/mag25.jpg';
import Service3 from '../../../../assets/images/spa-services/mag31.jpg';
import Service4 from '../../../../assets/images/spa-services/mag33.jpg';
import { Link } from 'react-router-dom';
import PostpartumPackages from '../PostpartumPackages/PostpartumPackages';
import BabyPackages from '../BabyPackages/BabyPackages';

const Postpartum = () => {
  return (
    <>
    <section className="postpartum-care" style={{ color: '#01a1a1', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Postpartum Packages</h2>
  
      <div className="packages">
        <div className="package2">
          <img src={Service1} alt="Renew and Restore Postpartum Therapy" className="package-img" />
          <h3>1. Renew And Restore Postpartum Therapy <br /> <span>(from 1 week after birth)</span></h3> 
          <p>Suitable for a mom who has done a vaginal birth;</p>
          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>75 MIN</td>
                <td>6,500</td>
              </tr>
              <tr>
                <td>90 MIN</td>
                <td>9,000</td>
              </tr>
            </tbody>
          </table>
          <p>
            Embrace the ancient art of postpartum belly binding to support your body’s natural healing journey after childbirth. This time-honored practice provides gentle compression, aiding in the realignment of abdominal muscles and organs and offering essential support to your lower back and hips. By promoting uterine contractions, belly binding assists in reducing postpartum bleeding and encourages your uterus to return to its pre-pregnancy size more swiftly.
          </p>
          <p className='what-to-expect'>What to expect:</p>
          <ul>
            <li>Maggie’s PNP herbal womb healing</li>
            <li>Pelvic and back massage</li>
            <li>Mum rocking</li>
            <li>Belly binding</li>
          </ul>
          <p className='what-to-expect'>Benefits:</p>
          <ul>
            <li>Support abdominal muscles</li>
            <li>Promotes uterine involution</li>
            <li>Improves posture and relieves back pain</li>
            <li>Reduces swelling</li>
            <li>Emotional comfort</li>
          </ul>
          <Link className="package-link" to="/book">Book Now</Link>

        </div>

        <div className="package2">
          <img src={Service2} alt="Postpartum Healing Therapy" className="package-img" />
          <h3>2. Postpartum Healing Therapy <br /> <span>(from 2 weeks after delivery)</span></h3>

          <p>
            Introducing postpartum healing therapy is a holistic approach to rejuvenate and empower your body after childbirth. Our therapy focuses on restoring balance, reducing fatigue, and enhancing both physical and emotional well-being during this transformative postpartum period.
          </p>

          
          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 Hrs</td>
                <td>Ksh. 14,500 </td>
              </tr>         
            </tbody>
          </table>
          <p className='what-to-expect'>What to expect:</p>
          <ul>
            <li>Foot bath</li>
            <li>Divine breast release</li>
            <li>Maggie’s herbal womb healing (for natural and c-section scar healing)</li>
            <li>Belly binding</li>
            <li>Maggie’s wellness bites</li>
          </ul>
          <p className='what-to-expect'>Benefits:</p>
          <ul>
            <li>Empower your recovery</li>
            <li>Restores abdominal and pelvic strength</li>
            <li>Supports pelvic healing and realignment</li>
            <li>Reclaim restful sleep</li>
            <li>Promotes emotional well-being and mental clarity</li>
            <li>Enhances circulation, reducing swelling and inflammation</li>
            <li>Alleviates stress and anxiety during postpartum adjustments</li>
            <li>Preventative treatment for postpartum depression</li>
            <li>Supports the healing of diastasis recti and abdominal muscles</li>
          </ul>
          <Link className="package-link" to="/book">Book Now</Link>

        </div>

        <div className="package2">
          <img src={Service3} alt="Post-Birth Balance Massage" className="package-img" />
          <h3>3. Post-Birth Balance Massage <br /> <span>(from 4 weeks after birth)</span></h3>
        
          <p>
            Bringing new life into the world is a beautiful journey, but your body deserves care too. Our Post-Birth balance massage is thoughtfully designed to help you heal, recharge, and realign after childbirth.
          </p>
          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 Hrs</td>
                <td>Ksh. 11,320 </td>
              </tr>         
            </tbody>
          </table>
          <p className='what-to-expect'>What to expect:</p>
          <ul>
            <li>Foot bath</li>
            <li>Post-natal holistic massage</li>
            <li>Maggie’s wellness bites</li>
          </ul>
          <p className='what-to-expect'>Benefits:</p>
          <ul>
            <li>Promotes better posture and body alignment</li>
            <li>Relieves stress and anxiety</li>
            <li>Aids in the healing of abdominal muscles</li>
            <li>Promotes faster postpartum recovery</li>
            <li>Supports pelvic realignment and healing</li>
            <li>Eases lower back, hip, and shoulder discomfort</li>
            <li>Reduces muscle tension and soreness</li>
            <li>Enhances relaxation and sleep quality</li>
            <li>Boosts energy levels and reduces fatigue</li>
            <li>Helps with hormonal balance and mood stabilization</li>
          </ul>

          <Link className="package-link" to="/book">Book Now</Link>

        </div>

        <div className="package2">
          <img src={Service4} alt="Golden Recovery Therapy" className="package-img" />
          <h3>4. Golden Recovery Therapy <br /><span>(from 4 weeks postpartum)</span></h3>
     

          <p>
            This is a luxurious and holistic approach to postnatal healing, designed to nurture your mind, body, and spirit after childbirth. This transformative treatment blends soothing massage, energy healing, herbal remedies, and guided relaxation, offering restoration during your postpartum journey.
          </p>

          <table className="pricing">
            <thead>
              <tr>
                <th>SESSIONS</th>
                <th>PRICES (KSH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3 Hrs</td>
                <td>Ksh 31,800 </td>
              </tr>         
            </tbody>
          </table>
          <p className='what-to-expect'>What to expect:</p>
          <ul>
            <li>Postnatal health massage</li>
            <li>Maggie herbal womb healing</li>
            <li>Pure skin therapy</li>
            <li>Foot bath</li>
            <li>Maggie’s PNP flower deco</li>
            <li>Maggie’s wellness bites</li>
          </ul>
          <p className='what-to-expect'>Benefits:</p>
          <ul>
            <li>Aids in the healing of diastasis recti</li>
            <li>Promotes pelvic realignment and abdominal muscle healing</li>
            <li>Eases stress and anxiety, supporting emotional well-being</li>
            <li>Reduces muscle tension and relieves postpartum discomfort</li>
            <li>Promotes better sleep and relaxation</li>
            <li>Encourages a deeper mind-body connection</li>
            <li>Provides holistic support for the transition into motherhood</li>
          </ul>
          <Link className="package-link" to="/book"> Book Now</Link>

        </div>
      </div>
    </section>

    <PostpartumPackages/>
    <BabyPackages/>
    </>
  );
};

export default Postpartum;
