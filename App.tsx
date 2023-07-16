import React from 'react';
import Routes from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';

function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
            <FlashMessage position="top" />
        </GestureHandlerRootView>
    );
}

export default App;
