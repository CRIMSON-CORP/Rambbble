import { Variants } from 'framer-motion';

export const headerNavLinksWrapperVariants: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125 / 2,
            delayChildren: 5.25,
        },
    },
};

export const headerCTAsWrapperVariants: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125 / 2,
            delayChildren: 5.35,
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

export const headerLogoSlideDownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: '-200%',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            // delay: 5,
            duration: 1,
            type: 'tween',
            ease: [0.23, 1.14, 0.45, 0.97],
        },
    },
};

export const headerCTAContentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: '-200%',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 5,
            type: 'tween',
            ease: [0.23, 1.14, 0.45, 0.97],
        },
    },
};

export const articleContentWRapper: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125,
        },
    },
};

export const articleContent: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
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

export const waitlisSection: Variants = {
    hidden: {
        opacity: 0,
        x: '50%',
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: 'tween',
            staggerChildren: 0.5,
            when: 'beforeChildren',
            ease: [0.23, 1.14, 0.45, 0.97],
        },
    },
};

export const inViewPropsAll: { amount: 'all'; once: boolean } = {
    amount: 'all',
    once: true,
};

export const inViewPropsSome: { amount: 'some'; once: boolean } = {
    amount: 'some',
    once: true,
};
