'use client';
import useButtonStatus from '@/hooks/useButtonStatus';
import { storeNewsLetterEmail } from '@/service/firebase';
import { inViewPropsSome } from '@/utils/framer-motion-variants';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { DynamicButton } from '../ui';

const sectionVariants: Variants = {
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
            ease: [0.23, 1.14, 0.45, 0.97],
            when: 'beforeChildren',
            staggerChildren: 0.5,
        },
    },
};

const contentVariants: Variants = {
    hidden: {},
    animate: {
        transition: {
            staggerChildren: 0.125,
        },
    },
};

const slideUp: Variants = {
    hidden: { opacity: 0, y: 100 },
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
const slideLeft: Variants = {
    hidden: { opacity: 0, x: 100 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: 'tween',
            ease: [0.23, 1.14, 0.45, 0.97],
        },
    },
};

function NewsLetterSection() {
    return (
        <motion.div
            initial="hidden"
            whileInView="animate"
            viewport={inViewPropsSome}
            variants={sectionVariants}
            className="bg-primary rounded-[20px] flex items-stretch overflow-hidden"
        >
            <motion.div className="grow py-8 sm:py-16 md:py-20 px-5 md:px-8 md:pl-28 ">
                <motion.div
                    variants={contentVariants}
                    className="h-full flex flex-col justify-center gap-3 text-white max-w-[515px]"
                >
                    <motion.h2
                        variants={slideUp}
                        className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl"
                    >
                        Subscribe to our newsletter
                    </motion.h2>
                    <motion.p variants={slideUp} className="text-lg">
                        Receive latest news, update, and many other things every
                        week.
                    </motion.p>
                    <motion.div variants={slideUp}>
                        <NewsLetterForm />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div variants={slideLeft}>
                <Image
                    width={558}
                    height={395}
                    alt="waitlist-artwork"
                    src="/wait-list-artwork.svg"
                    className="hidden lg:inline-block h-full"
                />
            </motion.div>
        </motion.div>
    );
}

export default NewsLetterSection;

const NewsLetterForm = (): JSX.Element => {
    const { status, loading, success, error } = useButtonStatus();
    const onSubmit: React.FormEventHandler = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                loading();
                const formData = new FormData(e.target as HTMLFormElement);

                const email: string | undefined = formData
                    .get('email')
                    ?.toString();

                if (!email) {
                    alert('Please fill all inputs!');
                    return;
                }
                await storeNewsLetterEmail(email);
                success();
            } catch (err: any) {
                error();
                alert(`Failed to submit email ${err.message}`);
            }
        },
        [error, loading, success],
    );

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-1.5 flex gap-5 rounded-lg justify-between"
        >
            <input
                type="email"
                name="email"
                placeholder="Your email here"
                className="font-medium text-black text-sm sm:text-base md:text-lg placeholder:text-slate-800 placeholder:text-opacity-50 placegolder:font-light pl-2 md:pl-5 grow w-full"
            />
            <DynamicButton type="submit" status={status}>
                <span className="text-sm sm:text-base md:text-lg whitespace-nowrap px-5">
                    Join Now
                </span>
            </DynamicButton>
        </form>
    );
};
