import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import useAuthStore from "./store/AuthStore";
import Search from "./components/Search";

function App() {
    const { isLoggedIn } = useAuthStore();
    // const Navigate = useNavigate();
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         Navigate("/");
    //     } else {
    //         Navigate("/login");
    //     }
    // }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
