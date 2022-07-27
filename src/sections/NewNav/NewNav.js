import React from 'react';
import './NewNav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";



export default function Navbar() {

    return (
        <div id='Navbar' className={`nav nav-color-1`}>
            <Link className='navIcons' to="/"><AiFillHome className='icons' />Home</Link>
            <Link className='navIcons' to="/Login"><FaUserCircle className='icons' />Login/SignUp</Link>
        </div>
    )
}
