import {Text, TextInput, View, StyleSheet, TouchableHighlight, ScrollView} from "react-native";

import React from "react";

export default function SearchPage () {
    const [text, onChangeText] = React.useState('');

    return (
            <View style={styles.container}>
                <Text>
                    What are you Cooking Today?
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
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Popular</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Time</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ingredients</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ratings</Text>
                    </TouchableHighlight>
                </View>
                
                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>Recent Searches</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                        <View style={cardStyles.container}>
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
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <Text>Press Here</Text>
                            </View>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <Text>Press Here</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
    );
}

const cardStyles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },

    container: {
        padding: 4,
        justifyContent: 'center',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    
    scrollContainer: {
        height: '75%',
    },

    card: {
        // flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        margin: 1
    },

    cardElevated: {
        backgroundColor: 'green',
        flexBasis: '49%',
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