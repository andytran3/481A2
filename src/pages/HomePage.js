import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomModal from "../components/CustomModals";

const RecipeCard = ({ navigation, navigateTo, imageSource, title, rating, time, difficulty }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(navigateTo)} style={[cardStyles.card, cardStyles.cardElevated]}>
        <View style={{ flex: 1 }}>
          <Image
            source={imageSource}
            style={{ resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20 }}
          />
          <Text style={cardStyles.itemText}>{title}</Text>
          <View style={cardStyles.iconButtonRow}>
            <View style={[cardStyles.iconContainer, { width: '25%' }]} >
              <Icon name="star" size={25} color="#FFEA00" />
              <Text style={cardStyles.customButtonText}>{rating}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '35%' }]} >
              <Icon name="timer-outline" size={25} color="black" style={{ top: 1.5 }} />
              <Text style={cardStyles.customButtonText}>{time}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '30%' }]} >
              <MaterialIcon name="gauge-low" size={25} color="green" />
              <Text style={cardStyles.customButtonText}>{difficulty}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
};

export default function HomePage ({ navigation }) {
    const [popularModalVisible, setPopularModalVisible] = useState(false);
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [ingredientsModalVisible, setIngredientsModalVisible] = useState(false);
    const [ingredients3ModalVisible, setIngredients3ModalVisible] = useState(false);
    const [ratingOneModalVisible, setRatingOneModalVisible] = useState(false);
    const [ratingTwoModalVisible, setRatingTwoModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [starOneRating, setStarOneRating] = useState(0);
    const [starTwoRating, setStarTwoRating] = useState(0);

    return (
        <ScrollView>
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

                <View style={{ width: '100%', paddingHorizontal: 8 }}>
                    <Text style={cardStyles.headingText}>Recommended</Text>
                        {selectedOption === 'Highest to Lowest Rated' ?
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'} />
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cookie1.jpeg')} title="Chunky Cookies" rating={4.4} time={'30 min'} difficulty={'Easy'} />
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cupcake1.jpeg')} title="Gala Cupcakes" rating={4.2} time={'30 min'} difficulty={'Easy'} />
                                <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread" rating={3.9} time={'1 hour'} difficulty={'Med'} />
                            </ScrollView>
                            : <>
                            {selectedOption === 'Lowest to Highest Rated' ?
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread" rating={3.9} time={'1 hour'} difficulty={'Med'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cupcake1.jpeg')} title="Gala Cupcakes" rating={4.2} time={'30 min'} difficulty={'Easy'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cookie1.jpeg')} title="Chunky Cookies" rating={4.4} time={'30 min'} difficulty={'Easy'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'} />
                                </ScrollView>
                                :
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/bread2.png')} title="English White Bread" rating={4.6} time={'30 min'} difficulty={'Easy'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe2'} imageSource={require('../res/bread1.jpg')} title="Canadian White Bread" rating={3.9} time={'1 hour'} difficulty={'Med'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe3'} imageSource={require('../res/bread3.jpeg')} title="Italian Garlic Bread" rating={5} time={'2 hours'} difficulty={'Hard'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cupcake1.jpeg')} title="Gala Cupcakes" rating={4.2} time={'30 min'} difficulty={'Easy'} />
                                    <RecipeCard navigation={navigation} navigateTo={'TestRecipe'} imageSource={require('../res/cookie1.jpeg')} title="Chunky Cookies" rating={4.4} time={'30 min'} difficulty={'Easy'} />
                                </ScrollView>
                            }</>
                        }
                        
                </View>

                <View style={{ width: '100%', paddingHorizontal: 8 }}>
                    <Text style={cardStyles.headingText}>New Recipes</Text>
                    {selectedOption === 'Highest to Lowest Rated' ?
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                            <RecipeCard navigation={navigation} imageSource={require('../res/tart1.jpeg')} title="Mixed Berry Tart" rating={5} time={'30 min'} difficulty={'Hard'} />
                            <RecipeCard navigation={navigation} imageSource={require('../res/donuts1.jpeg')} title="Glazed Donuts" rating={4.2} time={'2 Hours'} difficulty={'Hard'} />
                            <RecipeCard navigation={navigation} imageSource={require('../res/donuts2.jpeg')} title="Sprinkled Mini Donut" rating={4} time={'4 Hours'} difficulty={'Hard'} />
                            <RecipeCard navigation={navigation} imageSource={require('../res/macaroons1.jpeg')} title="Monster Macaroon" rating={3.8} time={'1.5 Hours'} difficulty={'Hard'} />
                            <RecipeCard navigation={navigation} imageSource={require('../res/macaroons2.jpeg')} title="Simple Macaroons" rating={3.5} time={'1 Hour'} difficulty={'Hard'} />
                        </ScrollView>
                        : <>
                        {selectedOption === 'Lowest to Highest Rated' ?
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                                <RecipeCard navigation={navigation} imageSource={require('../res/macaroons2.jpeg')} title="Simple Macaroons" rating={3.5} time={'1 Hour'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/macaroons1.jpeg')} title="Monster Macaroon" rating={3.8} time={'1.5 Hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/donuts2.jpeg')} title="Sprinkled Mini Donut" rating={4} time={'4 Hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/donuts1.jpeg')} title="Glazed Donuts" rating={4.2} time={'2 Hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/tart1.jpeg')} title="Mixed Berry Tart" rating={5} time={'30 min'} difficulty={'Hard'} />
                            </ScrollView>
                            :
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                                <RecipeCard navigation={navigation} imageSource={require('../res/donuts1.jpeg')} title="Glazed Donuts" rating={4.2} time={'2 Hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/macaroons2.jpeg')} title="Simple Macaroons" rating={3.5} time={'1 Hour'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/macaroons1.jpeg')} title="Monster Macaroon" rating={3.8} time={'1.5 Hours'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/tart1.jpeg')} title="Mixed Berry Tart" rating={5} time={'30 min'} difficulty={'Hard'} />
                                <RecipeCard navigation={navigation} imageSource={require('../res/donuts2.jpeg')} title="Sprinkled Mini Donut" rating={4} time={'4 Hours'} difficulty={'Hard'} />
                            </ScrollView>
                        }</>
                    }
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
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'serif',
        alignSelf: 'center',
        fontWeight: 'bold'
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
        borderRadius: 20,
        borderColor: '#E0E0E0',
        borderWidth: 2,
        
    },

    backgroundImage: {
        width: '100%',
        height: 'auto',
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 10,
        padding: 7,
        marginVertical: 5,
        alignItems: 'center',

        borderRadius: 15,
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        marginLeft: 10,
        fontFamily: 'serif',
    },

    iconButtonRow: {
        marginTop: -5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center'
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