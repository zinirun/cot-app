import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

export default function useNav() {
    const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { reset } = nav;

    const resetWithOne = (name: keyof RootStackParamList, state?: any) => {
        reset({
            routes: [
                {
                    name: 'Home',
                    state,
                },
            ],
        });
    };

    return { ...nav, resetWithOne };
}
