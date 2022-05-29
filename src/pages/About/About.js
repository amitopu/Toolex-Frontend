import React from "react";

const About = () => {
    return (
        <div className="lg:px-16 md:px-8 p-4 my-14">
            <div>
                <h1 className="text-center text-3xl mb-8">
                    Welcome to my porfile
                </h1>
                <div className="mb-5">
                    <img
                        className="h-[250px] w-[250px] mx-auto"
                        src="avatar.jpeg"
                        alt=""
                    />
                </div>
                <p className="text-center">
                    I am Nur E Alam siddiky. I am a web developer having 6
                    months of experience as a Javascript developer. Academically
                    I studied Mechanical Engineering from Rajshahi University of
                    Engineering and Technology, Bangladesh. But I have passion
                    for coding inside. So I have learnt Python, Javascript, C++,
                    HTML, CSS. I am fluent in python and Javascript. I am well
                    familiar with React, NodeJs, Express, MongoDB, PostgreSQL,
                    TailwindCSS, Bootstrap.
                </p>
            </div>
        </div>
    );
};

export default About;
