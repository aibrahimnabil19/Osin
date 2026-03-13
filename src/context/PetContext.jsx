'use client';

import React, { createContext, useEffect, useState } from 'react';

export const PetContext = createContext();

export function PetProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    try {
      const f = JSON.parse(localStorage.getItem('osin_favorites') || '[]');
      const a = JSON.parse(localStorage.getItem('osin_applications') || '[]');
    //   setFavorites(f);
    //   setApplications(a);
    } catch (e) {
      console.warn('Failed to read persisted state', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('osin_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('osin_applications', JSON.stringify(applications));
    } catch {}
  }, [applications]);

  const toggleFavorite = (petId) => {
    setFavorites((prev) =>
      prev.includes(petId) ? prev.filter((id) => id !== petId) : [...prev, petId]
    );
  };

  const addDraftApplication = (pet) => {
    const exists = applications.some((a) => a.petId === pet.id && a.status === 'draft');
    if (exists) return false; 
    const alreadyUnderReview = applications.some((a) => a.petId === pet.id && a.status === 'under_review');
    if (alreadyUnderReview) return false;
    const newApp = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      petId: pet.id,
      pet,
      status: 'draft',
      applicant: null,
      submittedAt: null,
      createdAt: new Date().toISOString()
    };
    setApplications((prev) => [newApp, ...prev]);
    return true;
  };

  const removeDraftApplication = (applicationId) => {
    setApplications((prev) => prev.filter((a) => a.id !== applicationId));
  };

  const submitAllDrafts = (applicant) => {
    const when = new Date().toISOString();
    setApplications((prev) =>
      prev.map((a) =>
        a.status === 'draft'
          ? { ...a, applicant, status: 'under_review', submittedAt: when }
          : a
      )
    );
  };

  const submitApplication = (applicationId, applicant) => {
    const when = new Date().toISOString();
    setApplications((prev) =>
      prev.map((a) =>
        a.id === applicationId ? { ...a, applicant, status: 'under_review', submittedAt: when } : a
      )
    );
  };

  return (
    <PetContext.Provider
      value={{
        favorites,
        toggleFavorite,
        applications,
        addDraftApplication,
        removeDraftApplication,
        submitAllDrafts,
        submitApplication,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}