import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import {
    useCreateUserWithEmailAndPassword,
    useAuthState,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Spinner from "../../../shared/Spinner/Spinner";

const Register = () => {
    const [match, setMatch] = useState(true);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, , loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    // for navigating user after creating account
    useEffect(() => {
        if (user) {
            console.log(user);
            navigate("/");
        }
    }, [user, navigate]);

    // for loading spinner
    if (loading || updating) {
        return <Spinner></Spinner>;
    }

    // handling submit data
    const onSubmit = async (data) => {
        console.log(data);
        const { fullName, email, password, repassword } = data;
        if (password !== repassword) {
            setMatch(false);
        } else {
            setMatch(true);
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: fullName });
        }
    };

    return (
        <>
            <Header></Header>
            <div className="my-10 lg:w-5/12 md:w-1/2 w-3/4 border-2 border-red-700 px-5 py-8 mx-auto">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Create new account...
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

                    {/* field for name */}
                    <label
                        htmlFor="name"
                        className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                    >
                        Name
                    </label>
                    <input
                        className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                        {...register("fullName", {
                            minLength: 2,
                            maxLength: 50,
                            required: "This field is required",
                        })}
                    />
                    {errors.fullName && (
                        <p className="text-red-700 text-center">
                            {errors.fullName.message}
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
                                message:
                                    "Password should be at least 6 chars long",
                            },
                            required: "This field is required",
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-700 text-center">
                            {errors.password.message}
                        </p>
                    )}
                    {/* field for re-password */}
                    <label
                        htmlFor="repassword"
                        className="block text-xl font-semibold lg:ml-[12.5%] md:ml-[10%] ml-[7.5%] mb-1 mt-2"
                    >
                        Re-enter password
                    </label>
                    <input
                        type="password"
                        className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-2 border-red-700 h-10 px-3 rounded-md"
                        {...register("repassword", {
                            pattern: {
                                value: /[0-9a-zA-Z@#$%&!]{6,}/i,
                                message:
                                    "Password should be at least 6 chars long",
                            },
                            required: "This field is required",
                        })}
                    />
                    {errors.repassword && (
                        <p className="text-red-700 text-center">
                            {errors.repassword.message}
                        </p>
                    )}

                    <p className="text-red-700 text-center">
                        {match ? "" : "password didn't match"}
                    </p>

                    {/* field for submit */}
                    <input
                        className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-4 bg-red-700 text-white text-lg font-semibold hover:text-xl"
                        type="submit"
                        name="submit"
                        value="Create Account"
                    />
                </form>
                {/* extra links  */}
                <p className="text-xl text-center mt-3">
                    Already have an account?{" "}
                    <span className="font-bold text-red-700">
                        <Link to="/login">Login</Link>
                    </span>
                </p>

                <p className="text-red-700 text-center mt-3">
                    {error?.message}
                </p>
                <p className="text-red-700 text-center mt-3">
                    {updateError?.message}
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;
