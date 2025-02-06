import React from "react";

export default function Post() {
    return (
        <div className="w-[470px] flex-col max-sm:w-[412px]">
            <div className="w-full h-[42px] my-3 space-x-3 flex items-center max-sm:mx-3">
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                    alt=""
                    className="w-[42px] h-[42px] rounded-full"
                />
                <div>
                    <p className="text[14px] font-semibold">Username</p>
                </div>
            </div>
            <div className="w-[468px] h-[585px] flex justify-center items-center border border-[#262626] rounded max-sm:w-[412px] max-sm:h-[515px]">
                <img
                    src="https://tinypng.com/images/social/website.jpg"
                    alt=""
                    className="w-fit h-fit object-contain"
                />
            </div>
        </div>
    );
}
