'use client';
import React, { FC, ReactNode, useMemo } from 'react';
import { Variants, motion } from 'framer-motion';
import { inViewPropsSome } from '@/utils/framer-motion-variants';

interface SlideUpContentProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    y?: string | number;
    x?: string | number;
}

const SlideInContent: FC<SlideUpContentProps> = ({
    children,
    delay,
    className,
    y = 200,
    x,
}) => {
    const slideUpVariant = useMemo<Variants>(
        () => ({
            hidden: {
                opacity: 0,
                y,
                x,
            },
            animate: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    type: 'tween',
                    duration: 1.5,
                    delay,
                    ease: [0.23, 1.14, 0.45, 0.97],
                },
            },
        }),
        [delay, x, y],
    );

    return (
        <motion.div
            initial="hidden"
            whileInView="animate"
            className={className}
            variants={slideUpVariant}
            viewport={inViewPropsSome}
        >
            {children}
        </motion.div>
    );
};

export default SlideInContent;
