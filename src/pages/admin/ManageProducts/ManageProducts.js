import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SingleProduct from "../SingleProduct/SingleProduct";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [user] = useAuthState(auth);
    const idToken = user.accessToken;

    //getting total number of products
    useEffect(() => {
        axios
            .get("https://infinite-ocean-49945.herokuapp.com/productscount", {
                headers: {
                    authorization: "Bearer " + idToken,
                },
            })
            .then((res) => {
                const count = res.data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            })
            .catch((err) => setError(err.message));
    }, [size, idToken]);

    // getting all products
    useEffect(() => {
        axios
            .get(
                `https://infinite-ocean-49945.herokuapp.com/products?page=${page}&size=${size}`,
                {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                }
            )
            .then((res) => {
                const data = res.data;
                setProducts(data);
            });
    }, [idToken, page, size]);

    return (
        <div className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
                {products.map((product) => (
                    <SingleProduct
                        key={product._id}
                        data={product}
                    ></SingleProduct>
                ))}
            </div>
            <p className="text-red-700 text-center">{error}</p>

            {/* pagination section */}
            <div className="w-4/5 mx-auto flex justify-center mb-10">
                <button
                    onClick={() => setPage(0)}
                    className="text-white w-7 h-6 rounded bg-red-500 mx-[1px]"
                >
                    {"<<"}
                </button>
                <button
                    onClick={() => setPage(page >= 1 ? page - 1 : 0)}
                    className="text-white w-7 h-6 rounded bg-red-500 mx-[1px]"
                >
                    {"<"}
                </button>
                {[...Array(pageCount).keys()]
                    .slice(page <= 4 ? 0 : page - 4, page + 5)
                    .map((num) => (
                        <button
                            key={num}
                            className={`${
                                page === num
                                    ? "bg-red-700 text-semibold"
                                    : "bg-red-500"
                            } text-white w-7 h-6 rounded  mx-[1px]`}
                            onClick={() => setPage(num)}
                        >
                            {num + 1}
                        </button>
                    ))}
                <button
                    onClick={() =>
                        setPage(page < pageCount - 1 ? page + 1 : pageCount - 1)
                    }
                    className="text-white w-7 h-6 rounded bg-red-500 mx-[1px]"
                >
                    {">"}
                </button>
                <button
                    onClick={() => setPage(pageCount - 1)}
                    className="text-white w-7 h-6 rounded bg-red-500 mx-[1px]"
                >
                    {">>"}
                </button>
                <select
                    defaultValue={10}
                    onChange={(e) => {
                        setSize(e.target.value);
                        setPage(0);
                    }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
    );
};

export default ManageProducts;
