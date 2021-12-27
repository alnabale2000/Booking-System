import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function addNewUser() {
        try {
            //client validation
            if (!username || !email || !password) {
                setMessage("Please fill all the info");
            } else {
                console.log("t1");
                await axios
                    .post("http://localhost:5000/users", {
                        username,
                        email,
                        password,
                    })
                    .then((response) => {
                        console.log("response", response);
                        console.log("t2");

                        if (response) {
                            setMessage("The user has been created successfully ");
                            setTimeout(function () {
                                navigate("/seller_login");
                            }, 2000);
                        } else {
                            setMessage("Error happened while register, please try again");
                        }
                    });
                console.log("t10");
            }
        } catch (error) {
            setMessage("Error 5000 happened while register, please try again");
            throw error;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser();
    };

    return (
        <main className="login-body">
            <div className="login-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" onChange={(e) => setUsername(e.target.value)} required />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <a onClick={handleSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <p className="footer-login-text">{message} </p>
                    <p className="footer-login-text">
                        Already Have An Account?
                        <span
                            className="c-link"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            login
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default SignUp;
