'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function PageLoader() {
    const logoWrapperRef = useRef<HTMLDivElement | null>(null);
    const pulseWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        console.log('running gsap');
        gsap.set(logoWrapperRef.current, {
            scale: 0.5,
            opacity: 0,
            rotate: -360,
        });
        gsap.set(pulseWrapperRef.current, {
            scale: 0.5,
            opacity: 0,
        });
    }, []);

    useEffect(() => {
        console.log('running gsap');
        const tlLogo = gsap.timeline({
            delay: 0.5,
        });
        const tlLogoRepeat = gsap.timeline({
            paused: true,
            delay: 0.5,
            repeat: -1,
            repeatDelay: 0.5,
        });
        const tlPulse = gsap.timeline({
            delay: 1.675,
        });
        const tlPulseRepeat = gsap.timeline({
            paused: true,
            repeat: -1,
            delay: 2,
            repeatDelay: 0.5,
        });

        tlLogo.to(logoWrapperRef.current, {
            scale: 1.75,
            opacity: 1,
            duration: 1,
            rotate: 15,
            ease: 'expo.out',
        });
        tlLogo.to(logoWrapperRef.current, {
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: 'back.out(3)',
            onComplete() {
                tlLogoRepeat.play();
                tlPulseRepeat.play();
            },
        });

        tlPulse
            .to(pulseWrapperRef.current, {
                opacity: 1,
                duration: 0.2,
            })
            .to(pulseWrapperRef.current, {
                scale: 4,
                opacity: 0,
                duration: 2,
                ease: 'expo.out',
            });

        tlLogoRepeat
            .to(logoWrapperRef.current, {
                scale: 1.75,
                opacity: 1,
                duration: 1,
                ease: 'power4.out',
            })
            .to(logoWrapperRef.current, {
                scale: 1,
                duration: 1,
                ease: 'back.out(3)',
            });
        tlPulseRepeat
            .set(pulseWrapperRef.current, {
                opacity: 1,
                scale: 0.5,
            })
            .to(pulseWrapperRef.current, {
                scale: 4,
                opacity: 0,
                duration: 2,
                ease: 'expo.out',
            });
    }, []);

    return (
        <aside className="fixed inset-0 w-full h-full bg-white z-50 center">
            <div className="absolute" ref={pulseWrapperRef}>
                <Pulse />
            </div>
            <div className="absolute" ref={logoWrapperRef}>
                <Logo />
            </div>
        </aside>
    );
}

export default PageLoader;

