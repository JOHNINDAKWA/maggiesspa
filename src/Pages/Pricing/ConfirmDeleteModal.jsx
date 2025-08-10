import React from 'react';
import './Pricing.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, item }) => {
  if (!isOpen) return null;

  const itemType = item?.type || 'item'; // branch | service | category | subgroup
  const humanType = {
    branch: 'branch',
    service: 'service',
    category: 'category',
    subgroup: 'subgroup',
  }[itemType] || 'item';

  const itemName = item?.name || item?.description || 'this item';

  const cascadeNote =
    itemType === 'category'
      ? 'Deleting a category will remove all subgroups and services under it.'
      : itemType === 'subgroup'
      ? 'Deleting a subgroup will remove all services inside it.'
      : null;

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-content-small text-center">
        <div className="modal-icon-danger">
          <FaExclamationTriangle />
        </div>
        <h2 className="modal-title">Confirm Deletion</h2>
        <p className="modal-text">
          Are you sure you want to delete the {humanType}{' '}
          "<span className="font-semibold">{itemName}</span>"? This action cannot be undone.
        </p>
        {cascadeNote && (
          <p className="modal-text" style={{ color: '#b42318', fontWeight: 700 }}>
            {cascadeNote}
          </p>
        )}
        <div className="modal-actions modal-actions-center">
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
          <button onClick={onConfirm} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
