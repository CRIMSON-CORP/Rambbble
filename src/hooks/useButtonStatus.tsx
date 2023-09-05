import { useCallback, useState } from 'react';

function useButtonStatus() {
    const [status, setStatus] = useState<ButtonStatus>('idle');

    const loading = useCallback(() => {
        setStatus('loading');
    }, []);

    const success = useCallback(() => {
        setStatus('success');
    }, []);

    const error = useCallback(() => {
        setStatus('error');
    }, []);
    return {
        status,
        loading,
        success,
        error,
    };
}

export default useButtonStatus;
