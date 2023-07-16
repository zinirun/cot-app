import { DimensionValue, View } from 'react-native';

interface SpacerProps {
    x?: DimensionValue;
    y?: DimensionValue;
}

export default function Spacer({ x, y }: SpacerProps) {
    return (
        <View
            style={{
                width: x,
                height: y,
            }}
        />
    );
}
