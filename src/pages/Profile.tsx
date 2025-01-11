import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the image directly
import profileImage from '../assets/profile.jpeg';

// Define the ProfileData interface
interface ProfileData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  jobsDone: number;
  upcomingJobs: string[];
  inProgressJobs: string[]; // Add in-progress jobs here
  reviews: { comment: string; rating: number }[];
  location: string;
  hourlyRate: string;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'reviews' | 'upcomingJobs' | 'inProgress'>('jobs');
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'contractor@email.com',
    phone: '(123) 456-7890',
    bio: 'Experienced contractor with expertise in plumbing, electrical, and HVAC repair.',
    avatar: profileImage,  // Use the imported image here
    jobsDone: 42,
    reviews: [
      { comment: 'Great work, highly skilled!', rating: 5 },
      { comment: 'Very professional and on time. Highly recommend!', rating: 4 },
      { comment: 'Did an excellent job, but took longer than expected.', rating: 3 }
    ],
    location: 'New York, NY',
    hourlyRate: '$45/hour',
    upcomingJobs: [
      'HVAC installation in Brooklyn, NY - Jan 15, 2025',
      'Electrical wiring for a new office in Manhattan, NY - Jan 20, 2025',
      'Plumbing repair for a house in Queens, NY - Jan 25, 2025',
    ],
    inProgressJobs: [
      'Electrical wiring at Office in Downtown - Jan 10, 2025',
      'Plumbing checkup at Residential Property - Jan 12, 2025',
    ], // In-progress jobs
  });

  // Calculate average rating from reviews
  const calculateAverageRating = () => {
    if (profileData.reviews.length === 0) return 0;
    const totalRating = profileData.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / profileData.reviews.length).toFixed(1);
  };

  // Handle copying the profile link
  const handleCopyLink = () => {
    const profileLink = window.location.href; // Get the current profile URL
    navigator.clipboard.writeText(profileLink).then(() => {
      setShareLinkCopied(true);
      setTimeout(() => setShareLinkCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="relative">
      {/* Edit and Share Profile Buttons positioned at top right */}
      <div className="absolute top-4 right-4 space-x-4">
        <Link to="/edit-profile">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Edit Profile
          </button>
        </Link>
        <button
          onClick={handleCopyLink}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {shareLinkCopied ? 'Link Copied!' : 'Share Profile'}
        </button>
      </div>

      {/* Profile Avatar and Basic Info */}
      <div className="flex flex-col items-center w-full mb-6 px-8">
        <img
          src={profileData.avatar}  // Display the avatar from the imported image
          alt="Profile Avatar"
          className="w-40 h-40 rounded-full object-cover mb-4"
        />
        <h1 className="text-3xl font-semibold">{profileData.name}</h1>
        <p className="text-gray-600">{profileData.email}</p>
        <p className="text-gray-600">{profileData.phone}</p>
        <p className="text-gray-600 mb-4">{profileData.bio}</p>
      </div>

      {/* Tabs Navigation */}
      <div className="w-full mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between space-x-6">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === 'jobs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            >
              Jobs Done
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('upcomingJobs')}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === 'upcomingJobs' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            >
              Upcoming Jobs
            </button>
            <button
              onClick={() => setActiveTab('inProgress')}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === 'inProgress' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            >
              In Progress
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="px-8">
        {/* Jobs Done Section */}
        {activeTab === 'jobs' && (
          <div className="w-full mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Jobs Done</h2>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-700">{profileData.jobsDone} Jobs Completed</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {new Array(profileData.jobsDone).fill(null).map((_, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800">Job #{index + 1}</h3>
                    <p className="text-gray-600">Completed on: {new Date().toLocaleDateString()}</p>
                    <p className="text-gray-600">Status: {index % 2 === 0 ? 'Completed' : 'In Progress'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {activeTab === 'reviews' && (
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            {profileData.reviews.length > 0 ? (
              <ul className="list-disc pl-5">
                {profileData.reviews.map((review, index) => (
                  <li key={index} className="text-gray-600">
                    <p>{review.comment}</p>
                    <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        )}

        {/* Upcoming Jobs Section */}
        {activeTab === 'upcomingJobs' && (
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-2">Upcoming Jobs</h2>
            {profileData.upcomingJobs.length > 0 ? (
              <ul className="list-disc pl-5">
                {profileData.upcomingJobs.map((job, index) => (
                  <li key={index} className="text-gray-600">{job}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No upcoming jobs scheduled.</p>
            )}
          </div>
        )}

        {/* In Progress Jobs Section */}
        {activeTab === 'inProgress' && (
          <div className="w-full mb-6">
            <h2 className="text-xl font-semibold mb-2">In Progress Jobs</h2>
            {profileData.inProgressJobs.length > 0 ? (
              <ul className="list-disc pl-5">
                {profileData.inProgressJobs.map((job, index) => (
                  <li key={index} className="text-gray-600">{job}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No jobs are currently in progress.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
