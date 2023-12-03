import React from 'react';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs ({ navigation }) {
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
                    headerRight: () => (
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => navigation.navigate('MyAccount')}>
                            <View style={{paddingRight: 20, paddingBottom: 10, alignItems: 'center'}}>
                                <MaterialIcon name="account-circle" size={40} color="#000000" />
                                <Text>My Account</Text>
                            </View>
                        </TouchableOpacity>
                    )
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
                    headerRight: () => (
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => navigation.navigate('MyAccount')}>
                            <View style={{paddingRight: 20, paddingBottom: 10, alignItems: 'center'}}>
                                <MaterialIcon name="account-circle" size={40} color="#000000" />
                                <Text>My Account</Text>
                            </View>
                        </TouchableOpacity>
                    )
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
                    headerRight: () => (
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => navigation.navigate('MyAccount')}>
                            <View style={{paddingRight: 20, paddingBottom: 10, alignItems: 'center'}}>
                                <MaterialIcon name="account-circle" size={40} color="#000000" />
                                <Text>My Account</Text>
                            </View>
                        </TouchableOpacity>
                    )
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
                    headerRight: () => (
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => navigation.navigate('MyAccount')}>
                            <View style={{paddingRight: 20, paddingBottom: 10, alignItems: 'center'}}>
                                <MaterialIcon name="account-circle" size={40} color="#000000" />
                                <Text>My Account</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        opacity: 0.7,
        width: 27,
        height: 27,
        borderRadius: 27/2,
        top: 50,
        left: 30,
    },
  });