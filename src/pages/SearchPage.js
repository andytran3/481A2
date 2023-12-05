import {Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";

import { React, useState } from "react";
import CustomModal from "../components/CustomModals";

export default function SearchPage ({ navigation }) {
    const [text, setText] = useState('');
    const [searched, setSearched] = useState(false);
    const [popularModalVisible, setPopularModalVisible] = useState(false);
    //const [timeModalVisible, setTimeModalVisible] = useState(false);
    //const [ingredientsModalVisible, setIngredientModalVisible] = useState(false);
    const [ratingOneModalVisible, setRatingOneModalVisible] = useState(false);
    const [ratingTwoModalVisible, setRatingTwoModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [starOneRating, setStarOneRating] = useState(0);
    const [starTwoRating, setStarTwoRating] = useState(0);

    const RecipeCard = ({ navigation, navigateTo, imageSource, title }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={[cardStyles.card, cardStyles.cardElevated]}>
                    <View style={cardStyles.backgroundImage}>
                        <Image
                            source={imageSource}
                            style={{resizeMode: 'cover', width: 187, height: 200}}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={cardStyles.itemText}>{title}</Text>
            </View>
        );
    };

    

    return (
            <View style={styles.container}>
                <Text style={{alignSelf: 'center',
                    fontSize: 25,
                    fontWeight: 'bold',
                    fontFamily: 'serif',
                    alignSelf: 'center'}}>
                    What are you Cooking Today?
                </Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Search"
                        onChangeText={(text) => {setText(text); setSearched(false)}}
                        value={text}
                    />
                    <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} onPress={() => setSearched(true)}>
                        <Text style={[styles.customButtonText, {color: 'white'}]}>Search</Text>
                    </TouchableOpacity>
                </View>
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

                />
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        onPress={() => setPopularModalVisible(true)} 
                        underlayColor={'#3b50f3'}
                        style={styles.rowButtonContainer} >
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
                    <TouchableOpacity 
                        onPress={() => setRatingOneModalVisible(true)}
                        underlayColor={'#3b50f3'} style={styles.rowButtonContainer} >
                        <Text style={styles.customButtonText}>Ratings</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{width: '100%', paddingHorizontal: 8}}>
                    {(text === "bread" || text === "Bread") && searched === true ?
                            <>
                                <Text style={cardStyles.headingText}>Results</Text>
                                <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                                    <View style={cardStyles.container}>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread"/>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread"/>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread"/>
                                    </View>
                                </ScrollView>
                            </>
                    : 
                        <> 
                            {text != "bread" && text != "Bread" && text != '' && searched === true ?
                                <>
                                    <Text style={cardStyles.headingText}>Results</Text>
                                    <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                                        <View style={cardStyles.container}>
                                            <Text style={[cardStyles.headingText, {alignSelf: 'center'}]}>No Results</Text>
                                        </View>
                                    </ScrollView>
                                </>
                            :
                                <> 
                                    <Text style={cardStyles.headingText}>Recent Searches</Text>
                                    <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                                        <View style={cardStyles.container}>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cupcake1.jpeg')} title="Gala Cupcake"/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cookie1.jpeg')} title="Chuncky Cookies"/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread"/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread"/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread"/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread"/>
                                        </View>
                                    </ScrollView>
                                </>
                            }
                        </>
                    }
                </View>
            </View>
    );
}

const cardStyles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        fontFamily: 'serif',
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
        padding: 5,
        marginVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#708090',
        borderWidth: 1,

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