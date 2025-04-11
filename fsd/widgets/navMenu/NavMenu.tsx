'use client';

import { usePathname, useRouter } from 'next/navigation';
import style from './ui/NavMenu.module.scss';

import {
    FifthIcon,
    FirstIcon,
    FourthIcon,
    SecondIcon,
    ThirdIcon,
} from './ui/icons';
import { useEffect, useState } from "react";

interface NavMenuProps {
    notAuthenticated: boolean;
}

export const NavMenu = ({notAuthenticated: notAuthenticated}: NavMenuProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path: string) => pathname.includes(path);
    const [routes] = useState({
        connects: notAuthenticated ? '/connects-demo' : '/connects',
        chats: notAuthenticated ? '/chats-demo' : '/chats',
        places: notAuthenticated ? '/places-demo' : '/places',
        events: notAuthenticated ? '/events-demo' : '/events',
        profile: notAuthenticated ? '/profile-demo' : '/profile'
    });

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className={ style.navWrapper }>
            <ul className={ style.navListAuth }>
                <li
                    className={ `${ style.linkNav } ${
                        isActive(routes['connects']) ? style.active : ''
                    }` }
                    onClick={ () => handleNavigation(routes['connects']) }
                >
                    <FirstIcon/>
                    <span className={ style.navItem }>Connects</span>
                </li>
                <li
                    className={ `${ style.linkNav } ${
                        isActive(routes['chats']) ? style.active : '' } ` }
                    onClick={ () => handleNavigation(routes['chats']) }
                >
                    <SecondIcon/>
                    <span className={ style.navItem }>Chats</span>
                </li>

                <li
                    className={ `${ style.linkNav } ${
                        isActive(routes['places']) ? style.active : ''
                    }` }
                    onClick={ () => handleNavigation(routes['places']) }
                >
                    <ThirdIcon/>
                    <span className={ style.navItem }>Places</span>
                </li>
                <li
                    className={ `${ style.linkNav } ${
                        isActive(routes['events']) ? style.active : ''
                    }` }
                    onClick={ () => handleNavigation(routes['events']) }
                >
                    <FourthIcon/>
                    <span className={ style.navItem }>Events</span>
                </li>
                <li
                    className={ `${ style.linkNav } ${
                        isActive(routes['profile']) ? style.active : ''
                    }` }
                    onClick={ () => handleNavigation(routes['profile']) }
                >
                    <FifthIcon/>
                    <span className={ style.navItem }>Profile</span>
                </li>
            </ul>
        </div>
    );
};
