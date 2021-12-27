import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setStatus } from "./../reducers/login";
import { useEffect } from "react";
// import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        user = jwt_decode(storedToken, { header: true });
    }

    const id = localStorage.getItem("id");
    const type = localStorage.getItem("type");
    const state = useSelector((state) => {
        return {
            // token: state.loginReducer.token,
            isLoggedIn: state.loginReducer.isLoggedIn,
        };
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        setStatus(token ? true : false);
        console.log("state.isLoggedIn", state.isLoggedIn);
        setToken({ token, user });
    }, []);

    const loggedOut = () => {
        localStorage.clear();
        dispatch(setToken({ token: "", user }));
        navigate("/");
    };
    const goTo = (endPoint) => {
        navigate(endPoint);
    };
    return (
        <nav className="navbar">
            {state.isLoggedIn ? (
                <div className="flex-box space-b">
                    <div>
                        <h1
                            className="title"
                            onClick={() => {
                                goTo("/");
                            }}
                        >
                            Sellers List
                        </h1>
                    </div>
                    <div className="links flex-box">
                        {type === "user" ? (
                            <h1
                                className="link"
                                onClick={() => {
                                    goTo(`/my_appointments/${id}`);
                                }}
                            >
                                My Appointments
                            </h1>
                        ) : (
                            <div>
                                <h1
                                    className="link"
                                    onClick={() => {
                                        goTo(`/clients_appointments/${id}`);
                                    }}
                                >
                                    Clients Appointments
                                </h1>
                            </div>
                        )}

                        <h1 className="link" onClick={loggedOut}>
                            log out
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="flex-box space-b">
                    <div>
                        <h1
                            className="title"
                            onClick={() => {
                                goTo("/");
                            }}
                        >
                            Sellers List
                        </h1>
                    </div>
                    <div className="links flex-box">
                        <h1
                            className="link"
                            onClick={() => {
                                goTo("/seller_signup");
                            }}
                        >
                            Be A Seller
                        </h1>
                        <h1
                            className="link"
                            onClick={() => {
                                goTo("/signup");
                            }}
                        >
                            Sign Up
                        </h1>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
