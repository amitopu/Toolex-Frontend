import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="my-14 md:mt-0 lg:w-5/12 md:w-1/2 w-3/4 border-2 border-red-700 px-5 py-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* field for email */}
                <label
                    htmlFor="email"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Email
                </label>
                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("email", {
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/i,
                            message: "Enter a valid email",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.email && (
                    <p className="text-red-700 text-center">
                        {errors.email.message}
                    </p>
                )}

                {/* field for password */}
                <label
                    htmlFor="password"
                    className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                    {...register("password", {
                        pattern: {
                            value: /[0-9a-zA-Z@#$%&!]{6,}/i,
                            message: "Password should be at least 6 chars long",
                        },
                        required: "This field is required",
                    })}
                />
                {errors.password && (
                    <p className="text-red-700 text-center">
                        {errors.password.message}
                    </p>
                )}

                <input
                    className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-2 bg-red-700 text-white text-lg font-semibold hover:text-xl"
                    type="submit"
                    name="submit"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default AddReview;
