'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';
import ApplicationForm from './ApplicationForm';
import AuthModal from './AuthModal';
import Image from 'next/image';

export default function JobCard({ job }) {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleApply = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowApplication(true);
    }
  };

  return (
    <div className="bg-white border border-gray-200 hover:shadow-xl transition duration-300 p-6 rounded-xl relative">
      {/* Logo on top-right corner */}
      <div className="absolute top-4 right-4">
        <Image
          src="/logo.png" // Replace with your actual logo path
          alt="Company Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-1">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{job.location}</p>

      <div className="text-gray-700 text-sm mb-3">
        {expanded
          ? <p>{job.description}</p>
          : <p>{job.description.slice(0, 80)}{job.description.length > 80 && '...'}</p>
        }
        {job.description.length > 80 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 text-xs mt-1 hover:underline"
          >
            {expanded ? 'Show Less' : 'View More'}
          </button>
        )}
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills?.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-orange-500 transition"
      >
        Apply Now
      </button>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <ApplicationForm job={job} onClose={() => setShowApplication(false)} />
        </div>
      )}
    </div>
  );
}
