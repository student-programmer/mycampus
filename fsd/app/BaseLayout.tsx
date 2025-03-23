'use client';

import { NavMenu } from "@/fsd/widgets/navMenu/NavMenu";
import React, { useEffect, useState } from "react";
import userService from "@/service/user";
import { useRouter } from "next/navigation";
import { Loader } from "@/fsd/common/Loader";

export default function BaseLayout(props) {
    const {
        Component,
        navMenuOn,
    } = props;

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const getCurrentUser = async (token) => {
            const [data, error] = await userService.getCurrentProfile(token);
            if (error) {
                localStorage.removeItem('jwtToken')
                router.push('/')
            } else {
                setIsLoading(false)
            }
        }

        const token = localStorage.getItem('jwtToken');

        if (typeof token === 'undefined' && token === null) router.push('/')

        getCurrentUser(token).then()
    }, [])

    return (
        <div
            style={ {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            } }
        >
            { isLoading ?
                < Loader/>
                :
                <>
                    <Component/>
                    { navMenuOn && <NavMenu/> }
                </>
            }
        </div>
    );
}
