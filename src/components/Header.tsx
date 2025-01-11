import React, { useState, useEffect, useRef } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import ProfileAvatar from './ProfileAvatar';
import logo from '../assets/logo.png';
import profileImage from '../assets/profile.jpeg';

interface Notification {
  id: number;
  type: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'rating', message: 'You received a 5-star rating from John.', timestamp: '2 mins ago', read: false },
    { id: 2, type: 'job', message: 'Upcoming job: Fix AC on Jan 15.', timestamp: '1 hour ago', read: false },
    { id: 3, type: 'job', message: 'New job posted: Clean gutters on Jan 20.', timestamp: 'Yesterday', read: false },
  ]);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
    // Mark all notifications as read when the dropdown is opened
    if (!isDropdownOpen) {
      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, read: true }))
      );
    }
  };

  const handleNotificationClick = (type: string) => {
    // Navigate based on notification type
    if (type === 'job') navigate('/job-listings');
    if (type === 'rating') navigate('/profile');
  };

  // Close dropdown if click happens outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-whitesmoke text-black py-2 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 relative">
        {/* Logo and Home Button */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HomeHire Logo" className="h-10" />
          <div>
            <Link to="/" className="text-xl font-bold text-black hover:text-gray-700">
              HomeHire
            </Link>
            <p className="text-xs font-medium text-blue-600 mt-1">
              Expert Care for Every Corner of Your Home
            </p>
          </div>
        </div>

        {/* Right-side section: Availability, Home, Notifications, and Profile */}
        <div className="flex items-center space-x-6 ml-6">
          {/* Availability Toggle */}
          <button className="px-3 py-2 text-sm border rounded-md">
            <span>Set Availability</span>
            <input type="checkbox" id="availability" className="ml-2" />
          </button>

          {/* Home Button */}
          <Link to="/" className="text-black hover:text-gray-700 text-sm font-semibold">
            Home
          </Link>

          {/* Notifications */}
          <div className="relative">
            <button onClick={toggleDropdown} className="relative text-black hover:text-gray-700">
              <IoNotificationsOutline size={24} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                  {unreadCount}
                </span>
              )}
            </button>
{/* Dropdown for Notifications */}
{isDropdownOpen && (
  <div
    ref={dropdownRef}
    className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md p-2 z-10"
  >
    <h3 className="font-bold text-sm mb-2">Notifications</h3>
    {notifications.length > 0 ? (
      <ul className="space-y-2">
        {notifications.slice(0, 8).map((notif) => (
          <li
            key={notif.id}
            className={`p-2 rounded-md hover:bg-gray-100 cursor-pointer ${
              notif.read ? 'text-gray-500' : 'text-black font-medium'
            }`}
            onClick={() => {
              handleNotificationClick(notif.type);
              setIsDropdownOpen(false); // Close dropdown on click
            }}
          >
            <p className="text-sm">{notif.message}</p>
            <p className="text-xs text-gray-400">{notif.timestamp}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-gray-500">No new notifications.</p>
    )}
  </div>
)}

          </div>

          {/* Profile Avatar with Ratings */}
          <Link to="/profile" className="text-black hover:text-gray-700">
            <ProfileAvatar
              imageUrl={profileImage}
              altText="Profile Avatar"
              className="h-12 w-12"
            />
            <span className="text-sm ml-2">4.8 ★</span> {/* Example Rating */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
