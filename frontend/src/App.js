import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Layout from './components/Layout.js';
import './App.css';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<AuthorPage />}/> */}
      <Route path="/app" element={<Layout />}/>
      <Route path="/app/home" element={<Home />}/>
      <Route path="/app/login" element={<Login />}/>
      <Route path="/app/signup" element={<Signup />}/>
      {/* <Route path="/app/profile" element={<Profile />}/> */}
    </Routes>
  );
}

export default App;
