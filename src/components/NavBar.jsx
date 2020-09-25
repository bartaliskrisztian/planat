import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="navbar">
      <h2 className="nav-label">
        <Link to="/planat">Plan At</Link>
      </h2>
      <div className="profile">
        {user && <div>{user.nickname}</div>}
        <button
          className="log-button"
          onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
