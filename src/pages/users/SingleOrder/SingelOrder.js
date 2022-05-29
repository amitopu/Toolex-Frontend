import React from "react";

const SingelOrder = (props) => {
    const { idToken, orderData } = props;
    return (
        <div className="px-5 mb-8">
            <h2 className="text-xl font-semibold mt-8 mb-5">
                Order Id: <span className="font-bold">{orderData._id}</span>
            </h2>
            <p className="text-lg font-semibold">
                Product name:{" "}
                <span className="font-bold">{orderData.productName}</span>
            </p>
            <p className="text-lg font-semibold">
                Order Quantity:{" "}
                <span className="font-bold">{orderData.orderQuantity}</span>
            </p>
            <p className="text-lg font-semibold">
                Total cost:{" "}
                <span className="font-bold">{orderData.totalCost}</span>
            </p>
            <p className="text-lg font-semibold">
                Shipping Address:{" "}
                <span className="font-bold">{orderData.shippingAddress}</span>
            </p>
            <p className="text-lg font-semibold">
                Order status:{" "}
                <span className="font-bold">{orderData.status}</span>
            </p>
        </div>
    );
};

export default SingelOrder;
