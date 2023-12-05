import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomModal from "../components/CustomModals";

export default function HomePage ({ navigation }) {
    const [popularModalVisible, setPopularModalVisible] = useState(false);
    //const [timeModalVisible, setTimeModalVisible] = useState(false);
    //const [ingredientsModalVisible, setIngredientModalVisible] = useState(false);
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
                    <Text style={cardStyles.headingText}>Recommended</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/bread2.png')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                        <Text style={cardStyles.itemText}>English White Bread </Text>
                                            <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                             </View>
                                            </View>                               
                            </TouchableOpacity>                            
                        </View>


                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe2')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/bread1.jpg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft:2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Canadian White Bread</Text>
                                            <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>                                  
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe3')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/bread3.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Italian Garlic Bread</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                                
                            </TouchableOpacity>
            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/cupcake1.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Gala Cupcakes</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                            
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/cookie1.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Chunky Cookies</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>

                            </TouchableOpacity>
                            
                        </View>
                        
                    </ScrollView>
                </View>

                <View style={{width: '100%', paddingHorizontal: 8}}>
                    <Text style={cardStyles.headingText}>New Recipes</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/donuts1.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Glazed Donuts</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/macaroons2.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Simple Macaroons</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/macaroons1.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Monster Macaroon</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/tart1.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Mixed Berry Tart</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View style={{flex : 1}}>
                                    <Image
                                        source={require('../res/donuts2.jpeg')}
                                        style={{resizeMode: 'cover', width: 242, height: 210, marginTop: 2, marginLeft: 2, borderRadius: 20}}
                                    />
                                    <Text style={cardStyles.itemText}>Sprinkled Mini Donut</Text>
                                    <View style={cardStyles.iconButtonRow}>
                                                <View style={[cardStyles.iconContainer, {width: '25%'}]} >
                                                    <Icon name="star" size={25} color="#FFEA00" />
                                                    <Text style={cardStyles.customButtonText}>4.6</Text>
                                                </View>
                                                <View style={[cardStyles.iconContainer, {width: '35%'}]} >
                                                    <Icon name="timer-outline" size={25} color="black" style={{top: 1.5}} />
                                                    <Text style={cardStyles.customButtonText}>30 Min</Text>
                                                 </View>
                                                <View style={[cardStyles.iconContainer, {width: '30%'}]} >
                                                    <MaterialIcon name="gauge-low" size={25} color="green" />
                                                    <Text style={cardStyles.customButtonText}>Easy</Text>
                                                </View>
                                            </View>
                                </View>
                                
                            </TouchableOpacity>
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