import React from 'react';
import JobCard from '../components/JobCard';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard bg-gray-100 min-h-screen p-6">
      {/* Dashboard Header */}
      <header className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, Contractor!</h1>
        <p className="text-gray-600 mt-2">Here are the latest job opportunities tailored for you:</p>
      </header>

      {/* Available Jobs Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Job Cards */}
          <JobCard jobId="1" title="Air Conditioner Repair" location="Downtown City" priceRange="$150 - $300" />
          <JobCard jobId="2" title="Heating System Installation" location="Suburban Area" priceRange="$400 - $600" />
          <JobCard jobId="3" title="Vent Cleaning" location="Northside District" priceRange="$100 - $250" />
          <JobCard jobId="4" title="Duct Inspection" location="Eastville" priceRange="$200 - $450" />
          <JobCard jobId="5" title="HVAC Maintenance" location="Greenwood" priceRange="$300 - $500" />
          {/* Add more JobCard components as needed */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
