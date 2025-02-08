import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";

export default function Login() {
    const { login } = useAuthStore();
    const Navigate = useNavigate();

    function handleLogin() {
        login();
        Navigate("/");
    }

    return (
        <div className="w-full h-dvh space-y-5 flex flex-col items-center bg-black">
            <div className="top-40 space-y-5 relative max-sm:top-20">
                <div className="w-[350px] h-fit p-8 flex flex-col items-center border border-[#363636] rounded max-sm:w-[330px]">
                    <h1 className="mb-8 text-4xl text-white">Scroll</h1>

                    <div className="w-full flex flex-col space-y-2">
                        <input
                            type="text"
                            className="p-2 text-[14px] text-white bg-[#121212] border border-[#363636] rounded"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="p-2 text-[14px] text-white bg-[#121212] border border-[#363636] rounded"
                            placeholder="Password"
                        />
                        <button
                            onClick={handleLogin}
                            className="mt-3 p-[5px] text-[14px] text-white bg-[#0068ac] rounded"
                        >
                            Log in
                        </button>
                    </div>

                    <div className="mt-5 mb-4 w-full space-x-2 flex items-center">
                        <hr className="w-full border-[#363636]" />
                        <p className="text-[14px] text-[#999] font-bold">OR</p>
                        <hr className="w-full border-[#363636]" />
                    </div>

                    <div className="w-full space-y-5 flex flex-col">
                        <button className="mt-3 p-[5px] text-[14px] text-white bg-[#0095f6] rounded">
                            Login with google
                        </button>

                        <Link
                            to={"/"}
                            className="text-[14px] text-white self-center"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className="w-[350px] h-fit p-3 flex justify-center border border-[#363636] rounded max-sm:w-[330px]">
                    <span className="space-x-1 text-white">
                        <span className="text-[14px] ">
                            Don't have an account?
                        </span>
                        <Link
                            to={"/signup"}
                            className="text-[14px] text-[#0095f6]"
                        >
                            Sign up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
