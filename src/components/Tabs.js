import React from 'react';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SavedRecipesPage from '../pages/SavedRecipesPage';
import MealPlanPage from '../pages/MealPlanPage';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import TestRecipePage from '../pages/recipePages/TestRecipePage';
import TestRecipePage2 from '../pages/recipePages/TestRecipePage2';
import TestRecipePage3 from '../pages/recipePages/TestRecipePage3';
import TestEditRecipePage from '../pages/recipePages/TestEditRecipePage';
import TestCreateRecipePage from '../pages/recipePages/TestCreateRecipePage'
import MyAccountPage from '../pages/MyAccountPage';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MiddleButtonComponent = () => {
    return null
}

export default function Tabs ({ navigation }) {
    return (
            <Tab.Navigator backBehavior='history'>
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
                        ),
                    }}
                />
                <Stack.Screen name='TestRecipe' component={TestRecipePage} options={{
                    headerShown: false,
                    tabBarLabel: 'TestRecipe',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
                <Stack.Screen name='TestRecipe2' component={TestRecipePage2} options={{
                    headerShown: false,
                    tabBarLabel: 'TestRecipe2',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
                <Stack.Screen name='TestRecipe3' component={TestRecipePage3} options={{
                    headerShown: false,
                    tabBarLabel: 'TestRecipe3',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
                <Stack.Screen name='TestEditRecipe' component={TestEditRecipePage} options={{
                    headerShown: false,
                    tabBarLabel: 'TestEditRecipe',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
                <Stack.Screen name='TestCreateRecipe' component={TestCreateRecipePage} options={{
                    headerShown: false,
                    tabBarLabel: 'TestCreateRecipe',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
                <Stack.Screen name='MyAccount' component={MyAccountPage} options={{
                    tabBarLabel: 'MyAccount',
                        tabBarButton: (props) => {
                            const MAP = {
                                A: null,
                                B: <TouchableOpacity {...props} />,
                            }
                        }
                }}/>
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
                    name='CreateRecipe'
                    component={MiddleButtonComponent}
                    options={{
                        tabBarButton: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('TestCreateRecipe')}>
                                <View style={styles.newRecipeButton}>
                                    <Icon name='add' size={40} color="white"/>
                                </View>
                            </TouchableOpacity>
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
    newRecipeButton: {
        position: 'absolute',
        backgroundColor: '#ff3a33',
        opacity: 0.9,
        width: 40,
        height: 40,
        borderRadius: 40/2,
        bottom: 30,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
  });