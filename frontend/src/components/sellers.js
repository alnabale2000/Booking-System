import React, { useEffect, useState } from "react";
import axios from "axios";

const Sellers = () => {
    const [sellerName, setSellerName] = useState("none");

    useEffect(() => {
        axios.get(`http://localhost:5000/sellers/${sellerName}`).then((res) => {
            console.log("res.data", res.data);
        });
    }, []);
    return (
        <div>
            <h1>Sellers Page</h1>
        </div>
    );
};

export default Sellers;
