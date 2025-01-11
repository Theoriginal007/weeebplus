import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotificationIcon: React.FC = () => {
  return (
    <div>
      <Link to="/job-listings">
        <FaBell style={{ fontSize: '24px', cursor: 'pointer' }} />
      </Link>
    </div>
  );
};

export default NotificationIcon;
