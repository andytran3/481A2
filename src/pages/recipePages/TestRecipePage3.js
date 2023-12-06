import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";

import StarRating from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'expo-checkbox';

import { LinearGradient } from 'expo-linear-gradient';
import { React, useEffect, useState } from "react";


export default function HomePage ({ navigation }) {
    const [rating, setRating] = useState(0);
    const [heartPressed, setHeartPressed] = useState(false);
    const [editPressed, setEditPressed] = useState(false);
    const [unit, setUnit] = useState('imperial');
    const [pressed, setPressed] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])
    const [ingredients, setIngredients] = useState([
        { state: false, name: 'warm water', quantity: 480, unit: 'ml', imperialQuantity: 2, imperialUnit: 'cups' },
        { state: false, name: 'active dry yeast', quantity: 18.93, unit: 'g', imperialQuantity: 1, imperialUnit: 'tablespoons' },
        { state: false, name: 'honey or sugar', quantity: 85, unit: 'g', imperialQuantity: 0.25, imperialUnit: 'cups' },
        { state: false, name: 'salt', quantity: 12, unit: 'g', imperialQuantity: 2, imperialUnit: 'teaspoons' },
        { state: false, name: 'canola or vegetable oil', quantity: 30, unit: 'ml', imperialQuantity: 2, imperialUnit: 'tablespoons' },
        { state: false, name: 'flour', quantity: 480, unit: 'g', imperialQuantity: 4, imperialUnit: 'cups' },
    ]);
    const [changed, setChanged] = useState(false);

    const _handlePressCheckBox = (index) => {
        ingredients[index].state = !ingredients[index].state;
        setChanged(!changed);
        console.log('Checkbox Button Pressed' + `${index}` + '' + ingredients[0].state);
    }

    const _handlePressText = (index) => {
        pressed[index] = !pressed[index];
        setChanged(!changed);
        console.log('Text Pressed' + `${index}` + '' + pressed[index]);
    }
    
    const toggleUnit = () => {
        setUnit(unit === 'imperial' ? 'metric' : 'imperial');
    };

    useEffect(() => {

    }, [changed])
    
    return (
        <View style={{width: '100%'}}>
            <ScrollView>
                <View style={cardStyles.backgroundImage}>
                    <Image
                        source={require('../../res/bread3.jpeg')}
                        style={{resizeMode: 'cover', width: 450, height: 300}}
                    />
                </View>
                <View>
                    <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => {navigation.goBack()}}>
                        <View>
                            <Icon name="chevron-back-outline" size={25} color="#000000" style={styles.backButton} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => navigation.navigate('MyAccount')}>
                            <View style={{ position: 'absolute', paddingRight: 20, top: 35, alignItems: 'center', alignSelf: 'flex-end'}}>
                                <MaterialIcon name="account-circle" size={25} color="#000000" />
                                <Text style={{fontSize: 12.5}}>Account</Text>
                            </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.fancyBox}>
                    <Text style={textStyles.nameHeader}>Italian Garlic Bread</Text>
                    <View style={cardStyles.underName}>
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => {setEditPressed(editPressed => !editPressed), navigation.navigate('TestEditRecipe')}}>
                            <View>
                                {editPressed === true ? <MaterialIcon name="clipboard-edit" size={30} color="#4F8EF7" /> : <MaterialIcon name="clipboard-edit-outline" size={30} color="#4F8EF7"/>}
                            </View>
                        </TouchableOpacity>

                        <StarRating
                            rating={rating}
                            onChange={setRating}
                        />

                        <TouchableOpacity underlayColor={'#ff85fb'} onPress={() => {setHeartPressed(heartPressed => !heartPressed)}}>
                            <View>
                                {heartPressed === true ? <Icon name="heart" size={30} color="#ff85fb" /> : <Icon name="heart-outline" size={30} color="#ff85fb"/>}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <View style={[styles.rowButtonContainer, {width: '35%'}]} >
                            <Icon name="timer-outline" size={25} color="#ffffff" style={{top: 1.5}} />
                            <Text style={styles.customButtonText}>2 Hours</Text>
                        </View>
                        <View style={[styles.rowButtonContainer, {width: '25%'}]} >
                            <Icon name="star-outline" size={25} color="#ffffff" />
                            <Text style={styles.customButtonText}>4.5</Text>
                        </View>
                        <View style={[styles.rowButtonContainer, {width: '30%', backgroundColor: 'red'}]} >
                            <MaterialIcon name="gauge-low" size={25} color="#ffffff" />
                            <Text style={styles.customButtonText}>Hard</Text>
                        </View>
                    </View>
                    <View style={cardStyles.descriptionBox}>
                        <Text style={textStyles.header}>Description</Text>
                        <Text style={textStyles.paragraphs}>This simple white bread is perfect for both the bread novice and pro baker. It's tender, delicious, and SO easy!</Text>
                    </View>
                    
                    <View style={cardStyles.ingredientsBox}>
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={textStyles.header}>Ingredients</Text>
                            <TouchableOpacity onPress={toggleUnit} style={{alignSelf: 'center', backgroundColor: '#3B71F3', margin: 5, padding: 5, width: 'auto', height: 'auto'}}>
                                <View>
                                    <Text style={{color: 'white', fontWeight: 'bold'}}>{`Switch to ${unit === 'imperial' ? 'Metric' : 'Imperial'}`}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {ingredients.map((ingredient, index) => (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 5 }}>
                                <CheckBox
                                    disabled={false}
                                    value={ingredient.state}
                                    onValueChange={() => _handlePressCheckBox(index)}
                                />
                                <Text>{ingredient.name}</Text>
                                <Text>
                                    {unit === 'imperial' ? `${ingredient.imperialQuantity} ${ingredient.imperialUnit}` : `${ingredient.quantity} ${ingredient.unit}`}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={cardStyles.instructionsBox}>
                        <Text style={textStyles.header}>Instructions</Text>
                        <Text onPress={() => _handlePressText(0)} style={[textStyles.paragraphs, pressed[0] === true ? {textDecorationLine: 'line-through'} : {}]}>1. Proof the yeast: In a large bowl or stand mixer add the yeast, water and a pinch of the sugar or honey. Allow to rest for 5-10 minutes until foaming and bubbly. (This is called “proofing” the yeast, to make sure it is active. If it doesn’t foam, the yeast is no good, and you need to start over with fresh yeast).</Text>
                        <Text onPress={() => _handlePressText(1)} style={[textStyles.paragraphs, pressed[1] === true ? {textDecorationLine: 'line-through'} : {}]}>2. Prepare the dough: Add remaining sugar or honey, salt, oil, and 3 cups of flour. Mix to combine. Add another cup of flour and mix to combine. With the mixer running add more flour, ½ cup at a time, until the dough begins to pull away from the sides of the bowl.</Text>
                        <Text onPress={() => _handlePressText(2)} style={[textStyles.paragraphs, pressed[2] === true ? {textDecorationLine: 'line-through'} : {}]}>3. Knead the dough: Mix the dough for 5 minutes on medium speed (or knead with your hands on a lightly floured surface, for 5-8 minutes). The dough should be smooth and elastic, and slightly stick to a clean finger, but not be overly sticky.</Text>
                        <Text onPress={() => _handlePressText(3)} style={[textStyles.paragraphs, pressed[3] === true ? {textDecorationLine: 'line-through'} : {}]}>4. First Rise: Grease a large bowl with oil or cooking spray and place the dough inside. Cover with a dish towel or plastic wrap and allow to rise in a warm place* until doubled in size (about 1 ½ hours).</Text>
                        <Text onPress={() => _handlePressText(4)} style={[textStyles.paragraphs, pressed[4] === true ? {textDecorationLine: 'line-through'} : {}]}>5. Punch the dough down really well to remove air bubbles.</Text>
                        <Text onPress={() => _handlePressText(5)} style={[textStyles.paragraphs, pressed[5] === true ? {textDecorationLine: 'line-through'} : {}]}>6. Divide into two equal portions. Shape each ball into long logs and place into greased loaf pans.</Text>
                        <Text onPress={() => _handlePressText(6)} style={[textStyles.paragraphs, pressed[6] === true ? {textDecorationLine: 'line-through'} : {}]}>7. Second rise: Spray two pieces of plastic wrap with cooking spray and lay them gently over the pans. Allow dough to rise again for about 45 minutes to one hour, or until risen 1 inch above the loaf pans.</Text>
                        <Text onPress={() => _handlePressText(7)} style={[textStyles.paragraphs, pressed[7] === true ? {textDecorationLine: 'line-through'} : {}]}>8. Bake: Adjust oven racks to lower/middle position. Preheat the oven to 350 F. Bake bread for about 30-33 minutes, or until golden brown on top. Give the top of a loaf a gentle tap; it should sound hollow.</Text>
                    </View>
                </View>

                <View style={{backgroundColor: '#b3f5ff'}}>
                    <LinearGradient colors={['#ffffff', '#d6faff', '#b0f4ff']} style={styles.linearGradient}>
                        <Text style={textStyles.header}>Fans Of This Recipe Also Liked:</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={cardStyles.container}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.scrollCard, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../../res/bread2.png')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>English White Bread</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe2')} style={[cardStyles.scrollCard, cardStyles.cardElevated]}>
                                <View style={cardStyles.backgroundImage}>
                                    <Image
                                        source={require('../../res/bread1.jpg')}
                                        style={{resizeMode: 'cover', width: 250, height: 300}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={cardStyles.itemText}>Canadian White Bread</Text>
                        </View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.scrollCard, cardStyles.cardElevated]}>
                                <Text>Press Here</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.scrollCard, cardStyles.cardElevated]}>
                                <Text>Press Here</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.scrollCard, cardStyles.cardElevated]}>
                                <Text>Press Here</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </LinearGradient>
                </View>
                
            </ScrollView>
            
            
        </View>
        
    );
}

const cardStyles = StyleSheet.create({
    itemText: {
        fontSize: 20,
        paddingHorizontal: 8,
        fontFamily: 'serif',
        alignSelf: 'center',
    },
    
    underName: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 8,
    },

    backgroundImage: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
    },

    button: {
        width: '25%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#3B71F3'
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
    },

    scrollCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 300,
        marginRight: 8,
        marginBottom: 8
    },

    cardElevated: {
        backgroundColor: 'green',
    },

    textBox: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        height: 'auto',
        borderWidth: 1,
        margin: 8
    },
});

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

    backButton: {
        position: 'absolute',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
        opacity: 0.7,
        width: 27,
        height: 27,
        borderRadius: 27/2,
        top: 50,
        left: 30,
    },

    rowButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '37%',
        padding: 9,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#3B71F3'
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '90%',
        alignSelf: 'center'
    },

    fancyBox: {
        marginTop: '65%',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        
    },
  });

  const textStyles = StyleSheet.create({
    paragraphs: {
        paddingHorizontal: 10,
        marginBottom: 10,
        fontFamily: 'serif',
        lineHeight: 20,
        color: '#3d3d3d'
    },

    nameHeader: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'serif',
        padding: 10,
    },
  });