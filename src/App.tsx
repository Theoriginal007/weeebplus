import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import EditProfile from './pages/EditProfile';
// Components
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Header with notification icon and profile avatar */}
        <Header />
        
        <main className="main-content">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/job-listings" element={<JobListings />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
