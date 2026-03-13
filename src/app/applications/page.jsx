'use client';

import React, { useContext, useState, useMemo } from 'react';
import { PetContext } from '@/context/PetContext';
import Image from 'next/image';

export default function ApplicationsPage() {
  const { applications, removeDraftApplication, submitAllDrafts } = useContext(PetContext);

  const drafts = applications.filter((a) => a.status === 'draft');
  const underReview = applications.filter((a) => a.status === 'under_review');

  const [applicant, setApplicant] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setApplicant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (drafts.length === 0) {
      alert('No draft applications to submit. Click Adopt on a pet first.');
      return;
    }
    if (!applicant.fullName || !applicant.email) {
      alert('Please provide at least your name and email.');
      return;
    }

    submitAllDrafts(applicant);
    setSubmitted(true);
  };

  const sizeClasses = useMemo(
    () => [
      'w-28 h-20',
      'w-20 h-24',
      'w-24 h-16',
      'w-32 h-20',
      'w-20 h-14'
    ],
    []
  );

  const sizeClassFor = (petId) => {
    const idx = Number(petId) % sizeClasses.length;
    return sizeClasses[idx];
  };

  return (
    <main className="min-h-screen bg-[#FAFAFB] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#3A3633]">Your Applications</h1>

        <section className="mt-6 grid gap-6">
          <div className="bg-white p-6 rounded-2xl border">
            <h2 className="font-semibold text-lg">Drafts ({drafts.length})</h2>

            {drafts.length === 0 ? (
              <p className="mt-4 text-sm text-[#6B6B6B]">
                You have no draft applications. Click <strong>Adopt</strong> on a pet to start.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {drafts.map((d) => {
                  const sizeCls = sizeClassFor(d.pet.id);
                  return (
                    <li key={d.id} className="flex items-center gap-4 p-3 rounded-lg border">
                      <Image
                        src={d.pet.imageUrl || d.pet.image || '/placeholder.png'}
                        alt={d.pet.name}
                        className={`${sizeCls} object-cover rounded-md shrink-0`}
                        style={{ objectPosition: 'center' }}
                        width={300}
                        height={300}
                      ></Image>
                      <div className="flex-1">
                        <div className="font-semibold text-[#3A3633]">{d.pet.name}</div>
                        <div className="text-sm text-[#6B6B6B]">{d.pet.breed} • {d.pet.age}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeDraftApplication(d.id)}
                          className="text-sm text-red-500 px-3 py-1 rounded-md border border-red-100"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h2 className="font-semibold text-lg">Applicant details</h2>
            <p className="text-sm text-[#6B6B6B] mt-2">Fill your contact info and a short note. This information will be submitted for all draft applications.</p>

            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
              <input name="fullName" placeholder="Full name" value={applicant.fullName} onChange={handleChange} className="border rounded-md p-2"/>
              <input name="email" placeholder="Email" value={applicant.email} onChange={handleChange} className="border rounded-md p-2"/>
              <input name="phone" placeholder="Phone (optional)" value={applicant.phone} onChange={handleChange} className="border rounded-md p-2"/>
              <input name="address" placeholder="Address (optional)" value={applicant.address} onChange={handleChange} className="border rounded-md p-2"/>
              <textarea name="notes" placeholder="Short note about your home or experience" value={applicant.notes} onChange={handleChange} className="border rounded-md p-2 h-24"></textarea>

              <div className="flex gap-3 mt-2 items-center">
                <button
                  type="submit"
                  className={`bg-[#0F766E] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:bg-[#0d6a5f] transition`}
                >
                  Submit applications ({drafts.length})
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setApplicant({ fullName: '', email: '', phone: '', address: '', notes: '' });
                  }}
                  className="px-4 py-2 rounded-md border"
                >
                  Reset
                </button>

                {drafts.length === 0 && (
                  <span className="text-sm text-[#9E9E9E]">No drafts, click Adopt on a pet first.</span>
                )}
              </div>

              {submitted && (
                <div className="mt-4 p-3 rounded-md bg-green-50 border border-green-100 text-green-800" role="status" aria-live="polite">
                  Thanks — your application(s) are under review.
                </div>
              )}
            </form>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h2 className="font-semibold text-lg">Applications under review</h2>
            {underReview.length === 0 ? (
              <p className="mt-3 text-sm text-[#6B6B6B]">No applications have been submitted yet.</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {underReview.map((a) => (
                  <li key={a.id} className="flex items-center gap-4 p-3 rounded-lg border">
                    <Image
                      src={a.pet.imageUrl || a.pet.image || '/placeholder.png'}
                      alt={a.pet.name}
                      className={`${sizeClassFor(a.pet.id)} object-cover rounded-md shrink-0`}
                      height={300}
                      width={500}
                    ></Image>
                    <div className="flex-1">
                      <div className="font-semibold">{a.pet.name}</div>
                      <div className="text-sm text-[#6B6B6B]">Submitted: {new Date(a.submittedAt).toLocaleString()}</div>
                    </div>
                    <div className="text-sm font-medium text-[#0F766E]">Under review</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}