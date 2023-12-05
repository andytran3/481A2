import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

import { React, useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating-widget';

export default function SavedRecipesPage ({ navigation }) {
    const [rating] = useState([4.6, 3.9, 5]);
    const [heartPressed, setHeartPressed] = useState(new Array(8).fill(true));

    const updateHeartPressed = (index) => {
        const updatedHearts = [...heartPressed];
        updatedHearts[index] = !updatedHearts[index];
        setHeartPressed(updatedHearts);
    };

    const renderRecipeItem = (index, imageSource, recipeName) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(`TestRecipe${index + 1}`)}
          style={cardStyles.fullCardContainer}
        >
          <Image
            source={imageSource}
            style={{
              resizeMode: 'cover',
              width: 105,
              height: 'auto',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          />
          <View style={cardStyles.cardInfo}>
            <View style={cardStyles.nameAndHeart}>
              <Text style={cardStyles.itemText}>{recipeName}</Text>
              <TouchableOpacity
                underlayColor={'#ff85fb'}
                style={{}}
                onPress={() => {
                  updateHeartPressed(index);
                }}
              >
                <View>
                  {heartPressed[index] ? (
                    <Icon name="heart" size={25} color="#ff85fb" />
                  ) : (
                    <Icon name="heart-outline" size={25} color="#ff85fb" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={cardStyles.starsAndRating}>
              <StarRating
                rating={rating[index]}
                starSize={20}
                starStyle={{ marginLeft: 0, marginRight: 0 }}
              />
              <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center', marginLeft: 5 }}>{rating[index]}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    

      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{ width: '100%' }}>
              <ScrollView>
                {renderRecipeItem(0, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(1, require('../res/bread1.jpg'), 'Canadian White Bread')}
                {renderRecipeItem(2, require('../res/bread3.jpeg'), 'Italian Garlic Bread')}
                {/* {renderRecipeItem(3, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(4, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(5, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(6, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(7, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(8, require('../res/bread2.png'), 'English White Bread')} */}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      );
    }

const cardStyles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flexBasis: 'auto',
    },

    cardInfo: {
        flex: 1,
        backgroundColor: 'white',
        flexBasis: 180,
        flexGrow: 1,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },

    nameAndHeart: {
        width: '95%',
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 0,
        justifyContent: 'space-between'
    },

    starsAndRating: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 5,
    },

    fullCard: {
        flex: 1,
        flexDirection: 'row',
        height: 112,
        marginBottom: 8,
        marginLeft: 8,
    },

    fullCardContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 90,
        width: '90%',
        margin: 10,
        alignSelf: 'center',
    },

    cardElevated: {
        backgroundColor: 'green',
    },

    itemText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'serif',
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