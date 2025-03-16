import Membership from "../../Components/Membership/Membership";
import "./Package.css";
import Individual from "./PackageSections/Individual";
import MembershipPlans from "./PackageSections/MembershipPlans/MembershipPlans";
import SpaPackages from "./PackageSections/SpaPackages/SpaPackages";

const Package = () => {
  return (
    <>
      <div className="choose-banner">
        <div className="choose-banner-overlay">
          <h2>Packages and Membership Deals</h2>
          <p className="breadcrumb">
            <span>Home</span> &gt;&gt;
            <span className="active">Explore Our Packages</span>
          </p>
        </div>
      </div>

      <Individual/>
      <MembershipPlans/>

      <SpaPackages/>
    </>
  );
};

export default Package;