function Logo() {
    return (
        <svg
            width="120"
            height="120"
            viewBox="0 0 85 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="42.4732"
                cy="42.4732"
                r="42.4732"
                fill="url(#paint0_linear_1166_110)"
            />
            <circle cx="42.4733" cy="42.4733" r="25.6442" fill="#FA7C56" />
            <rect
                x="19.2324"
                y="19.2332"
                width="46.4801"
                height="46.4801"
                rx="23.24"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.9727 33.67C34.9727 32.4267 35.961 31.4159 37.2075 31.4102C37.6473 31.4082 38.1387 31.4072 38.6817 31.4072C40.5141 31.4072 41.7615 31.4183 42.4238 31.4404C44.9406 31.5289 46.8247 32.1483 48.0611 33.2986C49.2974 34.4268 49.9155 35.9532 49.9155 37.8778C49.9155 39.5148 49.4961 40.9084 48.6571 42.0587C47.9265 43.0679 47.3128 43.4572 45.9829 44.1458C45.7991 44.1993 45.0123 44.49 44.9125 44.5884C45.1415 44.8424 45.9565 45.1881 46.1944 45.5229C46.2885 45.6554 46.5348 45.7266 46.6377 45.8672C46.7519 46.0181 46.9716 46.109 47.1302 46.3098C47.6461 46.9629 48.4402 47.8122 49.0987 48.8611C49.8176 50.0032 50.5436 51.2221 51.2765 52.5178C51.5357 52.976 51.2018 53.5398 50.6744 53.5398H46.5268C46.1007 53.5398 45.7092 53.306 45.508 52.9313L42.0927 46.5715C41.6953 45.8415 41.331 45.388 40.9998 45.2111C40.6908 45.012 40.2161 44.9124 39.5759 44.9124V52.3871C39.5759 53.0237 39.0584 53.5398 38.4201 53.5398H36.1285C35.4902 53.5398 34.9727 53.0237 34.9727 52.3871V48.571C34.972 48.2372 35.0319 48.2268 34.6255 48.2372C30.1177 48.3525 32.0832 45.1248 34.9723 43.3957C34.9734 43.3973 34.9744 43.3988 34.9754 43.4003C35.6236 42.8495 36.4716 42.3095 37.3085 41.7765C37.561 41.6157 37.8125 41.4555 38.0572 41.2959L39.4475 40.3485C39.4475 40.3485 40.2092 39.8079 40.2948 39.7483C40.5046 39.6021 40.8162 39.3909 41.1312 39.1775C41.4512 38.9607 41.7748 38.7414 41.9983 38.5857C42.1359 38.4899 42.1579 38.6457 42.1579 38.6457L42.9302 41.1606C42.969 41.2934 43.0943 41.3379 43.2085 41.2594L43.3273 41.1606C43.4413 41.0821 43.5395 40.905 43.5453 40.7669V37.632C43.5453 37.632 43.5421 37.5213 43.6192 37.4637C43.8958 37.2575 44.9125 36.364 44.9125 36.364C45.2593 36.0182 45.5698 35.4669 45.3749 35.2113C45.1964 34.9773 44.5658 35.096 44.1035 35.3265C44.1035 35.3265 43.0153 35.8773 42.6802 36.0741C42.6009 36.1206 42.537 36.087 42.537 36.087L39.58 34.918C39.4485 34.874 39.2477 34.9021 39.1336 34.9807L38.9633 35.1144C38.849 35.1928 38.846 35.3253 38.9565 35.4087L41.0526 37.0355C41.0526 37.0355 41.215 37.1569 41.0884 37.2394C40.66 37.5187 39.9407 38.0162 39.5142 38.3112L39.4546 38.3524C39.4419 38.3612 39.4262 38.3714 39.408 38.3828C37.4845 39.3667 35.2508 38.3704 34.9727 36.0111V34.9816V33.67Z"
                fill="url(#paint1_linear_1166_110)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.953 48.2785C34.9185 48.2326 34.8326 48.2325 34.6249 48.2378C30.1171 48.3531 32.058 45.0316 34.8654 43.4009L34.953 43.3101C35.6012 42.7593 36.4711 42.3101 37.308 41.7771C37.5605 41.6163 37.812 41.4561 38.0567 41.2965L39.447 40.3491C39.447 40.3491 40.2087 39.8085 40.2943 39.7489C40.504 39.6027 40.8155 39.3917 41.1303 39.1784L41.1306 39.1782C41.4507 38.9613 41.7742 38.7421 41.9978 38.5863C42.1149 38.5048 42.1482 38.6055 42.1556 38.6373C42.1554 38.6374 42.1552 38.6376 42.155 38.6378C32.9739 45.9956 33.5682 48.0974 35.013 48.2286L34.953 48.2785Z"
                fill="url(#paint2_linear_1166_110)"
            />
            <path
                d="M39.4839 40.9079C36.1242 44.1569 35.0816 47.0676 35.0146 48.3265C33.3398 47.9822 34.3747 46.6542 34.8181 45.7689L35.6554 44.6868L36.7883 43.3589C37.6766 42.5075 38.6315 41.651 39.4839 40.9079C40.2371 40.1795 41.1068 39.4341 42.1081 38.6864C42.1837 38.63 40.9949 39.5907 39.4839 40.9079Z"
                fill="url(#paint3_linear_1166_110)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.3996 52.9963C51.3346 53.2946 51.071 53.5397 50.7233 53.5397H46.5758C46.1497 53.5397 45.7581 53.3058 45.5569 52.9312L42.1058 46.6047C41.7084 45.8747 41.4026 45.5029 41.0714 45.3259C40.7678 45.1303 40.2817 44.9158 39.6584 44.9124L39.573 44.9123C42.7461 43.2603 45.455 43.5939 49.055 48.715C49.086 48.7634 49.1168 48.812 49.1476 48.861C49.5575 49.5122 49.9698 50.1884 50.3843 50.8896C50.7286 51.5326 51.0677 52.2333 51.3996 52.9963Z"
                fill="url(#paint4_linear_1166_110)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.148 34.9512C38.0106 33.7334 37.3336 32.4773 37.2781 31.4097C37.6899 31.4081 38.1454 31.4072 38.6446 31.4072C40.477 31.4072 41.7243 31.4183 42.3866 31.4404C44.9035 31.5289 46.7876 32.1483 48.0239 33.2986C49.2602 34.4268 49.8784 35.9532 49.8784 37.8778C49.8784 38.4988 49.818 39.0848 49.6973 39.6358C48.0067 39.7724 45.7631 39.2611 43.5081 38.1286V37.632C43.5081 37.632 43.5049 37.5213 43.5821 37.4637C43.8586 37.2575 44.8754 36.364 44.8754 36.364C45.2221 36.0182 45.5326 35.4669 45.3377 35.2113C45.1593 34.9773 44.5286 35.096 44.0663 35.3265C44.0663 35.3265 42.9781 35.8773 42.6431 36.0741C42.5637 36.1206 42.4998 36.087 42.4998 36.087L39.5428 34.918C39.4294 34.88 39.2644 34.8958 39.148 34.9512Z"
                fill="white"
                fillOpacity="0.13"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1166_110"
                    x1="17.9019"
                    y1="4.19906e-05"
                    x2="87.0525"
                    y2="4.23835e-05"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FC8B4E" />
                    <stop offset="1" stopColor="#F86463" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1166_110"
                    x1="38.0673"
                    y1="51.5233"
                    x2="42.9304"
                    y2="33.1743"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F76362" />
                    <stop offset="1" stopColor="#FB8C4D" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1166_110"
                    x1="32.5998"
                    y1="48.3268"
                    x2="38.0559"
                    y2="39.8601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFD232" />
                    <stop offset="0.440977" stopColor="#FAFF00" />
                    <stop offset="1" stopColor="#FFA723" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_1166_110"
                    x1="34.8668"
                    y1="44.8344"
                    x2="38.0621"
                    y2="49.4128"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DC605F" />
                    <stop offset="1" stopColor="#F86463" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_1166_110"
                    x1="41.6625"
                    y1="44.2932"
                    x2="45.5117"
                    y2="53.5437"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E15E5B" />
                    <stop offset="1" stopColor="#FB8C4E" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function Pulse() {
    return (
        <svg
            width="192"
            height="192"
            viewBox="0 0 192 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                opacity="0.1"
                cx="96.0287"
                cy="95.8107"
                r="95.4318"
                fill="url(#paint0_linear_1_350)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1_350"
                    x1="40.8203"
                    y1="0.379001"
                    x2="196.193"
                    y2="0.379001"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FC8B4E" />
                    <stop offset="1" stopColor="#F86463" />
                </linearGradient>
            </defs>
        </svg>
    );
}
