import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyAccountPage () {
    const navigation = useNavigation();

    return (
        <Button
            title="Logout"
            onPress={() => navigation.navigate('Login')}
        />
    );
}
