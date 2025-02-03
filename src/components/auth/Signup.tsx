import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";

export default function Signup() {
    const { signup } = useAuthStore();
    const Navigate = useNavigate();

    function handleSignup() {
        signup();
        Navigate("/");
    }

    return (
        <div className="w-full h-dvh space-y-5 flex flex-col  items-center bg-black">
            <div className="top-40 space-y-5 relative max-sm:top-20">
                <div className="w-[350px] h-fit p-8 flex flex-col items-center border border-[#363636] rounded max-sm:w-[330px]">
                    <h1 className="mb-8 text-4xl text-white">Scroll</h1>

                    <button className="w-full p-[5px] text-[14px] text-white bg-[#0095f6] rounded">
                        Login with google
                    </button>

                    <div className="my-5 w-full space-x-2 flex items-center">
                        <hr className="w-full border-[#363636]" />
                        <p className="text-[14px] text-[#999] font-bold">OR</p>
                        <hr className="w-full border-[#363636]" />
                    </div>

                    <div className="w-full flex flex-col space-y-2">
                        <input
                            type="text"
                            className="p-2 text-[14px] text-white border border-[#363636] rounded"
                            placeholder="Username"
                        />

                        <input
                            type="text"
                            className="p-2 text-[14px] text-white border border-[#363636] rounded"
                            placeholder="Email"
                        />

                        <input
                            type="text"
                            className="p-2 text-[14px] text-white border border-[#363636] rounded"
                            placeholder="Password"
                        />

                        <input
                            type="text"
                            className="p-2 text-[14px] text-white border border-[#363636] rounded"
                            placeholder="Confirm password"
                        />

                        <button
                            onClick={handleSignup}
                            className="mt-3 p-[5px] text-[14px] text-white bg-[#0068ac] rounded"
                        >
                            Sign up
                        </button>
                    </div>
                </div>

                <div className="w-[350px] h-fit p-3 flex justify-center border border-[#363636] rounded max-sm:w-[330px]">
                    <span className="space-x-1 text-white">
                        <span className="text-[14px] ">Have an account?</span>
                        <Link
                            to={"/login"}
                            className="text-[14px] text-[#0095f6]"
                        >
                            Log in
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
