import React from "react";
import './App.css';
import Navbar from './sections/Navbar/Navbar';
import HomePage from './sections/HomePage/HomePage.js'
import TrackingPage from './sections/Tracking/TrackingPage'
import FarePage from './sections/FarePage/FarePage.js'
import Footer from './sections/Footer/Footer';
import Anouncements from './sections/Announcements/Anouncements';
import Login from './sections/Login/Login';
import SignUp from './sections/SignUp/SignUp';
import NewNav from './sections/NewNav/NewNav';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <HomePage />
            <TrackingPage />
            <FarePage />
            <Anouncements />
            <Footer />
          </>} />
        <Route exact path='/Login' element={
          <>
            <NewNav />
            <Login />
          </>
        } />
        <Route exact path='/SignUp' element={
          <>
            <NewNav />
            <SignUp />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
