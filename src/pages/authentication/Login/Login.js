import React, { useEffect } from "react";
import Footer from "../../../shared/Footer/Footer";
import Header from "../../../shared/Header/Header";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Spinner from "../../../shared/Spinner/Spinner";

const Login = () => {
    // sign in with email and pass hook
    const [signInWithEmailAndPassword, , loading, error] =
        useSignInWithEmailAndPassword(auth);

    //sign in with google hook
    const [signInWithGoogle, , updating, errorGoogle] =
        useSignInWithGoogle(auth);

    // hook for getting user object
    const [user] = useAuthState(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const navigate = useNavigate();
    let location = useLocation();
    const path = location.state?.from?.path || "/";

    // manage navigation after login
    useEffect(() => {
        if (user) {
            console.log(user);
            navigate(path, { replace: true });
        }
    }, [user, path, navigate]);

    // spinner while after click login/google sign in
    if (loading || updating) {
        return <Spinner></Spinner>;
    }

    // handle submit data
    const onSubmit = async (data) => {
        // console.log(data);
        const { email, password } = data;
        await signInWithEmailAndPassword(email, password);
    };

    // handle sign in with google
    const googleSignIn = async () => {
        await signInWithGoogle();
    };

    return (
        <>
            <Header></Header>
            <div className="my-10 lg:w-5/12 md:w-1/2 w-3/4 border-2 border-red-700 px-5 py-8 mx-auto">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Login to continue...
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

                    <input
                        className="block lg:w-[75%] md:w-[80%] w-[85%] mx-auto h-10 px-3 rounded-md mt-2 bg-red-700 text-white text-lg font-semibold hover:text-xl"
                        type="submit"
                        name="submit"
                        value="Login"
                    />
                </form>

                {/* extra links  */}
                <p className="text-xl text-center mt-3">
                    Don't have an account?{" "}
                    <span className="font-bold text-red-700">
                        <Link to="/register">Register</Link>
                    </span>
                </p>
                <p className="mt-2 text-center text-xl">
                    Or
                    <span>
                        <button
                            className="text-red-700 ml-2 font-bold"
                            onClick={() => {
                                navigate("/resetpassword");
                            }}
                        >
                            Forgot Password
                        </button>
                    </span>
                </p>
                <div className="flex mx-auto justify-center items-center mt-5 lg:w-[75%] md:w-[80%] w-[85%]">
                    <div className="w-[46%] h-[2px] bg-red-700"></div>
                    <div className="w-2 h-2 rounded-full bg-red-700 mx-1"></div>
                    <div className="w-[46%] h-[2px] bg-red-700"></div>
                </div>

                {/* google sign in button */}
                <button
                    className="flex justify-center lg:w-[75%] md:w-[80%] w-[85%] mx-auto border-[3px] border-red-700 h-10 px-3 rounded-md mt-6 items-center font-semibold hover:font-bold"
                    onClick={googleSignIn}
                >
                    <span className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="32"
                            height="32"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                            <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            ></path>
                            <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            ></path>
                            <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            ></path>
                        </svg>
                    </span>
                    <span>SignIn With Google</span>
                </button>
                <p className="text-red-700 text-center mt-4">
                    {error?.message}
                </p>
                <p className="text-red-700 text-center mt-4">
                    {errorGoogle?.message}
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
