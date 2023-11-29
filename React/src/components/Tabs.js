import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import MyAccountPage from '../pages/MyAccountPage';

const Tab = createBottomTabNavigator();

export default function Tabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomePage}/>
            <Tab.Screen name='Search' component={SearchPage}/>
            <Tab.Screen name='Saved Recipes' component={SavedRecipesPage}/>
            <Tab.Screen name='Meal Plan' component={MealPlanPage}/>
            <Tab.Screen name='My Account' component={MyAccountPage}/>
        </Tab.Navigator>
    )
}