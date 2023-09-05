'use-client';
import Image from 'next/image';
import React from 'react';

function Logo() {
    return (
        <>
            <Image
                src="/logo.svg"
                alt="Rambbble logo"
                id="logo"
                width={231.1}
                height={33.39}
                priority={true}
                className="max-w-[150px] hidden lg:inline-block"
            />
            <Image
                src="/logo-r.svg"
                alt="Rambbble logo"
                id="logo"
                width={269}
                height={306}
                priority={true}
                className="max-w-[32px] lg:hidden"
            />
        </>
    );
}

export default Logo;
