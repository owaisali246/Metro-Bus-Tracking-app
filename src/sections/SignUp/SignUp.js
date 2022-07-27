import React, { useState } from 'react';
import bgImage from '../../Assets/city-wallpaper-2.jpg';
import userImg from '../../Assets/UserImage.png';
import './SignUp.css'
import { FaUserCircle } from 'react-icons/fa';
import { RiDoorLockFill } from 'react-icons/ri';
import { ImMail4 } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAdn } from 'react-icons/fa';
import { RiGovernmentFill } from 'react-icons/ri';
import { Link } from "react-router-dom";



function SignUp(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [CNIC, setCNIC] = useState()
    const [mobno, setMobno] = useState()


    const [loggedin, setloggedin] = useState(window.localStorage.getItem('LoggedIn'))

    const handleUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleName = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handleMobno = (event) => {
        event.preventDefault();
        setMobno(event.target.value);
    }
    const handleCNIC = (event) => {
        event.preventDefault();
        setCNIC(event.target.value);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        setloggedin(true)
        window.localStorage.setItem('LoggedIn', true)
        window.location.reload();
    }
    const handleLogout = () => {
        setloggedin(false)
        window.localStorage.setItem('LoggedIn', false)
    }




    return (
        <div>
            <div style={{ height: '100vh', position: 'relative' }}>
                <img src={bgImage} className='imagebg' alt="" />
                {/* <div className='imgCover'></div> */}
                <div id='SignupDiv'>
                    <img src={userImg} id='userimg' alt="" />
                    <h2 style={{ marginBottom: '2vh' }}><b>SignUp Page</b></h2>
                    <div id='SignupDiv2'>
                        {loggedin === 'true' ?

                            <>
                                <h1 style={{ marginBottom: '2vh', color: '#03fe86' }}>You have succesfully Logged in!</h1>
                                <button onClick={handleLogout} className='LoginBtn'><b>LOGOUT</b></button>
                            </>

                            :

                            <div>
                                <form onSubmit={handleSignup}>
                                    <div style={{ display: 'flex', gap: '3vh' }}>
                                        <div>
                                            <FaAdn className='SignupIcons' />
                                            <input type="text" placeholder='Enter Name' className='SignupInput' value={name} onChange={handleName} required={true} />
                                        </div>
                                        <div>
                                            <FaUserCircle className='SignupIcons' />
                                            <input type="text" placeholder='Enter Username' className='SignupInput' value={username} onChange={handleUsername} required={true} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '3vh' }}>
                                        <div>
                                            <ImMail4 className='SignupIcons' />
                                            <input type="email" placeholder='Enter Email' className='SignupInput' value={email} onChange={handleEmail} required={true} />
                                        </div>
                                        <div>
                                            <RiDoorLockFill className='SignupIcons' />
                                            <input type="password" placeholder='Enter Password' className='SignupInput' value={password} onChange={handlePassword} required={true} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '3vh' }}>
                                        <div>
                                            <FaPhoneAlt className='SignupIcons' style={{ fontSize: "2rem" }} />
                                            <input type="number" placeholder='Enter MobileNo.' className='SignupInput' value={mobno} onChange={handleMobno} required={true} />
                                        </div>
                                        <div>
                                            <RiGovernmentFill className='SignupIcons' />
                                            <input type="number" placeholder='Enter CNIC' className='SignupInput' value={CNIC} onChange={handleCNIC} required={true} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '3vh' }}>
                                        <Link to='/Login'><button style={{ marginTop: '2rem' }} className='SignupBtn'><b>Go back to Login</b></button></Link>
                                        <input style={{ marginTop: '2rem' }} className='SignupBtn' type="submit" value="Register" />
                                    </div>
                                </form>
                            </div>}
                    </div>


                </div>
            </div>

        </div >
    )
}

export default SignUp