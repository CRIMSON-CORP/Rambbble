import { AnimatePresence, Variants, motion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';

import { MdCheck, MdClose } from 'react-icons/md';

interface ButtonProps {
    /** type of the button */
    type?: 'button' | 'reset' | 'submit';
    /** text to display on the button*/
    children: React.ReactNode;
    /** click event handler for only buttons, do not pass in if you need a link */
    onClick?: React.MouseEventHandler | React.FormEventHandler;
    /** determines the side of the font size of the button */
    size?: 'normal' | 'large';
    /** Status of the button, this determines whether to show spinner, success, error, or the norma button text */
    status?: ButtonStatus;
}

const AnimationObject = {
    initial: {
        y: '200%',
    },
    animate: {
        y: 0,
    },
    exit: {
        y: '-200%',
    },
};

const buttonVariants: Variants = {
    idleInitial: {
        opacity: 1,
    },
    idleAnimate: {
        opacity: 0,
    },
    initial: {
        y: '200%',
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            mass: 2,
            damping: 15,
            stiffness: 120,
            delay: 0.25,
        },
    },
    exit: {
        y: '-200%',
        transition: {
            type: 'spring',
            mass: 2,
            damping: 15,
            stiffness: 120,
            delay: 0.25,
        },
    },
};

const DynamicButton: React.FC<ButtonProps> = ({
    type = 'button',
    children,
    onClick,
    status = 'idle',
    size,
}) => {
    const className = `relative center px-4 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-md sm:rounded-[10px] hover:scale-105 active:scale-100 transition-all duraton-300 ease-out shadow-md hover:shadow-lg md:font-semibold tracking-normal bg-primary text-white overflow-hidden ${
        size === 'normal'
            ? 'text-xs sm:text-sm md:text-base'
            : 'text-lg sm:text-xl md:text-2xl'
    }`;

    const btnPointerEvents =
        status !== 'idle' ? 'pointer-events-none' : 'pointer-events-auto';

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`${btnPointerEvents} ${className}`}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    key="idle"
                    data-testid="idle"
                    initial="idleInitial"
                    variants={buttonVariants}
                    className="flex items-center justify-center gap-2.5"
                    animate={status === 'idle' ? 'idleInitial' : 'idleAnimate'}
                >
                    {children}
                </motion.div>
                {status === 'loading' && (
                    <motion.div
                        key="spiner"
                        exit="exit"
                        initial="initial"
                        animate="animate"
                        variants={buttonVariants}
                        className="absolute flex items-center gap-2.5"
                    >
                        <Image
                            width={24}
                            height={24}
                            src="/spinner.svg"
                            alt="loader spinner"
                            data-testid="spinner"
                            className="w-6 h-6 sm:w-9 sm:h-9"
                        />
                    </motion.div>
                )}
                {status === 'error' && (
                    <motion.div
                        className="absolute flex items-center gap-2.5"
                        key="error"
                        {...AnimationObject}
                    >
                        <motion.div
                            exit="exit"
                            initial="initial"
                            animate="animate"
                            variants={buttonVariants}
                        >
                            <MdClose
                                size={24}
                                data-testid="error"
                                className="text-white w-6 h-6 sm:w-9 sm:h-9"
                            />
                        </motion.div>
                    </motion.div>
                )}
                {status === 'success' && (
                    <motion.div
                        className="absolute flex items-center gap-2.5"
                        key="error"
                        {...AnimationObject}
                    >
                        <motion.div
                            exit="exit"
                            initial="initial"
                            animate="animate"
                            data-testid="success"
                            variants={buttonVariants}
                        >
                            <MdCheck
                                size={24}
                                className="text-white w-6 h-6 sm:w-9 sm:h-9"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default DynamicButton;
