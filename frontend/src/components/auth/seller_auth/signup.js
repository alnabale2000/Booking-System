import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellerSignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [filed, setFiled] = useState("");
    const [summary, setSummary] = useState("");

    async function addNewUser() {
        try {
            //client validation
            if (!username || !email || !password || !filed || !summary) {
                setMessage("Please fill all the info");
            } else {
                console.log("t1");
                await axios
                    .post("http://localhost:5000/sellers", {
                        username,
                        email,
                        password,
                        filed,
                        summary,
                    })
                    .then((response) => {
                        console.log("response", response);
                        console.log("t2");

                        if (response) {
                            setMessage("The user has been created successfully ");
                            setTimeout(function () {
                                navigate("/login");
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
                    <div className="user-box">
                        <input
                            type="text"
                            onChange={(e) => setFiled(e.target.value)}
                            required
                            placeholder="ex:IT,Computer Science"
                        />
                        <label>Filed</label>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={(e) => setSummary(e.target.value)} required />
                        <label>Summary</label>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                    <p className="footer-login-text">{message} </p>
                    <p className="footer-login-text">
                        Already Have An Account?
                        <span
                            className="c-link"
                            onClick={() => {
                                navigate("/seller_login");
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

export default SellerSignUp;
