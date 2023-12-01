import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import MyAccountPage from '../pages/MyAccountPage';
import TestRecipePage from '../pages/TestRecipePage';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='NavBar' component={Tabs} options={{ headerShown: false }}/>
            <Stack.Screen name='TestRecipe' component={TestRecipePage} options={{ headerShown: false }}/>
            <Stack.Screen name='Search' component={SearchPage}/>
            <Stack.Screen name='SavedRecipes' component={SavedRecipesPage}/>
            <Stack.Screen name='MealPlan' component={MealPlanPage}/>
            <Stack.Screen name='MyAccount' component={MyAccountPage}/>
        </Stack.Navigator>
    );
}
