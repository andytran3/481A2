import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput} from "react-native";

import StarRating from 'react-native-star-rating-widget';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LinearGradient } from 'expo-linear-gradient';
import { React, useState } from "react";


export default function TestEditRecipePage ({ navigation }) {
    const [rating, setRating] = useState(0);
    const [heartPressed, setHeartPressed] = useState(false);
    const [editPressed, setEditPressed] = useState(false);
    
    return (
        <View style={{width: '100%'}}>
            <ScrollView>
                <View style={cardStyles.backgroundImage}>
                    <Image
                        source={require('../../res/bread2.png')}
                        style={{resizeMode: 'contain', width: 450, height: 300}}
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
                    <TextInput style={textStyles.nameHeader} >English White Bread</TextInput>
                    <View style={cardStyles.underName}>
                        <TouchableOpacity underlayColor={'#f3f3f3'} onPress={() => {setEditPressed(editPressed => !editPressed)}}>
                            <View>
                                {editPressed === true ? <Icon name="save" size={30} color="#4F8EF7" /> : <Icon name="save-outline" size={30} color="#4F8EF7"/>}
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
                            <Text style={styles.customButtonText}>30 Min</Text>
                        </View>
                        <View style={[styles.rowButtonContainer, {width: '25%'}]} >
                            <Icon name="star-outline" size={25} color="#ffffff" />
                            <Text style={styles.customButtonText}>4.6</Text>
                        </View>
                        <View style={[styles.rowButtonContainer, {width: '30%', backgroundColor: '#76e37b'}]} >
                            <MaterialIcon name="gauge-low" size={25} color="#ffffff" />
                            <Text style={styles.customButtonText}>Easy</Text>
                        </View>
                    </View>
                    <View style={cardStyles.descriptionBox}>
                        <Text style={textStyles.header}>Description</Text>
                        <TextInput style={textStyles.paragraphs}>This simple white bread is perfect for both the bread novice and pro baker. It's tender, delicious, and SO easy!</TextInput>
                    </View>
                    
                    <View style={cardStyles.ingredientsBox}>
                        <Text style={textStyles.header}>Ingredients</Text>
                        <TextInput style={textStyles.paragraphs}>1. Warm water: (105-115 degrees)- to activate the yeast.</TextInput>
                        <TextInput style={textStyles.paragraphs}>2. Active Dry yeast: Instant or rapid rise yeast can be substituted, following my adaption notes in the recipe card.</TextInput>
                        <TextInput style={textStyles.paragraphs}>3. Granulated sugar or honey: the sugar is used to “feed” the yeast and tenderize the bread.</TextInput>
                        <TextInput style={textStyles.paragraphs}>4. Salt: to enhance flavor</TextInput>
                        <TextInput style={textStyles.paragraphs}>5. Oil: Vegetable or canola oil, or melted butter could be substituted</TextInput>
                        <TextInput style={textStyles.paragraphs}>6. Flour: Bread Flour or All-Purpose Flour can both be used with no changes to the recipe. The exact amount of flour used will vary depending on different factors (altitude/humidity etc.). What matters is the texture of the dough. It should be smooth and pull away from the sides of the bowl. It’s important not to add too much flour or your bread will be dense. The dough should be just slightly sticky when touched with a clean finger.</TextInput>
                    </View>
                    <View style={cardStyles.instructionsBox}>
                        <Text style={textStyles.header}>Instructions</Text>
                        <TextInput style={textStyles.paragraphs}>1. Proof the yeast: In a large bowl or stand mixer add the yeast, water and a pinch of the sugar or honey. Allow to rest for 5-10 minutes until foaming and bubbly. (This is called “proofing” the yeast, to make sure it is active. If it doesn’t foam, the yeast is no good, and you need to start over with fresh yeast).</TextInput>
                        <TextInput style={textStyles.paragraphs}>2. Prepare the dough: Add remaining sugar or honey, salt, oil, and 3 cups of flour. Mix to combine. Add another cup of flour and mix to combine. With the mixer running add more flour, ½ cup at a time, until the dough begins to pull away from the sides of the bowl.</TextInput>
                        <TextInput style={textStyles.paragraphs}>3. Knead the dough: Mix the dough for 5 minutes on medium speed (or knead with your hands on a lightly floured surface, for 5-8 minutes). The dough should be smooth and elastic, and slightly stick to a clean finger, but not be overly sticky.</TextInput>
                        <TextInput style={textStyles.paragraphs}>4. First Rise: Grease a large bowl with oil or cooking spray and place the dough inside. Cover with a dish towel or plastic wrap and allow to rise in a warm place* until doubled in size (about 1 ½ hours).</TextInput>
                        <TextInput style={textStyles.paragraphs}>5. Punch the dough down really well to remove air bubbles.</TextInput>
                        <TextInput style={textStyles.paragraphs}>6. Divide into two equal portions. Shape each ball into long logs and place into greased loaf pans.</TextInput>
                        <TextInput style={textStyles.paragraphs}>7. Second rise: Spray two pieces of plastic wrap with cooking spray and lay them gently over the pans. Allow dough to rise again for about 45 minutes to one hour, or until risen 1 inch above the loaf pans.</TextInput>
                        <TextInput style={textStyles.paragraphs}>8. Bake: Adjust oven racks to lower/middle position. Preheat the oven to 350 F. Bake bread for about 30-33 minutes, or until golden brown on top. Give the top of a loaf a gentle tap; it should sound hollow.</TextInput>
                    </View>
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
        // backgroundColor: 'blue',
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
        color: 'grey',
        height: 'auto',
    },

    nameHeader: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: 'grey',
        height: 'auto'
    },
    
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'serif',
        padding: 10,
    },
  });