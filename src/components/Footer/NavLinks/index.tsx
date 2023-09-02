import React, { FC } from 'react';
import NavLink from './NavLink';

interface NavLinksProps {
    title: string;
    links: { label: string; href: string }[];
}

const NavLinks: FC<NavLinksProps> = ({ title, links }) => {
    return (
        <nav aria-label={title} className="text-white flex flex-col gap-11">
            <h3 className="text-lg font-bold font-body">{title}</h3>
            <ul className="list-none grid gap-6">
                {links.map((link) => (
                    <NavLink key={link.href} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;
