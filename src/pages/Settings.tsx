import React from 'react';

const Settings: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Settings</h1>
      <div>
        <label>Email: </label>
        <input type="email" defaultValue="contractor@email.com" style={{ marginBottom: '10px' }} />
      </div>
      <div>
        <label>Phone: </label>
        <input type="text" defaultValue="(123) 456-7890" style={{ marginBottom: '10px' }} />
      </div>
      <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Save Changes</button>
    </div>
  );
};

export default Settings;
