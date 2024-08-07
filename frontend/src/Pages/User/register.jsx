import React, { useState } from "react";
import { Link } from "react-router-dom";
// import '../../Assets/CSS/style.css';
import '../../Assets/CSS/style.css';

function Register() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function registration() {
        if (id.trim().length === 0 || name.trim().length === 0 || phone.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || login.trim().length === 0) {
            setNameErr(true);
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
        } else if (password.length < 5) {
            alert('Please enter a password with more than five characters');
        } else {
            setNameErr(false);
            const user = { id, name, phone, email, password, login };
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/';
        }
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>Register</h1>
                {nameErr && <p className="errP">Please fill every input field</p>}
                <br />
                <p>ID</p>
                <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                <br />
                <p>Name</p>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <p>Phone</p>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <p>Email</p>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <p>Password</p>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <p>Login</p>
                <input type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
                <br />
                <label className="checkbox-container">
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br />
                <div className="button-container">
                <Link to={'/'}>    <button onClick={registration}>Register</button></Link>
                </div>
                <p style={{ fontSize: '15px' }}>Already have an account? <Link to={'/'}>Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
