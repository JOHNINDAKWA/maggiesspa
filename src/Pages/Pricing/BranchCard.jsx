import React, { useState } from 'react';
import EditServiceModal from './EditServiceModal';
import AddServiceCategoryModal from './AddServiceCategoryModal';
import './Pricing.css'; // For general styling
import { FaEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa'; // Import React Icons
import Portal from './Portal'; // Import the new Portal component

const BranchCard = ({ branch, onEditBranch, onDeleteBranch, onAddService, onEditService, onDeleteService }) => {
  const [isEditServiceModalOpen, setIsEditServiceModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null); // { branchId, categoryHeading, subgroupTitle, service: { description, price } }

  const [isAddServiceCategoryModalOpen, setIsAddServiceCategoryModalOpen] = useState(false);

  const handleOpenEditServiceModal = (categoryHeading, subgroupTitle, service) => {
    setServiceToEdit({
      branchId: branch.id,
      categoryHeading,
      subgroupTitle,
      service: { ...service } // Pass a copy to avoid direct state mutation
    });
    setIsEditServiceModalOpen(true);
  };

  const handleOpenAddServiceCategoryModal = () => {
    setIsAddServiceCategoryModalOpen(true);
  };

  return (
    <div className="branch-card">
      <div className="branch-card-header">
        <h3 className="branch-card-title">{branch.name}</h3>
        <div className="branch-card-actions">
          {/* Edit Branch Button */}
          <button
            onClick={() => onEditBranch(branch)} // Now correctly using onEditBranch prop
            className="action-btn"
            title="Edit Branch"
          >
            <FaEdit />
          </button>
          {/* Delete Branch Button */}
          <button
            onClick={onDeleteBranch}
            className="action-btn action-btn-danger"
            title="Delete Branch"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>

      {branch.serviceCategories.length === 0 ? (
        <div className="branch-empty-state">
          <p>No services defined for this branch yet.</p>
          <button
            onClick={handleOpenAddServiceCategoryModal}
            className="btn btn-sm btn-outline-primary mt-4"
          >
            Add First Service
          </button>
        </div>
      ) : (
        branch.serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="service-category-section">
            <div className="service-category-header">
              <h4 className="service-category-title">{category.heading}</h4>
              <button
                onClick={handleOpenAddServiceCategoryModal}
                className="action-btn action-btn-sm"
                title="Add Service/Subgroup to this Category"
              >
                <FaPlusCircle className="icon-margin-right-sm" /> Add Service
              </button>
            </div>
            {category.subgroups.length === 0 ? (
              <p className="subgroup-empty-state">No subgroups/services in this category.</p>
            ) : (
              category.subgroups.map((subgroup, subIdx) => (
                <div key={subIdx} className="service-subgroup-card">
                  <h5 className="service-subgroup-title">{subgroup.title}</h5>
                  <ul className="service-list">
                    {subgroup.services.length === 0 ? (
                      <p className="service-empty-state">No services in this subgroup.</p>
                    ) : (
                      subgroup.services.map((service, serviceIdx) => (
                        <li key={serviceIdx} className="service-itemm">
                          <span className="service-description">{service.description}</span>
                          <span className="service-price">{service.price}</span>
                          <div className="service-item-actions">
                            <button
                              onClick={() => handleOpenEditServiceModal(category.heading, subgroup.title, service)}
                              className="action-btn action-btn-sm"
                              title="Edit Service"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => onDeleteService(category.heading, subgroup.title, service.description)}
                              className="action-btn action-btn-sm action-btn-danger"
                              title="Delete Service"
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              ))
            )}
          </div>
        ))
      )}

      {/* Modals for services - now wrapped in Portal */}
      <Portal>
        <EditServiceModal
          isOpen={isEditServiceModalOpen}
          onClose={() => setIsEditServiceModalOpen(false)}
          onSave={onEditService}
          serviceData={serviceToEdit}
        />
      </Portal>
      <Portal>
        <AddServiceCategoryModal
          isOpen={isAddServiceCategoryModalOpen}
          onClose={() => setIsAddServiceCategoryModalOpen(false)}
          onAddService={onAddService}
          branchId={branch.id}
          branchServiceCategories={branch.serviceCategories} // Pass the entire service categories array
        />
      </Portal>
    </div>
  );
};

export default BranchCard;
