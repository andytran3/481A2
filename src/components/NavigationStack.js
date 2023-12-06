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
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginPage}  options={{ headerShown: false }}/>
            <Stack.Screen name='NavBar' component={Tabs} options={{ headerShown: false }}/>
            <Stack.Screen name='TestRecipe' component={TestRecipePage} options={{ headerShown: false }}/>
            <Stack.Screen name='TestRecipe2' component={TestRecipePage2} options={{ headerShown: false }}/>
            <Stack.Screen name='TestRecipe3' component={TestRecipePage3} options={{ headerShown: false }}/>
            <Stack.Screen name='TestEditRecipe' component={TestEditRecipePage} options={{ headerShown: false }}/>
            <Stack.Screen name='Search' component={SearchPage}/>
            <Stack.Screen name='SavedRecipes' component={SavedRecipesPage}/>
            <Stack.Screen name='MealPlan' component={MealPlanPage}/>
            <Stack.Screen name='MyAccount' component={MyAccountPage}/>
            <Stack.Screen name='Register' component={RegisterPage}  options={{ headerShown: false }}/>
            <Stack.Screen name='Forgot' component={ForgotPasswordPage}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
