import { PropsWithChildren } from 'react';
import {
    DimensionValue,
    FlexAlignType,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';

interface ContainerProps {
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    align?: FlexAlignType;
    height?: DimensionValue;
    width?: DimensionValue;
    row?: boolean;
}

export default function Container({
    children,
    justify: justifyContent = 'flex-start',
    align: alignItems = 'flex-start',
    height,
    width,
    row,
    style = {},
}: PropsWithChildren<ViewProps & ContainerProps>) {
    return (
        <View
            style={{
                justifyContent,
                alignItems,
                height,
                width,
                flexDirection: row ? 'row' : 'column',
                ...(style as ViewStyle),
            }}
        >
            {children}
        </View>
    );
}

export function ScrollContainer({
    children,
    justify: justifyContent = 'flex-start',
    align: alignItems = 'flex-start',
    height,
    width,
    row,
    showIndicator = false,
}: PropsWithChildren<ContainerProps & { showIndicator?: boolean }>) {
    return (
        <ScrollView
            horizontal={row}
            style={{
                height,
                width,
                flexDirection: row ? 'row' : 'column',
            }}
            contentContainerStyle={{
                justifyContent,
                alignItems,
            }}
            showsHorizontalScrollIndicator={showIndicator}
            showsVerticalScrollIndicator={showIndicator}
        >
            {children}
        </ScrollView>
    );
}

export function KeyboardAvoidContainer({
    children,
    justify: justifyContent = 'flex-start',
    align: alignItems = 'flex-start',
    height,
    width,
    row,
}: PropsWithChildren<ContainerProps>) {
    const statusBarHeight = StatusBar.currentHeight || 0;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                justifyContent,
                alignItems,
                height,
                width,
                flexDirection: row ? 'row' : 'column',
            }}
        >
            {children}
        </KeyboardAvoidingView>
    );
}
