import React, { useState, useEffect } from 'react';
import bgImage from '../../Assets/city-wallpaper-2.jpg';
import userImg from '../../Assets/UserImage.png';
import './Login.css';
import { FaUserCircle } from 'react-icons/fa';
import { RiDoorLockFill } from 'react-icons/ri';
import { Link } from "react-router-dom";



function Login() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [UserDetails, setUserDetails] = useState([])

    // to keep user logged in
    const [loggedin, setloggedin] = useState(window.localStorage.getItem('LoggedIn'))


    useEffect(() => {
        // fetch('http://192.168.18.16/php_program/get_user_details.php')
        fetch('https://rapidtracking.000webhostapp.com/get_user_details.php')
            .then(Response => Response.json())
            .then(json => setUserDetails(json));
    }, [])

    const Usernames = UserDetails.map((user) => user.username);
    const Passwords = UserDetails.map((user) => user.password);

    const handleUsername = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if (username === '' || !Usernames.includes(username)) {
            window.alert('You have entered an invalid username!')
        }
        else if (password === '') {
            window.alert('Please eneter a Password!')
        }
        else if (password !== Passwords[(Usernames.indexOf(username))]) {
            window.alert('You have enterd an invalild password!')
        }
        else if (password === Passwords[(Usernames.indexOf(username))]) {
            setloggedin(true)
            window.localStorage.setItem('LoggedIn', true)
            window.location.reload();
        }
    }

    const handleLogout = () => {
        setloggedin(false)
        window.localStorage.setItem('LoggedIn', false)
    }


    return (
        <>
            <div style={{ height: '100vh', position: 'relative' }}>
                <img src={bgImage} className='imagebg' alt="" />
                <div id='LoginDiv'>
                    <div id='LoginDiv2'>
                        <img src={userImg} id='userimg' alt="" />
                        <h2 style={{ marginBottom: '2vh' }}><b>Login Page</b></h2>

                        {loggedin === 'true' ?
                            <>
                                <h1 style={{ marginBottom: '2vh', color: '#03fe86' }}>You have succesfully Logged in!</h1>
                                <button onClick={handleLogout} className='LoginBtn'><b>LOGOUT</b></button>
                            </>
                            :
                            <>
                                <div>
                                    <FaUserCircle className='LoginIcons' />
                                    <input type="text" placeholder='Enter Username' className='LoginInput' value={username} onChange={handleUsername} />
                                </div>
                                <div>
                                    <RiDoorLockFill className='LoginIcons' />
                                    <input type="password" placeholder='Enter Password' className='LoginInput' value={password} onChange={handlePassword} />
                                </div>
                                <button onClick={handleLogin} id='loginbtn' className='LoginBtn'><b>LOGIN</b></button>
                                <Link to='/SignUp'><button className='LoginBtn'><b>DON'T HAVE AN ACCOUNT?</b></button></Link>
                            </>}
                    </div>

                </div>
            </div>
        </>
    )

}

export default Login