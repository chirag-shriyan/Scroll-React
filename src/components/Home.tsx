import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl">Home</h1>
            <Link to={"/login"} className="text-blue-400">
                Login
            </Link>
            <br />
            <Link to={"/signup"} className="text-blue-400">
                Signup
            </Link>
        </div>
    );
}
