import {Text, View, StyleSheet, TouchableHighlight, ScrollView} from "react-native";

import StarRating from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/Ionicons';

import {React, useState} from "react";


export default function HomePage () {
    const [rating, setRating] = useState(0);
    const [heartPressed, setHeartPressed] = useState(false);

    const _handleHeartPressed = async () => {
        console.log('Heart Button Pressed');
    }
    
    return (
        <View style={{width: '100%', paddingHorizontal: 8}}>
            <ScrollView>
                <View style={[cardStyles.card, cardStyles.cardElevated]}>
                    <Text>Image</Text>
                </View>
                <Text>Name Of Recipe</Text>
                <View style={cardStyles.underName}>
                    <StarRating
                        style={{width: '60%'}}
                        rating={rating}
                        onChange={setRating}
                    />

                    <TouchableHighlight underlayColor={'#f3f3f3'} onPress={() => {setHeartPressed(heartPressed => !heartPressed)}}>
                        <View>
                            {heartPressed === true ? <Icon name="heart" size={30} color="#4F8EF7" /> : <Icon name="heart-outline" size={30} color="#4F8EF7"/>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonRow}>
                    <View underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>30 Min</Text>
                    </View>
                    <View underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Something</Text>
                    </View>
                    <View underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Something</Text>
                    </View>
                </View>
                <View style={cardStyles.descriptionBox}>
                    <Text>Desription</Text>
                </View>
                
                <View style={cardStyles.ingredientsBox}>
                    <Text>Ingredients</Text>
                </View>
                <View style={cardStyles.instructionsBox}>
                    <Text>Instructions</Text>
                </View>
            </ScrollView>
            
        </View>
        
    );
}

const cardStyles = StyleSheet.create({
    underName: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // width: '70%'
    },

    button: {
        width: '25%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        // alignSelf: 'center',
        backgroundColor: '#3B71F3'
    },

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
    },

    cardElevated: {
        backgroundColor: 'green',
    },

    descriptionBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 200,
        borderWidth: 1,
        margin: 8
    },

    ingredientsBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 500,
        borderWidth: 1,
        margin: 8
    },

    instructionsBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 500,
        borderWidth: 1,
    }
});

const styles = StyleSheet.create({
    rowButtonContainer: {
        width: '33%',
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

      buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
      },
  });