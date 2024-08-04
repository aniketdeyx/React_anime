import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reduxStore/authSlice'; // Adjust the path if necessary

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Logout;
