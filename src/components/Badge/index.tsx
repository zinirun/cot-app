import { TouchableOpacity } from 'react-native';
import Typo from '../Typo';
import { PropsWithChildren } from 'react';
import { styles } from './style';

interface ProfileBadge {
    name: string;
}

export default function ProfileBadge({ name, ...props }: PropsWithChildren<ProfileBadge>) {
    return (
        <TouchableOpacity style={styles.container}>
            <Typo>{name.slice(0, 2)}</Typo>
        </TouchableOpacity>
    );
}
