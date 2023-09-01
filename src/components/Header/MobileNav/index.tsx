'use client';
import { Button } from '@/components/ui';
import { Variants, motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';

const underlayVariants: Variants = {
    initial: {
        opacity: 0,
        transition: {
            delay: 0.5,
        },
    },
    animate: {
        opacity: 1,
    },
};

const listWrapperVariants: Variants = {
    initial: {
        x: '-100%',
        transition: {
            delay: 0.5,
            duration: 1,
            type: 'tween',
            ease: 'anticipate',
        },
    },
    animate: {
        x: '0',
        transition: {
            duration: 1,
            type: 'tween',
            ease: [0.17, 0.67, 0, 1],
        },
    },
};

const listItemVaraints: Variants = {
    initial: (i) => {
        return {
            y: 50,
            opacity: 0,
            transition: {
                delay: i * 0.05,
                type: 'spring',
                mass: 1.5,
            },
        };
    },
    animate: (i) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.05,
                type: 'spring',
                mass: 1.5,
            },
        };
    },
};

interface MobileNavProps {
    state: boolean;
    close: () => void;
}

function MobileNav({ state, close }: MobileNavProps): JSX.Element {
    return (
        <AnimatePresence>
            {state && (
                <nav
                    id="mobile_menu"
                    className="fixed inset-0 z-side-bar isolate overflow-hidden block xl:hidden"
                >
                    <motion.div
                        onClick={close}
                        variants={underlayVariants}
                        exit="initial"
                        initial="initial"
                        animate="animate"
                        className="bg-black/20 -z-10 absolute inset-0 backdrop-blur-md"
                    />
                    <motion.ul
                        exit="initial"
                        initial="initial"
                        animate="animate"
                        variants={listWrapperVariants}
                        className="relative h-full isolate md:max-w-[50%] p-10 flex flex-col justify-center items-start gap-6 text-white text-2xl font-semibold"
                    >
                        <button
                            onClick={close}
                            className="absolute top-10 left-10 text-white"
                        >
                            <TfiClose fill="white" color="red" size={48} />
                        </button>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={underlayVariants}
                            className="-z-10 absolute inset-0 w-full h-full"
                        >
                            <div className="bg-primary shadow-2xl absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 -rotate-12 h-[150%] w-[150%]" />
                        </motion.div>
                        <motion.li custom={0} variants={listItemVaraints}>
                            <Link href="/">Home</Link>
                        </motion.li>
                        <motion.li custom={1} variants={listItemVaraints}>
                            <Link href="/our-story">Our Story</Link>
                        </motion.li>
                        <motion.li custom={2} variants={listItemVaraints}>
                            <Link href="/about">About</Link>
                        </motion.li>
                        <motion.li custom={3} variants={listItemVaraints}>
                            <Link href="/faqs">FAQs</Link>
                        </motion.li>
                        <motion.li custom={4} variants={listItemVaraints}>
                            <Link href="/contact">Contact</Link>
                        </motion.li>
                        <motion.li custom={5} variants={listItemVaraints}>
                            <div>
                                <Button variant="outlined" href="/login">
                                    Log In
                                </Button>
                            </div>
                        </motion.li>
                        <motion.li custom={6} variants={listItemVaraints}>
                            <Button>Find a trip buddy</Button>
                        </motion.li>
                    </motion.ul>
                </nav>
            )}
        </AnimatePresence>
    );
}

export default MobileNav;
