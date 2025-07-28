import React, { useState, useEffect } from 'react';
import './Pricing.css'; // For general modal styling
// No specific icon used directly in this modal, but keeping import for consistency if needed later
// import { FaEdit } from 'react-icons/fa';

const EditServiceModal = ({ isOpen, onClose, onSave, serviceData }) => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen && serviceData && serviceData.service) {
      setDescription(serviceData.service.description);
      setPrice(serviceData.service.price);
      setErrorMessage('');
    }
  }, [isOpen, serviceData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !price.trim()) {
      setErrorMessage('Description and Price cannot be empty.');
      return;
    }

    const updatedService = {
      description: description.trim(),
      price: price.trim()
    };

    // Pass original description to identify the service to update
    onSave(
      serviceData.branchId,
      serviceData.categoryHeading,
      serviceData.subgroupTitle,
      serviceData.service.description, // Original description to find the service
      updatedService
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Edit Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="serviceDescription" className="form-label">
              Description:
            </label>
            <input
              type="text"
              id="serviceDescription"
              className="form-input"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrorMessage('');
              }}
              placeholder="e.g., 90 mins (2 treatments)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="servicePrice" className="form-label">
              Price:
            </label>
            <input
              type="text"
              id="servicePrice"
              className="form-input"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setErrorMessage('');
              }}
              placeholder="e.g., KES 11,300"
              required
            />
          </div>
          {errorMessage && <p className="error-message-small">{errorMessage}</p>}
          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceModal;
