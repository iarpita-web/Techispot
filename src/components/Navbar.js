// src/components/Navbar.js
import React, { use, useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => {


  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/sign-in'); // redirect to login page after logout
  };


  return (
  <nav className="navbar">
    <div className="navbar-logo">
      {/* Logo/icon */}
      <img src="https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg" alt="Techispot logo" className="logo-icon" />
      <span className="brand">TECHISPOT</span>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tech-news" className="nav-link">Tech news</Link>
      <Link to="/tech-memes" className="nav-link">Tech memes</Link>
      <Link to="/projects" className="nav-link">Tech Projects</Link>
      {currentUser ? (
          <>
            {/* Optionally show username */}
            <span className="nav-link" style={{ color: '#37b9fd', cursor: 'default', userSelect: 'none' }}>
              {currentUser.name || currentUser.userName || 'User'}
            </span>
            <button 
              onClick={handleLogout} 
              className="nav-link signin-btn" 
              style={{color: '#37b9fd', cursor: 'pointer', background: 'inherit', border: 'none', padding: 0 }}
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/sign-in" className="nav-link signin-btn">Sign in</Link>
        )}
    </div>
  </nav>
);
};

export default Navbar;
