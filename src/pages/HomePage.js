import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import React from "react";

export default function HomePage ({ navigation }) {

    return (
        <ScrollView>
            <View style={styles.container}>
                {/*<Text>
                    Hello Haroon!
                </Text>
                 <View style={styles.row}>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Search"
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                        <Text style={styles.customButtonText}>Search</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.buttonRow}>
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <View>
                            <Text style={styles.customButtonText}>Popular</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ratings</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>Recommended</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/bread2.png')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>English White Bread </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe2')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/bread1.jpg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Canadian White Bread</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/bread3.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Italian Garlic Bread</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/cupcake1.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Gala Cupcakes</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/cookie1.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Chuncky Cookies</Text>
                        </View>
                        
                    </ScrollView>
                </View>

                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>New Recipes</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/donuts1.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Professional Glazed Donut</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/macaroons2.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Simple Macaroons</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/macaroons1.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Cookie Monster Macaroon</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/tart1.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Mixed Berry Tart</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../res/donuts2.jpeg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Sprinkled Mini Donut</Text>
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
        paddingHorizontal: 8,
        fontFamily: 'serif',
    },

    itemText: {
        fontSize: 20,
        paddingHorizontal: 8,
        fontFamily: 'serif',
        alignSelf: 'center',
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
        backgroundColor: 'white',
    },

    backgroundImage: {
        width: '100%',
        height: 'auto',
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