import React from "react";

export default function Post() {
    return (
        <div className="w-[470px] flex-col items-center max-sm:w-full">
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

            <div className="w-[468px] h-[585px] flex justify-center items-center border border-[#262626] rounded max-sm:w-full max-sm:h-[515px] max-sm:border-none">
                <img
                    src="https://tinypng.com/images/social/website.jpg"
                    alt=""
                    className="w-fit h-fit object-contain"
                />
            </div>
        </div>
    );
}
