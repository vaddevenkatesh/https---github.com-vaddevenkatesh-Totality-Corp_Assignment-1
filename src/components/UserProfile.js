import React from 'react';
import { useAuth } from '../context/AuthContext';
import './UserProfile.css';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="user-profile">
      <img src={user.avatar} alt="User Avatar" className="user-avatar" />
      <h2>{user.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
