import axios from "axios";
import { onIdTokenChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import SingelOrder from "../../users/SingleOrder/SingelOrder";

const ManageOrders = () => {
    const params = useParams();
    const id = params.id;
    const [orders, setOrders] = useState([]);
    const [idToken, setIdToken] = useState(null);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            const idToken = user.accessToken;
            setIdToken(idToken);
            axios
                .get(`https://toolex.onrender.com/allorders`, {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                })
                .then((res) => {
                    setOrders(res.data);
                });
        }
    }, [user, id]);
    return (
        <div>
            <h1 className="text-2xl text-center font-semibold">Your Orders</h1>
            <div>
                {orders.map((order) => (
                    <SingelOrder
                        key={order._id}
                        idToken={idToken}
                        orderData={order}
                    ></SingelOrder>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;
