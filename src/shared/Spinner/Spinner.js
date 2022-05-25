import React from "react";
import { BallTriangle } from "react-loader-spinner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Spinner = (props) => {
    const { loadingMessage } = props;
    return (
        <div>
            <Header></Header>
            <div className="w-fit mt-20  mx-auto">
                <BallTriangle color="#b91c1c" height={100} width={100} />
            </div>
            <p className="ml-3 mt-3 mb-32 text-lg font-semibold text-center">
                {loadingMessage ? { loadingMessage } : "Loading..."}
            </p>
            <Footer></Footer>
        </div>
    );
};

export default Spinner;
