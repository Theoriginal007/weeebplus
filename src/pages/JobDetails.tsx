import React from 'react';
import BidForm from '../components/BidForm';

const JobDetails: React.FC = () => {
  const handleBidSubmit = (bid: string) => {
    alert(`Bid submitted: $${bid}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Title</h1>
      <p>Location: XYZ</p>
      <p>Price Range: $200 - $500</p>
      <p>Description: HVAC job details here.</p>

      <BidForm onSubmit={handleBidSubmit} />
    </div>
  );
};

export default JobDetails;
