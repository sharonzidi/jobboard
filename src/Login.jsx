import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import NavbarHome from './Button/NavbarHome';
import './Css/SignIn.css';

export default (props) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        password: '',
        username: '',
        favorites: [],
    })
    const [errorMsg, setError] = useState('');
    const [loggedInName, setLoggedInName] = useState('');
    return (
        <div id="main">
            <NavbarHome />
            <div class="text-center">
                <form class="form-signin">
                    <img class="mb-4" src="https://www.kindpng.com/picc/m/133-1337806_job-vector-seeker-job-logo-magnifying-glass-png.png" alt="" width="200" height="150" />
                    <h3 class="h3 mb-3 font-weight-normal">Log in Your Account</h3>
                    {errorMsg}
                    <input
                        type="text" class="form-control" id="exampleInputUsername1" aria-describedby="Username" placeholder="Enter username"
                        required autofocus
                        value={userData.username} onChange={(e) => {
                            const username = e.target.value;
                            setUserData({
                                ...userData,
                                username: username
                            })
                        }} />
                    <input
                        type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        required
                        value={userData.password} onChange={(e) => {
                            const password = e.target.value;
                            setUserData({
                                ...userData,
                                password: password
                            })
                        }} type='password' />
                    <button
                        class="btn btn-lg btn-primary btn-block" type="submit"
                        onClick={() => {
                            if (!userData.username) {
                                setError("You must type in a username.");
                                return;
                            }
                            if (!userData.password) {
                                setError("You must type in a password.");
                                return;
                            }
                            axios.post('/api/users/authenticate', userData)
                                .then(response => {
                                    navigate("/")
                                    console.log(response)
                                })
                                .catch(error => setError("Account doesn't Exists."));
                        }}
                    >Login</button>
                </form>
            </div>
        </div>
    );
}
