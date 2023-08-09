'use client';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface NavLinkProps {
    /** the url the link will link to */
    path: string;
    /** the title to tbe shown */
    title: string;
}

const NavLink: FC<NavLinkProps> = ({ path, title }) => {
    const pathname = usePathname();

    const isActive = pathname === path;

    return (
        <li className="relative">
            <a
                href={path}
                className={`text-lg font-medium py-1 ${
                    isActive ? 'text-primary-orange' : 'text-dark-blue'
                }`}
            >
                {title}
            </a>
            {isActive && (
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary-orange" />
            )}
        </li>
    );
};

export default NavLink;
