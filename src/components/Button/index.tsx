import { PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './style';
import Typo from '../Typo';
import { ComponentSizeOption } from '../../lib/types/style';

interface ButtonProps {
    type?: 'primary' | 'secondary';
    size?: ComponentSizeOption;
    bold?: boolean;
}

export default function Button({
    children,
    type = 'primary',
    size = 'medium',
    bold,
    disabled,
    onPress,
    ...props
}: PropsWithChildren<TouchableOpacityProps & ButtonProps>) {
    const typoColor = type === 'primary' ? 'black' : '#bbb';
    const typoSize = size === 'medium' ? 18 : 16;
    const containerStyle = type === 'primary' ? styles({ disabled }).primaryContainer : undefined;

    return (
        <TouchableOpacity style={containerStyle} onPress={disabled ? () => {} : onPress} {...props}>
            <Typo size={typoSize} color={typoColor} bold={bold}>
                {children}
            </Typo>
        </TouchableOpacity>
    );
}
