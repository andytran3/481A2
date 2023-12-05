import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MealPlanPage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [scheduledMeals, setScheduledMeals] = useState({});
    const [currentMeal, setCurrentMeal] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState([
        { id: '1', title: 'English White Bread' },
        { id: '2', title: 'Canadian White Bread' },
        { id: '3', title: 'Italian Garlic Bread' },
        // ... other recipes
    ]);

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const openTimePicker = (recipe) => {
        setCurrentMeal(recipe);
        // If the recipe has already been scheduled for this day with a time, use that time
        const existingMeal = scheduledMeals[selectedDate]?.find(meal => meal.id === recipe.id);
        if (existingMeal) {
            setSelectedTime(new Date(`1970/01/01 ${existingMeal.time}`));
        } else {
            setSelectedTime(new Date()); // Use current time for new meals
        }
        setShowTimePicker(true);
    };

    const onTimeChange = (event, selectedTime) => {
        setShowTimePicker(Platform.OS === 'ios');
        if (selectedTime) {
            setSelectedTime(selectedTime);
            const mealWithTime = {...currentMeal, time: selectedTime.toLocaleTimeString()};
            // Update or add the meal with the selected time
            const updatedMeals = scheduledMeals[selectedDate] ? 
                scheduledMeals[selectedDate].filter(meal => meal.id !== currentMeal.id).concat(mealWithTime) : 
                [mealWithTime];
            setScheduledMeals({
                ...scheduledMeals,
                [selectedDate]: updatedMeals
            });
            setCurrentMeal(null);
        }
    };

    const removeScheduledMeal = (date, recipeId) => {
        setScheduledMeals({
            ...scheduledMeals,
            [date]: scheduledMeals[date].filter(recipe => recipe.id !== recipeId)
        });
    };
    const renderScheduledMeals = () => {
        return scheduledMeals[selectedDate] ? (
            <View style={styles.scheduledMeals}>
                {scheduledMeals[selectedDate].map(meal => (
                    <View key={meal.id} style={styles.mealItemContainer}>
                        <Text style={styles.mealItem}>{meal.title} at {meal.time}</Text>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeScheduledMeal(selectedDate, meal.id)}
                        >
                            <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        ) : <Text style={styles.noMealsText}>No meals scheduled for this day.</Text>;
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Meal Plan Calendar</Text>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                    [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'}
                }}
            />

            <Text style={styles.subHeader}>Select a Recipe for {selectedDate}</Text>
            <FlatList
                data={savedRecipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.recipeContainer}>
                        <Text style={styles.recipeText}>{item.title}</Text>
                        <TouchableOpacity
                            style={styles.timeButton}
                            onPress={() => openTimePicker(item)}
                        >
                            <Text style={styles.timeButtonText}>Set Time</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

{showTimePicker && (
                <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onTimeChange}
                />
            )}

            <Text style={styles.subHeader}>Scheduled Meals for {selectedDate}</Text>
            {renderScheduledMeals()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        marginTop: 20,
    },
    recipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginVertical: 5,
    },
    recipeText: {
        flex: 1,
    },
    timeButton: {
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 5,
    },
    timeButtonText: {
        color: '#fff',
    },
    scheduledMeals: {
        marginTop: 20,
    },
    dateHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    mealItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginVertical: 5,
    },
    mealItem: {
        flex: 1,
    },
    removeButton: {
        marginLeft: 10,
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#ffffff',
    },
    noMealsText: {
        textAlign: 'center',
        marginTop: 10,
    },
});
