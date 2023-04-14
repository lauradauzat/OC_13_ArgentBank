import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>    
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    <Footer />  
    </>

  );
}

export default App;