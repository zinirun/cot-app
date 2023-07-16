import { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './style';

interface TypoProps {
    size?: number;
    bold?: boolean;
    color?: string;
}

export default function Typo({
    children,
    size: fontSize = 16,
    bold = false,
    color = 'white',
    ...props
}: PropsWithChildren<TextProps & TypoProps>) {
    return (
        <Text
            style={{ ...styles.text, fontSize, fontWeight: bold ? 'bold' : 'normal', color }}
            {...props}
        >
            {children}
        </Text>
    );
}
