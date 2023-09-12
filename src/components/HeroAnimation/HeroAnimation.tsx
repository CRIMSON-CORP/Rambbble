'use client';

import { inViewPropsSome } from '@/utils/framer-motion-variants';
import { Variants, m } from 'framer-motion';
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const heroAnimationVariants: Variants = {
    hidden: {
        rotate: -360,
        opacity: 0,
        scale: 0.5,
    },
    rotateIn: {
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2.5,
            delay: 0.75,
            ease: [0.2, 1.06, 0.35, 0.99],
        },
    },
};

function HeroAnimation() {
    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (animationContainer.current) {
            Lottie.loadAnimation({
                container: animationContainer.current, // the dom element that will contain the animation
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/data.json',
            });
        }
    }, []);
    return (
        <m.div
            initial="hidden"
            whileInView="rotateIn"
            ref={animationContainer}
            viewport={inViewPropsSome}
            className="sm:grow w-full"
            variants={heroAnimationVariants}
        ></m.div>
    );
}

export default HeroAnimation;
