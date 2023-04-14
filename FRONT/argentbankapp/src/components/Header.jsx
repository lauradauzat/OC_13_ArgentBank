import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";



function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);


  function handleLogout(event) {
    event.preventDefault();

    // Clear the authentication token from local storage
    localStorage.removeItem("token");

    // Update the login status
    setIsLoggedIn(false);

    // Redirect to the login page
    window.location.href = "/login";
  }

  function handleSignInClick() {
    window.location.href = "/login";
  }

  return (
    <header>
      <nav className="main-nav">
      <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src="/src/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
        {isLoggedIn ? (
            <a href="/" className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign out
            </a>
          ) : (
            <a href="/login" className="main-nav-item" onClick={handleSignInClick}>
              <FontAwesomeIcon icon={faUserCircle} /> Sign in
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header; 