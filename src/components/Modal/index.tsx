import type { Variants } from 'framer-motion';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import { useCallback } from 'react';
import { TfiClose } from 'react-icons/tfi';

interface ModalProps {
    open: boolean;
    children: ReactNode;
    wrapperClassNames?: string;
    closeModal?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const Modal: FC<ModalProps> = ({
    open,
    children,
    closeModal,
    wrapperClassNames = '',
}): JSX.Element => {
    const preventCloseOnOutSideClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        },
        [],
    );

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    id="modal"
                    key="modal"
                    exit="hidden"
                    animate="show"
                    initial="hidden"
                    onClick={closeModal}
                    variants={modalWrapperVariants}
                    className={`fixed inset-0 grid place-items-center w-full h-full p-4 sm:p-6 isolate z-modal bg-[#DBD9D9] bg-opacity-70 backdrop-blur-[6px] pointer-events-auto} ${wrapperClassNames}`}
                >
                    <motion.div className="relative w-full max-w-[695px] pointer-events-auto">
                        <LayoutGroup>
                            <motion.div
                                layout
                                variants={makeModalContentVariants(5, 0.1)}
                                className="absolute inset-0 w-full h-full border-2 border-primary-orange rounded-3xl -z-10 pointer-events-none;"
                            />
                            <motion.div
                                layout
                                variants={makeModalContentVariants()}
                                onClick={preventCloseOnOutSideClick}
                                className="relative bg-white !pt-0 p-2 sm:p-5 rounded-3xl shadow-[0px 12px 124px rgba(37, 72, 153, 0.17)]"
                            >
                                <motion.button
                                    layout
                                    onClick={closeModal}
                                    data-testid="close-modal-button"
                                    className="absolute sm:top-10 sm:right-10 sm:w-10 sm:h-10 top-4 right-4 w-6 h-6 cursor-pointer z-10 center"
                                >
                                    <TfiClose className="text-primary-orange" />
                                </motion.button>
                                <motion.div
                                    className="modal-content max-h-[85vh] overflow-y-auto p-2 sm:p-4"
                                    variants={modalContentInnerVariants}
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </LayoutGroup>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;

export const modalWrapperVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
        },
    },
};

const makeModalContentVariants = (rotate = 0, delay = 0): Variants => ({
    hidden: {
        opacity: 0,
        scale: 0.6,
        rotate: 30 + rotate,
    },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0 + rotate,
        transition: {
            delay,
            delayChildren: 0.5,
            type: 'spring',
            mass: 2,
            stiffness: 166,
            damping: 15,
            bounce: 1,
        },
    },
});

const modalContentInnerVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
        },
    },
};
