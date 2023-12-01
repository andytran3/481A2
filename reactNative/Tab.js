import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import MyAccountPage from '../pages/MyAccountPage';

const Tab = createBottomTabNavigator();

export default function Tabs () {
    const navigation = useNavigation();
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Login' 
                component={LoginPage}
                options={{ tabBarButton: () => null }} // Hide 'Login' button
            />
            <Tab.Screen 
                name='Home' 
                component={HomePage}
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('MyAccountPage')}
                            title="Info"
                            color="#000"
                        />
                    ),
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('Button pressed!')}
                            title="<-"
                            color="#000"
                        />
                    ),
                }}
            />
            <Tab.Screen name='Search' component={SearchPage}/>
            <Tab.Screen name='Saved Recipes' component={SavedRecipesPage}/>
            <Tab.Screen name='Meal Plan' component={MealPlanPage}/>
            <Tab.Screen name='MyAccountPage' component={MyAccountPage}
                            options={{ tabBarButton: () => null }} // Hide 'Login' button
                            />
        </Tab.Navigator>
    )
}
