import React from 'react';
import { motion } from 'framer-motion';

import NavLinksList from '@/config/nav-links';
import {
    headerNavLinksWrapperVariants,
    headerSlideDownVariants,
} from '@/utils/framer-motion-variants';

import NavLink from './NavLink';

function NavLinks() {
    return (
        <nav aria-labelledby="Primary Nav link">
            <motion.ul
                id="nav-link-list"
                initial="hidden"
                animate="animate"
                variants={headerNavLinksWrapperVariants}
                className="list-none flex items-center gap-8"
            >
                {NavLinksList.map((link) => (
                    <motion.div
                        key={link.path}
                        variants={headerSlideDownVariants}
                    >
                        <NavLink {...link} />
                    </motion.div>
                ))}
            </motion.ul>
        </nav>
    );
}

export default NavLinks;
