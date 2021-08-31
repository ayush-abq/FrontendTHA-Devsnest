import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <h3 className="Login-Signup">
                   <span> <ArrowBackIosIcon /> Log In / Sign Up</span> 
                </h3>
            </Link>
        </div>
    )
}

export default Login;
