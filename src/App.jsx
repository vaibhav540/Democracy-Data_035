import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes'; // Import your routes component
import './App.css'

const App = () => {
  const location = useLocation();
  const hideNavbarPages = ['/user/settings']; // Add paths where Navbar should be hidden

  return (
    <>
      {!hideNavbarPages.includes(location.pathname) && <Navbar />}
      <AppRoutes /> 
    </>
  );
};

export default App;
