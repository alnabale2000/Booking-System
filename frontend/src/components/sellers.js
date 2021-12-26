import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setSellers } from "../reducers/sellers";

const Sellers = () => {
    const [sellerName, setSellerName] = useState("none");

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            sellers: state.sellers.sellers,
        };
    });
    const sellers = state.sellers;

    useEffect(() => {
        axios.get(`http://localhost:5000/sellers/${sellerName}`).then((res) => {
            dispatch(setSellers(res.data));
        });
    }, [sellerName]);
    return (
        <div>
            <section className="search">
                <input
                    type="text"
                    placeholder="Search For A Seller"
                    onChange={(e) => setSellerName(e.target.value)}
                />
            </section>

            <section className="sellers">
                {sellers &&
                    sellers.map((seller) => (
                        <div className="seller" key={seller.id}>
                            <h2> {seller.username}</h2>
                            <p> {seller.filed}</p>
                            <p>{seller.summary}</p>
                            <button>Book Appointment</button>
                        </div>
                    ))}
            </section>
        </div>
    );
};

export default Sellers;
