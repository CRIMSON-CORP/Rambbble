'use client';
import { useEffect } from 'react';

interface UsePageLoadedProps {
    onPageLaoded: () => void;
}

function usePageLoaded({ onPageLaoded = () => undefined }: UsePageLoadedProps) {
    useEffect(() => {
        const handleLoad = () => {
            if (document.readyState === 'complete') {
                onPageLaoded();
            }
        };

        if (document.readyState === 'complete') {
            onPageLaoded();
        } else {
            document.addEventListener('readystatechange', handleLoad);
        }

        return () => {
            document.removeEventListener('readystatechange', handleLoad);
        };
    }, [onPageLaoded]);

    return;
}

export default usePageLoaded;
