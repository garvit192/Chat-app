// a page to sign up new users

import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
    return (
        <div className = "formContainer">
            <div className="formWrapper">
                <span className="logo">My Chat App</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Login</button>
                </form>
                <p>Don't have an account? Sign Up</p>
            </div>
        </div>
    );
}

export default Login;