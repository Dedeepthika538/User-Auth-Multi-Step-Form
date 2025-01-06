import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { state } = useAuth();

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          <h1>Welcome, {state.user.email}</h1>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Dashboard;
