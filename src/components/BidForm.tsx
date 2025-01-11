import React, { useState } from 'react';

interface BidFormProps {
  onSubmit: (bid: string) => void;
}

const BidForm: React.FC<BidFormProps> = ({ onSubmit }) => {
  const [bidPrice, setBidPrice] = useState('');

  const handleSubmit = () => {
    onSubmit(bidPrice);
  };

  return (
    <div>
      <h3>Place Your Bid</h3>
      <input
        type="number"
        value={bidPrice}
        onChange={(e) => setBidPrice(e.target.value)}
        placeholder="Enter your bid"
        style={{ padding: '10px', marginBottom: '20px', width: '200px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}
      >
        Submit Bid
      </button>
    </div>
  );
};

export default BidForm;
