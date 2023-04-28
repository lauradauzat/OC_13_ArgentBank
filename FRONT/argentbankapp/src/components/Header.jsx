import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function Header() {
  //const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const token = useSelector(state => state.userAuth.token);
  const firstName = useSelector(state => state.userAuth.firstName);
  const lastName = useSelector(state => state.userAuth.lastName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout(event) {
    event.preventDefault();
    
    dispatch({type:'userAuth/logUser',payload:''});
    dispatch({type:'userAuth/loadProfile',payload:''});
    navigate("/login");
    
  }

  function handleSignInClick() {
    navigate("/login");
  }

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-item">  <img
            className="main-nav-logo-image"
            src="/src/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
        {token != "" ? (
              <>
             
                <Link to="/user" className="main-nav-item"> <FontAwesomeIcon icon={faUserCircle} /> {firstName}  {lastName} </Link>
                <Link to="/" className="main-nav-item" onClick={handleLogout}> <FontAwesomeIcon icon={faSignOutAlt} /> Sign out</Link>
            
              </>
          ) : (
                <Link to="/login" className="main-nav-item" onClick={handleSignInClick}> <FontAwesomeIcon icon={faUserCircle} /> Sign in</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header; 