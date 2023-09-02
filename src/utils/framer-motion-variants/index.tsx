import { Variants } from 'framer-motion';

export const headerNavLinksWrapperVariants: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125 / 2,
            delayChildren: 0.25,
        },
    },
};

export const headerCTAsWrapperVariants: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125 / 2,
            delayChildren: 0.35,
        },
    },
};

export const headerSlideDownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: '-200%',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: 'tween',
            ease: [0.23, 1.14, 0.45, 0.97],
        },
    },
};
