import React, { useState } from 'react';
import './Pricing.css'; // For general modal styling

const AddBranchModal = ({ isOpen, onClose, onAddBranch }) => {
  const [branchName, setBranchName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!branchName.trim()) {
      setErrorMessage('Branch name cannot be empty.');
      return;
    }
    onAddBranch(branchName.trim());
    setBranchName('');
    setErrorMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add New Spa Branch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="branchName" className="form-label">
              Branch Name:
            </label>
            <input
              type="text"
              id="branchName"
              className="form-input"
              value={branchName}
              onChange={(e) => {
                setBranchName(e.target.value);
                setErrorMessage(''); // Clear error on input change
              }}
              placeholder="e.g., Westlands Branch"
              required
            />
            {errorMessage && <p className="error-message-small">{errorMessage}</p>}
          </div>
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
              Add Branch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBranchModal;
