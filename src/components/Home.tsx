import React from "react";
import { Link } from "react-router-dom";
import Navigator from "./Navigator";

export default function Home() {
    return (
        <>
            <div className="w-full h-dvh flex">
                <Navigator />
                <div className="w-full h-dvh bg-black overflow-y-auto max-sm:relative max-sm:top-[50px]">
                    <h1 className="text-white text-3xl">Home</h1>
                    <Link to={"/login"} className="text-blue-400">
                        Login
                    </Link>
                    <br />
                    <Link to={"/signup"} className="text-blue-400">
                        Signup
                    </Link>
                </div>
            </div>
        </>
    );
}
