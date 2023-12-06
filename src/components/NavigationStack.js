import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import MyAccountPage from '../pages/MyAccountPage';
import TestRecipePage from '../pages/recipePages/TestRecipePage';
import TestRecipePage2 from '../pages/recipePages/TestRecipePage2';
import TestRecipePage3 from '../pages/recipePages/TestRecipePage3';
import TestEditRecipePage from '../pages/recipePages/TestEditRecipePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import Tabs from './Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage}  options={{ headerShown: false }}/>
            <Stack.Screen name='NavBar' component={Tabs} options={{ headerShown: false }}/>
            <Stack.Screen name='Register' component={RegisterPage}  options={{ headerShown: false }}/>
            <Stack.Screen name='Forgot' component={ForgotPasswordPage}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
