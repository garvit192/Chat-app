// a page to sign up new users

import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
    return (
        <div class = "formContainer">
            <div className="formWrapper">
                <span className="logo">My Chat App</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display Name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="file" id="picture" style={{display: 'none'}}/>
                    <label for="picture">
                        <img src={Add} alt= "Avatar placeholder"></img>
                        <span>Choose a profile picture</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;