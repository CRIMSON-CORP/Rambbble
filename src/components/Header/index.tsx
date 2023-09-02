'use client';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';

import useToggle from '@/hooks/useToggle';
import {
    headerCTAsWrapperVariants,
    headerNavLinksWrapperVariants,
    headerSlideDownVariants,
} from '@/utils/framer-motion-variants';

import Logo from '../Logo';
import { Button } from '../ui';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

function Header() {
    const { state, open, close } = useToggle();
    return (
        <header className="py-5 absolute w-full top-0 left-0 right-0">
            <div className="container">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="animate"
                        variants={headerSlideDownVariants}
                    >
                        <Logo />
                    </motion.div>
                    <div className="hidden lg:contents">
                        <NavLinks />
                        <div className="flex items-center gap-10">
                            <motion.div
                                initial="hidden"
                                animate="animate"
                                variants={headerSlideDownVariants}
                            >
                                <Button variant="outlined" href="/login">
                                    Log In
                                </Button>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate="animate"
                                variants={headerSlideDownVariants}
                            >
                                <Button>Find a trip buddy</Button>
                            </motion.div>
                        </div>
                    </div>
                    <button className="inline-block lg:hidden" onClick={open}>
                        <RxHamburgerMenu
                            size={32}
                            className="text-primary-orange"
                        />
                    </button>
                </div>
                <MobileNav state={state} close={close} />
            </div>
        </header>
    );
}

export default Header;
