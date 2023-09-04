'use client';
import useToggle from '@/hooks/useToggle';
import { createContext, useMemo } from 'react';

export const ModalContext = createContext<ModalContextValues>({
    modalOpen: false,
    openModal: () => undefined,
    closeModal: () => undefined,
});

function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const { state, open, close } = useToggle();

    const contextValues = useMemo<ModalContextValues>(
        () => ({
            modalOpen: state,
            openModal: open,
            closeModal: close,
        }),
        [state, open, close],
    );

    return (
        <ModalContext.Provider value={contextValues}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
