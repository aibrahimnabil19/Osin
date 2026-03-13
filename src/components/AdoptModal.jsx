'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AdoptModal({ open, onClose, petCount = 1 }) {
  const router = useRouter();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-[#3A3633]">Continue to Application</h3>
        <p className="mt-2 text-sm text-[#6B6B6B]">
          You added {petCount} pet{petCount > 1 ? 's' : ''} to your applications.
          To finish adopting, go to the Applications page and complete the short form.
        </p>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => {
              onClose?.();
              router.push('/applications');
            }}
            className="flex-1 bg-[#0F766E] text-white py-2 rounded-lg font-semibold hover:bg-[#0e6a61] transition"
          >
            Continue to Applications
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}