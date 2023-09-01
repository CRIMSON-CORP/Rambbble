import Image from 'next/image';

import { Button } from '@/components/ui';
import HeroAnimation from '@/components/HeroAnimation/HeroAnimation';

export default function Home() {
    return (
        <main className="flex">
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
        </main>
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
