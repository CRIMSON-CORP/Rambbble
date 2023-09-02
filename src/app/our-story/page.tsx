import Header from '@/components/Header';
import { GetServerSidePropsResult } from 'next';
import React from 'react';

async function pageLoaderDelay(): Promise<GetServerSidePropsResult<{}>> {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 5000);
    });
    return {
        props: {},
    };
}

async function page() {
    await pageLoaderDelay();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}

export default page;
