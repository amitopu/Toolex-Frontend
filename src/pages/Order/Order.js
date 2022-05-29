import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Order = () => {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState({});
    const [user] = useAuthState(auth);
    const [error, setError] = useState("");
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();
    const [orderError, setOrderError] = useState("");
    const [loginError, setLoginError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });
    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
    } = useForm({ mode: "onBlur" });

    useEffect(() => {
        setLoginError("");
        if (user) {
            const idToken = user?.accessToken;
            axios
                .get(
                    `https://infinite-ocean-49945.herokuapp.com/product/${id}`,
                    {
                        headers: {
                            authorization: "Bearer " + idToken,
                        },
                    }
                )
                .then((res) => {
                    setData(res.data);
                    // console.log(res.data);
                })
                .catch((err) => {
                    setLoginError("Please login and try again");
                    setError(err.message);
                });
        }
    }, [user, id]);

    // order summary update function
    const orderSummary = (d) => {
        const { quantity } = d;
        setOrderQuantity(quantity);
        const cost = parseFloat(data.price) * parseInt(quantity);
        const total = cost + cost * 0.05 + 50;
        setTotalCost(total);
        console.log("hello");
    };

    // order confirm function
    const confirmOrder = (o) => {
        setLoading("Your Order Is Being generated...");
        const idToken = user.accessToken;
        const { address } = o;
        const productId = data._id;
        const orderData = {
            productId: data.productId,
            userId: user.uid,
            userName: user.displayName,
            productName: data.name,
            totalCost: totalCost,
            status: "pending",
            payment: false,
            shippingAddress: address,
            orderQuantity: orderQuantity,
        };

        axios
            .post(
                "https://infinite-ocean-49945.herokuapp.com/order",
                orderData,
                {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                }
            )
            .then((res) => {
                if (res.data.acknowledged) {
                    navigate(`/userdashboard/orders/${user.uid}`);
                }
            })
            .catch((err) => {
                setLoading("");
                setOrderError(err.message);
            });

        console.log(orderData);
    };

    return (
        <>
            <Header></Header>
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
                    <p className="text-red-700 text-center">{error}</p>
                    <p className="text-red-700 text-center">{loginError}</p>
                </div>
                <div
                    className={`${
                        Object.keys(data).length !== 0 ? "block" : "hidden"
                    }`}
                >
                    <h1 className="text-center text-2xl font-semibold">
                        Order Form
                    </h1>

                    <form key={1} onSubmit={handleSubmit(orderSummary)}>
                        <label
                            htmlFor="quantity"
                            className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                        >
                            Order Quantity
                        </label>
                        <input
                            type="number"
                            className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                            {...register("quantity", {
                                min: {
                                    value: `${parseInt(data.minOrder)}`,
                                    message: `Minimum order quantity is ${parseInt(
                                        data.minOrder
                                    )}`,
                                },
                                max: {
                                    value: `${parseInt(data.stock)}`,
                                    message: `Maximum order quantity is ${parseInt(
                                        data.stock
                                    )}`,
                                },
                                required: "This field is required",
                            })}
                        />
                        {errors.quantity && (
                            <p className="text-red-700 text-center">
                                {errors.quantity.message}
                            </p>
                        )}

                        {/* for submit */}
                        <input
                            className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-2 bg-red-700 text-white text-lg font-semibold cursor-pointer pointer-events-auto hover:text-xl"
                            type="submit"
                            name="submit"
                            value="Proceed"
                        />
                    </form>
                    {/* for order summary */}
                    <div className="mt-8 w-fit mx-auto text-2xl fornt-semibold">
                        <h2>Order Summary</h2>
                    </div>
                    <div className="text-lg font-semibold w-fit mx-auto mt-8 mb-8">
                        <p>Order Quantity: {orderQuantity}</p>
                        <p>Total cost: {totalCost}</p>
                    </div>

                    {/* form for address and place order */}
                    <h1 className="text-center text-2xl font-semibold">
                        Order Form
                    </h1>
                    <form key={2} onSubmit={handleSubmit2(confirmOrder)}>
                        <label
                            htmlFor="address"
                            className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                        >
                            Shipping Address
                        </label>
                        <textarea
                            className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-20 px-3 rounded-md"
                            {...register2("address", {
                                maxLength: {
                                    value: 500,
                                    message: "Max length 500 chars",
                                },
                                required: "This field is required",
                            })}
                        />

                        {errors.address && (
                            <p className="text-red-700 text-center">
                                {errors.address.message}
                            </p>
                        )}

                        {/* for submit */}
                        <input
                            className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-2 bg-red-700 text-white text-lg font-semibold cursor-pointer pointer-events-auto hover:text-xl"
                            type="submit"
                            name="submit"
                            value="Confirm Order"
                        />
                    </form>
                    <p className="text-red-700 text-center text-lg mt-5 font-semibold">
                        {loading}
                    </p>
                    <p className="text-red-700 text-center mt-5">
                        {orderError}
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Order;
