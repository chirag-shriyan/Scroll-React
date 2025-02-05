import React, { ReactElement } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Notifications({
    children,
}: {
    children: ReactElement;
}) {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle className="text-2xl">Notifications</SheetTitle>
                    <SheetDescription>
                        {/* This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers. */}
                        <div className="w-full h-[50px] bg-white"></div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
