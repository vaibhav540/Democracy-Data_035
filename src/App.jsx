import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes"; // Import your routes component
import "./App.css";
import HomePage from "./components/HomePage";
import ScrollCitys from "./components/SagarComponent/PopularCity";
import About from "./components/About";
import States from "./components/SagarComponent/States";

const App = () => {
  const location = useLocation();
  const hideNavbarPages = ["/user/settings"]; // Add paths where Navbar should be hidden

  return (
    <>
      {!hideNavbarPages.includes(location.pathname) && <Navbar />}
      <AppRoutes />
      <HomePage/>
      <States />
      <ScrollCitys />
      <About />
    </>
  );
};

export default App;
