import {Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";

import { React, useState } from "react";
import CustomButtonRow from "../components/CustomButtonRow";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchPage ({ navigation }) {
    const [text, setText] = useState('');
    const [searched, setSearched] = useState(false);
    const [popularModalVisible, setPopularModalVisible] = useState(false);
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [ingredientsModalVisible, setIngredientsModalVisible] = useState(false);
    const [ingredients1ModalVisible, setIngredients1ModalVisible] = useState(false);
    const [ingredients3ModalVisible, setIngredients3ModalVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState(null);
    const handleApplyFilter = (filterName) => {
        setActiveFilter(filterName);
    };
    const [ratingOneModalVisible, setRatingOneModalVisible] = useState(false);
    const [ratingTwoModalVisible, setRatingTwoModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [starOneRating, setStarOneRating] = useState(0);
    const [starTwoRating, setStarTwoRating] = useState(0);

    const RecipeCard = ({ navigation, navigateTo, imageSource, title, rating, time, difficulty, color }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={[cardStyles.card, cardStyles.cardElevated]}>
        <View style={{ flex: 1 }}>
          <Image
            source={imageSource}
            style={{ resizeMode: 'cover', width: 182.5, height: 157.5, marginTop: -1, marginLeft: 0.5, borderRadius: 20 }}
          />
          <Text style={cardStyles.itemText}>{title}</Text>
          <View style={cardStyles.iconButtonRow}>
            <View style={[cardStyles.iconContainer, { width: '25%' }]} >
              <Icon name="star" size={25} color="#FFEA00" />
              <Text style={cardStyles.customButtonText}>{rating}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '35%' }]} >
              <Icon name="timer-outline" size={25} color="black" style={{ top: 1.5, marginRight: 4}} />
              <Text style={cardStyles.customButtonText}>{time}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '30%' }]} >
              <MaterialIcon name="gauge-low" size={25} color={color}/>
              <Text style={cardStyles.customButtonText}>{difficulty}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
        );
    };

    return (
            <View style={styles.container}>
                
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
                <CustomButtonRow
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
                    onApplyFilter={handleApplyFilter}
                    activeFilter={activeFilter}
                />
                
                <View style={{width: '100%', paddingHorizontal: 8}}>
                    {(text === "bread" || text === "Bread") && searched === true && selectedOption !== 'Today' ?
                            <>
                                <Text style={cardStyles.headingText}>Results</Text>
                                <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                                    <View style={cardStyles.container}>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'}color={'green'}/>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread" rating={3.9} time={'1 hour'} difficulty={'Med'}color={'blue'}/>
                                        <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'}color={'red'}/>
                                    </View>
                                </ScrollView>
                            </>
                    : <>
                    {(text === "bread" || text === "Bread") && searched === true && selectedOption === 'Today' ?
                    <>
                        <Text style={cardStyles.headingText}>Results</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={cardStyles.scrollContainer}>
                            <View style={cardStyles.container}>
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'}color={'red'}/>
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'}color={'green'}/>
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread" rating={3.9} time={'1 hour'} difficulty={'Med'}color={'blue'}/>
                                
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
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cupcake1.jpeg')} title="Gala Cupcakes" rating={4.2} time={'30 min'} difficulty={'Easy'} color={'green'}/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cookie1.jpeg')} title="Chunky Cookies" rating={4.4} time={'30 min'} difficulty={'Easy'}color={'green'}/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'}color={'green'}/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread"  rating={3.9} time={'1 hour'} difficulty={'Med'}color={'blue'}/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'}color={'red'}/>
                                            <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/macaroons1.jpeg')} title="Monster Macaron" rating={3.8} time={'1.5 Hours'} difficulty={'Hard'}color={'red'} />
                                        </View>
                                    </ScrollView>
                                </>
                            }
                        </>
                    }</>}
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

    itemText: {
        marginTop: 7.5,
        fontSize: 15,
        fontFamily: 'serif',
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    container: {
        padding: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
    },
    
    scrollContainer: {
        height: '75%',
    },

    card: {
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 187.5,
        height: 225,
    },

    cardElevated: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#E0E0E0',
        borderWidth: 2,
    },


    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 10,
        padding: 7,
        marginVertical:0,
        alignItems: 'center',
        borderRadius: 15,
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 10.5,
        marginLeft: 10,
        fontFamily: 'serif',
    },

    iconButtonRow: {
        marginTop: -5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
        marginLeft: 2,
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
        backgroundColor: '#3B71F3',
        borderRadius: 10
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
        borderRadius: 10,
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