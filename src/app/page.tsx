'use client';
import { FC, SetStateAction, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import {
    getFirestore,
    addDoc,
    collection,
    serverTimestamp,
} from 'firebase/firestore';

import { AiOutlineUser } from 'react-icons/ai';
import { RiMailOpenLine } from 'react-icons/ri';

import { Button } from '@/components/ui';
import HeroAnimation from '@/components/HeroAnimation/HeroAnimation';
import AnimatedText from '@/components/AnimatedText';
import SlideInContent from '@/components/SlideInContent';
import ArticleContent from '@/components/ArticleContent';
import WaitListSection from '@/components/WaitlistSection';
import Modal from '@/components/Modal';
import useToggle from '@/hooks/useToggle';
import useModalContext from '@/hooks/useModalContext';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import DynamicButton from '@/components/ui/DynamicButton';
import { db, COLLECTION_NAMES, storeWaitlistData } from '@/service/firebase';
import delay from '@/utils/delay';

export default function Home() {
    // const { state, close } = useToggle(true);

    // useEffect(() => {
    //     const timeout = setTimeout(close, 5000);

    //     return () => {
    //         clearTimeout(timeout);
    //     };
    // }, [close]);

    // if (state) {
    //     return <Loading />;
    // }

    return (
        <main className="flex flex-col">
            <Hero />
            <Services />
            <WeveGotYou />
            <Community />
            <HowItWorks />
            <Download />
            <WaitList />
            <ModalWrapepr />
        </main>
    );
}

function Hero() {
    return (
        <section id="hero" className="flex grow">
            <div>
                <div className="container min-h-screen grow flex items-center sm:justify-between flex-col md:flex-row pt-28 md:pt-0 gap-10">
                    <HeroContent />
                    <HeroAnimation />
                </div>
                <div>
                    <Image
                        width={1483.87}
                        height={163.42}
                        className="w-screen"
                        alt="section-underline"
                        id="hero-section-underline"
                        src="/hero-section-underline.svg"
                    />
                </div>
            </div>
        </section>
    );
}

function HeroContent() {
    const { openModal } = useModalContext();
    return (
        <div className="sm:grow w-full">
            <div className="max-w-[573.49px] flex flex-col items-start gap-5 sm:gap-7 md:gap-10 xl:gap-16">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 xl:gap-12">
                    <h1 className="opacity-80 text-dark-blue text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold">
                        <AnimatedText>Find your trip buddy!</AnimatedText>
                    </h1>
                    <SlideInContent delay={0.25}>
                        <div className="opacity-70 text-faint-dark-blue text-base sm:text-lg xl:text-2xl font-normal">
                            Rambble connects people with the same passion -
                            traveling! Our goal is to help you find Travel
                            Buddies and Make New Friends
                        </div>
                    </SlideInContent>
                </div>
                <SlideInContent delay={0.5}>
                    <Button size="large" onClick={openModal}>
                        Find a trip buddy
                    </Button>
                </SlideInContent>
            </div>
        </div>
    );
}

interface ServiceProps {
    imagePath: string;
    description: string;
}

const servicesContent: ServiceProps[] = [
    {
        imagePath: '/airport-rafiki.svg',
        description:
            "You couldn't find anyone willing to join you on your adventurous trip.",
    },
    {
        imagePath: '/trip-pana.svg',
        description:
            'Sometimes you wished you had a travel buddy to share a few moments with, even if you love traveling solo.',
    },
    {
        imagePath: '/online-transactions-pana.svg',
        description:
            'Having someone to split the costs with would have made your life easier',
    },
];

function Services() {
    return (
        <section id="services" className="pt-16 pb-9">
            <div className="container flex flex-col gap-16">
                <h2 className="opacity-80 text-center text-dark-blue text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight">
                    <AnimatedText>Have you ever felt this way?</AnimatedText>
                </h2>
                <div className="flex items-stretch justify-center gap-6 flex-wrap lg:flex-nowrap">
                    {servicesContent.map((serviceContent) => (
                        <Service
                            {...serviceContent}
                            key={serviceContent.imagePath}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Service: FC<ServiceProps> = ({ imagePath, description }) => {
    return (
        <SlideInContent className="grow w-full">
            <article className="h-full px-4 sm:px-6 md:px-9 py-4 sm:py-6 md:py-8 bg-white rounded-[20px] border border-neutral-200 justify-center items-center flex-col inline-flex">
                <Image
                    width={300}
                    height={243}
                    src={imagePath}
                    alt="service artwork"
                />
                <p className="text-center text-zinc-600 text-base sm:text-xl font-normal leading-[29.29px]">
                    {description}
                </p>
            </article>
        </SlideInContent>
    );
};

function WeveGotYou() {
    return (
        <section id="wevegotyou" className="pt-7">
            <div className="container flex flex-col gap-16">
                <h2 className="opacity-80 text-center text-dark-blue text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight">
                    <AnimatedText>We&apos;ve Got You!</AnimatedText>
                </h2>
                <div className="flex items-stretch flex-col md:flex-row gap-10">
                    <SlideInContent
                        y={0}
                        x={-200}
                        className="grow w-full center"
                    >
                        <Image
                            width={500}
                            height={500}
                            alt="traverlers artwork"
                            src="/travelers-pana.svg"
                        />
                    </SlideInContent>
                    <div className="grow w-full center">
                        <div className="flex-col justify-start items-start gap-6 md:gap-10 lg:gap-16 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 sm:gap-4 lg:gap-8 flex">
                                <SlideInContent>
                                    <h3 className="text-red-400 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                        For all kinds of trips
                                    </h3>
                                </SlideInContent>
                                <SlideInContent>
                                    <div className="max-w-[535px] text-dark-blue text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-normal">
                                        Whether it&apos;s for a quick getaway,
                                        sightseeing, city-hopping, vacation or a
                                        work trip, you can always find the right
                                        person to do that with on Rambbble.
                                    </div>
                                </SlideInContent>
                            </div>
                            <SlideInContent>
                                <Button variant="outlined">
                                    Find someone in your city
                                </Button>
                            </SlideInContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Community() {
    return (
        <section id="join-community" className="pt-16 pb-8">
            <div className="container">
                <div className="flex items-stretch flex-col-reverse md:flex-row gap-10">
                    <div className="grow w-full center">
                        <div className="flex-col justify-start items-start gap-6 md:gap-10 lg:gap-16 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 sm:gap-4 lg:gap-8 flex">
                                <SlideInContent>
                                    <h3 className="text-red-400 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                        A trustworthy community
                                    </h3>
                                </SlideInContent>
                                <SlideInContent>
                                    <div className="max-w-[535px] text-dark-blue text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-normal">
                                        We are building a community to connect
                                        travelers all around the world. We are
                                        creating a trustworthy environment where
                                        people can share moments and
                                        experiences.
                                    </div>
                                </SlideInContent>
                            </div>
                            <SlideInContent>
                                <Button variant="outlined">
                                    Join the community
                                </Button>
                            </SlideInContent>
                        </div>
                    </div>
                    <div className="overflow-x-hidden grow w-full ">
                        <SlideInContent y={0} x={200} className="center">
                            <Image
                                width={594}
                                height={438}
                                alt="online world artwork"
                                src="/online-world-pana.svg"
                            />
                        </SlideInContent>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section id="how-it-works" className="pt-7 pb-32 overflow-x-hidden">
            <div className="container flex flex-col gap-10 md:gap-28 h-full">
                <h2 className="opacity-80 text-center text-dark-blue text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight">
                    <AnimatedText>How It Works</AnimatedText>
                </h2>
                <div className="relative flex center">
                    <svg
                        width="730"
                        height="707"
                        viewBox="0 0 730 707"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-none absolute md:static"
                    >
                        <path
                            opacity="0.05"
                            d="M679.646 353.624C679.646 519.588 540.392 656.771 365.301 656.771C190.211 656.771 50.9565 519.588 50.9565 353.624C50.9565 187.661 190.211 50.4775 365.301 50.4775C540.392 50.4775 679.646 187.661 679.646 353.624Z"
                            stroke="#FA7C56"
                            strokeWidth="100"
                        />
                    </svg>
                    <div className="md:absolute flex items-center justify-between w-full flex-col md:flex-row gap-10">
                        <ArticleContent
                            index={1}
                            width={217}
                            height={195}
                            title="Find a trip"
                            description="Make a trip by selecting a destination that you
                                are traveling to or find existing trips."
                            imageAlt="mobile list artwork"
                            imagePath="/mobile-note-list-cuate.svg"
                        />
                        <ArticleContent
                            index={2}
                            width={211}
                            height={204}
                            title="Get Connected"
                            description="Swipe and get matched with someone that is
                                heading to the same location and start chatting
                                with them."
                            imageAlt="mobile messages artwork"
                            imagePath="/messages-cuate.svg"
                            className="md:-translate-y-56"
                        />
                        <ArticleContent
                            index={3}
                            width={249}
                            height={223}
                            title="Trip Together"
                            description="Plan together, meet up with your travel companion at a pre-decided public place and travel together."
                            imageAlt="planning a trip artwork"
                            imagePath="/trip-amico.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Download() {
    return (
        <section id="download" className="bg-[#FC8B4E] isolate overflow-x-clip">
            <div className="container relative isolate h-full">
                <div className="absolute inset-0 w-full h-full -z-10 overflow-y-clip overflow-x-visible">
                    <svg
                        width="470"
                        height="404"
                        viewBox="0 0 470 404"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 left-0 -translate-x-3/4 -translate-y-3/4 -z-10"
                    >
                        <ellipse
                            cx="234.581"
                            cy="202"
                            rx="234.581"
                            ry="202"
                            fill="#FC8B4E"
                        />
                        <path
                            d="M431.661 202C431.661 287.785 348.884 366.5 234.581 366.5C120.278 366.5 37.5 287.785 37.5 202C37.5 116.215 120.278 37.5 234.581 37.5C348.884 37.5 431.661 116.215 431.661 202Z"
                            stroke="#FEBD9A"
                            strokeOpacity="0.3"
                            strokeWidth="75"
                        />
                    </svg>
                    <svg
                        width="831"
                        height="730"
                        viewBox="0 0 831 730"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-full left-0 -translate-x-3/4 -translate-y-1/4 -z-10"
                    >
                        <ellipse
                            cx="415.226"
                            cy="364.865"
                            rx="415.226"
                            ry="364.865"
                            fill="#FC8B4E"
                        />
                        <path
                            d="M780.453 364.865C780.453 532.882 623.205 679.73 415.226 679.73C207.248 679.73 50 532.882 50 364.865C50 196.848 207.248 50 415.226 50C623.205 50 780.453 196.848 780.453 364.865Z"
                            stroke="#FFBAA6"
                            strokeOpacity="0.57"
                            strokeWidth="100"
                        />
                    </svg>
                    <svg
                        width="761"
                        height="835"
                        viewBox="0 0 761 835"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-0 translate-x-2/4 -translate-y-3/4 -z-10"
                    >
                        <ellipse
                            cx="380.371"
                            cy="417.952"
                            rx="379.938"
                            ry="417"
                            fill="#FC8B4E"
                        />
                        <path
                            d="M710.309 417.952C710.309 625.122 558.312 784.952 380.371 784.952C202.429 784.952 50.4331 625.122 50.4331 417.952C50.4331 210.782 202.429 50.9521 380.371 50.9521C558.312 50.9521 710.309 210.782 710.309 417.952Z"
                            stroke="#FFBAA6"
                            strokeOpacity="0.57"
                            strokeWidth="100"
                        />
                    </svg>
                    <svg
                        width="470"
                        height="405"
                        viewBox="0 0 470 405"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-full right-0 translate-x-full -translate-y-2/4 -z-10"
                    >
                        <ellipse
                            cx="235"
                            cy="202.417"
                            rx="234.581"
                            ry="202"
                            fill="#FC8B4E"
                        />
                        <path
                            d="M432.081 202.417C432.081 288.202 349.303 366.917 235 366.917C120.697 366.917 37.9194 288.202 37.9194 202.417C37.9194 116.632 120.697 37.917 235 37.917C349.303 37.917 432.081 116.632 432.081 202.417Z"
                            stroke="#FEBD9A"
                            strokeOpacity="0.3"
                            strokeWidth="75"
                        />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-col lg:flex-row">
                    <div className="flex flex-col gap-4 sm:gap-8 dm:gap-12 text-white py-[76px]">
                        <h2 className="font-body text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold max-w-[663px] leading-none">
                            <AnimatedText>
                                Download our app for smarter, super-easy
                                matching
                            </AnimatedText>
                        </h2>
                        <SlideInContent>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium max-w-[596px]">
                                Enjoy exclusive app discounts, receive
                                notifications if you have been matched
                            </p>
                        </SlideInContent>
                        <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
                            <SlideInContent>
                                <button className="w-2/3 sm:w-auto">
                                    <Image
                                        width={245}
                                        height={83}
                                        alt="download on app store"
                                        src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                    />
                                </button>
                            </SlideInContent>
                            <SlideInContent>
                                <button className="w-2/3 sm:w-auto">
                                    <Image
                                        width={273}
                                        height={82}
                                        alt="download on play store"
                                        src="/download-on-google.svg"
                                    />
                                </button>
                            </SlideInContent>
                        </div>
                    </div>
                    <SlideInContent>
                        <div className="grow relative min-h-[300px] translate-y-1/4 lg:translate-y-0">
                            <Image
                                width={534.14}
                                height={588.22}
                                alt="iphones"
                                src="/iphones.png"
                                quality={100}
                                className="w-full absolute top-0 -translate-y-24"
                            />
                        </div>
                    </SlideInContent>
                </div>
            </div>
        </section>
    );
}

function WaitList() {
    return (
        <section
            id="waitlist"
            className="pt-[clamp(100px,50vw,300px)] md:pt-40 pb-24 overflow-x-hidden"
        >
            <div className="container">
                <WaitListSection />
            </div>
        </section>
    );
}

const pageWrapperVariants: Variants = {
    initial: {
        opacity: 0,
        x: '100%',
    },
    animate: {
        opacity: 1,
        x: '0%',
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        x: '-100%',
        transition: {
            duration: 0.5,
        },
    },
};

function ModalWrapepr() {
    const { modalOpen, closeModal } = useModalContext();
    const [currentScreen, setCurrentScreen] = useState<'join' | 'in'>('join');
    const [userFirstName, setUserFirstName] = useState('');
    return (
        <Modal open={modalOpen} closeModal={closeModal}>
            <AnimatePresence mode="popLayout" initial={false}>
                {currentScreen === 'join' && (
                    <motion.div
                        key="join"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageWrapperVariants}
                    >
                        <JoinWaitListScreen
                            setCurrentScreen={setCurrentScreen}
                            setUserFirstName={setUserFirstName}
                        />
                    </motion.div>
                )}
                {currentScreen === 'in' && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageWrapperVariants}
                        key="in"
                    >
                        <YoureInScreen userFirstName={userFirstName} />
                    </motion.div>
                )}
            </AnimatePresence>
        </Modal>
    );
}

function JoinWaitListScreen({
    setCurrentScreen,
    setUserFirstName,
}: {
    setCurrentScreen: React.Dispatch<SetStateAction<'join' | 'in'>>;
    setUserFirstName: React.Dispatch<SetStateAction<string>>;
}) {
    const [buttonStatus, setButtonStatus] = useState<ButtonStatus>('idle');
    const onSubmit: React.FormEventHandler = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                setButtonStatus('loading');
                const formData = new FormData(e.target as HTMLFormElement);

                const firstNameFormDataValue: string | undefined = formData
                    .get('full-name')
                    ?.toString();
                const emailFormDataValue: string | undefined = formData
                    .get('email')
                    ?.toString();

                if (!firstNameFormDataValue || !emailFormDataValue) {
                    alert('Please fill all inputs!');
                    return;
                }
                await storeWaitlistData(
                    firstNameFormDataValue,
                    emailFormDataValue,
                );
                setButtonStatus('success');
                await delay(1000);
                const userFirstName = firstNameFormDataValue?.split(' ')[0];
                setUserFirstName(userFirstName || '');
                setCurrentScreen('in');
            } catch (error) {
                setButtonStatus('error');
            }
        },
        [setCurrentScreen, setUserFirstName],
    );
    return (
        <article className="relative flex flex-col gap-5 pt-32 sm:pt-72 isolate">
            <Image
                width={502}
                height={510.49}
                alt="join waitlist"
                src="/join-waitlist.gif"
                className="self-center absolute left-1/2 -translate-x-1/2 top-0 -z-10 -translate-y-24 w-full max-w-[502px]"
            />
            <h2 className="text-slate-600 text-2xl font-semibold leading-loose text-center">
                Oops 👀
            </h2>
            <p className='text-blue-950 text-opacity-70 text-base md:text-lg font-normal leading-relaxed"'>
                We are not launched yet but we will pretty soon. Please leave us
                your name and email, and we will update you as soon as we
                launch.
            </p>
            <p className="text-blue-950 text-opacity-70 text-sm sm:text-base font-light leading-relaxed italic">
                ** We promise not to spam your email
            </p>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="rounded-[10px] border border-slate-500 border-opacity-25 flex items-center overflow-hidden pl-3.5">
                    <AiOutlineUser
                        size={24}
                        className="text-primary-orange flex-none"
                    />
                    <input
                        required
                        placeholder="Enter your name"
                        type="text"
                        name="full-name"
                        className="px-2.5 py-3 sm:py-5 placeholder:text-neutral-500 text-base sm:text-lg sm:font-medium leading-tight text-black grow rounded-r-[10px] w-full"
                    />
                </div>
                <div className="rounded-[10px] border border-slate-500 border-opacity-25 flex items-center overflow-hidden pl-3.5">
                    <RiMailOpenLine
                        size={24}
                        className="text-primary-orange  flex-none"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder=" Enter your email address"
                        className="px-2.5 py-3 sm:py-5 placeholder:text-neutral-500 text-base sm:text-lg sm:font-medium leading-tight text-black grow rounded-r-[10px] w-full"
                    />
                </div>
                <DynamicButton type="submit" status={buttonStatus}>
                    Confirm
                </DynamicButton>
            </form>
        </article>
    );
}

function YoureInScreen({ userFirstName }: { userFirstName: string }) {
    return (
        <article className="relative flex flex-col gap-5 pb-16 md:pb-32">
            <div className="flex flex-col">
                <Image
                    alt="youre in"
                    width={402.29}
                    height={402.29}
                    src="/youre-in.gif"
                    className="self-center w-full max-w-[502px]"
                />
                <h2 className="text-slate-600 text-2xl font-semibold leading-loose text-center">
                    You&apos;re In! 😁
                </h2>
                <p className='text-blue-950 text-opacity-70 text-base sm:text-xl text-center font-normal leading-relaxed"'>
                    We are happy to have you here, {userFirstName}. When we
                    lauch, we are going to send you an email containing the next
                    steps to take.
                </p>
            </div>
        </article>
    );
}
