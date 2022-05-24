import React from "react";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 relative bg-red-700 pt-10 text-center">
            <div className="mt-5">
                <h1 className="font-logo text-3xl text-white text-center">
                    Toolex
                </h1>
            </div>
            <div className="mt-5">
                <h1 className="text-xl font-bold text-white mb-4">About</h1>
                <ul className="text-l flex flex-col md:h-auto h-32 flex-wrap text-white">
                    <li className="mb-3">Careers</li>
                    <li className="mb-3">Investor Relation</li>
                    <li className="mb-3">Leagal Notice</li>
                    <li className="mb-3">Privacy Policy</li>
                    <li className="mb-3">Trust Center</li>
                    <li className="mb-3">Security Information</li>
                </ul>
            </div>
            <div className="mt-5">
                <h1 className="text-xl font-bold text-white mb-4">Support</h1>
                <ul className="text-l flex flex-col md:h-auto h-32 flex-wrap text-white">
                    <li className="mb-3">Contact Us</li>
                    <li className="mb-3">Customer Portal</li>
                    <li className="mb-3">Machine Status</li>
                    <li className="mb-3">Contact for Price</li>
                    <li className="mb-3">Delivery Support</li>
                    <li className="mb-3">Warrenty Support</li>
                    <li className="mb-3">Payment support</li>
                </ul>
            </div>
            <div className="mt-5 mb-16">
                <h1 className="text-xl font-bold text-white mb-4">Social</h1>
                <ul className="text-l flex flex-col md:h-auto h-32 flex-wrap text-white">
                    <li className="mb-3 felx">
                        <svg
                            className="inline mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "rgb(203 213 225)" }}
                        >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>

                        <span>Facebook</span>
                    </li>
                    <li className="mb-3 felx">
                        <svg
                            className="inline mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "rgb(203 213 225)" }}
                        >
                            <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                        </svg>

                        <span>Twitter</span>
                    </li>
                    <li className="mb-3 felx">
                        <svg
                            className="inline mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "rgb(203 213 225)" }}
                        >
                            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                        </svg>

                        <span>YouTube</span>
                    </li>
                    <li className="mb-3 felx">
                        <svg
                            className="inline mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "rgb(203 213 225)" }}
                        >
                            {" "}
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>

                        <span>LinkedIn</span>
                    </li>
                    <li className="mb-3 felx">
                        <svg
                            className="inline mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "rgb(203 213 225)" }}
                        >
                            {" "}
                            <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z"></path>
                        </svg>

                        <span>Medium</span>
                    </li>
                </ul>
            </div>
            <div className="absolute bottom-5 left-20">
                <p className="text-sm text-white">
                    © 2022, <span className="font-Macondo italic">Toolex</span>,
                    Inc
                </p>
            </div>
        </div>
    );
};

export default Footer;
