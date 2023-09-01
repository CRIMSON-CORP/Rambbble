'use client';
import { useCallback, useState } from 'react';

function useToggle(defaultState: boolean = false): {
    state: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
} {
    const [state, setState] = useState<boolean>(defaultState);

    const open = useCallback(() => {
        setState(true);
    }, []);

    const close = useCallback(() => {
        setState(false);
    }, []);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return { state, open, close, toggle };
}

export default useToggle;
