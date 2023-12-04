import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

import { React, useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating-widget';

export default function SavedRecipesPage ({ navigation }) {
    const [rating, setRating] = useState(0);
    const [heartPressed, setHeartPressed] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <ScrollView style={cardStyles.container}>
                        <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                        <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe2')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread1.jpg')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe3')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread3.jpeg')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
                        </View>
                         <View style={cardStyles.fullCard}>
                            <View style={[cardStyles.card, cardStyles.cardElevated]}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('TestRecipe')} style={[cardStyles.card, cardStyles.cardElevated]}>
                                        <View style={cardStyles.backgroundImage}>
                                            <Image
                                                source={require('../res/bread2.png')}
                                                style={{resizeMode: 'cover', width: 105, height: 100}}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                                
                            </View>
                            <View style={[cardStyles.cardInfo, cardStyles.cardElevated]}>
                                <Text style={cardStyles.itemText}>English White Bread </Text>
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
        height: 100,
        margin: 6,
        flexBasis: 'auto',
    },

    cardInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        backgroundColor: 'white',
        flexBasis: 180,
        flexGrow: 1
    },

    fullCard: {
        flex: 1,
        flexDirection: 'row',
        height: 112
        
        
    },

    cardElevated: {
        backgroundColor: 'green',
    },

    itemText: {
        fontSize: 20,
        fontFamily: 'serif',
        alignSelf: 'center',
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