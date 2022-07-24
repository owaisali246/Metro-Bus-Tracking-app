import React, { useState } from 'react';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FaCalculator } from 'react-icons/fa';
import { BsFillMegaphoneFill } from 'react-icons/bs';
// eslint-disable-next-line
import { FaMapMarkedAlt } from 'react-icons/fa';


export default function Navbar() {


  const [navClass, setNavClass] = useState('nav-color-1')


  window.addEventListener('scroll', function () {
    // console.log(window.scrollY)
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
      <a className='navIcons' href="#HomePage"><AiFillHome className='icons' />Home</a>
      {/* <a className='navIcons' href="#TrackingPage"><FaMapMarkedAlt className='icons' />Track</a> */}
      <a className='navIcons' href="#TrackingPage"><SiGooglemaps className='icons' />Track</a>
      <a className='navIcons' href="#FarePage"><FaCalculator className='icons' />Calculate Fare</a>
      <a className='navIcons' href="#anouncements"><BsFillMegaphoneFill className='icons' />Anouncements</a>
    </div>
  )
}
