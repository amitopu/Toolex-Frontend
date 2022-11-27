import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimatedButton from "../../../shared/AnimatedButton/AnimatedButton";
import SingleHomeProduct from "../SingleHomeProduct/SingleHomeProduct";

const HomeProducts = () => {
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://toolex.onrender.com/homeproducts")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => setError(err.message));
    }, []);
    return (
        <div className="mt-10 mb-16">
            <h1 className="lg:text-4xl text-3xl text-center">Our Products</h1>
            <div className="lg:px-16 md:px-8 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
                {products.map((product) => (
                    <SingleHomeProduct
                        key={product._id}
                        data={product}
                    ></SingleHomeProduct>
                ))}
            </div>
            <p className="text-red-700 text-center my-3">{error}</p>
            <AnimatedButton
                text="All Products"
                to="/allproducts"
            ></AnimatedButton>
        </div>
    );
};

export default HomeProducts;
