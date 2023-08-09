import React from 'react';
import Logo from '../Logo';
import { Button } from '../ui';
import NavLinks from './NavLinks';

function Header() {
    console.log('render header');

    return (
        <header className="py-5 absolute w-full top-0 left-0 right-0">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Logo />
                    <NavLinks />
                    <div className="flex items-center gap-10">
                        <Button variant="outlined">Log In</Button>
                        <Button>Find a trip buddy</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
