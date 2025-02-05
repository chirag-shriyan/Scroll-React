import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdHomeFilled, MdOutlineAddBox } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
import Notifications from "./Notifications";

export default function Navigator() {
    return (
        <>
            {/* For Pc */}
            <div className="min-w-[335px] h-dvh p-3 space-y-1 flex flex-col bg-black border-r border-[#262626] max-sm:hidden">
                <h1 className="mt-4 mb-5 p-3 text-4xl text-white">Scroll</h1>

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <MdHomeFilled color="white" size={30} />
                    <p className=" text-white">Home</p>
                </div>

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <CiSearch color="white" size={30} />
                    <p className=" text-white">Search</p>
                </div>

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <RiCompass3Line color="white" size={30} />
                    <p className=" text-white">Explore</p>
                </div>

                {/* <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <PiFireSimpleBold color="white" size={30} />
                    <p className=" text-white">Scroll</p>
                </div> */}

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <LuMessageCircleMore color="white" size={30} />
                    <p className=" text-white">Chats</p>
                </div>

                <Notifications>
                    <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                        <IoNotificationsOutline color="white" size={30} />
                        <p className=" text-white">Notifications</p>
                    </div>
                </Notifications>

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <MdOutlineAddBox color="white" size={30} />
                    <p className=" text-white">Create</p>
                </div>

                <div className="p-3 space-x-2 flex items-center hover:bg-[#1a1a1a] rounded-md">
                    <CgProfile color="white" size={30} />
                    <p className=" text-white">Profile</p>
                </div>
            </div>

            {/* For Mobile */}
            <div className="hidden max-sm:block">
                <div className="w-full h-[50px] px-3 flex justify-between items-center bg-black border-b border-[#262626] fixed z-50">
                    <h1 className="text-2xl text-white">Scroll</h1>

                    <div className="space-x-4 flex">
                        <MdOutlineAddBox color="white" size={30} />
                        <IoNotificationsOutline color="white" size={30} />
                    </div>
                </div>
                <div className="w-full h-[50px] px-3 flex justify-around items-center bg-black border-t border-[#262626] fixed bottom-0 z-50">
                    <MdHomeFilled color="white" size={30} />
                    <CiSearch color="white" size={30} />
                    <RiCompass3Line color="white" size={30} />
                    <LuMessageCircleMore color="white" size={30} />
                    <CgProfile color="white" size={30} />
                </div>
            </div>
        </>
    );
}
