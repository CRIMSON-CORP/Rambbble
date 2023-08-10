import React from 'react';
import NavLinksList from '@/config/nav-links';
import NavLink from './NavLink';

function NavLinks() {
    return (
        <nav aria-labelledby="Primary Nav link">
            <ul
                className="list-none flex items-center gap-8"
                id="nav-link-list"
            >
                {NavLinksList.map((link) => (
                    <NavLink key={link.path} {...link} />
                ))}
            </ul>
        </nav>
    );
}

export default NavLinks;
