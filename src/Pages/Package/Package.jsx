import "./Package.css";
import PackageSection from "./PackageSections/PackageSection";

const Package = () => {
  return (
    <>
      <div className="choose-banner">
        <div className="choose-banner-overlay">
          <h2>Pricing</h2>
          <p className="breadcrumb">
            <span>Home</span> &gt;&gt;
            <span className="active">Explore Our Catalogue</span>
          </p>
        </div>
      </div>

      <PackageSection/>

    </>
  );
};

export default Package;
