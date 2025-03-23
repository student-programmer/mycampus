// 'use client';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
//
// import profileService from '@/services/profile';
// import { NavMenu } from "@/fsd/widgets/navMenu/NavMenu";
// import React from "react";
//
// export default function BaseLayout(props) {
//     const {
//         Component,
//         isNavMenu,
//         pageProps,
//         redirectCondition,
//     } = props;
//
//     let hasProfile = false;
//     let profile = null;
//     const cookieStore = cookies();
//
//     const getCurrentProfile = async (token) => {
//         try {
//             const [data, error] = await profileService.getCurrentProfile(token);
//             if (data?.id) {
//                 hasProfile = true;
//                 profile = data;
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     };
//
//     if (localStorage.has('jwtToken')) {
//         const token = localStorage.get('jwtToken');
//         await getCurrentProfile(token);
//     }
//
//     if (redirectCondition) {
//         let redirectUrl = redirectCondition(hasProfile, profile)
//         redirectUrl && redirect(redirectUrl);
//     }
//
//     return (
//         <div
//             style={ {
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//             } }
//         >
//             { Component }
//             { isNavMenu && <NavMenu/> }
//         </div>
//     );
// }
