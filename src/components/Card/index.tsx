import { TouchableOpacity } from 'react-native';
import Typo from '../Typo';
import { styles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../Spacer';

interface CardProps {
    title: string;
    description?: string;
}

export default function Card({ title, description, ...props }: CardProps) {
    return (
        <LinearGradient colors={['#aa33ff', '#e299ff']} style={styles.bgContainer}>
            <TouchableOpacity style={styles.container} {...props}>
                <Typo bold size={18}>
                    {title}
                </Typo>
                <Spacer y={4} />
                {!!description && (
                    <Typo size={14} color="#eee">
                        {description}
                    </Typo>
                )}
            </TouchableOpacity>
        </LinearGradient>
    );
}
