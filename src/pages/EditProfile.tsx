import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import the profile image from assets
import profileImage from '../assets/profile.jpeg';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
}

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'contractor@email.com',
    phone: '(123) 456-7890',
    bio: 'Experienced contractor with expertise in plumbing, electrical, and HVAC repair.',
    avatar: profileImage // Set the default avatar to be the profile image from assets
  });

  const [newProfileImage, setNewProfileImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = () => {
    setFormData({
      ...formData,
      avatar: newProfileImage || formData.avatar
    });
    navigate('/profile'); // Navigate back to profile after saving
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="profileImageInput"
          />
          <label
            htmlFor="profileImageInput"
            className="cursor-pointer w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <img
              src={newProfileImage || formData.avatar}
              alt="Profile Preview"
              className="w-full h-full rounded-full object-cover"
            />
          </label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleSaveProfile}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
