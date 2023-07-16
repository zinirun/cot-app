import { View } from 'react-native';
import { styles } from './style';
import Typo from '../Typo';

interface NavigatorProps {
    items: { key: string; icon: string }[]; // TODO change to image src
    currentKey?: string;
    onPressItem?: (key: string) => void;
}

export default function Navigator({ items, currentKey, onPressItem }: NavigatorProps) {
    const handlePressItem = (key: string) => {
        if (!!onPressItem) {
            onPressItem(key);
        }
    };
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <Typo
                    key={item.key}
                    bold={currentKey === item.key}
                    onPress={() => handlePressItem(item.key)}
                >
                    {item.icon}
                </Typo>
            ))}
        </View>
    );
}
