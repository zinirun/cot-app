import { PropsWithChildren } from 'react';
import { styles } from './style';
import { SafeAreaView, View, ViewProps } from 'react-native';

export default function Section(props: PropsWithChildren<ViewProps>) {
    return (
        <SafeAreaView style={styles.sectionContainer}>
            <View style={styles.contentContainer} {...props}>
                {props.children}
            </View>
        </SafeAreaView>
    );
}
