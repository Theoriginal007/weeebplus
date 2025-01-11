// ProfileAvatar.tsx
import React from 'react';

interface ProfileAvatarProps {
  imageUrl: string;
  altText: string;
  className?: string;  // Make className optional so it can be passed in
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ imageUrl, altText, className = '' }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`rounded-full object-cover ${className}`} // Apply className dynamically
    />
  );
};

export default ProfileAvatar;
