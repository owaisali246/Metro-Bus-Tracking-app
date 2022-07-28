import React, { useState } from 'react';
import './NewNav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";



export default function Navbar() {
    const [navClass, setNavClass] = useState('nav-color-1')


    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            setNavClass('nav-color-1');
        }
        else {
            setNavClass('nav-color-2');
        }
    })

    return (
        <div id='Navbar' className={`nav ${navClass}`}>
            <Link className='navIcons' to="/"><AiFillHome className='icons' />Home</Link>
            <Link className='navIcons' to="/Login"><FaUserCircle className='icons' />Login/SignUp</Link>
        </div>
    )
}
