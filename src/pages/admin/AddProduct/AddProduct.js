import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const AddProduct = () => {
    const [authError, setAuthError] = useState("");
    const [addError, setAddError] = useState("");
    const [laoding, setLoading] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setAuthError("");
        setLoading("Please wait. Loading...");
        const idToken = await auth.currentUser.getIdToken(true);
        // console.log(data);
        // console.log(idToken);
        axios
            .post(
                "https://infinite-ocean-49945.herokuapp.com/addproduct",
                data,
                {
                    headers: {
                        authorization: "Bearer " + idToken,
                    },
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data.acknowledged) {
                    setLoading("");
                    navigate("/admindashboard/manageproducts");
                } else {
                    setAddError(
                        "Product was not added successfully!! Try again later."
                    );
                    setLoading("");
                }
            })
            .catch((err) => {
                setAuthError(err?.message);
                setLoading("");
            });
    };
    return (
        <div>
            <h1 className="text-center text-3xl mb-10">
                Please Enter Product Details
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* for name  */}
                <label
                    htmlFor="name"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Tool Name
                </label>
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("name", {
                        maxLength: {
                            value: 100,
                            message: "Max length is 100 chars",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.name && (
                    <p className="text-red-700 text-center">
                        {errors.name.message}
                    </p>
                )}

                {/* for category  */}
                <label
                    htmlFor="category"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Tool Category
                </label>
                <select
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("category", {})}
                >
                    <option value="hand-tool">Hand Tool</option>
                    <option value="machine-tool">Machine Tool</option>
                    <option value="power-tool">Power Tool</option>
                </select>
                {/* {errors.name && (
                    <p className="text-red-700 text-center">
                        {errors.name.message}
                    </p>
                )} */}

                {/* for model  */}
                <label
                    htmlFor="model"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Model
                </label>
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("model", {
                        maxLength: {
                            value: 50,
                            message: "Max length is 50 chars",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.model && (
                    <p className="text-red-700 text-center">
                        {errors.model.message}
                    </p>
                )}

                {/* for image url  */}
                <label
                    htmlFor="imageUrl"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Image Url
                </label>
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("imageUrl", {
                        maxLength: {
                            value: 1500,
                            message: "Max length is 1050 chars",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.imageUrl && (
                    <p className="text-red-700 text-center">
                        {errors.imageUrl.message}
                    </p>
                )}

                {/* for unit price  */}
                <label
                    htmlFor="price"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Unit Price
                </label>
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("price", {
                        pattern: {
                            value: /^(?!0\d)\d*(\.\d+)?$/,
                            message:
                                "price should be positive integer or decimal number",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.price && (
                    <p className="text-red-700 text-center">
                        {errors.price.message}
                    </p>
                )}

                {/* for stock  */}
                <label
                    htmlFor="stock"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Stock
                </label>
                <input
                    type="number"
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("stock", {
                        pattern: {
                            value: /^[1-9]\d*/,
                            message: "Quantity should not be negative",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.stock && (
                    <p className="text-red-700 text-center">
                        {errors.stock.message}
                    </p>
                )}

                {/* for min order quantity  */}
                <label
                    htmlFor="minorder"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Minimum Order Quantity
                </label>
                <input
                    type="number"
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("minOrder", {
                        pattern: {
                            value: /^[1-9]\d*/,
                            message:
                                "Minimum order quantity should not be negative",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.minOrder && (
                    <p className="text-red-700 text-center">
                        {errors.minOrder.message}
                    </p>
                )}

                {/* for description  */}
                <label
                    htmlFor="description"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Description
                </label>
                <textarea
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-24 px-3 rounded-md"
                    {...register("description", {
                        required: "this is required",
                        maxLength: {
                            value: 500,
                            message: "Should be less than 500 chars.",
                        },
                        minLength: {
                            value: 30,
                            message: "Must be at least 30 chars. long",
                        },
                    })}
                />
                {errors.description && (
                    <p className="text-red-700 text-center">
                        {errors.description.message}
                    </p>
                )}

                {/* for submit */}
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-2 bg-red-700 text-white text-lg font-semibold cursor-pointer pointer-events-auto hover:text-xl"
                    type="submit"
                    name="submit"
                    value="Add Product"
                />
            </form>
            <p className="text-red-700 text-center font-bold mt-3">
                {authError}
            </p>
            <p className="text-red-700 text-center font-bold mt-3">
                {addError}
            </p>
            <p className="text-red-700 text-center font-bold mt-3">{laoding}</p>
        </div>
    );
};

export default AddProduct;
