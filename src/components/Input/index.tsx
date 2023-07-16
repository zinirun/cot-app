import { TextInput } from 'react-native';
import { styles } from './style';
import { TextInputProps } from 'react-native';
import { ComponentSizeOption } from '../../lib/types/style';
import { useState } from 'react';

interface InputProps {
    size?: ComponentSizeOption;
    password?: boolean;
}

export default function Input({
    size = 'medium',
    password,
    ...props
}: TextInputProps & InputProps) {
    const [focused, setFocused] = useState(false);
    return (
        <TextInput
            style={styles({ size, focused }).inputContainer}
            placeholderTextColor={focused ? '#777' : '#555'}
            secureTextEntry={password}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
        />
    );
}
