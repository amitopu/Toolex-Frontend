import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnimatedButton = (props) => {
    const { to, text, width } = props;
    const [animated, setAnimated] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className={
                width
                    ? `relative h-[35px] my-5 w-[${width}px] mx-auto`
                    : `relative h-[35px] my-5 w-[320px] mx-auto`
            }
        >
            <button
                onClick={() => navigate(to)}
                onMouseOver={() => {
                    setAnimated(!animated);
                }}
                onMouseOut={() => setAnimated(!animated)}
                className="animated-btn block h-[35px] w-fit px-4 text-white font-semibold bg-red-700 mx-auto z-10 relative"
            >
                {text}
            </button>
            <div
                className={`${
                    animated
                        ? "flex relative top-[-35px] justify-center items-center w-[100%] h-[35px] bg-red-700 mx-auto z-0"
                        : "flex relative top-[-35px] justify-center items-center w-[0%] h-[35px] bg-red-700 mx-auto z-0"
                }
                        transition-all duration-700 ease-in-out`}
            >
                <div className="w-[95%] mx-auto h-[3px] bg-white"></div>
            </div>
        </div>
    );
};

export default AnimatedButton;
