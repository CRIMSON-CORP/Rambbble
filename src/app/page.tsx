import { FC } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui';
import HeroAnimation from '@/components/HeroAnimation/HeroAnimation';

export default function Home() {
    return (
        <main className="flex flex-col">
            <Hero />
            <Services />
            <WeveGotYou />
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
    return (
        <div className="sm:grow w-full">
            <div className="max-w-[573.49px] flex flex-col items-start gap-5 sm:gap-7 md:gap-10 xl:gap-16">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 xl:gap-12">
                    <h1 className="opacity-80 text-dark-blue text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold">
                        Find your trip buddy!
                    </h1>
                    <div className="opacity-70 text-faint-dark-blue text-base sm:text-lg xl:text-2xl font-normal">
                        Rambble connects people with the same passion -
                        traveling! Our goal is to help you find Travel Buddies
                        and Make New Friends
                    </div>
                </div>
                <Button size="large">Find a trip buddy</Button>
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
                    Have you ever felt this way?
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
        <article className="grow w-full px-4 sm:px-6 md:px-9 py-4 sm:py-6 md:py-8 bg-white rounded-[20px] border border-neutral-200 justify-center items-center flex-col inline-flex">
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
    );
};

function WeveGotYou() {
    return (
        <section id="wevegotyou" className="pt-7">
            <div className="container flex flex-col gap-16">
                <h2 className="opacity-80 text-center text-dark-blue text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium leading-tight">
                    We&apos;ve Got You!
                </h2>
                <div className="flex items-stretch flex-col md:flex-row gap-10">
                    <div className="grow w-full center">
                        <Image
                            width={500}
                            height={500}
                            alt="traverlers artwork"
                            src="/travelers-pana.svg"
                        />
                    </div>
                    <div className="grow w-full center">
                        <div className="flex-col justify-start items-start gap-6 md:gap-10 lg:gap-16 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 sm:gap-4 lg:gap-8 flex">
                                <h3 className="text-red-400 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                    For all kinds of trips
                                </h3>
                                <div className="max-w-[535px] text-dark-blue text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-normal">
                                    Whether it&apos;s for a quick getaway,
                                    sightseeing, city-hopping, vacation or a
                                    work trip, you can always find the right
                                    person to do that with on Rambbble.
                                </div>
                            </div>
                            <Button variant="outlined">
                                Find someone in your city
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
