import { StyleSheet } from 'react-native';
import { ComponentSizeOption } from '../../lib/types/style';

interface StyleProps {
    size: ComponentSizeOption;
    focused?: boolean;
}

export const styles = ({ size, focused }: StyleProps) =>
    StyleSheet.create({
        inputContainer: {
            width: '100%',
            paddingVertical: 8,
            paddingHorizontal: 4,
            fontSize: size === 'medium' ? 18 : 16,
            color: 'white',
            borderBottomWidth: 1,
            borderBottomColor: focused ? 'white' : '#555',
        },
    });
