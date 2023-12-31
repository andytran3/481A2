import {Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { React } from "react";

import CustomModal from "../components/CustomModals";
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomButtonRow ({ 
    popularModalVisible,
    setPopularModalVisible,
    ratingOneModalVisible,
    setRatingOneModalVisible,
    ratingTwoModalVisible,
    setRatingTwoModalVisible,
    selectedOption,
    setSelectedOption,
    starOneRating,
    setStarOneRating,
    starTwoRating,
    setStarTwoRating,
    timeModalVisible,
    setTimeModalVisible,
    setIngredientsModalVisible,
    ingredientsModalVisible,
    setIngredients3ModalVisible,
    ingredients3ModalVisible,
    setIngredients1ModalVisible,
    ingredients1ModalVisible,
    activeFilter,
    onApplyFilter,
 }) {
    const buttonStyle = (filterName) => (
        activeFilter === filterName ? styles.activeButton : styles.rowButtonContainer
    );

    return (
            <View style={styles.container}>
                <CustomModal
                    popularModalVisible={popularModalVisible}
                    setPopularModalVisible={setPopularModalVisible}
                    ratingOneModalVisible={ratingOneModalVisible}
                    setRatingOneModalVisible={setRatingOneModalVisible}
                    ratingTwoModalVisible={ratingTwoModalVisible}
                    setRatingTwoModalVisible={setRatingTwoModalVisible}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    starOneRating={starOneRating}
                    setStarOneRating={setStarOneRating}
                    starTwoRating={starTwoRating}
                    setStarTwoRating={setStarTwoRating}
                    timeModalVisible={timeModalVisible}
                    setTimeModalVisible={setTimeModalVisible}
                    setIngredientsModalVisible={setIngredientsModalVisible}
                    ingredientsModalVisible={ingredientsModalVisible}
                    setIngredients3ModalVisible={setIngredients3ModalVisible}
                    ingredients3ModalVisible={ingredients3ModalVisible}
                    setIngredients1ModalVisible={setIngredients1ModalVisible}
                    ingredients1ModalVisible={ingredients1ModalVisible}
                />
                <View style={styles.buttonRow}>
                    <View style={styles.filterContainer}>
                        <Icon name="filter" size={20} color="black" />
                    </View>
                    
                    <TouchableOpacity
                    onPress={() => {
                        setPopularModalVisible(true);
                        onApplyFilter('Popular');
                    }}
                    style={buttonStyle('Popular')}>
                    <Text style={styles.customButtonText}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        setTimeModalVisible(true);
                        onApplyFilter('Time');
                    }} 
                    style={buttonStyle('Time')}>
                    <Text style={styles.customButtonText}>Time</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        setIngredientsModalVisible(true);
                        onApplyFilter('Ingredients');
                    }}
                    style={buttonStyle('Ingredients')}>
                    <Text style={styles.customButtonText}>Ingredients</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        setRatingOneModalVisible(true);
                        onApplyFilter('Ratings');
                    }}
                    style={buttonStyle('Ratings')}>
                    <Text style={styles.customButtonText}>Ratings</Text>
                </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    activeButton: {
        width: '22.5%',
        padding: 5,
        marginVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#4CAF50',  
        borderRadius: 50,
        borderColor: '#2E7D32', 
        borderWidth: 1,
    },


    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    customButtonContainer: {
        width: '19%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3'
    },

    rowButtonContainer: {
        width: '22.5%',
        padding: 5,
        marginVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#708090',
        borderWidth: 1,

    },

    filterContainer: {
        width: '5%',
        alignItems: 'center',
        alignSelf: 'center',
    },

    customButtonText: {
        color: 'black',
    },

    inputContainer: {
        backgroundColor: 'white',
        width: '79%',
        borderRadius: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
        alignSelf: 'center',
        height: 40
      },

      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
      },

      buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
      },
  });