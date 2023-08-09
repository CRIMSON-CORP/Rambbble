'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

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
            <Link
                href={path}
                className={`text-lg font-medium py-1 ${
                    isActive ? 'text-primary-orange' : 'text-dark-blue'
                }`}
            >
                {title}
            </Link>
            {isActive && (
                <motion.span
                    layout
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary-orange"
                />
            )}
        </li>
    );
};

NavLink.displayName = 'NavLink';

export default NavLink;
