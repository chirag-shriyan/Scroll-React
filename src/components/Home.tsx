import React from "react";
import { Link } from "react-router-dom";
import Navigator from "./Navigator";
import Post from "./Post";

export default function Home() {
    return (
        <>
            <div className="w-full h-dvh flex">
                <Navigator />
                <div className="w-full h-dvh flex justify-center bg-black max-sm:relative max-sm:top-[50px]">
                    <div className="w-[630px]">
                        {/* <h1 className="text-white text-3xl">Home</h1>
                        <Link to={"/login"} className="text-blue-400">
                            Login
                        </Link>
                        <br />
                        <Link to={"/signup"} className="text-blue-400">
                            Signup
                        </Link> */}

                        {/* Status Bar */}
                        <div className="w-full h-[100px] my-4 p-2 bg-white"></div>

                        {/* Posts Container */}
                        <div className="w-full flex flex-col items-center overflow-y-auto">
                            <Post />

                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>

                    {/* Switch Account */}
                    <div className="w-[320px] mt-9 ml-16 text-white  max-sm:hidden">
                        <div className="w-full h-[44px] my-3 mb-6 px-4 flex justify-between items-center max-sm:mx-3">
                            <div className="space-x-3 flex items-center">
                                {" "}
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                    alt=""
                                    className="w-[44px] h-[44px] rounded-full"
                                />
                                <div>
                                    <p className="text-[14px] leading-[18px] font-semibold">
                                        chirag_shriyan
                                    </p>
                                    <p className="text-[14px] leading-[18px] text-[#a8a8a8]">
                                        chirag Shriyan
                                    </p>
                                </div>
                            </div>
                            <p className="text-[12px] text-[#0095f6]">Switch</p>
                        </div>

                        <div className="px-4 flex justify-between items-center">
                            <p className="text-[14px] text-[#a8a8a8] font-semibold">
                                Suggested for you
                            </p>
                            <p className="text-[12px] font-semibold">See All</p>
                        </div>

                        {/* Suggested for you */}

                        <div className="py-4 space-y-4">
                            <div className="w-full h-[44px] px-4 flex justify-between items-center max-sm:mx-3">
                                <div className="space-x-3 flex items-center">
                                    {" "}
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                        alt=""
                                        className="w-[44px] h-[44px] rounded-full"
                                    />
                                    <div>
                                        <p className="text-[14px] leading-[18px] font-semibold">
                                            chirag_shriyan
                                        </p>
                                        <p className="text-[14px] leading-[18px] text-[#a8a8a8]">
                                            chirag Shriyan
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#0095f6]">
                                    Follow
                                </p>
                            </div>
                            <div className="w-full h-[44px] px-4 flex justify-between items-center max-sm:mx-3">
                                <div className="space-x-3 flex items-center">
                                    {" "}
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                        alt=""
                                        className="w-[44px] h-[44px] rounded-full"
                                    />
                                    <div>
                                        <p className="text-[14px] leading-[18px] font-semibold">
                                            chirag_shriyan
                                        </p>
                                        <p className="text-[14px] leading-[18px] text-[#a8a8a8]">
                                            chirag Shriyan
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#0095f6]">
                                    Follow
                                </p>
                            </div>
                            <div className="w-full h-[44px] px-4 flex justify-between items-center max-sm:mx-3">
                                <div className="space-x-3 flex items-center">
                                    {" "}
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                        alt=""
                                        className="w-[44px] h-[44px] rounded-full"
                                    />
                                    <div>
                                        <p className="text-[14px] leading-[18px] font-semibold">
                                            chirag_shriyan
                                        </p>
                                        <p className="text-[14px] leading-[18px] text-[#a8a8a8]">
                                            chirag Shriyan
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#0095f6]">
                                    Follow
                                </p>
                            </div>
                            <div className="w-full h-[44px] px-4 flex justify-between items-center max-sm:mx-3">
                                <div className="space-x-3 flex items-center">
                                    {" "}
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                                        alt=""
                                        className="w-[44px] h-[44px] rounded-full"
                                    />
                                    <div>
                                        <p className="text-[14px] leading-[18px] font-semibold">
                                            chirag_shriyan
                                        </p>
                                        <p className="text-[14px] leading-[18px] text-[#a8a8a8]">
                                            chirag Shriyan
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#0095f6]">
                                    Follow
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
