import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleHomeProduct from "../SingleHomeProduct/SingleHomeProduct";

const HomeProducts = () => {
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://infinite-ocean-49945.herokuapp.com/homeproducts")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => setError(err.message));
    }, []);
    return (
        <div className="my-10">
            <h1 className="lg:text-4xl text-3xl text-center">Our Products</h1>
            <div className="lg:px-16 md:px-8 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
                {products.map((product) => (
                    <SingleHomeProduct
                        key={product._id}
                        data={product}
                    ></SingleHomeProduct>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;
