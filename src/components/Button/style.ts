import { StyleSheet } from 'react-native';

interface StyleProps {
    disabled?: boolean;
}

export const styles = ({ disabled }: StyleProps) =>
    StyleSheet.create({
        primaryContainer: {
            backgroundColor: disabled ? '#555' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
        },
    });
