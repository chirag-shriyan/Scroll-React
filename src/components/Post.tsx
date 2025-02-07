import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Post() {
    return (
        <div className="w-[470px] flex-col mb-5 space-y-1 items-center max-sm:w-full">
            <div className="w-full h-[42px] my-3 space-x-3 flex items-center max-sm:px-3">
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                    alt=""
                    className="w-[42px] h-[42px] rounded-full"
                />
                <div>
                    <p className="text-[14px] font-semibold">Username</p>
                </div>
            </div>

            <div className="w-[468px] max-h-[585px] flex justify-center items-center border border-[#262626] rounded max-sm:w-full max-sm:h-[515px] max-sm:border-none">
                <img
                    src="https://tinypng.com/images/social/website.jpg"
                    alt=""
                    className="w-fit h-fit object-contain"
                />
            </div>

            <div className="my-1 py-2 space-x-4 flex items-center">
                <FaRegHeart className="w-[24px] h-[24px]" />
                <FaRegComment className="w-[24px] h-[24px]" />
                <FiSend className="w-[24px] h-[24px]" />
            </div>

            <p className="text-[14px] font-semibold">{3000} Likes</p>

            <p className="flex text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quo illum facere aut repudiandae aspernatur minima cum id sint
                iure, laboriosam iusto suscipit officia tempore mollitia
                accusamus repellendus explicabo reprehenderit.
            </p>

            <p className="flex text-[14px] text-[#a8a8a8]">View all comments</p>
        </div>
    );
}
