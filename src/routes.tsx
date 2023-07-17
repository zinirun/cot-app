import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/main';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import SignupPage from './pages/signup';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    gestureEnabled: true,
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Signup"
                    component={SignupPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Signup: undefined;
    Home: undefined;
};
