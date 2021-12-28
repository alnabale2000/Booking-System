import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { setToken, setStatus } from "../../../reducers/login";
// import "./../../../styles.css/login.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/login", { email, password })
            .then((result) => {
                const user = jwt_decode(result.data["token"]);
                console.log("user", user);

                if (result) {
                    dispatch(setToken({ token: result.data["token"], user }));
                    localStorage.setItem("token", result.data["token"]);
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("id", user.userId);
                    localStorage.setItem("type", user.type);
                    setMessage("The user has been loggedIn successfully ");

                    if (user.type === "user") {
                        navigate("/");
                        dispatch(setStatus(true));
                    } else {
                        navigate("/Admin");
                    }
                } else {
                    setMessage("Error happened while login, please try again");
                    setTimeout(() => {
                        setMessage("");
                    }, 3000);
                }
            })
            .catch((err) => {
                setMessage("Password or Email is incorrect");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
            .finally((e) => {
                setTimeout(() => {
                    console.log("hi");
                    setMessage("");
                }, 3000);
            });
    };

    return (
        <main className="login-body fixed">
            <div className="login-box">
                <h2 className="login-top-text">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-input-box">
                        <label className="login-label">Email</label>
                        <br />
                        <input
                            className="login-input"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box">
                        <label className="login-label">Password</label>
                        <br />
                        <input
                            className="login-input"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button onSubmit={handleSubmit} className="login-submit-btn">
                        SUBMIT
                    </button>
                    <div className="divider"></div>

                    <p className={message === "" ? "" : "form-message"}>{message} </p>
                    <p className="footer-login-text">
                        don't have an account?
                        <span
                            className="switch-link"
                            onClick={() => {
                                navigate("/signup");
                            }}
                        >
                            Create Account here
                        </span>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;
