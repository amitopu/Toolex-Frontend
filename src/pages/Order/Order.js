import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Order = () => {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});
    const [user] = useAuthState(auth);
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            const idToken = user?.accessToken;
            axios
                .get(`http://localhost:5000/product/${id}`, {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                })
                .then((res) => setData(res.data))
                .catch((err) => setError(err.message));
        }
    }, [user, id]);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 md:px-8 p-4">
            <div className="px-5 mt-10 mb-7">
                <div className="mx-auto mb-5">
                    <img
                        className="w-[300px] h-[300px] border-2 border-red-700"
                        src={data.imageUrl}
                        alt=""
                    />
                </div>
                <p className="text-left text-sm font-semibold">
                    Product name: {data.name}
                </p>
                <p className="text-left text-sm font-semibold">
                    Product model: {data.model}
                </p>
                <p className="text-left text-sm font-semibold">
                    Product category: {data.category}
                </p>
                <p className="text-left text-sm font-semibold">
                    Price/unit: {data.price}$
                </p>
                <p className="text-left text-sm font-semibold">
                    Stock: {data.stock}
                </p>
                <p className="text-left text-sm font-semibold">
                    Minimum order quantity: {data.minOrder}
                </p>
                <p className="text-left text-sm font-semibold mt-4 mb-3">
                    {data.description}
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default Order;
