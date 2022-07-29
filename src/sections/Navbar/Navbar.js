import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FaCalculator } from 'react-icons/fa';
import { BsFillMegaphoneFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";



export default function Navbar() {


  const [navClass, setNavClass] = useState('nav-color-1');
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const height = windowSize.innerHeight;

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY < (0.06 * height)) {
      setNavClass('nav-color-1');
    }
    else if (window.scrollY > (0.06 * height) && window.scrollY < (3 * height)) {
      setNavClass('nav-color-2');
    }
    else if (window.scrollY > (3 * height)) {
      setNavClass('nav-color-1');
    }
  })

  return (
    <div id='Navbar' className={`nav ${navClass}`}>
      <Link className='navIcons' to="/"><AiFillHome className='icons' />Home</Link>
      <a className='navIcons' href="#TrackingPage"><SiGooglemaps className='icons' />Track</a>
      <a className='navIcons' href="#FarePage"><FaCalculator className='icons' />Calculate Fare</a>
      <a className='navIcons' href="#anouncements"><BsFillMegaphoneFill className='icons' />Anouncements</a>
      <Link className='navIcons' to="/Login"><FaUserCircle className='icons' />Login/SignUp</Link>
    </div>
  )
}
