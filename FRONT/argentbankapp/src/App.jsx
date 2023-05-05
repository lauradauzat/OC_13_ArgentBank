import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {


  return (
    <>     
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    <Footer />        

    </>

  );
}

export default App;