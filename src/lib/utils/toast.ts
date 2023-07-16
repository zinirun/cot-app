import { showMessage } from 'react-native-flash-message';

export const toastDanger = (message: string) =>
    showMessage({
        message,
        type: 'danger',
        icon: 'danger',
        titleStyle: {
            fontSize: 16,
        },
    });

export const toastSuccess = (message: string) =>
    showMessage({
        message,
        type: 'success',
        icon: 'success',
        titleStyle: {
            fontSize: 16,
        },
    });
