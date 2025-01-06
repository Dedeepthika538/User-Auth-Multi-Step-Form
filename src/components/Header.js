import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { state, dispatch } = useAuth();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">User-Auth-Multi-Step-Form</a>
        <div className="d-flex">
          {state.isAuthenticated && (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
