import React from 'react';
import { Link } from 'react-router-dom';

const JobListings: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Available Jobs</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/job-details/1">
          <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0', cursor: 'pointer' }}>
            <h3>Job Title 1</h3>
            <p>Location: XYZ</p>
            <p>Price Range: $200 - $500</p>
          </div>
        </Link>
        {/* Add more job listings here */}
      </div>
    </div>
  );
};

export default JobListings;
