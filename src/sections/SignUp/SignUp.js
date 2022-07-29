import React, { useState, useEffect } from 'react';
import bgImage from '../../Assets/city-wallpaper-2.jpg';
import userImg from '../../Assets/UserImage.png';
import './SignUp.css'
import { FaUserCircle } from 'react-icons/fa';
import { RiDoorLockFill } from 'react-icons/ri';
import { ImMail4 } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAdn } from 'react-icons/fa';
import { RiGovernmentFill } from 'react-icons/ri';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";


function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [CNIC, setCNIC] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [loggedin, setloggedin] = useState(window.localStorage.getItem('LoggedIn'))
    const [UserDetails, setUserDetails] = useState([])
    const [storedUsername, setstoredUsername] = useState(window.localStorage.getItem('Username'))
    const [storedName, setstoredName] = useState(window.localStorage.getItem('Name'))
    const [storedEmail, setstoredEmail] = useState(window.localStorage.getItem('Email'))

    useEffect(() => {
        // fetch('http://192.168.18.16/php_program/get_user_details.php')
        fetch('https://rapidtracking.000webhostapp.com/get_user_details.php')
            .then(Response => Response.json())
            .then(json => setUserDetails(json));
        setstoredName(window.localStorage.getItem('Name'))
        setstoredUsername(window.localStorage.getItem('Username'))
        setstoredEmail(window.localStorage.getItem('Email'))
    }, [])

    const Usernames = UserDetails.map((user) => user.username);
    const Emails = UserDetails.map((user) => user.email);
    const Mob_nos = UserDetails.map((user) => user.mobile_no);
    const CNICs = UserDetails.map((user) => user.CNIC);


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
        setMobile_no(event.target.value);
    }
    const handleCNIC = (event) => {
        event.preventDefault();
        setCNIC(event.target.value);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if (Usernames.includes(username)) {
            window.alert('This username is already taken!')
            return;
        }
        else if (Emails.includes(email)) {
            window.alert('This email is already taken!')
            return;
        }
        else if (Mob_nos.includes(mobile_no)) {
            window.alert('This Mobile nunber is already taken!')
            return;
        }
        else if (CNICs.includes(CNIC)) {
            window.alert('This CNIC is already taken!')
            return;
        }
        else if (name.length > 18) {
            window.alert('Name is too Long!')
            return;
        }
        else if (email.length > 34) {
            window.alert('Email is too Long!')
            return;
        }
        else if (password.length > 18) {
            window.alert('Password is too Long!')
            return;
        }
        else if (username.length > 18) {
            window.alert('Username is too Long!')
            return;
        }
        else if (CNIC.length <= 12 || CNIC.length >= 14) {
            window.alert('CNIC is invalid!')
            return;
        }
        else if (mobile_no.length <= 10 || mobile_no.length >= 12 || parseInt(mobile_no[0]) !== 0) {
            window.alert('Mobile nunber is invalid!')
            return;
        }
        else {
            send_user_details(name, username, password, email, CNIC, mobile_no)
            setloggedin(true)
            window.localStorage.setItem('LoggedIn', true)
            window.localStorage.setItem('Username', username)
            window.localStorage.setItem('Name', name)
            window.localStorage.setItem('Email', email)
            window.location.reload();
            return;
        }
    }


    const handleLogout = () => {
        setloggedin(false)
        window.localStorage.setItem('LoggedIn', false)
    }

    function send_user_details(name, username, password, email, CNIC, mobile_no) {
        // var api = "http://localhost/php_program/send_user_details.php"
        var api = "https://rapidtracking.000webhostapp.com/send_user_details.php"

        var data = {
            name: name,
            username: username,
            password: password,
            email: email,
            CNIC: parseInt(CNIC),
            mobile_no: parseInt(mobile_no)
        };

        fetch(api, {
            method: 'POST',
            body: JSON.stringify(data)
        }).catch((error) => {
            // window.alert('Error' + error);
        })
    }

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <img src={bgImage} className='imagebg' alt="" />
            <div id='SignupDiv'>
                <img src={userImg} id='userimg' alt="" />
                <h2 style={{ marginBottom: '2vh' }}><b>SignUp Page</b></h2>
                <div id='SignupDiv2'>
                    {loggedin === 'true' ?
                        <>
                            <h1 style={{ marginBottom: '2vh', color: '#03fe86' }}>You have succesfully Logged in!</h1>
                            <h3 style={{ marginBottom: '2vh', color: 'white', textAlign: 'left' }}>Username:&nbsp; {storedUsername}<br />Name:&nbsp; {storedName}<br />Email:&nbsp; {storedEmail}</h3>
                            <button onClick={handleLogout} className='Logoutbtn'><b>LOGOUT</b></button>
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
                                        <input type="number" placeholder='Enter MobileNo.' className='SignupInput' value={mobile_no} onChange={handleMobno} required={true} />
                                    </div>
                                    <div>
                                        <RiGovernmentFill className='SignupIcons' />
                                        <input type="number" placeholder='Enter CNIC' className='SignupInput' value={CNIC} onChange={handleCNIC} required={true} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '3vh' }}>
                                    <Link to='/Login'><button style={{ marginTop: '2rem' }} className='SignupBtn'><BsFillArrowLeftCircleFill className='backArrow' /><b>Go back to Login</b></button></Link>
                                    <input style={{ marginTop: '2rem' }} className='SignupBtn' type="submit" value="Register" />
                                </div>
                            </form>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default SignUp