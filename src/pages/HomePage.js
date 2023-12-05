import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, Modal } from "react-native";
import { React, useState }  from "react";

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from 'react-native-star-rating-widget';

const RadioButton = ({ label, selected, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        <View style={styles.radioCircle}>
          {selected && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.radioText}>{label}</Text>
      </TouchableOpacity>
    );
};

export default function HomePage ({ navigation }) {
    const [popularModalVisible, setPopularModalVisible] = useState(false);
    //const [timeModalVisible, setTimeModalVisible] = useState(false);
    //const [ingredientsModalVisible, setIngredientModalVisible] = useState(false);
    const [ratingOneModalVisible, setRatingOneModalVisible] = useState(false);
    const [ratingTwoModalVisible, setRatingTwoModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [starOneRating, setStarOneRating] = useState(0);
    const [starTwoRating, setStarTwoRating] = useState(0);
    const [editPressed, setEditPressed] = useState(false);

    const handleStarOneChange = (rating) => {
        // Ensure that starOneRating is not less than starTwoRating
        if (rating >= starTwoRating) {
            setStarOneRating(starTwoRating);
        } else {
            setStarOneRating(rating);
        }
      };
  
    const handleStarTwoChange = (rating) => {
        // Ensure that starTwoRating is not less than starOneRating
        if (rating <= starOneRating) {
            setStarTwoRating(starOneRating);
        } else {
            setStarTwoRating(rating);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={popularModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setPopularModalVisible(!popularModalVisible);
                }}>
                <View style={styles.popularContainer}>
                    <View style={styles.popularContent}>
                      <Text style={styles.modalTitle}>Sort Popularity By:</Text>
                          <RadioButton
                            label="Today"
                            selected={selectedOption === 'Today'}
                            onPress={() => setSelectedOption('Today')}
                          />
                          <RadioButton
                            label="Past Week"
                            selected={selectedOption === 'Past Week'}
                            onPress={() => setSelectedOption('Past Week')}
                          />
                          <RadioButton
                            label="Past Month"
                            selected={selectedOption === 'Past Month'}
                            onPress={() => setSelectedOption('Past Month')}
                          />
                          <RadioButton
                            label="Past Year"
                            selected={selectedOption === 'Past Year'}
                            onPress={() => setSelectedOption('Past Year')}
                          />
                          <RadioButton
                            label="All Time"
                            selected={selectedOption === 'All Time'}
                            onPress={() => setSelectedOption('All Time')}
                          />
                          <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyButtonText} onPress={() => setPopularModalVisible(!popularModalVisible)}>
                                Apply</Text>
                          </TouchableOpacity>
                          
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ratingOneModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setRatingOneModalVisible(!ratingOneModalVisible);}}>

                <View style={styles.popularContainer}>
                    <View style={styles.ratingContent}>
                    <TouchableOpacity style={styles.applyButton}>
                                    <Text style={styles.applyButtonText} onPress={() => setRatingOneModalVisible(!ratingOneModalVisible)}>
                                        Highest to Lowest Rated
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyButton}>
                                    <Text style={styles.applyButtonText} onPress={() => setRatingOneModalVisible(!ratingOneModalVisible)}>
                                        Lowest to Highest Rated
                                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyButton}>
                                    <Text style={styles.applyButtonText} onPress={() => {setRatingTwoModalVisible(!ratingTwoModalVisible); setRatingOneModalVisible(!ratingOneModalVisible);}}>
                                        Set Range
                                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>  
            <Modal
                animationType="slide"
                transparent={true}
                visible={ratingTwoModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setRatingTwoModalVisible(!ratingTwoModalVisible);
                }}>

                <View style={styles.popularContainer}>
                    <View style={styles.ratingContent}>
                    <Text style ={styles.modalTitle}> Sort Rating By Range From</Text>
                    <StarRating

                    rating={starOneRating}
                    onChange={handleStarOneChange}
                    />
                <Text style ={styles.modalTitle}> To </Text>
                <StarRating
                    rating={starTwoRating}
                    onChange={handleStarTwoChange}
                    />

                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setRatingTwoModalVisible(!ratingTwoModalVisible)}>
                                    Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setRatingTwoModalVisible(!ratingTwoModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe3')} style={[cardStyles.card, cardStyles.cardElevated]}>
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

      popularContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
      },

      popularContent: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        width: '100%',
        height: '50%',
        backgroundColor: 'grey'
      },

      ratingContent: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        width: '100%',
        height: '50%',
        backgroundColor: 'grey',
        alignItems: 'center',

      },

      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },

      applyButton: {
        backgroundColor: '#3B71F3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
      },
      
      applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },

      // Add the RadioButton styles here
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },

      radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
      },

      selectedRb: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#3498db',
      },

      radioText: {
        marginLeft: 8,
        fontSize: 16,
      },
  });