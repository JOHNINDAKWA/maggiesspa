import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // Using react-select for category/subgroup selection
import './Pricing.css'; // For general modal styling

const AddServiceCategoryModal = ({ isOpen, onClose, onAddService, branchId, branchServiceCategories }) => {
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedSubgroupOption, setSelectedSubgroupOption] = useState(null);
  const [newSubgroupName, setNewSubgroupName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Options for existing categories
  const categoryOptions = branchServiceCategories.map(cat => ({ value: cat.heading, label: cat.heading }));

  // Options for existing subgroups within the selected category
  const currentCategory = branchServiceCategories.find(cat => cat.heading === selectedCategoryOption?.value);
  const subgroupOptions = currentCategory
    ? currentCategory.subgroups.map(sub => ({ value: sub.title, label: sub.title }))
    : [];

  useEffect(() => {
    // Reset form fields when modal opens/closes
    if (isOpen) {
      setSelectedCategoryOption(null);
      setNewCategoryName('');
      setSelectedSubgroupOption(null);
      setNewSubgroupName('');
      setServiceDescription('');
      setServicePrice('');
      setErrorMessage('');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!serviceDescription.trim() || !servicePrice.trim()) {
      setErrorMessage('Service description and price are required.');
      return;
    }

    let categoryHeading = selectedCategoryOption?.value || newCategoryName.trim();
    let subgroupTitle = selectedSubgroupOption?.value || newSubgroupName.trim();

    if (!categoryHeading) {
      setErrorMessage('Please select an existing category or provide a new category name.');
      return;
    }
    if (!subgroupTitle) {
      setErrorMessage('Please select an existing subgroup or provide a new subgroup name.');
      return;
    }

    // Construct the new service object
    const newService = {
      description: serviceDescription.trim(),
      price: servicePrice.trim()
    };

    // Call onAddService with all necessary information
    onAddService(
      branchId,
      categoryHeading,
      subgroupTitle,
      newService,
      !selectedCategoryOption && newCategoryName.trim() !== '', // isNewCategory
      !selectedSubgroupOption && newSubgroupName.trim() !== '', // isNewSubgroup
    );

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add New Service</h2>
        <form onSubmit={handleSubmit}>
          {/* Category Selection/Creation */}
          <div className="form-group">
            <label htmlFor="categorySelect" className="form-label">Select Existing Category:</label>
            <Select
              id="categorySelect"
              value={selectedCategoryOption}
              onChange={(option) => {
                setSelectedCategoryOption(option);
                setNewCategoryName(''); // Clear new category name if existing is selected
                setSelectedSubgroupOption(null); // Reset subgroup selection
              }}
              options={categoryOptions}
              placeholder="Select a category..."
              isClearable={true}
              classNamePrefix="react-select"
            />
          </div>
          <div className="form-group-or">Or</div>
          <div className="form-group">
            <label htmlFor="newCategoryName" className="form-label">Add New Category Name:</label>
            <input
              type="text"
              id="newCategoryName"
              className="form-input"
              value={newCategoryName}
              onChange={(e) => {
                setNewCategoryName(e.target.value);
                setSelectedCategoryOption(null); // Clear selected category if new is typed
                setSelectedSubgroupOption(null); // Reset subgroup selection
              }}
              disabled={!!selectedCategoryOption} // Disable if an existing category is selected
              placeholder="e.g., New Treatments"
            />
          </div>

          {/* Subgroup Selection/Creation */}
          {(selectedCategoryOption || newCategoryName.trim()) && (
            <>
              <div className="form-group-divider"></div>
              <div className="form-group">
                <label htmlFor="subgroupSelect" className="form-label">Select Existing Subgroup:</label>
                <Select
                  id="subgroupSelect"
                  value={selectedSubgroupOption}
                  onChange={(option) => {
                    setSelectedSubgroupOption(option);
                    setNewSubgroupName(''); // Clear new subgroup name if existing is selected
                  }}
                  options={subgroupOptions}
                  placeholder="Select a subgroup..."
                  isClearable={true}
                  classNamePrefix="react-select"
                  isDisabled={!selectedCategoryOption && !newCategoryName.trim()} // Disable if no category selected/entered
                />
              </div>
              <div className="form-group-or">Or</div>
              <div className="form-group">
                <label htmlFor="newSubgroupName" className="form-label">Add New Subgroup Name:</label>
                <input
                  type="text"
                  id="newSubgroupName"
                  className="form-input"
                  value={newSubgroupName}
                  onChange={(e) => {
                    setNewSubgroupName(e.target.value);
                    setSelectedSubgroupOption(null); // Clear selected subgroup if new is typed
                  }}
                  disabled={!!selectedSubgroupOption || (!selectedCategoryOption && !newCategoryName.trim())} // Disable if existing subgroup selected or no category
                  placeholder="e.g., Specialized Massages"
                />
              </div>
            </>
          )}

          {/* Service Details */}
          <div className="form-group-divider"></div>
          <div className="form-group">
            <label htmlFor="serviceDescription" className="form-label">Service Description:</label>
            <input
              type="text"
              id="serviceDescription"
              className="form-input"
              value={serviceDescription}
              onChange={(e) => {
                setServiceDescription(e.target.value);
                setErrorMessage('');
              }}
              placeholder="e.g., 60 mins full body massage"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="servicePrice" className="form-label">Service Price:</label>
            <input
              type="text"
              id="servicePrice"
              className="form-input"
              value={servicePrice}
              onChange={(e) => {
                setServicePrice(e.target.value);
                setErrorMessage('');
              }}
              placeholder="e.g., KES 7,500"
              required
            />
          </div>

          {errorMessage && <p className="error-message-small">{errorMessage}</p>}

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceCategoryModal;
