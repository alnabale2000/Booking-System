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
                await axios
                    .post("http://localhost:5000/sellers", {
                        username,
                        email,
                        password,
                        filed,
                        summary,
                    })
                    .then((response) => {
                        if (response) {
                            setMessage("The user has been created successfully ");
                            setTimeout(function () {
                                navigate("/login");
                            }, 2000);
                        } else {
                            setMessage("Error happened while register, please try again");
                        }
                    });
            }
        } catch (error) {
            setMessage("Error 5000 happened while register, please try again");
            setTimeout(() => {
                setMessage("");
            }, 3000);
            throw error;
        }
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewUser();
    };

    return (
        <main className="login-body">
            <div className="login-box">
                <h2 className="login-top-text">CREATE SELLER ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-input-box margin-edit">
                        <label className="login-label">Username</label>
                        <br />
                        <input
                            className="login-input"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box margin-edit">
                        <label className="login-label">Email</label>
                        <br />
                        <input
                            className="login-input"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box margin-edit">
                        <label className="login-label">Password</label>
                        <br />
                        <input
                            className="login-input"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-box margin-edit">
                        <label className="login-label">Filed</label>
                        <br />
                        <input
                            className="login-input"
                            type="text"
                            onChange={(e) => setFiled(e.target.value)}
                            required
                            placeholder="ex:IT,Computer Science"
                        />
                    </div>
                    <div className="login-input-box margin-edit">
                        <label className="login-label">Summary</label>
                        <br />
                        <input
                            className="login-input"
                            type="text"
                            onChange={(e) => setSummary(e.target.value)}
                            required
                        />
                    </div>
                    <br />
                    <button onClick={handleSubmit} className="login-submit-btn">
                        SUBMIT
                    </button>
                    <div className="divider"></div>

                    {/* Avoiding extra white space*/}
                    <p className={message === "" ? "" : "form-message"}>{message} </p>
                    <p className="footer-login-text">
                        Already Have An Account?
                        <span
                            className="switch-link"
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
