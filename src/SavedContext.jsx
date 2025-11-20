import React, { createContext, useState, useContext } from 'react';

// Create the Context
const SavedContext = createContext();

// Create the Provider Component
export const SavedProvider = ({ children }) => {
  // This state holds the IDs of items you have saved (e.g., [1, 3, 8])
  const [savedIds, setSavedIds] = useState([]);

  // Function to toggle save/unsave
  const toggleSave = (id) => {
    setSavedIds((prev) => {
      if (prev.includes(id)) {
        // If exists, remove it (Unsave)
        return prev.filter((itemId) => itemId !== id);
      } else {
        // If doesn't exist, add it (Save)
        return [...prev, id];
      }
    });
  };

  // Helper to check if an item is saved
  const isSaved = (id) => savedIds.includes(id);

  return (
    <SavedContext.Provider value={{ savedIds, toggleSave, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

// Custom hook to use it easily in other files
export const useSavedItems = () => useContext(SavedContext);