import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PassReset = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    // hook call for password reset with firebase
    const [sendPasswordResetEmail, , error] = useSendPasswordResetEmail(auth);

    //form handling submit button
    const onSubmit = (data) => {
        const { email } = data;
        console.log(email);
        sendPasswordResetEmail(email);
        toast("Sending password reset link to your email");
    };

    return (
        <>
            <Header></Header>
            <ToastContainer />
            <div className="my-10 lg:w-5/12 md:w-1/2 w-3/4 border-2 border-red-700 px-5 py-8 mx-auto">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Password Reset...
                </h1>
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
                                message: "Enter a valid email address",
                            },
                            required: "This field is required",
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-700 text-center">
                            {errors.email.message}
                        </p>
                    )}

                    {/* field for submit */}
                    <input
                        className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-4 bg-red-700 text-white text-lg font-semibold hover:text-xl"
                        type="submit"
                        name="submit"
                        value="Reset Password"
                    />
                </form>
                {/* extra links  */}
                <p className="text-xl text-center mt-3">
                    Try to{" "}
                    <span className="font-bold text-red-700">
                        <Link to="/login">Login</Link>
                    </span>
                </p>
                <p className="text-red-700 text-center mb-3">
                    {error?.message}
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PassReset;
