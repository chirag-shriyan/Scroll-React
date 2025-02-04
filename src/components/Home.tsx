import React from "react";
import { Link } from "react-router-dom";
import Navigator from "./Navigator";
import Post from "./Post";

export default function Home() {
    return (
        <>
            <div className="w-full h-dvh flex">
                <Navigator />
                <div className="w-full h-dvh flex justify-center bg-black overflow-y-auto max-sm:relative max-sm:top-[50px]">
                    <div className="w-[630px] bg-red-300">
                        {/* <h1 className="text-white text-3xl">Home</h1>
                        <Link to={"/login"} className="text-blue-400">
                            Login
                        </Link>
                        <br />
                        <Link to={"/signup"} className="text-blue-400">
                            Signup
                        </Link> */}

                        {/* Status Bar */}
                        <div className="w-full h-20 my-4 p-2 bg-white"></div>

                        {/* Posts Container */}
                        <div className="w-full bg-red-400">
                            <Post />
                        </div>
                    </div>

                    <div className="w-[320px] ml-16 text-white bg-red-200">
                        Followers
                    </div>
                </div>
            </div>
        </>
    );
}
