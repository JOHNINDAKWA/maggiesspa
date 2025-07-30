import React, { useState, useEffect } from 'react';
import AddBranchModal from './AddBranchModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import BranchCard from './BranchCard';
import './Pricing.css';
import { FaPlus, FaChevronLeft } from 'react-icons/fa'; // Import FaChevronLeft for the breadcrumb

const Pricing = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddBranchModalOpen, setIsAddBranchModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null); // { type: 'branch'|'service', id: branchId, subgroupTitle?: string, serviceDescription?: string }

  // JSONBin Configuration
  const BIN_ID = '688691e77b4b8670d8a83edf';
  const MASTER_KEY = '$2a$10$zbZxps/PAdQILoaI9k.3Z.MybaOblZBRTDRIkCphOwrZ4mI8Eldg6';
  const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  // Function to fetch data from JSONBin
  const fetchBranches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(JSONBIN_URL, {
        headers: {
          'X-Master-Key': MASTER_KEY,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText || response.statusText}`);
      }

      const data = await response.json();
      if (data && data.record && Array.isArray(data.record.branches)) {
        setBranches(data.record.branches);
      } else {
        // If the structure is not as expected, initialize with an empty array
        console.warn("JSONBin data structure unexpected. Initializing with empty branches.", data);
        setBranches([]);
      }
    } catch (err) {
      setError(`Failed to load data: ${err.message}`);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to update data in JSONBin
  const updateJsonBin = async (updatedBranches) => {
    setLoading(true);
    setError(null);
    try {
      const payload = { branches: updatedBranches }; // Wrap the branches array in an object
      const response = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: {
          'X-Master-Key': MASTER_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText || response.statusText}`);
      }

      const data = await response.json();
      if (data && data.record && Array.isArray(data.record.branches)) {
        setBranches(data.record.branches); // Update state with the confirmed data from JSONBin
      } else {
        console.warn("JSONBin update response structure unexpected.", data);
        setBranches(updatedBranches); // Fallback to local state if response is odd
      }
    } catch (err) {
      setError(`Failed to save data: ${err.message}`);
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch on component mount
  useEffect(() => {
    fetchBranches();
  }, []);

  // Handlers for CRUD operations
  const handleAddBranch = async (newBranchName) => {
    const newBranchId = newBranchName.toLowerCase().replace(/\s/g, '-'); // Simple ID generation
    const newBranch = {
      id: newBranchId,
      name: newBranchName,
      serviceCategories: [] // New branch starts with no services
    };
    const updatedBranches = [...branches, newBranch];
    await updateJsonBin(updatedBranches);
    setIsAddBranchModalOpen(false);
  };

  const handleEditBranch = async (updatedBranch) => {
    const updatedBranches = branches.map(b => b.id === updatedBranch.id ? updatedBranch : b);
    await updateJsonBin(updatedBranches);
  };

  const handleDeleteBranch = async (branchId) => {
    const updatedBranches = branches.filter(b => b.id !== branchId);
    await updateJsonBin(updatedBranches);
    setIsConfirmDeleteModalOpen(false); // Close modal after deletion
  };

  const handleAddService = async (branchId, categoryHeading, subgroupTitle, newService, isNewCategory, isNewSubgroup) => {
    const updatedBranches = branches.map(branch => {
      if (branch.id === branchId) {
        let updatedServiceCategories = [...branch.serviceCategories];
        let targetCategory = updatedServiceCategories.find(cat => cat.heading === categoryHeading);

        if (isNewCategory || !targetCategory) {
          // Create new category if it doesn't exist or is explicitly new
          targetCategory = {
            heading: categoryHeading,
            subgroups: []
          };
          updatedServiceCategories.push(targetCategory);
        }

        let targetSubgroup = targetCategory.subgroups.find(sub => sub.title === subgroupTitle);

        if (isNewSubgroup || !targetSubgroup) {
          // Create new subgroup if it doesn't exist or is explicitly new
          targetSubgroup = {
            title: subgroupTitle,
            services: []
          };
          targetCategory.subgroups.push(targetSubgroup);
        }

        // Add service to the target subgroup
        targetSubgroup.services.push(newService);

        return {
          ...branch,
          serviceCategories: updatedServiceCategories
        };
      }
      return branch;
    });
    await updateJsonBin(updatedBranches);
  };

  const handleEditService = async (branchId, categoryHeading, subgroupTitle, originalServiceDescription, updatedService) => {
    const updatedBranches = branches.map(branch => {
      if (branch.id === branchId) {
        return {
          ...branch,
          serviceCategories: branch.serviceCategories.map(category => {
            if (category.heading === categoryHeading) {
              return {
                ...category,
                subgroups: category.subgroups.map(subgroup => {
                  if (subgroup.title === subgroupTitle) {
                    return {
                      ...subgroup,
                      services: subgroup.services.map(service =>
                        service.description === originalServiceDescription ? updatedService : service
                      )
                    };
                  }
                  return subgroup;
                })
              };
            }
            return category;
          })
        };
      }
      return branch;
    });
    await updateJsonBin(updatedBranches);
  };

  const handleDeleteService = async (branchId, categoryHeading, subgroupTitle, serviceDescription) => {
    const updatedBranches = branches.map(branch => {
      if (branch.id === branchId) {
        return {
          ...branch,
          serviceCategories: branch.serviceCategories.map(category => {
            if (category.heading === categoryHeading) {
              return {
                ...category,
                subgroups: category.subgroups.map(subgroup => {
                  if (subgroup.title === subgroupTitle) {
                    return {
                      ...subgroup,
                      services: subgroup.services.filter(
                        service => service.description !== serviceDescription
                      )
                    };
                  }
                  return subgroup;
                })
              };
            }
            return category;
          })
        };
      }
      return branch;
    });
    await updateJsonBin(updatedBranches);
    setIsConfirmDeleteModalOpen(false); // Close modal after deletion
  };

  // Confirmation modal handlers
  const openConfirmDeleteModal = (type, item) => {
    setItemToDelete(item);
    setIsConfirmDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete.type === 'branch') {
      handleDeleteBranch(itemToDelete.id);
    } else if (itemToDelete.type === 'service') {
      handleDeleteService(
        itemToDelete.branchId,
        itemToDelete.categoryHeading,
        itemToDelete.subgroupTitle,
        itemToDelete.serviceDescription
      );
    }
  };

  return (
    <div className="pricing-page-container">
      
      <div className="top-bar-header">
       
        <div className="breadcrumb">
          <FaChevronLeft className="breadcrumb-icon" />
          <a href="/appointments" className="breadcrumb-link">Back to Appointments</a>
        </div>

       
        <h1 className="page-main-title">Pricing Management</h1>

       
        <button
          onClick={() => setIsAddBranchModalOpen(true)}
          className="btn btn-primary btn-add-branch"
        >
          <FaPlus className="icon-margin-right" /> Add New Branch
        </button>
      </div>

      {/* Main Content Area */}
      <main className="pricing-main-content">
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading pricing data...</p>
          </div>
        )}

        {error && (
          <div className="alert-message alert-error" role="alert">
            <strong>Error:</strong>
            <span>{error}</span>
          </div>
        )}

        {!loading && !error && branches.length === 0 && (
          <div className="empty-state">
            <p>No branches found. Start by adding your first spa location!</p>
            <button
              onClick={() => setIsAddBranchModalOpen(true)}
              className="btn btn-primary"
            >
              Add First Branch
            </button>
          </div>
        )}

        {/* Display Branches */}
        <div className="branch-cards-grid">
          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              onEditBranch={handleEditBranch}
              onDeleteBranch={() => openConfirmDeleteModal('branch', { type: 'branch', id: branch.id, name: branch.name })}
              onAddService={handleAddService}
              onEditService={handleEditService}
              onDeleteService={(categoryHeading, subgroupTitle, serviceDescription) =>
                openConfirmDeleteModal('service', {
                  type: 'service',
                  branchId: branch.id,
                  categoryHeading,
                  subgroupTitle,
                  serviceDescription,
                  name: `${serviceDescription} from ${subgroupTitle}` 
                })
              }
            />
          ))}
        </div>
      </main>

      {/* Modals */}
      <AddBranchModal
        isOpen={isAddBranchModalOpen}
        onClose={() => setIsAddBranchModalOpen(false)}
        onAddBranch={handleAddBranch}
      />

      <ConfirmDeleteModal
        isOpen={isConfirmDeleteModalOpen}
        onClose={() => setIsConfirmDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        item={itemToDelete}
      />
    </div>
  );
};

export default Pricing;
