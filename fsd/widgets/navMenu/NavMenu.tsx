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
    notAuthentication: boolean;
}

export const NavMenu = ({notAuthentication}: NavMenuProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path: string) => pathname.includes(path);
    const [routes] = useState({
        connects: notAuthentication ? '/connects-demo' : '/connects',
        chats: notAuthentication ? '/chats-demo' : '/chats',
        places: notAuthentication ? '/places-demo' : '/places',
        events: notAuthentication ? '/events-demo' : '/events',
        profile: notAuthentication ? '/profile-demo' : '/profile'
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
                        isActive(routes['chats']) ? style.active : ''
                    } ${
                        notAuthentication ? style.disabled : ''
                    }` }
                    style={ {pointerEvents: notAuthentication ? 'none' : 'auto'} }
                    onClick={ notAuthentication ? undefined : () => handleNavigation(routes['chats']) }
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
