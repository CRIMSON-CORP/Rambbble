interface FooterNavLinkProps {
    label: string;
    href: string;
}

interface ModalContextValues {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
