import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet, TouchableHighlight, ScrollView, Alert} from "react-native";
import Slider from '@react-native-community/slider';

export default function HomePage () {
    const [text, onChangeText] = React.useState('');
    const [timeValue, setTimeValue] = useState(0);
    const [ingredientsValue, setIngredientsValue] = useState(1);
    const [ratingValue, setRatingValue] = useState(1);

    const handleButtonPress = (buttonName) => {
        switch(buttonName) {
            case 'Popular':
                Alert.alert(
                    "Sort by",
                    "Choose an option",
                    [
                        { text: "Most Popular", onPress: () => console.log("Most Popular selected") },
                        { text: "Least Popular", onPress: () => console.log("Least Popular selected") }
                    ]
                );
                break;
            case 'Time':
                Alert.alert(
                    "Choose Time",
                    <Slider
                        maximumValue={5}
                        minimumValue={0}
                        step={0.5}
                        value={timeValue}
                        onValueChange={(value) => setTimeValue(value)}
                    />
                );
                break;
            case 'Ingredients':
                Alert.alert(
                    "Choose Ingredients",
                    <Slider
                        maximumValue={20}
                        minimumValue={1}
                        step={1}
                        value={ingredientsValue}
                        onValueChange={(value) => setIngredientsValue(value)}
                    />
                );
                break;
            case 'Ratings':
                Alert.alert(
                    "Choose Ratings",
                    <Slider
                        maximumValue={5}
                        minimumValue={1}
                        step={1}
                        value={ratingValue}
                        onValueChange={(value) => setRatingValue(value)}
                    />
                );
                break;
            default:
                break;
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>
                    Hello Haroon!
                </Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Search"
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                        <Text style={styles.customButtonText}>Search</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} onPress={() => handleButtonPress('Popular')}>
                        <Text style={styles.customButtonText}>Popular</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} onPress={() => handleButtonPress('Time')}>
                        <Text style={styles.customButtonText}>Time</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} onPress={() => handleButtonPress('Ingredients')}>
                        <Text style={styles.customButtonText}>Ingredients</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} onPress={() => handleButtonPress('Ratings')}>
                        <Text style={styles.customButtonText}>Ratings</Text>
                    </TouchableHighlight>
                </View>

                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>Recommended</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>New Recipes</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                        <View style={[cardStyles.card, cardStyles.cardElevated]}>
                            <Text>Press Here</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}



const cardStyles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },

    container: {
        padding: 8,
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 300,
        margin: 8
    },

    cardElevated: {
        backgroundColor: 'green',
    },


})

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
        width: '24%',
        padding: 9,
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3'
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'white'
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