import React from 'react';
import './PostpartumPackages.css'
import { Link } from 'react-router-dom';

const postpartumData = [
  {
    days: "3 Days",
    duration: [
      "1hr 30 mins – Mother’s care only (per day)",
      "2hrs Baby’s care only (per day)",
    ],
    services: [
      "Postpartum Massage",
      "Maggie’s Herbal Hot Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Baby Hot Herbal",
      "Baby & Ball Massage",
    ],
    cost: "Ksh21,000",
  },
  {
    days: "5 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh35,000",
  },
  {
    days: "7 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh50,000",
  },
  {
    days: "10 Days",
    duration: [
      "1hr 30 mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh67,500",
  },
  {
    days: "14 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal Ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Additional Relaxation and Specialized Massages",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh92,000",
  },
  {
    days: "21 Days",
    duration: [
      "1hr 30mins Mother’s care only",
      "2hrs Baby’s care only",
    ],
    services: [
      "Postpartum Massage",
      "Hot Herbal ball",
      "Breast Massage",
      "Belly Wrap",
      "Provision of 1 Belly Binder",
      "Relaxation Massage",
      "Uterine Reposition Massage",
      "Herbal Uterine Steam",
      "Face Lifting Massage",
      "Slimming Massage",
      "Body Wrapping",
      "Additional Relaxation and Specialized Massages",
      "Fourth Trimester Restoration (Aroma massage, uterine massage, body scrub, belly wrap, herbal bath)",
      "Family Sharing Package – (Relaxation massage + Hot Herbal Compress + Maggie’s Signature Herbs Massage)",
      "Baby Massage",
      "Baby Hot Herbal",
    ],
    cost: "Ksh135,000",
  },
];

const PostpartumPackages = () => {
    return (
      <div className="postpartum-packages">
        <h2>Postpartum Packages with Sessions</h2>
        <div className="postpartum-packages__cards-container">
          {postpartumData.map((pkg, index) => (
            <div key={index} className="postpartum-packages__card">
              <div className="postpartum-packages__badge">{pkg.days}</div>
              <div className="postpartum-packages__package-details">
                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Duration</strong>
                    <ul className="postpartum-packages__info-list">
                      {pkg.duration.map((duration, idx) => (
                        <li key={idx}>{duration}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Services</strong>
                    <ul className="postpartum-packages__info-list">
                      {pkg.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="postpartum-packages__package-info">
                  <div className="postpartum-packages__info-text">
                    <strong>Cost</strong>
                    <p>{pkg.cost}</p>
                  </div>
                </div>
                <div className="postpartum-packages__btn-container">
                  <Link to="/book" className="postpartum-packages__btn">Get This Package</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PostpartumPackages;