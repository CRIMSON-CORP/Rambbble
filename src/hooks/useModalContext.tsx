import { ModalContext } from '@/context/modalContext';
import { useContext } from 'react';

function useModalContext(): ModalContextValues {
    return useContext(ModalContext);
}

export default useModalContext;
