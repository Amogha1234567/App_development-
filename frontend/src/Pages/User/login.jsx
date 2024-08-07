import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Assets/CSS/style.css';
// import { Link } from "react-router-dom";

function Login() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idErr, setIdErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [incorrectErr, setIncorrectErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function Loginvalidation(isAdmin = false) {
        // Validate id
        if (id.trim().length === 0) {
            setIdErr(true);
        } else {
            setIdErr(false);
        }

        // Validate email
        if (!validateEmail(email.trim())) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }

        // Validate password
        if (password.trim().length === 0) {
            setPasswordErr(true);
        } else {
            setPasswordErr(false);
        }

        // Check credentials
        const register = JSON.parse(localStorage.getItem('user'));
        if (register && (register.id !== id || register.email !== email || register.password !== password)) {
            setIncorrectErr(true);
            alert("User Not Found");
        } else if (register) {
            setIncorrectErr(false);
            if (isAdmin) {
                navigate('/adminprofile'); // Redirect to admin home
            } else {
                navigate('/'); // Redirect to user home
            }
        }
    }

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>Login</h1>
                {incorrectErr && <small style={{ color: 'red', textAlign: 'center' }}>Enter the correct ID, email, and password</small>}
                <br />
                <p>ID</p>
                <input 
                    type='text' 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                />
                {idErr && <small style={{ color: '#d3521d' }}>Please enter a valid ID</small>}
                <br />
                <p>Email</p>
                <input 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {emailErr && <small style={{ color: '#d3521d' }}>Please enter a valid email address</small>}
                <br />
                <p>Password</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {passwordErr && <small style={{ color: '#d3521d' }}>Please enter the password</small>}
                <br />
                <br/>
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br />
                <br />
                <div className="button-container">
                <Link to={'/home'}> <button onClick={() => Loginvalidation(false)}>Login as user</button> </Link>
                <Link to={'/adminprofile'}>    <button onClick={() => Loginvalidation(true)}>Login as admin</button></Link>
                </div>
                <p style={{ fontSize: '15px' }}>Doesn't have an account yet? <Link to={'/register'}>Register</Link></p>
            </div>
        </div>
    );
}

export default Login;
