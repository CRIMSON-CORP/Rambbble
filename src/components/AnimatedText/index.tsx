'use client';
import { Variants, m } from 'framer-motion';
import { FC, memo, useMemo } from 'react';

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
                    <m.div
                        variants={slideUpVariant}
                        className="translate-y-full inline-block"
                    >
                        {character}
                    </m.div>
                    {index !== array.length - 1 && '\u00A0'}
                </div>
            )),
        [children],
    );
    return (
        <m.div
            className=""
            initial="hidden"
            whileInView="animate"
            viewport={inViewPropsAll}
            variants={wrapperVariants}
        >
            {words}
        </m.div>
    );
};

export default memo(AnimatedText);
