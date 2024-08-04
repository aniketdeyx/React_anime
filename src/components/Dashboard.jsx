import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useSelector } from 'react-redux';

function Dashboard() {
  // const { email, password } = useUser();
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    console.log('User:', user);
    console.log('User email:', user?.email);

  return (
    <div>
      {isLoggedIn ? (
                <div>
                  
                    <h2>Dashboard</h2>
                    <p>Email: {user?.email}</p>
                    <p>Password: {user?.password}</p>
                </div>
            ) : (
                <p>Please log in to see your credentials.</p>
            )}
    </div>
  );
}

export default Dashboard;
