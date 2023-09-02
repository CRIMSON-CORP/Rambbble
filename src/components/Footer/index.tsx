import Image from 'next/image';
import React from 'react';

import NavLinks from './NavLinks';

import { footerLinks } from './config';

function Footer() {
    return (
        <footer className="bg-primary overflow-x-hidden">
            <Image
                width={1440}
                height={102.67}
                alt="footer curve"
                src="/footer-curve.svg"
                className="w-full block -translate-y-1"
            />
            <div className="container relative pb-14">
                <div className="pt-24 pb-14 border-b border-white">
                    <div className="flex justify-between flex-wrap gap-10 xl:gap-0">
                        <SocialMediaLinks />
                        <div className="flex xl:contents justify-between w-full gap-x-10 gap-y-20 flex-wrap">
                            {footerLinks.map((links) => (
                                <NavLinks
                                    key={links.title}
                                    title={links.title}
                                    links={links.links}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    width={279.41}
                    height={152.98}
                    alt="footer cloud"
                    className="absolute bottom-0 left-0"
                    src="/footer-cloud.svg"
                />
                <Image
                    width={279.41}
                    height={152.98}
                    alt="footer cloud"
                    className="absolute bottom-14 -right-5"
                    src="/footer-cloud.svg"
                />
            </div>
        </footer>
    );
}

export default Footer;

function SocialMediaLinks() {
    return (
        <div className="flex items-center gap-3 md:gap-7 self-end">
            <Image
                width={42}
                height={42}
                alt="facebook logo"
                src="/facebook.svg"
            />
            <Image
                width={42}
                height={42}
                alt="instagram logo"
                src="/instagram.svg"
            />
            <Image
                width={42}
                height={42}
                alt="twitter logo"
                src="/twitter.svg"
            />
            <Image width={42} height={42} alt="tiktok logo" src="/tiktok.svg" />
            <Image
                width={42}
                height={42}
                alt="linkedin logo"
                src="/linkedin.svg"
            />
        </div>
    );
}
