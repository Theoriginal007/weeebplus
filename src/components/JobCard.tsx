import React from 'react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  jobId: string;
  title: string;
  location: string;
  priceRange: string;
}

const JobCard: React.FC<JobCardProps> = ({ jobId, title, location, priceRange }) => {
  return (
    <Link to={`/job-details/${jobId}`} style={{ textDecoration: 'none' }}>
      <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0', cursor: 'pointer' }}>
        <h3>{title}</h3>
        <p>Location: {location}</p>
        <p>Price Range: {priceRange}</p>
      </div>
    </Link>
  );
};

export default JobCard;
