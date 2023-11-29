import {Text, TextInput, View, StyleSheet, TouchableHighlight, ScrollView} from "react-native";

import React from "react";

export default function SavedRecipesPage () {
    const [text, onChangeText] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <ScrollView style={cardStyles.container}>
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
            </View>
        </ScrollView>
        
    );
}

const cardStyles = StyleSheet.create({
    container: {
        // padding: 8,
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 400,
        margin: 6
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
  });