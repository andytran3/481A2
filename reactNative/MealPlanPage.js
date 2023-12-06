import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function MealPlanPage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scheduledMeals, setScheduledMeals] = useState({}); // Store scheduled meals for each date

    const placeholderRecipes = [
        { id: '1', title: 'English White Bread' },
        { id: '2', title: 'Canadian White Bread' },
        { id: '3', title: 'Italian Garlic Bread' },
        // Add more recipes as needed
    ];

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const scheduleRecipe = (recipe) => {
        const updatedMeals = scheduledMeals[selectedDate] ? [...scheduledMeals[selectedDate], recipe] : [recipe];
        setScheduledMeals({ ...scheduledMeals, [selectedDate]: updatedMeals });
        setModalVisible(false); // Close the modal after selecting a recipe
    };

    const renderRecipeItem = ({ item }) => (
        <View style={styles.recipeItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => scheduleRecipe(item)}>
                <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
        </View>
    );

    const renderScheduledMeals = () => {
        const meals = scheduledMeals[selectedDate] || [];
        return meals.map(meal => (
            <View key={meal.id} style={styles.mealItemContainer}>
                <Text style={styles.mealItem}>{meal.title}</Text>
                {/* Add more details or remove button if needed */}
            </View>
        ));
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

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.addButtonText}>Add Recipe</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.searchBar}
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        placeholder="Search Recipes"
                    />
                    <FlatList
                        data={placeholderRecipes.filter(recipe =>
                            recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
                        )}
                        renderItem={renderRecipeItem}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.scheduledMealsContainer}>
                <Text style={styles.subHeader}>Scheduled Meals for {selectedDate}</Text>
                {renderScheduledMeals()}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // ... existing styles ...
    selectButton: {
        padding: 5,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginLeft: 10,
    },
    selectButtonText: {
        color: '#fff',
    },
    scheduledMealsContainer: {
        marginTop: 20,
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


    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    searchBar: {
        marginBottom: 20,
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    recipeItem: {
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10,
    },
    closeButtonText: {
        color: 'white',
    },


    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },


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