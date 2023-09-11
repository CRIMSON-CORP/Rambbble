interface FooterNavLinkProps {
    label: string;
    href: string;
}

interface ModalContextValues {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

type ButtonStatus = 'idle' | 'loading' | 'success' | 'error';

declare module 'cypress-plugin-snapshots/plugin';
