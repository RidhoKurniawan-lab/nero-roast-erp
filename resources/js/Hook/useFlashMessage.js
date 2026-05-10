import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { showToast } from '@/Utils/swal';

export default function useFlashMessages() {
    const { flash, success } = usePage().props;

    useEffect(() => {
        const message = flash?.success || success;
        if (message) {
            setTimeout(() => {
                showToast(message, 'success');
            }, 300)
        }
    }, [flash, success]);

    return null;
}
