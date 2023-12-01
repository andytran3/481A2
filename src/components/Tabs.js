import React from 'react';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Tabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Good Day, Haroon'
                component={HomePage}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchPage}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Saved Recipes'
                component={SavedRecipesPage}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="favorite" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Meal Plan'
                component={MealPlanPage}
                options={{
                    tabBarLabel: 'Meal Plan',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="set-meal" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}