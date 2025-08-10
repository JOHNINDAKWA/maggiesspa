import React, { useState } from "react";
import EditServiceModal from "./EditServiceModal";
import AddServiceCategoryModal from "./AddServiceCategoryModal";
import "./Branchcard.css";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import Portal from "./Portal";

const BranchCard = ({
  branch,
  onEditBranch,
  onDeleteBranch,
  onAddService,
  onEditService,
  onDeleteService,
  onDeleteCategory,   // NEW
  onDeleteSubgroup,   // NEW
}) => {
  const [isEditServiceModalOpen, setIsEditServiceModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [isAddServiceCategoryModalOpen, setIsAddServiceCategoryModalOpen] = useState(false);

  const handleOpenEditServiceModal = (categoryHeading, subgroupTitle, service) => {
    setServiceToEdit({
      branchId: branch.id,
      categoryHeading,
      subgroupTitle,
      service: { ...service },
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
          <button onClick={() => onEditBranch(branch)} className="action-btn" title="Edit Branch">
            <FaEdit />
          </button>
          <button onClick={onDeleteBranch} className="action-btn action-btn-danger" title="Delete Branch">
            <FaTrashAlt />
          </button>
        </div>
      </div>

      {branch.serviceCategories.length === 0 ? (
        <div className="branch-empty-state">
          <p>No services defined for this branch yet.</p>
          <button onClick={handleOpenAddServiceCategoryModal} className="btn btn-sm btn-outline-primary mt-4">
            Add First Service
          </button>
        </div>
      ) : (
        branch.serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="service-category-section">
            <div className="service-category-header">
              <h4 className="service-category-title">{category.heading}</h4>
              <div className="branch-card-actions">
                <button
                  onClick={handleOpenAddServiceCategoryModal}
                  className="action-btn-add-service"
                  title="Add Service/Subgroup to this Category"
                >
                  Add Service
                </button>
                <button
                  onClick={() => onDeleteCategory(category.heading)}
                  className="action-btn action-btn-sm action-btn-danger"
                  title="Delete Category (removes all subgroups & services)"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            {category.subgroups.length === 0 ? (
              <p className="subgroup-empty-state">No subgroups/services in this category.</p>
            ) : (
              category.subgroups.map((subgroup, subIdx) => (
                <div key={subgroup.title || subIdx} className="service-subgroup-card">
                  <div
                    className="service-subgroup-title-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                      paddingBottom: "6px",
                      borderBottom: "1px dashed rgba(1,161,161,.22)",
                    }}
                  >
                    <h5 className="service-subgroup-title" style={{ margin: 0 }}>
                      {subgroup.title}
                    </h5>
                    <button
                      onClick={() => onDeleteSubgroup(category.heading, subgroup.title)}
                      className="action-btn action-btn-sm action-btn-danger"
                      title="Delete Subgroup (removes all services inside)"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>

                  <ul className="service-list">
                    {subgroup.services.length === 0 ? (
                      <li className="service-empty-state">No services in this subgroup.</li>
                    ) : (
                      subgroup.services.map((service, serviceIdx) => (
                        <li key={serviceIdx} className="service-itemm">
                          <span className="service-description">{service.description}</span>
                          <span className="service-price">{service.price}</span>
                          <div className="service-item-actions">
                            <button
                              onClick={() =>
                                handleOpenEditServiceModal(category.heading, subgroup.title, service)
                              }
                              className="action-btn action-btn-sm"
                              title="Edit Service"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() =>
                                onDeleteService(category.heading, subgroup.title, service.description)
                              }
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
          branchServiceCategories={branch.serviceCategories}
        />
      </Portal>
    </div>
  );
};

export default BranchCard;
