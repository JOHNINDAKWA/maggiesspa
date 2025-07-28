import React, { useState, useEffect } from "react";
import Select from "react-select"; // Import react-select
import "./PackageSection.css"; // Ensure your CSS is correctly linked

const PackageSection = () => {
  const [branchesData, setBranchesData] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null); // Will store the selected option object
  const [currentServiceCategories, setCurrentServiceCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        const binId = "688691e77b4b8670d8a83edf";
        const masterKey =
          "$2a$10$zbZxps/PAdQILoaI9k.3Z.MybaOblZBRTDRIkCphOwrZ4mI8Eldg6";

        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
          headers: {
            "X-Master-Key": masterKey,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP error! Status: ${response.status} - ${
              errorText || response.statusText
            }`
          );
        }

        const data = await response.json();
        if (data && data.record && Array.isArray(data.record.branches)) {
          setBranchesData(data.record.branches);
          // Set initial selected branch to the first one available
          if (data.record.branches.length > 0) {
            setSelectedBranch({
              value: data.record.branches[0].id,
              label: data.record.branches[0].name,
            });
          }
        } else {
          throw new Error(
            "Invalid data structure received from JSONBin. 'branches' array not found."
          );
        }
      } catch (e) {
        setError(
          `Failed to fetch prices: ${e.message}. Please check your Bin ID, Master Key, and network connection.`
        );
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  useEffect(() => {
    if (branchesData.length > 0 && selectedBranch) {
      const branch = branchesData.find((b) => b.id === selectedBranch.value);
      if (branch) {
        setCurrentServiceCategories(branch.serviceCategories);
      } else {
        setCurrentServiceCategories([]);
      }
    } else if (branchesData.length > 0 && !selectedBranch) {
      // If no branch is selected yet, but data is loaded, default to the first branch
      setSelectedBranch({
        value: branchesData[0].id,
        label: branchesData[0].name,
      });
    }
  }, [branchesData, selectedBranch]);

  // Transform branchesData into the format react-select expects: [{ value: 'id', label: 'name' }]
  const branchOptions = branchesData.map((branch) => ({
    value: branch.id,
    label: branch.name,
  }));

  const handleBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
  };

  if (loading) {
    return (
      <section className="package-section2">
        <div className="package-wrapper2">
          <div className="loading-message">Loading pricing information...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="package-section2">
        <div className="package-wrapper2">
          <div className="error-message">{error}</div>
        </div>
      </section>
    );
  }

  if (branchesData.length === 0) {
    return (
      <section className="package-section2">
        <div className="package-wrapper2">
          <div className="no-data-message">
            No branch data available. Please add branches to your JSONBin.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="package-section2">
      <div className="package-wrapper2">
        {/* Branch Selector using react-select */}
        <div className="branch-selector">
          <label htmlFor="branch-select">
            Prices vary by location. Select your branch:
          </label>
          <Select
            id="branch-select"
            classNamePrefix="branch-select"
            value={selectedBranch}
            onChange={handleBranchChange}
            options={branchOptions}
            placeholder="Choose a branch..."
            isClearable={false}
            isSearchable={true}
            styles={{
              // Inline styles can be used, or define in CSS for cleaner code
              control: (provided) => ({
                ...provided,
                borderColor: "#01A1A1",
                boxShadow: "0 0 0 1px #01A1A1",
                "&:hover": {
                  borderColor: "#01A1A1",
                },
                borderRadius: "8px",
                minHeight: "45px",
                fontSize: "16px",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? "#e0f7f7" : null,
                color: "#333",
                "&:active": {
                  backgroundColor: "#01A1A1",
                  color: "white",
                },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#4A2D16",
                fontWeight: "bold",
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                backgroundColor: "#01A1A1",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: "#01A1A1",
                "&:hover": {
                  color: "#01A1A1",
                },
              }),
            }}
          />
        </div>

        {/* Display categories and services for the selected branch */}
        {currentServiceCategories.length > 0 ? (
          currentServiceCategories.map((category, catIdx) => (
            <div key={catIdx} className="category-row2">
              <h2 className="category-heading2">{category.heading}</h2>
              <div className="subcategory-row2">
                {category.subgroups.map((sub, subIdx) => (
                  <div key={subIdx} className="subcategory-card2">
                    <div className="subcategory-content2">
                      <div className="subcategory-info2">
                        <h3 className="subcategory-title2">{sub.title}</h3>
                        <ul className="service-list2">
                          {sub.services.map((service, i) => (
                            <li key={i} className="service-item2">
                              <span className="service-description2">
                                {service.description}
                              </span>
                              <span className="service-price2">
                                {service.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>
            No pricing information available for the selected branch. Please
            check the data in JSONBin.
          </p>
        )}
      </div>
    </section>
  );
};

export default PackageSection;
