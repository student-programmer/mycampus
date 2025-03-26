"use client";

import { NavMenu } from "@/fsd/widgets/navMenu/NavMenu";
import React, { useEffect, useState } from "react";
import userService from "@/service/user";
import { useRouter } from "next/navigation";
import { Loader } from "@/fsd/common/Loader";

interface BaseLayoutProps {
    Component: React.ComponentType;
    navMenuOn: boolean;
}

export default function BaseLayout({ Component, navMenuOn }: BaseLayoutProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCurrentUser = async (token: string | null) => {
            if (!token) {
                router.push("/");
                return;
            }

            const [data, error] = await userService.getCurrentProfile(token);
            if (error) {
                localStorage.removeItem("jwtToken");
                router.push("/");
            } else {
                setIsLoading(false);
            }
        };

        const token = localStorage.getItem("jwtToken");

        getCurrentUser(token).then();
    }, [router]); // router добавлен в зависимости

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Component />
                    {navMenuOn && <NavMenu />}
                </>
            )}
        </div>
    );
}
