import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { setToken, setStatus } from "../../../reducers/login";
// import "./../../../styles.css/login.css";

const SellerLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("t50");

        axios
            .post("http://localhost:5000/sellerLogin", { email, password })
            .then((result) => {
                const user = jwt_decode(result.data["token"]);

                if (result) {
                    dispatch(setToken({ token: result.data["token"], user }));
                    localStorage.setItem("token", result.data["token"]);
                    localStorage.setItem("id", user.id);
                    localStorage.setItem("type", user.type);
                    setMessage("The user has been loggedIn successfully ");

                    if (user.type === "seller") {
                        navigate(`/clients_appointments/${user.id}`);
                        dispatch(setStatus(true));
                    } else {
                        navigate("/");
                    }
                } else {
                    setMessage("Error happened while login, please try again");
                }
            })
            .catch((err) => {
                setMessage("Password or Email is incorrect");
            });
    };

    return (
        <main className="login-body">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button onSubmit={handleSubmit}>Submit</button>
                    <p className="footer-login-text">{message} </p>
                    <p className="footer-login-text">
                        don't have an account?
                        <span
                            className="c-link"
                            onClick={() => {
                                navigate("/register");
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

export default SellerLogin;
