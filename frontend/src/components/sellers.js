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
    };

    const openPopUb = (sellerId, sellerName) => {
        setSellerName(sellerName);
        setSellerId(sellerId);
        setVisibility(!visibility);
    };

    return (
        <div>
            <section className="search">
                <input
                    type="text"
                    placeholder="Search For A Seller"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </section>

            <section className="sellers">
                {sellers &&
                    sellers.map((seller) => (
                        <div className="seller" key={seller.id}>
                            <h2> {seller.username}</h2>
                            <p> {seller.filed}</p>
                            <p>{seller.summary}</p>
                            <button
                                onClick={() => {
                                    openPopUb(seller.id, seller.username);
                                }}
                            >
                                Book Appointment
                            </button>
                            <CustomPopup
                                onClose={popupCloseHandler}
                                show={visibility}
                                title="Booking"
                            >
                                <form>
                                    <div className="pop-up-content">
                                        <div className="user-info-inputs flex-box space-b">
                                            <div>
                                                <div>
                                                    <label>Phone Number </label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Your 10 digits phone number"
                                                        onChange={(e) =>
                                                            setPhoneNumber(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <br />

                                                <div>
                                                    <label>Appointment Date </label>
                                                    <br />

                                                    <input
                                                        type="text"
                                                        placeholder="Ex:02/01/2022"
                                                        onChange={(e) => setAppDate(e.target.value)}
                                                    />
                                                </div>
                                                <br />

                                                <div>
                                                    <label>In Clock </label>
                                                    <br />

                                                    <input
                                                        type="text"
                                                        placeholder="Ex:18:25"
                                                        onChange={(e) => setHour(e.target.value)}
                                                    />
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        Confirm Appointment
                                    </button>
                                </form>
                            </CustomPopup>
                        </div>
                    ))}
            </section>
        </div>
    );
};

export default Sellers;
