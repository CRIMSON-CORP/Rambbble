import React, { FC } from 'react';

const NavLink: FC<FooterNavLinkProps> = ({ href, label }) => {
    return (
        <li>
            <a href={href} className='text-lg font-semibold leading-loose"'>
                {label}
            </a>
        </li>
    );
};

export default NavLink;
