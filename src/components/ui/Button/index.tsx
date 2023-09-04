'use client';
import Link from 'next/link';
import React, { FC } from 'react';

interface ButtonProps {
    /** type of the button */
    type?: 'button' | 'reset' | 'submit';
    /** variant of the button, either contained(has background) or outlined(has stroke) */
    variant?: 'contained' | 'outlined';
    /** text to display on the button*/
    children: React.ReactNode;
    /** pass in href if you require a link, but styled as a button, do not pass in if you need a button */
    href?: string;
    /** click event handler for only buttons, do not pass in if you need a link */
    onClick?: React.MouseEventHandler;
    /** determines the side of the font size of the button */
    size?: 'normal' | 'large';
}

const Button: FC<ButtonProps> = ({
    type = 'button',
    children,
    href,
    onClick,
    variant = 'contained',
    size = 'normal',
}) => {
    const className = `px-4 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-md sm:rounded-[10px] hover:scale-105 active:scale-100 transition-all duraton-300 ease-out block shadow-md hover:shadow-lg md:font-semibold tracking-wide ${
        size === 'normal'
            ? 'text-xs sm:text-sm md:text-base'
            : 'text-lg sm:text-xl md:text-2xl'
    } ${
        variant === 'contained'
            ? 'bg-primary text-white'
            : 'bg-white border border-primary-orange text-primary-orange'
    }`;

    if (href !== undefined && onClick === undefined) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    if (href !== undefined && onClick !== undefined) {
        throw new Error(
            'Please do not pass in an href and onClick prop, only use one of the two',
        );
    }

    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
