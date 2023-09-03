'use-client';
import Image from 'next/image';
import React from 'react';

function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="Rambbble logo"
            id="logo"
            width={231.1}
            height={33.39}
            priority={true}
            className="max-w-[150px]"
        />
    );
}

export default Logo;
