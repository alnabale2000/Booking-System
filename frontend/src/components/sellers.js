import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CustomPopup from "./popup";

import { setSellers } from "../reducers/sellers";

const Sellers = () => {
    const userId = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    const [searchText, setSearchText] = useState("none");
    const [visibility, setVisibility] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [appDate, setAppDate] = useState("");
    const [hour, setHour] = useState("");
    const [appStatus, setAppStatus] = useState("Waiting For Response...");
    const [sellerName, setSellerName] = useState("");
    const [sellerId, setSellerId] = useState(0);
    const [toggleConfirmButton, setToggleConfirmButton] = useState(true);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            sellers: state.sellers.sellers,
        };
    });
    const sellers = state.sellers;

    useEffect(() => {
        axios.get(`http://localhost:5000/sellers/${searchText}`).then((res) => {
            dispatch(setSellers(res.data));
        });
    }, [searchText]);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post(`http://localhost:5000/add_appointment/`, {
                    phoneNumber,
                    appDate,
                    hour,
                    sellerName,
                    sellerId,
                    username,
                    userId,
                    appStatus,
                })
                .then((res) => {
                    console.log("res.data", res.data);
                    // dispatch(addAddress(res.data));
                });
            setToggleConfirmButton(false);
            setMessage("Appointment Confirmed Succssfully");
            setTimeout(() => {
                setVisibility(!visibility);
            }, 2500);
        } catch (error) {
            setMessage("Can not Confirm");
        }
    };

    const openPopUb = (sellerId, sellerName) => {
        if (toggleConfirmButton === false) setToggleConfirmButton(true);
        setSellerName(sellerName);
        setSellerId(sellerId);
        setVisibility(!visibility);
    };

    return (
        <div>
            <section>
                <input
                    className="search"
                    type="text"
                    placeholder="Search For A Seller"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </section>

            <section className="sellers ">
                {sellers &&
                    sellers.map((seller) => (
                        <div className="seller" key={seller.id}>
                            <section>
                                <h1 className="seller-name"> {seller.username}</h1>
                                <p className="seller-filed"> {seller.filed}</p>
                                <p className="seller-summary">{seller.summary}</p>
                            </section>
                            {userId !== null ? (
                                <button
                                    className="confirm-button"
                                    onClick={() => {
                                        openPopUb(seller.id, seller.username);
                                    }}
                                >
                                    Book Appointment
                                </button>
                            ) : (
                                <p className="login-warning-text">Login to book a Date</p>
                            )}
                            <CustomPopup
                                onClose={popupCloseHandler}
                                show={visibility}
                                title="Booking"
                            >
                                <form>
                                    <div className="pop-up-content">
                                        <div className="app-info-inputs ">
                                            <div className="app-info-div">
                                                <label className="app-info-label">
                                                    Phone Number{" "}
                                                </label>
                                                <br />
                                                <input
                                                    className="app-info-input"
                                                    type="text"
                                                    placeholder="Enter 10 digits phone number"
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </div>
                                            <br />

                                            <div className="app-info-div">
                                                <label className="app-info-label">
                                                    Appointment Date{" "}
                                                </label>
                                                <br />

                                                <input
                                                    className="app-info-input"
                                                    type="text"
                                                    placeholder="Ex:02/01/2022"
                                                    onChange={(e) => setAppDate(e.target.value)}
                                                />
                                            </div>
                                            <br />

                                            <div className="app-info-div">
                                                <label className="app-info-label">In Clock </label>
                                                <br />

                                                <input
                                                    className="app-info-input"
                                                    type="text"
                                                    placeholder="Ex:18:25"
                                                    onChange={(e) => setHour(e.target.value)}
                                                />
                                            </div>
                                            <br />
                                        </div>
                                        {toggleConfirmButton ? (
                                            <button
                                                className="confirm-button pop-ub-button"
                                                onClick={handleSubmit}
                                                type="submit"
                                            >
                                                Confirm Appointment
                                            </button>
                                        ) : (
                                            <p className="pop-up-message">{message}</p>
                                        )}
                                    </div>
                                </form>
                            </CustomPopup>
                        </div>
                    ))}
            </section>
        </div>
    );
};

export default Sellers;
