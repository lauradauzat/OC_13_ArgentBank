import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service from "../service";
import { useDispatch } from "react-redux";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(username, password);
    const body = {
      "email": username,
      "password": password
    }; 
    //console.log(body);

    
    const token = await Service.retrieveToken(body)
    if(token === null){
      alert("Wrong username or password");
      return;
    }
    dispatch({type:'userAuth/logUser',payload:token});
    navigate("/user");
  }

  return (
    <div>
      <main className="main bg-light">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;