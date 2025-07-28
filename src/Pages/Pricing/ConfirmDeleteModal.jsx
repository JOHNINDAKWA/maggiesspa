import React from 'react';
import './Pricing.css'; // For general modal styling
import { FaExclamationTriangle } from 'react-icons/fa'; // Import React Icon

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, item }) => {
  if (!isOpen) return null;

  const itemName = item ? (item.name || item.description || 'this item') : 'this item';
  const itemType = item ? (item.type === 'branch' ? 'branch' : 'service') : 'item';

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-content-small text-center">
        <div className="modal-icon-danger">
          <FaExclamationTriangle />
        </div>
        <h2 className="modal-title">Confirm Deletion</h2>
        <p className="modal-text">
          Are you sure you want to delete the {itemType} "<span className="font-semibold">{itemName}</span>"? This action cannot be undone.
        </p>
        <div className="modal-actions modal-actions-center">
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
