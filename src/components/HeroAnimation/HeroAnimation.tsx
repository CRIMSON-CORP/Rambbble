'use client';

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

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
    return <div className="sm:grow w-full" ref={animationContainer}></div>;
}

export default HeroAnimation;
