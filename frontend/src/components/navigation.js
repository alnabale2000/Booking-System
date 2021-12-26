import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setStatus } from "./../reducers/login";
import { useEffect } from "react";
// import jwt from "jsonwebtoken";

const Navigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const user = jwt.decode(localStorage.getItem("token"));
    const id = localStorage.getItem("id");
    const type = localStorage.getItem("type");

    const state = useSelector((state) => {
        return {
            token: state.loginReducer.token,
            isLoggedIn: state.loginReducer.isLoggedIn,
        };
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        setStatus(token ? true : false);

        // setToken({ token, user });
    }, []);

    const loggedOut = () => {
        localStorage.clear();
        // dispatch(setToken({ token: "", user }));
        navigate("/");
    };
    const goTo = (endPoint) => {
        navigate(endPoint);
    };
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {state.isLoggedIn ? (
                <>
                    <div>
                        <h1
                            className="title"
                            onClick={() => {
                                goTo("/");
                            }}
                        >
                            Booking System
                        </h1>
                    </div>
                    <div className="links">
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
                </>
            ) : (
                <>
                    <div>
                        <h1
                            className="title"
                            onClick={() => {
                                goTo("/");
                            }}
                        >
                            Booking System
                        </h1>
                    </div>
                    <div className="links">
                        <h1
                            className="link"
                            onClick={() => {
                                goTo("/restaurant_login");
                            }}
                        >
                            Be A Seller
                        </h1>
                        <h1
                            className="link"
                            onClick={() => {
                                goTo("/login");
                            }}
                        >
                            Sign In
                        </h1>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navigation;
