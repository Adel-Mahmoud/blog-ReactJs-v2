import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); 

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("user"); 
    console.log("User logged out");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">BlogVerse</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
        <li>
          {user ? (
            <div 
              onClick={handleLogout}
            >
              {user.picture && (
                <img
                  src={user.picture}
                  alt={user.username || "User"}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              )}
              Logout
            </div>
          ) : (
            <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;