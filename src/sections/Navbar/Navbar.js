import React, { useState } from 'react';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FaCalculator } from 'react-icons/fa';
import { BsFillMegaphoneFill } from 'react-icons/bs';
// eslint-disable-next-line
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";



export default function Navbar() {


  const [navClass, setNavClass] = useState('nav-color-1')

  window.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      console.log('Enter pressed')
    }
  })


  window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY < 64) {
      setNavClass('nav-color-1');
    }
    else if (window.scrollY > 64 && window.scrollY < 1145) {
      setNavClass('nav-color-2');
    }
    else if (window.scrollY > 1145 && window.scrollY < 1350) {
      setNavClass('nav-color-1');
    }
    else if (window.scrollY > 1350) {
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
