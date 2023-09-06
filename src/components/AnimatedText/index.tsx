'use client';
import { Variants, motion } from 'framer-motion';
import React, { FC, memo, useMemo } from 'react';

import { inViewPropsAll } from '@/utils/framer-motion-variants';

interface AnimatedTextProps {
    children: string;
}

const wrapperVariants: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.125 / 2,
            delayChildren: 0.25,
        },
    },
};

const slideUpVariant: Variants = {
    hidden: {
        y: '120%',
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            mass: 2,
            damping: 15,
        },
    },
};

const overflowAdjust = { overflowClipMargin: '0.65rem' };

const AnimatedText: FC<AnimatedTextProps> = ({ children }) => {
    const words = useMemo(
        () =>
            children.split(' ').map((character, index, array) => (
                <div
                    style={overflowAdjust}
                    key={character + index}
                    className="overflow-clip inline-block"
                >
                    <motion.div
                        variants={slideUpVariant}
                        className="translate-y-full inline-block"
                    >
                        {character}
                    </motion.div>
                    {index !== array.length - 1 && '\u00A0'}
                </div>
            )),
        [children],
    );
    return (
        <motion.div
            className=""
            initial="hidden"
            whileInView="animate"
            viewport={inViewPropsAll}
            variants={wrapperVariants}
        >
            {words}
        </motion.div>
    );
};

export default memo(AnimatedText);
