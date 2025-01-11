import React from 'react';

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  rating: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, phone, rating }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default ProfileCard;
