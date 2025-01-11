// src/pages/Notification.tsx
import React from 'react';

const Notification = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6">Notifications</h1>

        {/* Notification List */}
        <div className="space-y-4">
          {/* Notification 1 */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">New message from Sarah</p>
                <p className="text-sm text-gray-600">You received a new message. Click to view.</p>
              </div>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">Account updated</p>
                <p className="text-sm text-gray-600">Your account settings were updated successfully.</p>
              </div>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">Reminder: Meeting tomorrow</p>
                <p className="text-sm text-gray-600">Don't forget about your meeting tomorrow at 10 AM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
