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
    ingredientsModalVisible,
    setIngredientsModalVisible,
    ingredients3ModalVisible,
    setIngredients3ModalVisible,
 }) {
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
                    ingredientsModalVisible={ingredientsModalVisible}
                    setIngredientsModalVisible={setIngredientsModalVisible}
                    ingredients3ModalVisible={ingredients3ModalVisible}
                    setIngredients3ModalVisible={setIngredients3ModalVisible}
                />
                <View style={styles.buttonRow}>
                    <View style={styles.filterContainer}>
                        <Icon name="filter" size={20} color="black" />
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => setPopularModalVisible(true)} 
                        underlayColor={'#3b50f3'}
                        style={styles.rowButtonContainer} >
                        <View>
                            <Text style={styles.customButtonText}>Popular</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setTimeModalVisible(true)} 
                    underlayColor={'#3b50f3'} 
                    style={styles.rowButtonContainer}>
                        <Text style={styles.customButtonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setIngredientsModalVisible(true)}
                    underlayColor={'#3b50f3'} 
                    style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setRatingOneModalVisible(true)}
                    underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ratings</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
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