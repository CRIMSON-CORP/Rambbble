import { Button } from '@/components/ui';
import Image from 'next/image';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
    return (
        <main className="min-h-screen flex">
            <section id="hero" className="flex grow">
                <div className="container grow flex items-center justify-between">
                    <HeroContent />
                    <HeroGraphic />
                </div>
            </section>
        </main>
    );
}

function HeroContent() {
    return (
        <div className="grow">
            <div className="max-w-[573.49px] flex flex-col items-start gap-16">
                <div className="flex flex-col gap-12">
                    <h1 className="opacity-80 text-dark-blue text-[84px] font-bold">
                        Find your trip buddy!
                    </h1>
                    <div className="opacity-70 text-faint-dark-blue text-2xl font-normal">
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

function HeroGraphic() {
    return (
        <div className="grow">
            <HeroAnimation />
        </div>
    );
}
