import React, { useState } from 'react';
import bgImage from '../../Assets/city-wallpaper-2.jpg';
import userImg from '../../Assets/UserImage.png';
import './Login.css';
import { FaUserCircle } from 'react-icons/fa';
import { RiDoorLockFill } from 'react-icons/ri';
import { Link } from "react-router-dom";



function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    console.log(username, password)

    const handleUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }



    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <img src={bgImage} className='imagebg' alt="" />
            <div className='imgCover'></div>
            <div id='LoginDiv'>
                <div id='LoginDiv2'>
                    <img src={userImg} id='userimg' alt="" />
                    <h2 style={{ marginBottom: '2vh' }}><b>Login Page</b></h2>
                    <div>
                        <FaUserCircle className='LoginIcons' />
                        <input type="text" placeholder='Enter Username' className='LoginInput' value={username} onChange={handleUsername} />
                    </div>
                    <div>
                        <RiDoorLockFill className='LoginIcons' />
                        <input type="password" placeholder='Enter Password' className='LoginInput' value={password} onChange={handlePassword} />
                    </div>
                    <button className='LoginBtn'><b>LOGIN</b></button>
                    <Link to='/SignUp'><button className='LoginBtn'><b>DON'T HAVE AN ACCOUNT?</b></button></Link>
                </div>


            </div>
        </div>
    )
}

export default Login