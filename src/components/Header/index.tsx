'use client';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import useToggle from '@/hooks/useToggle';

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
                    <Logo />
                    <div className="hidden lg:contents">
                        <NavLinks />
                        <div className="flex items-center gap-10">
                            <Button variant="outlined" href="/login">
                                Log In
                            </Button>
                            <Button>Find a trip buddy</Button>
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
