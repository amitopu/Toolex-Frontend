import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SingleProduct = ({ data }) => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    let idToken;
    if (user) {
        idToken = user?.accessToken;
    }

    const {
        _id,
        name,
        category,
        model,
        imageUrl,
        price,
        stock,
        minOrder,
        description,
    } = data;

    const deleteProduct = (_id) => {
        if (window.confirm("Are you sure to delete item?")) {
            axios
                .delete(`https://toolex.onrender.com/deleteproduct/${_id}`, {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                })
                .then((res) => {
                    console.log(res);
                    if (res.data.acknowledged) {
                        navigate(0);
                    } else {
                        setError("Error occured!! Not Deleted.");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
                });
        }
    };
    return (
        <div className="p-4 border-2 border-red-700 my-5 w-auto">
            <div className="w-fit mx-auto my-3">
                <img
                    className="h-[150px] w-[150px] border-2 border-red-700"
                    src={imageUrl}
                    alt=""
                />
            </div>
            <p className="text-left text-sm font-semibold">
                Product name: {name}
            </p>
            <p className="text-left text-sm font-semibold">
                Product model: {model}
            </p>
            <p className="text-left text-sm font-semibold">
                Product category: {category}
            </p>
            <p className="text-left text-sm font-semibold">
                Price/unit: {price}$
            </p>
            <p className="text-left text-sm font-semibold">Stock: {stock}</p>
            <p className="text-left text-sm font-semibold">
                Minimum order quantity: {minOrder}
            </p>
            <p className="text-left text-sm font-semibold mt-4 mb-3">
                {description}
            </p>

            <div>
                <button
                    onClick={() => deleteProduct(_id)}
                    className="w-56 h-[40px] bg-red-700 rounded-md hover:font-bold block my-2 md:my-5 mx-auto text-white"
                >
                    Delete
                </button>
            </div>
            <p className="text-red-700 text-center font-bold mt-3">{error}</p>
        </div>
    );
};

export default SingleProduct;
