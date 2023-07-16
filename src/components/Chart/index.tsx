import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface ChartProps {
    data: number[];
    labels: string[];
    height?: number;
    paddingHorizontal?: number;
}

export default function Chart({ data, labels, height = 200, paddingHorizontal = 20 }: ChartProps) {
    return (
        <LineChart
            data={{
                datasets: [
                    {
                        data,
                    },
                ],
                labels,
            }}
            width={Dimensions.get('window').width - paddingHorizontal}
            height={height}
            chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
            }}
            bezier
            style={{
                borderRadius: 16,
            }}
        />
    );
}
